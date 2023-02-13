const {Sequelize, DataTypes} = require('sequelize');

const subCategoria = (sequelize) => {
    const subCategoria = sequelize.define('subCategoria', {
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

    return subCategoria;
}

module.exports = subCategoria;

