const {Sequelize, DataTypes} = require('sequelize');

const orden = (sequelize) => {
    const orden = sequelize.define('order', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            total: {
                type: DataTypes.DOUBLE(10,2),
                allowNull: true,
                default: 0.00
            },
            propina: {
                type: DataTypes.DOUBLE(10,2),
                allowNull: true,
                default: 0.00
            },
            totalSinPropina: {
                type: DataTypes.DOUBLE(10,2),
                allowNull: true,
                default: 0.00
            }
        },
        {
            freezeTableName: true
        });

    return orden;
}

module.exports = orden;

