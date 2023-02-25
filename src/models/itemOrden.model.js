const {Sequelize, DataTypes} = require('sequelize');

const itemOrden = (sequelize) => {
    const itemOrden = sequelize.define('orderItem', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
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
            freezeTableName: true
        });

    return itemOrden;
}

module.exports = itemOrden;

