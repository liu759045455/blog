const blog_list = new Vue({
    el: '#blog_list',
    data: {
        blogList: []
    },
    computed: {

    },
    methods: {
        
    },
    created() {
        axios({
            url: "/editBlog/all",
            method: 'post'
        }).then(resp => {
            this.blogList = resp.data.data;
            this.blogList.map(item => {
                return item.link = "/blog_detail.html?id=" + `${item.id}`
             })
        })
    },
})