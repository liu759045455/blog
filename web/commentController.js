const express = require("express");
const router = express.Router();
const Comment = require("../services/comment");
const { asyncHandler } = require("./getSendResult");

router.post(
    "/",
    asyncHandler(async (req, res) => {
        return await Comment.addComment(req.body);
    })
)

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const id = req.query.BlogId || 0;
        return await Comment.getComment(page, limit, id);
    })
)


router.get(
    "/guest",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        return await Comment.getGuestBookId(page, limit);
    })
)

router.get(
    "/about",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        return await Comment.getAboutId(page, limit);
    })
)

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        return await Comment.getCommentId(req.params.id);
    })
)

module.exports = router;