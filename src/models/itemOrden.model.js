const {Sequelize, DataTypes} = require('sequelize');

const itemOrden = (sequelize) => {
    const itemOrden = sequelize.define('orderItem', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            precio: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            cantidad: {
                type: DataTypes.INTEGER,
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

