const Comment = require("../dao/Api/commentsDao");
const { Op } = require("sequelize");

exports.addComment = async function (obj) {
    return (await Comment.create(obj)).toJSON();
}

exports.getCommentId = async function (id) {
    const result = await Comment.findByPk(id);
    return JSON.parse(JSON.stringify(result));
}

exports.getComment = async function(page = 1, limit = 10, id = 0) {
    const result = await Comment.findAndCountAll({
        where: {
            BlogId: {
                [Op.eq]: id
            }
        },
        order: [
            ['id', 'desc']
        ],
        offset: (page - 1) * limit,
        limit: +limit        
    })
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }

}



exports.getGuestBookId = async function(page = 1, limit = 10) {
    const result = await Comment.findAndCountAll({
        where: {
            guestbookId: {
                [Op.eq]: 1
            }
        },
        order: [
            ['id', 'desc']
        ],
        offset: (page - 1) * limit,
        limit: +limit        
    })
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }

}

exports.getAboutId = async function(page = 1, limit = 10) {
    const result = await Comment.findAndCountAll({
        where: {
            guestbookId: {
                [Op.eq]: 2
            }
        },
        order: [
            ['id', 'desc']
        ],
        offset: (page - 1) * limit,
        limit: +limit        
    })
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }

}