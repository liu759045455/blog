const randomTags = new Vue({
    el: '#right_moodule',
    data: {
        tags: [],

    },
    computed: {
        randColor: function () {
            return function () {
                var r = 50 + Math.floor(Math.random() * 200);
                var g = 50 + Math.floor(Math.random() * 200);
                var b = 50 + Math.floor(Math.random() * 200);
                return `rgb(${r},${g},${b}`;
            }
        },
        randSize() {
            return () => {
                let size = Math.random() * 20 + 12 + 'px';
                return size;
            }
        }
    },
    created() {
        axios({
            url: '/tags',
            method: 'get'
        }).then(resp => {

            this.tags = resp.data.data.map(item => {
               return item.tags
            });
        })
    },
})

const newHot = new Vue({
    el: '#new_hot',
    data: {
        titleList: []
    },
    computed: {
        
    },
    created() {
        axios({
            url: "/editBlog",
            method: 'get'
        }).then(resp => {
            this.titleList = resp.data.data.datas;
            this.titleList = this.titleList.map(item => {
                return {
                    title: item.title,
                    link: "/blog_detail.html?id=" + `${item.id}`
                }
            })
        })
    },
})

const newComments = new Vue({
    el: '#new_comments',
    data: {
        commentsList: []
    },
    computed: {
     
    },
    created() {
        axios({
            url: `/comment/guest`,
            method: 'get',
        }).then(resp => {
            this.total = resp.data.data.total;
            this.commentsList = resp.data.data.datas;
            moment.locale("zh-cn");
            this.commentsList = this.commentsList.map(item => {
                return {
                    name: item.user_name,
                    date: moment(item.ctime * 1000).format('YYYY年MM月DD日'),
                    comment: item.comment
                }
            })
            console.log(this.commentsList)
            
        })
    },
})

