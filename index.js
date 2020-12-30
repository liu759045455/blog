require("./dao/init")
const express = require("express");
const globalConfig = require("./config");
const app = express();

app.use(require("express-session")({
    secret: "xiaobudong"
}))

app.use(express.static('./page'));

app.use(express.urlencoded());
app.use(express.json());

app.use(require("./web/captchaMid"));

app.use('/editEveryDay', require("./web/EveryDayController"));
app.use('/editBlog', require('./web/editBlogController'));
app.use('/blogTags', require('./web/TagsController.js'));
app.use('/tagBlogMapping', require('./web/tagBlogMappingController'));
app.use('/comment', require("./web/commentController"));
app.use('/tags', require("./web/TagsController.js"))

const prot = globalConfig.prot;
app.listen(prot, () => {
    console.log(`服务已启动 ${prot}`);
})