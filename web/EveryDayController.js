const express = require("express");
const router = express.Router();
const everydayServ = require("../services/everyday");
const { asyncHandler } = require("./getSendResult")
router.post(
    "/",
    asyncHandler(async (req, res) => {
        console.log(req.body)
        return await everydayServ.addEveryDay(req.body);
    })
)

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        return await everydayServ.getEveryDay(page, limit);
    })
)

module.exports = router;









// const everyDayDao = require("../dao/EveryDayDao");
// const { getNow } = require("../util/TimeUtil");
// const respUtil = require("./RespUtil")
// const path = new Map();

// function editEveryDay(request, response) {
//     request.on('data', function(data) {
//         everyDayDao.insertEveryDay(data.toString().trim(), getNow(), result => {
//             response.writeHead(200);
//             response.write(respUtil.writeResult('success', '添加成功', null));
//             response.end();
//         });
//     })
// }

// path.set("/editEveryDay", editEveryDay);

// module.exports.path = path;