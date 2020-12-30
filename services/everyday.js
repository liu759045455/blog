const EveryDay = require("../dao/Api/EveryDayDao");

exports.addEveryDay = async function (obj) {
    return (await EveryDay.create(obj)).toJSON();
}

exports.getEveryDay = async function(page = 1, limit = 10) {
    const result = await EveryDay.findAndCountAll({
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}