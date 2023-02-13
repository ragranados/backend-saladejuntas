const {Sequelize, DataTypes} = require('sequelize');

const producto = (sequelize) => {
    const producto = sequelize.define('producto', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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

    return producto;
}

module.exports = producto;

