const express = require("express");
const router = express.Router();
const Tags = require("../services/tags");
const { asyncHandler } = require("./getSendResult");

router.get(
    "/",
    asyncHandler(async (req, res) => {
        return await Tags.getTags(req.body);
    })
)

module.exports = router;