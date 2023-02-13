const {Sequelize, DataTypes} = require('sequelize');

const subCategoria = (sequelize) => {
    const subCategoria = sequelize.define('subCategory', {
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

    return subCategoria;
}

module.exports = subCategoria;

