const Blog = require("../dao/Api/BlogDao");
const { Op } = require("sequelize");

exports.addBlog = async function(obj) {
    return( await Blog.create(obj)).toJSON();
}

exports.getBlogId = async function(id) {
    const result = await Blog.findByPk(id);
    if(result) {
        return result.toJSON();
    }
    return null;
}

exports.getBlogAll = async function () {
    const result = await Blog.findAll();
    return JSON.parse(JSON.stringify(result));
}


exports.getBlog = async function(page = 1, limit = 10, value = "") {
    const result = await Blog.findAndCountAll({
        where: {
            [Op.or]: [{
                title: {
                    [Op.like]: `%${value}%`
                },
                content: {
                    [Op.like]: `%${value}%`
                }
            },] 
        },
        offset: (page - 1) * limit,
        limit: +limit        
    })

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }

}