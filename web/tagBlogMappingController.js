const express = require("express");
const router = express.Router();
const tagBlogMapping = require("../services/tagBlogMapping");
const { asyncHandler } = require("./getSendResult");

router.get(
    "/",
    asyncHandler(async (req, res) => {
        return await tagBlogMapping.getTagBlogMapping(req.body);
    })
)

module.exports = router;
