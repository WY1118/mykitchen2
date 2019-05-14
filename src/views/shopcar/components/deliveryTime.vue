<template>
    <!--送货时间-->
    <div>
        <div class="wrap-delivery"></div>
        <div class="delivery-time-box">
            <header class="delivery-time-header">
                <img :src="'./img/modal-close.png'" alt="" @click="$emit('update:isDeliveryTime',!isDeliveryTime)">
                <span>配送时间</span>
                <div></div>
            </header>
            <div class="delivery-time-main">
                <div class="delivery-time-left">
                    <!--遍历数组 渲染数据-->
                    <div class="cart-day-item" v-for="(item,index) in dateArr" :style="item.id === -1?colorDefault:null" :class="{'on':item.id === colorIndex}"  @click="changeColor(item.id)">
                        {{item.day}}{{item.nowWeek | setWeek(weekDay)}}
                    </div>
                </div>
                <div class="delivery-time-right">
                    <div class="wrap">
                        <!--遍历数组 渲染数据-->
                        <div class="cart-time-item" :style="item.id === -1?colorDefault:null" v-for="item in timeArr" @click="changeOptional(item.id)">
                            <div class="cart-time-date">
                                {{item.time}}
                            </div>
                            <div class="cart-time-word" v-text="item.id===optionalIndex ? '已选择':item.optional">
                                <!--{{item.optional}}-->
                            </div>
                            <div class="cart-time-isgo">
                                <!--判断是否选择了 改变图片-->
                                <img :src="item.id===optionalIndex?'./img/choosed.png':'./img/unchoose.png'" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--提示框 今日送货没有功能提示-->
        <div class="min-hint" v-show="isHint">
            <!--暂时用的图片还没找到更好的图片-->
            <img src="../../../../public/img/selected.png" alt="">
            <p ref="hintInfo"></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "deliveryTime",
        //接收父级传递的参数，可用于关闭选择配送时间段窗口
        props:["isDeliveryTime"],
        data(){
            return {
                //设置星期
                weekDay : {
                    0 : "周日",
                    1 : "周一",
                    2 : "周二",
                    3 : "周三",
                    4 : "周四",
                    5 : "周五",
                    6 : "周六",
                },
                //设置今日配送颜色
                colorDefault : {
                    color: "#ccc!important"
                },
                //设置点击颜色
                colorIndex : 1,
                //配对选择的时间段
                optionalIndex : 1,
                //设置配送日期
                //是否显示提示
                isHint : false,
                //日期信息
                dateArr: [
                    {
                        day : "今天配送",
                        deliveryTime : "",
                        hint : "当日业务配送升级中，敬请期待",
                        id : -1
                    },
                    {
                        day : new Date().getMonth() + 1 + "/" + (new Date().getDate() + 1),
                        nowWeek : new Date().getDay() + 1,
                        deliveryTime : "",
                        id : 0,
                    },
                    {
                        day : new Date().getMonth() + 1 + "/" + (new Date().getDate() + 2),
                        nowWeek : new Date().getDay() + 2,
                        deliveryTime : "",
                        id : 1,
                    },
                    {
                        day : new Date().getMonth() + 1 + "/" + (new Date().getDate() + 3),
                        nowWeek : new Date().getDay() + 3,
                        deliveryTime : "",
                        id : 2,
                    },
                ],
                //时间段信息
                timeArr : [
                    {
                        time : "17:30以前",
                        optional : "已约满",
                        id : -1,
                    },
                    {
                        time : "08:00-11:30",
                        optional : "可选择",
                        id : 0,
                    },
                    {
                        time : "15:30-17:30",
                        optional : "可选择",
                        id : 1,
                    },
                    {
                        time : "17:30-20:30",
                        optional : "可选择",
                        id : 2,
                    }
                ]
            }
        },
        methods : {
            //点击切换日期
            changeColor(id){
                if(id === -1){
                    //如果 id = -1 改变提示信息
                    this.$refs.hintInfo.innerHTML = "当日业务配送升级中，敬请期待！";
                    this.isHint = true;
                    setTimeout(()=>{
                            this.isHint = false
                        }
                        ,1600)
                }else{
                    this.colorIndex = id;
                    this.optionalIndex = 0;
                }
            },
            //点击切换配送时间
            changeOptional(id){
                //如果id = -1 显示提示信息
                if(id === -1){
                    //改变显示提示信息
                    this.$refs.hintInfo.innerHTML = "灰色时段运力已满，您可以选择其它时段，感谢您的理解";
                    //开启提示窗口
                    this.isHint = true;
                    //设置定时器，延时关闭提示窗口
                    setTimeout(()=>{
                            this.isHint = false
                        }
                        ,1600)
                }else{
                    //点击切换
                    this.optionalIndex = id;
                    this.$emit("update:isDeliveryTime",!this.isDeliveryTime)
                }
            }
        },
        //过滤星期
        filters:{
            //接收一个data中的 weekDay 属性
            setWeek:function(v,weekDay){
                return weekDay[v];
            }
        },
        props : ["isDeliveryTime"]
    }
