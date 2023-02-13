const {Sequelize, DataTypes} = require('sequelize');

const categoria = (sequelize) => {
    const categoria = sequelize.define('category', {
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

    return categoria;
}

module.exports = categoria;

