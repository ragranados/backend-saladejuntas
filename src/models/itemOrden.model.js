const {Sequelize, DataTypes} = require('sequelize');

const itemOrden = (sequelize) => {
    const itemOrden = sequelize.define('orderItem', {
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            precio: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        });

    return itemOrden;
}

module.exports = itemOrden;

