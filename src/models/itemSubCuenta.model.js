const {Sequelize, DataTypes} = require('sequelize');

const itemCuenta = (sequelize) => {
    const itemCuenta = sequelize.define('subBillItem', {
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

    return itemCuenta;
}

module.exports = itemCuenta;

