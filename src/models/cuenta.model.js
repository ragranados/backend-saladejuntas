const {Sequelize, DataTypes} = require('sequelize');

const cuenta = (sequelize) => {
    const cuenta = sequelize.define('bill', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        },
        {
            freezeTableName: true
        });

    return cuenta;
}

module.exports = cuenta;

