const {Sequelize, DataTypes} = require('sequelize');

const producto = (sequelize) => {
    const producto = sequelize.define('product', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nombreEnFactura: {
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

    return producto;
}

module.exports = producto;

