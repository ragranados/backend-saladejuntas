const {Sequelize, DataTypes} = require('sequelize');

const mesa = (sequelize) => {
    const mesa = sequelize.define('mesa', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            estado: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            freezeTableName: true
        });

    return mesa;
}

module.exports = mesa;

