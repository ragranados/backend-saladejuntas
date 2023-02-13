const {Sequelize, DataTypes} = require('sequelize');

const categoria = (sequelize) => {
    const categoria = sequelize.define('categoria', {
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

    return categoria;
}

module.exports = categoria;

