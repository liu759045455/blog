const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const EveryDay = sequelize.define('everyday', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ctime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    freezeTableName: true
})

module.exports = EveryDay;
