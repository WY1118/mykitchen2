<template>
    <div>
        <div class="top">
            <router-link tag="div" to="mine"    > <img src="http://wmall.wochu.cn/h5/user/css/images/q-fanhui@3x.png" alt=""> </router-link>
            <router-view></router-view>
            <span>全部订单</span>
            <div></div>
        </div>
        <div class="all">
            <ul class="all_list">
               <router-link tag="li" v-for="(item,index) in all_list" @click="addClass(index)" :class="{all_active:index==current}" to="item.path">{{item.tit}}</router-link>
                <router-vier></router-vier>
            </ul>
        </div>

        <div class="shop">
            <div class="shop_menu" v-for="(item,index) in shop_menu">
                <div class="shop_top">
                    <p>{{item.time}}</p>
                    <span>{{item.state}}</span>
                </div>
                <div class="shop_center">
                    <img :src="item.img" alt="">
                </div>
                <div class="shop_bottom">
                    <span></span>
                  <p>共{{item.piece}}件商品 需支付:￥{{item.payment}}</p>
                </div>
                <div class="shop_foot">
                    <div class="footer"></div>
                    <div class="foot">
                        <span>取消订单</span>
                        <p>立即支付</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="bottom"></div>
    </div>
</template>
<script>
    export default{
    name:"menu",
        methods:{
        addClass:function(index){
            this.current = index
        }
        },
        components :{

        },
        data(){
            return{
                current:0,
                all_list:[
                    {
                    tit:"全部",
                    path:"/all"
                    },
                    {
                        tit:"待付款",
                        path:"/pay"
                    },
                    {
                        tit:"待收货",
                        path:"/shop"
                    },
                    {
                        tit:"待评价",
                        path:"/evaluate"
                    }
                ],
                shop_menu:[
                    {
                        time:"2019/04/28 20:43:14",
                        state:"待付款",
                        img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
                        piece:1,
                        payment:119.7,

                    },
                    {
                        time:"2019/04/28 20:43:14",
                        state:"待付款",
                        img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
                        piece:1,
                        payment:119.7,

                    },
                    {
                        time:"2019/04/28 20:43:14",
                        state:"待付款",
                        img:"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
                        piece:1,
                        payment:119.7,

                    }
                ]
            }
        }

    }
</script>

<style scoped>
    body{
        background: #ccc !important;
        display: flex;

    }
    .top{
        display:flex;
        justify-content: space-around;
        align-items: center;
        /*float: left;*/
        width: 100%;
        height: 1rem;
        border-bottom: .01rem solid #e5e5e5;
        background: #fff;
        line-height: 1rem;
    }
    .top img{
        height: 0.5rem;
        margin-left: 0.1rem;

    }
    .top span{
        width: 4rem;
        font-size: .36rem;
        color: #32532e;
        text-align: center;
        margin: 0 auto;
        font-weight: 300;
    }
    .all{
        padding-left: .56rem;
        padding-right: .56rem;
        font-size: .28rem;
        color: #001e00;
        background: #fff;


    }
    .all_list{
        height: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: -0.2rem;

    }
    .all_active{
        color: #6eb042;
        border-bottom: .04rem solid #6eb042;


    }
    .all_list li{
        height: 1rem;
        width: 25%;
        margin-left: 0.2rem;
        text-align: center;
        line-height: 1rem;
        /*color: #6eb042;*/
        /*border-bottom: .04rem solid #6eb042;*/
    }
    .shop{
        height: 10.32rem;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: 1;
    }
    .shop_menu{
        width: 100%;
        height: 4.44rem;
        margin-top: .22rem;
        background: #fff;
    }
    .shop_top{
        height: .8rem;
        padding: 0 .3rem;
        line-height: .8rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        color: #999;
    }
    .shop_center{
        width: 100%;
        padding: .22rem 0;
        background: #fafafa;
    }
    .shop_center img{
        width: 1.8rem;
        height: 1.8rem;

    }
    .shop_bottom {
        height: 0.7rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #cccccc;
        padding-top: 0.2rem;

    }
    .shop_bottom p{
        margin-right: 0.1rem;
    }
    .shop_foot{

        display: flex;
        justify-content: space-around;
        margin-top: 0.1rem;
    }
    .footer{
        width: 60%;
    }
    .foot{

        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    .shop_foot span{
        display: block;
        text-align: center;
        line-height: 0.5rem;
        width: 1.1rem;
        height: 0.5rem;
        border: 1px solid #000;
       border-radius: 0.1rem;
    }
    .shop_foot p{
        display: block;
        text-align: center;
        line-height: 0.5rem;
        width: 1.1rem;
        height: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.1rem;
    }
    .bottom{
        height: 1rem;
        background: #ffffff;
        width: 100%;
        position: absolute;
        bottom:0;
        z-index:-1;
    }
    #footer{
       display: none;
        z-index: -5!important;
    }
</style>