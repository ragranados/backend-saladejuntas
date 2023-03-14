const {Sequelize, DataTypes} = require('sequelize');

const cuenta = (sequelize) => {
    const cuenta = sequelize.define('bill', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            totalSinPropina: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            },
            total: {
                type: DataTypes.DOUBLE(10, 2),
                allowNull: true,
                default: 0.00
            },
        },
        {
            freezeTableName: true
        });

    return cuenta;
}

module.exports = cuenta;

