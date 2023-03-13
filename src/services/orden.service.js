const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');
const {ordenarItemsParaMostrar} = require("../util/index");

const service = {};

service.ingresarOrden = async (mesaId, metodoPagoId, items = []) => {

    const result = await db.sequelize.transaction(async (t) => {

        const cuenta = await db.Cuenta.create({

        });

        let total = 0;

        const mesa = await db.Mesa.findByPk(mesaId);
        mesa.libre = false;
        await mesa.save({transaction: t});

        const subCuenta = await db.SubCuenta.create({
            mesaId,
            metodoPagoId,
            totalSinPropina: total,
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
                billId: subCuenta.id,
                cantidad: itemsAgrupados[itemsKeys[i]].length
            });

            const itemOrden = await db.ItemSubCuenta.create({
                productId: itemActual.id,
                precio: itemActual.precio,
                billId: subCuenta.id,
                cantidad: itemsAgrupados[itemsKeys[i]].length
            }, {transaction: t});

        }

        subCuenta.totalSinPropina = total;

        await subCuenta.save({transaction: t});
    });

    return ServiceResponse(true, null);

}

service.agregarAOrden = async (idSubCuenta, items) => {
    const subCuenta = await db.SubCuenta.findByPk(idSubCuenta, {include: [db.ItemSubCuenta]});

    const result = await db.sequelize.transaction(async (t) => {

        let itemsNuevosOrdenados = ordenarItemsParaMostrar(items);
        let itemsNuevosOrdenadosId = Object.keys(itemsNuevosOrdenados);

        let total = subCuenta.totalSinPropina

        for (let i = 0; i < itemsNuevosOrdenadosId.length; i++) {
            const item = await db.ItemSubCuenta.findOne({
                where: {
                    productId: itemsNuevosOrdenadosId[i],
                    subBillId: idSubCuenta
                }
            });

            if (item) {

                let nuevaCantidadItems = item.cantidad;

                for (let j = 0; j < itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length; j++) {
                    let nItemOrdenado = itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]][j];
                    total += nItemOrdenado.precio;
                    nuevaCantidadItems++;
                }

                subCuenta.totalSinPropina = total;
                item.cantidad = nuevaCantidadItems;

                await subCuenta.save({transaction: t});
                await item.save({transaction: t});

            } else {

                const itemActual = itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]][0];

                const itemOrden = await db.ItemSubCuenta.create({
                    productId: itemActual.id,
                    precio: itemActual.precio,
                    orderId: subCuenta.id,
                    cantidad: itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length
                }, {transaction: t});

                let total = subCuenta.totalSinPropina + itemActual.precio * itemsNuevosOrdenados[itemsNuevosOrdenadosId[i]].length;

                subCuenta.totalSinPropina = total;

                await subCuenta.save({transaction: t});

            }

        }

    })

    return ServiceResponse(true, ordenarItemsParaMostrar(items));
}

service.cambiarEstadoOrden = async (subCuentaId, estado) => {

    const subCuenta = await db.SubCuenta.findByPk(subCuentaId);

    if (!subCuenta) {
        throw Error();
    }

    subCuenta.orderStatusId = estado;
    const nuevaSubCuenta = await subCuenta.save();

    return ServiceResponse(true, nuevaSubCuenta);
}

service.preCerrarOrden = async (subCuentaId) => {
    const result = await db.sequelize.transaction(async (t) => {

        const subCuenta = await db.SubCuenta.findByPk(subCuentaId);

        if (!subCuenta) {
            throw Error("No se encontró orden");
        }

        subCuenta.orderStatusId = 2;
        subCuenta.propina = subCuenta.totalSinPropina * 0.10;
        subCuenta.total = subCuenta.propina + subCuenta.totalSinPropina;
        await subCuenta.save();

    })

    return ServiceResponse(true, null);
}

service.cerrarOrden = async (subCuentaId, metodoPagoId) => {

    const result = await db.sequelize.transaction(async (t) => {

        const subCuenta = await db.SubCuenta.findByPk(subCuentaId);
        console.log(subCuenta.mesaId);

        if (!subCuenta) {
            throw Error("No se encontró orden");
        }

        const mesa = await db.Mesa.findByPk(subCuenta.mesaId);

        if (!mesa) {
            throw Error("No se encontró mesa");
        }

        subCuenta.orderStatusId = 3;
        subCuenta.metodoPagoId = metodoPagoId;
        mesa.libre = true;
        const nuevaOrden = await subCuenta.save({transaction: t});
        await mesa.save({transaction: t})

    });

    return ServiceResponse(true, null);
}

service.obtenerOrdenesPorEstado = async (estado) => {
    return ServiceResponse(true, await db.SubCuenta.findAll({
        include: {model: db.ItemSubCuenta, include: db.Producto},
        where: {orderStatusId: estado}
    }));
}

service.obtenerMetodosDePago = async () => {
    return ServiceResponse(true, await db.MetodoPago.findAll());
}

module.exports = service;