</script>

<style scoped lang="scss">
    /*提示框 今日送货没有功能提示*/
    .min-hint{
        width:4.2rem;
        height:1.44rem;
        background:rgba(0,0,0,0.68);
        border-radius: .12rem;
        position : absolute;
        z-index:103;
        margin:auto;
        top :0;
        left: 0;
        bottom : 0;
        right: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        >p{
            color:#fff;
        }
    }
    .wrap-delivery{
        /*模态框*/
        position: absolute;
        bottom: 0;
        z-index: 101;
        width: 100%;
        height: 100%;
        background: #b2b2b2;
        opacity: .5;
        overflow: hidden;
    }
    .delivery-time-box{
        /*总盒子样式*/
        height:5.8rem;
        width:100%;
        background:#fff;
        position: fixed;
        bottom : 0;
        left : 0;
        z-index:102;
        .delivery-time-header{
            /*头部样式*/
            height:.8rem;
            width:100%;
            border-bottom:.1px solid #e6e6e6;
            display: flex;
            justify-content: space-around;
            align-items: center;
            >img{
                /*关闭xx*/
                width: .18rem;
                height: .18rem;
            }
            >span{
                /*配送时间*/
                font-size: .3rem;
                color: #666;
            }
            >div::after{
                /*空的div占位*/
                content: "";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }
        }
        .delivery-time-main{
            /*内容区*/
            display: flex;
            flex: 1;
            height:100%;
            .delivery-time-left{
                /*内容去左边*/
                display: flex;
                flex-direction: column;
                overflow: auto;
                width: 2.48rem;
                border-right: 1px solid #d2d2d2;
                .on{
                    /*选中的样式*/
                    background: #f86c15;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .28rem;
                    height: .7rem;
                }
                .disable-day{
                    /*今天配送*/
                    color: #ccc!important;
                }
                .cart-day-item{
                    /*没选中的样式*/
                    border-bottom: 1px solid #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .28rem;
                    height: .7rem;
                }
            }
            .delivery-time-right{
                display: flex;
                flex-direction: column;
                overflow: auto;
                flex: 1;
                >.wrap{
                    .disselect{
                        color: #ccc!important;
                    }
                    .cart-time-item{
                        align-items: center;
                        font-size: .28rem;
                        height: .7rem;
                        display: flex;
                        justify-content: space-around;
                        .cart-time-date{
                            width: 1.7rem;
                            text-align: center;
                            &::after{
                                content: "";
                                display: block;
                                height: 0;
                                clear: both;
                                visibility: hidden;
                            }
                        }
                        .cart-time-word{
                            width: 1.3rem;
                            text-align: center;
                            &::after{
                                content: "";
                                display: block;
                                height: 0;
                                clear: both;
                                visibility: hidden;
                            }
                        }
                        .cart-time-isgo{
                            img{
                                width: .34rem;
                                height: .34rem;
                            }
                            &::after{
                                content: "";
                                display: block;
                                height: 0;
                                clear: both;
                                visibility: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
</style>