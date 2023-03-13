const {Sequelize, DataTypes} = require('sequelize');

const subCuenta = (sequelize) => {
    const subCuenta = sequelize.define('subBill', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            total: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            },
            propina: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            },
            totalSinPropina: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            totalPagado: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            }
        },
        {
            freezeTableName: true
        });

    return subCuenta;
}

module.exports = subCuenta;

