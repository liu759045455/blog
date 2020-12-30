const Blog = require("./Api/BlogDao");
const Commment = require("./Api/commentsDao");
const tagBlogMappingDao = require("./Api/tagBlogMappingDao");
const Tags = require("./Api/tagsDao");
Commment.belongsTo(Blog);
Blog.hasMany(Commment);

tagBlogMappingDao.belongsTo(Tags);
tagBlogMappingDao.belongsTo(Blog);