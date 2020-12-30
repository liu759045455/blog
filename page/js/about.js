
const send_comment = new Vue({
    el: '#send_comment',
    data: {
        user_name: "",
        comment: "",
        ctime: "",
        utime: "",
        BlogId: "",
        email: "",
        content: "",
        names: "",
        reply: "",
        id: 0,
    },
    computed: {

    },
    methods: {
        sendComment() {
            this.reply = $('#reply').val();
            this.names = $('#comment_name').val();
            this.email = $('#comment_email').val();
            this.content = $('#comment_content').val();
            const code = $('#comment_code').val();
            this.date = new Date();
            axios({
                url: `/comment`,
                method: 'post',
                data: {
                    user_name: this.names,
                    parent: blog_comments.commentId ? 1 : -1,
                    comment: this.content,
                    email: this.email,
                    ctime: parseInt(Date.now() / 1000),
                    utime: parseInt(Date.now() / 1000),
                    captcha: code,
                    parent_name: blog_comments.commentId.user_name,
                    guestbookId: 2
                },
            }).then(resp => {
                if (resp.data.msg === "成功") {
                    console.log(resp)
                    alert("评论成功");
                    $('#comment_name')[0].value = "";
                    $('#comment_email')[0].value = "";
                    $('#comment_content')[0].value = "";
                    $('#comment_code')[0].value = "";
                    
                    refreshCaptcha();
                    axios({
                        url: `/comment/about`,
                        method: 'get',
                    }).then(resp => {
                        console.log(resp)
                        blog_comments.total = resp.data.data.total;
                        blog_comments.commentList = resp.data.data.datas;
                        blog_comments.commentList.map(item => {
                            return item.ctime = moment(item.ctime * 1000).format('YYYY年MM月DD日 HH:mm:ss');
                        })
                    })
                    blog_comments.commentId = "";
                } else {
                    alert(resp.data.msg);
                    refreshCaptcha();
                }
                
            })

        },
    }
})

comment_validation.onclick = function () {
    comment_validation.src = `/captcha?vli=${Math.random()}`;
}

function refreshCaptcha() {
    comment_validation.src = `/captcha?vli=${Math.random()}`;
}


const blog_comments = new Vue({
    el: '#blog_comments',
    data: {
        total: 0,
        commentList: [],
        commentId: ''
    },
    computed: {
        huifu(id) {
            return id => {
                const vid = id;
                console.log(vid)
                axios({
                    url: `/comment/${vid}`,
                    method: 'get',
                }).then(resp => {
                    console.log(resp.data.data)
                    this.commentId = resp.data.data;
                    console.log(this.commentId)
                })
            }
            
        }
    },
    created() {
        axios({
            url: `/comment/about`,
            method: 'get',
        }).then(resp => {
            this.total = resp.data.data.total;
            this.commentList = resp.data.data.datas;
            moment.locale("zh-cn");
            this.commentList.map(item => {
                return item.ctime = moment(item.ctime * 1000).format('YYYY年MM月DD日 HH:mm:ss');
            })
            console.log(this.commentList)
        })
    },
    

})


