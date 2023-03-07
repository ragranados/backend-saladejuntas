const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');
const {ordenarItemsParaMostrar} = require("../util/index");

const service = {};

service.ingresarOrden = async (mesaId, metodoPagoId, items = []) => {

    const result = await db.sequelize.transaction(async (t) => {

        let total = 0;

        const mesa = await db.Mesa.findByPk(mesaId);
        mesa.libre = false;
        await mesa.save({transaction: t});

        const orden = await db.Orden.create({
            mesaId,
            metodoPagoId,
            total: total,
            orderStatusId: 1,

        }, {transaction: t});

        const itemsAgrupados = ordenarItemsParaMostrar(items);

        const itemsKeys = Object.keys(itemsAgrupados);

        for (let i = 0; i < itemsKeys.length; i++) {

            const itemActual = itemsAgrupados[itemsKeys[i]][0];

            total += itemActual.precio * itemsAgrupados[itemsKeys[i]].length;

            console.log({
                productId: itemActual.id,
                precio: itemActual.precio,
                orderId: orden.id,
                cantidad: itemsAgrupados[itemsKeys[i]].length
            });

            const itemOrden = await db.ItemOrden.create({
                productId: itemActual.id,
                precio: itemActual.precio,
                orderId: orden.id,
                cantidad: itemsAgrupados[itemsKeys[i]].length
            }, {transaction: t});

        }

        orden.total = total;

        await orden.save({transaction: t});
    });

    return ServiceResponse(true, null);

}

service.agregarAOrden = async (idOrden, items) => {
    const orden = await db.Orden.findByPk(idOrden, {include: [db.ItemOrden]});

    const result = await db.sequelize.transaction(async (t) => {

        let itemsNuevosOrdenados = ordenarItemsParaMostrar(items);
        let itemsNuevosOrdenadosId = Object.keys(itemsNuevosOrdenados);

        let total = orden.total

        for (let i = 0; i < itemsNuevosOrdenadosId.length; i++) {
            const item = await db.ItemOrden.findOne({
                where: {
                    productId: itemsNuevosOrdenadosId[i],
                    orderId: idOrden
                }
            });

            if (item) {

                let nuevaCantidadItems = item.cantidad;

                for (let j = 0; j < itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length; j++) {
                    let nItemOrdenado = itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]][j];
                    total += nItemOrdenado.precio;
                    nuevaCantidadItems++;
                }

                orden.total = total;
                item.cantidad = nuevaCantidadItems;

                await orden.save({transaction: t});
                await item.save({transaction: t});

            } else {

                const itemActual = itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]][0];

                const itemOrden = await db.ItemOrden.create({
                    productId: itemActual.id,
                    precio: itemActual.precio,
                    orderId: orden.id,
                    cantidad: itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length
                }, {transaction: t});

                let total = orden.total + itemActual.precio * itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length;

                orden.total = total;

                await orden.save({transaction: t});

            }

        }

    })

    return ServiceResponse(true, ordenarItemsParaMostrar(items));
}

service.cambiarEstadoOrden = async (ordenId, estado) => {

    const orden = await db.Orden.findByPk(ordenId);

    if (!orden) {
        throw Error();
    }

    orden.orderStatusId = estado;
    const nuevaOrden = await orden.save();

    return ServiceResponse(true, nuevaOrden);
}

service.cerrarOrden = async (ordenId, metodoPagoId) => {

    const result = await db.sequelize.transaction(async (t) => {

        const orden = await db.Orden.findByPk(ordenId);
        console.log(orden.mesaId);

        if (!orden) {
            throw Error("No se encontró orden");
        }

        const mesa = await db.Mesa.findByPk(orden.mesaId);

        if (!mesa) {
            throw Error("No se encontró mesa");
        }

        orden.orderStatusId = 3;
        orden.metodoPagoId = metodoPagoId;
        mesa.libre = true;
        const nuevaOrden = await orden.save({transaction: t});
        await mesa.save({transaction: t})

    });

    return ServiceResponse(true, null);
}

service.obtenerOrdenesPorEstado = async (estado) => {
    return ServiceResponse(true, await db.Orden.findAll({
        include: {model: db.ItemOrden, include: db.Producto},
        where: {orderStatusId: estado}
    }));
}

service.obtenerMetodosDePago = async () => {
    return ServiceResponse(true, await db.MetodoPago.findAll());
}

module.exports = service;
