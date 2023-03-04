const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');
const {ordenarItemsParaMostrar} = require("../util/index");

const service = {};

//TODO: Change user attributes

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

    })

    return ServiceResponse(true, orden);
}

service.obtenerOrdenesPorEstado = async (estado) => {
    return ServiceResponse(true, await db.Orden.findAll({
        include: {model: db.ItemOrden, include: db.Producto},
        where: {orderStatusId: estado}
    }));
}

module.exports = service;
