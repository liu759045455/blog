require("./Api/EveryDayDao");
require("./Api/BlogDao")
require("./Api/commentsDao");
require("./Api/tagsDao");
require("./Api/tagBlogMappingDao");

const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步完成")
})
