const express = require("express");
const router = express.Router();
const Blog = require("../services/blog");
const Tags = require("../services/tags");
const tagBlogMapping = require("../services/tagBlogMapping");
const { asyncHandler } = require("./getSendResult")

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const b =  await Blog.addBlog(req.body);
        const t = await Tags.addTags({
            tags: req.body.tags,
            ctime: req.body.ctime,
            utime: req.body.utime
        })
        return  await tagBlogMapping.addTagBlogMapping({
            ctime: req.body.ctime,
            utime: req.body.utime,
            TagId: t.id,
            BlogId: b.id
        })
    })
)

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const value = req.query.value || "";
        return await Blog.getBlog(page, limit, value);
    })
)

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        return await Blog.getBlogId(req.params.id);
    })
)

router.post(
    "/all",
    asyncHandler(async (req, res) => {
        return await Blog.getBlogAll(req.body);
    })
)


module.exports = router;