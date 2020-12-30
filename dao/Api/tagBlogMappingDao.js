const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const tag_blog_mapping = sequelize.define('tag_blog_mapping', {
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

module.exports = tag_blog_mapping;