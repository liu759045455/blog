const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Comment = sequelize.define('Comment',{
    parent: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ctime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    utime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    guestbookId: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
})

module.exports = Comment;
