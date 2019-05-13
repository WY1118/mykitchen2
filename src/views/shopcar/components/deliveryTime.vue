<template>
    <!--送货时间-->
    <div v-show="isShow">
        <div class="wrap-delivery"></div>
        <div class="delivery-time-box">
            <header class="delivery-time-header">
                <img src="../../../../public/img/modal-close.png" alt="">
                <span>配送时间</span>
                <div></div>
            </header>
            <div class="delivery-time-main">
                <div class="delivery-time-left">
                    <div class="cart-day-item">
                        今天配送
                    </div>
                    <div class="cart-day-item">
                    </div>
                    <div class="cart-day-item">
                    </div>
                    <div class="cart-day-item">
                    </div>
                </div>
                <div class="delivery-time-right">
                    <div class="wrap">
                        <div class="cart-time-item">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "deliveryTime",
        data(){
            return {
                isShow : false
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap-delivery{
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
        z-index: 999;
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
                div.cart-day-item.on{
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
                >wrap{
                    .disselect{
                        color: #ccc!important;
                    }
                    >.cart-time-item{
                        align-items: center;
                        font-size: .28rem;
                        height: .7rem;
                        display: flex;
                        justify-content: space-around;
                    }
                }
            }
        }
    }
</style>