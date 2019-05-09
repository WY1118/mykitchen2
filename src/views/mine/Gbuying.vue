<template>
    <div>
        <div class="top">
            <router-link tag="div" to="mine"><img src="http://wmall.wochu.cn/h5/tg/img/goback.png" alt=""></router-link>
            <router-view></router-view>
            <span>我的团购</span>
            <div></div>
        </div>
        <div class="banner">
            <img src="http://wmall.wochu.cn/h5/tg/img/myGroup-banner.png" alt="">
        </div>
    </div>
</template>
<script>
    export default{
        name:"Gbuying",
        methods:{

        },
        components:{

        },
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    .top{
        width: 100%;
        text-align: center;
        line-height: .88rem;
        background-color: #fff;
        height: .88rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        border-bottom: 1px solid #f8f8f8;
        display: flex;
        justify-content: space-between;
        font-size: 0.36rem;
        color: #333;
    }
    .top span{
        margin-left: -0.6rem;
        font-weight: 300;
    }
    .banner{
        height: 6rem;
    }
    .banner img{
        height: 80%;
        width: 100%;
    }
</style>