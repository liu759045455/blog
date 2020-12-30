const tagBlogMapping = require("../dao/Api/tagBlogMappingDao");

exports.addTagBlogMapping = async function (obj) {
    return (await tagBlogMapping.create(obj)).toJSON();
}

exports.getTagBlogMapping = async function() {
    const result = await tagBlogMapping.findAll();
    return JSON.parse(JSON.stringify(result));
}