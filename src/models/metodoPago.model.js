const {Sequelize, DataTypes} = require('sequelize');

const metodoPago = (sequelize) => {
    const metodoPago = sequelize.define('metodoPago', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            codigo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });

    return metodoPago;
}

module.exports = metodoPago;

