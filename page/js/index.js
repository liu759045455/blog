const everyDay = new Vue({
    el: '#every_day',
    data: {
        content: ""
    },
    computed: {
        getContent() {
            return this.content;
        },
    },
    created() {
        //请求数据给content
        axios({
            url: "/editEveryDay",
            method: 'get',
        }).then(resp => {
            const length = resp.data.data.data.length
            this.content = resp.data.data.data[length - 1].content
        }, err => {
            console.log("请求失败")
        })
    },
});

const articleList = new Vue({
    el: '#article_list',
    data: {
        articleList: [],
        total: 0,
        page: 1,
        limit: 5,
        pageList: [],
    },
    computed: {
        changePage() {
            return page => {
                this.page = page;
                this.turnPage();
                axios({
                    url: "/editBlog",
                    method: 'get',
                    params: {
                        page: this.page,
                        limit: this.limit
                    }
                }).then(resp => {
                    this.articleList = resp.data.data.datas;
                    this.articleList.map(item => {
                        return item.link = "/blog_detail.html?id=" + `${item.id}`
                     })
                })
            }
        }
    },
    methods: {
        //翻页
        turnPage() {
            const page = this.page;//当前页
            const totalPage = this.total;//总数
            const limit = this.limit;//页数
            const result = [];
            result.push({ text: '首页', page: 1 });
            if (page > 2) {
                result.push({ text: page - 2, page: page - 2 });
            }
            if (page > 1) {
                result.push({ text: page - 1, page: page - 1 });
            }
            result.push({ text: page, page: page });
            if (page + 1 <= Math.floor((totalPage + limit - 1) / limit)) {
                result.push({ text: page + 1, page: page + 1 });
            }
            if (page + 2 <= Math.floor((totalPage + limit - 1) / limit)) {
                result.push({ text: page + 2, page: page + 2 });
            }
            result.push({ text: '尾页', page: Math.floor((totalPage + limit - 1) / limit) });
            this.pageList = result;
            return result;
        }
    },
    created() {
        axios({
            url: "/editBlog",
            method: 'get',
            params: {
                page: this.page,
                limit: this.limit
            }
        }).then(resp => {
            this.total = resp.data.data.total;
            this.articleList = resp.data.data.datas;
            this.articleList.map(item => {
               return item.link = "/blog_detail.html?id=" + `${item.id}`
            })
            this.turnPage();
        }, err => {
            console.log("请求失败")
        })

    },
})

//  <img([\s\S]*?)> 匹配base64图片



function turnPages(page, totalPage, limit) {
    // const page = page;//当前页
    // const totalPage = total;//总数
    // const limit = limit;//页数
    const result = [];
    result.push({ text: '首页', page: 1 });
    if (page > 2) {
        result.push({ text: page - 2, page: page - 2 });
    }
    if (page > 1) {
        result.push({ text: page - 1, page: page - 1 });
    }
    result.push({ text: page, page: page });
    if (page + 1 <= Math.floor((totalPage + limit - 1) / limit)) {
        result.push({ text: page + 1, page: page + 1 });
    }
    if (page + 2 <= Math.floor((totalPage + limit - 1) / limit)) {
        result.push({ text: page + 2, page: page + 2 });
    }
    result.push({ text: '尾页', page: Math.floor((totalPage + limit - 1) / limit) });
    articleList.pageList = result;
    return result;
}


const search_bar = new Vue({
    el: '#search_bar',
    data: {

    },
    methods: {
        search() {
            const search = $('.search').val();
            console.log(search)
            axios({
                url: '/editBlog',
                method: 'get',
                params: {
                    value: search
                }
            }).then(resp => {
                console.log(resp)
                articleList.articleList = resp.data.data.datas;
                articleList.articleList.map(item => {
                    return item.link = "/blog_detail.html?id=" + `${item.id}`
                })
                turnPages(1, resp.data.data.total,10);
                $('.search')[0].value = "";
            })

        }
    },
    computed: {

    },
    created() {
        
    },
})