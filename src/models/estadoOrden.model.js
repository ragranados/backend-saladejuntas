const {Sequelize, DataTypes} = require('sequelize');

const estadoOrden = (sequelize) => {
    const estadoOrden = sequelize.define('orderStatus', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            freezeTableName: true
        });

    return estadoOrden;
}

module.exports = estadoOrden;

