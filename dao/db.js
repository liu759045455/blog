const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('myblog', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: null
})

module.exports = sequelize;
