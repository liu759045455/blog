const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Tags = sequelize.define('Tags', {
    tags: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ctime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    utime: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})

module.exports = Tags;