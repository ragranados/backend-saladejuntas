const {Sequelize, DataTypes} = require('sequelize');

const orden = (sequelize) => {
    const orden = sequelize.define('order', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            metodoDePago: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            total: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            }
        },
        {
            freezeTableName: true
        });

    return orden;
}

module.exports = orden;

