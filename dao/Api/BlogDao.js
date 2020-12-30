const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    content: {
        type: DataTypes.TEXT("LONG"),
        allowNull: false
    },
    views: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
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
    freezeTableName: true,//使用原生的名字
})

module.exports = Blog;