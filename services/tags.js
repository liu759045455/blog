const Tags = require("../dao/Api/tagsDao");

exports.addTags = async function (obj) {
    return (await Tags.create(obj)).toJSON();
}

exports.getTags = async function() {
    const result = await Tags.findAll();
    return JSON.parse(JSON.stringify(result));
}