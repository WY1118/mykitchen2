<template>
   <section class="car-main">
       <ul class="main-ul">
           <li v-for="item in carImgInfo">
               <div class="carMain-check" @click="item.isCheck = !item.isCheck"><img :src="item.isCheck?item.unCheck:item.incheck" alt=""></div>
               <div class="carMain-img"><img :src="item.img" alt=""></div>
               <div class="carMain-info">
                   <div class="carMain-goods-title" v-text="item.goodsInfo"></div>
                   <div class="carMain-price-coupon"></div>
                   <div class="carMain-price-puls">
                       <div class="newGoodsPrice">{{item.newGoodsPrice | carPrice}}</div>
                       <del class="oldGoodsPrice">{{item.oldGoodsPrice | carPrice}}</del>
                       <div class="carMain-goods-add">
                           <a href="javascript:;" class="minus"><img src="img/minus.png" alt=""></a>
                           <input type="text" class="price-ipt" value="1" readonly>
                           <a href="javascript:;" class="plus"><img src="img/plus.png" alt=""></a>
                       </div>
                   </div>
               </div>
           </li>
       </ul>
   </section>
</template>
<script>
    export default {
        name: "carMain",
        data(){
            return {
                carImgInfo:[
                    {
                        img: "img/rou.jpg",
                        isCheck: true,
                        incheck: "img/unselect.png",
                        unCheck: "img/selected.png",
                        goodsInfo:"河北皇冠梨4粒（单果200g以上）",
                        newGoodsPrice : "19.9",
                        oldGoodsPrice : "24.9"

                    },
                    {
                        img: "img/rou.jpg",
                        isCheck: true,
                        incheck: "img/unselect.png",
                        unCheck: "img/selected.png",
                        goodsInfo:"河北皇冠梨4粒（单果200g以上）",
                        newGoodsPrice : "19.9",
                        oldGoodsPrice : "24.9"

                    }

                ]
            }
        },

    }
</script>

<style scoped lang="scss">
    .car-main{
        width:100%;
        height:100%;
        overflow-y: auto;
        .main-ul{
            width:100%;
            padding:0 .18rem;
            background: #fff;
            >li{
                height:2.2rem;
                border-bottom:.02rem solid #e6e6e6;
                .carMain-check{
                    display: flex;
                    align-items:center;
                    height:100%;
                    width:.34rem;
                    float:left;
                    >img{
                        width:100%;
                    }
                }
                .carMain-img{
                    margin:0 .1rem;
                    height:100%;
                    float: left;
                    >img{
                        height:100%;
                    }
                }
                .carMain-info{
                    float: left;
                    padding:.1rem 0;
                    width:4.16rem;
                    .carMain-goods-title{
                        width:3.64rem;
                        font-size:.28rem;
                    }
                    .carMain-price-coupon{
                        color: #999;
                        font-size: .24rem;
                        margin: .2rem 0;
                        height: .24rem;
                        line-height: .24rem;
                    }
                    .carMain-price-puls{
                        overflow: hidden;
                        line-height:.5rem;
                        .newGoodsPrice{
                            float:left;
                            color: #f96d16;
                            font-size: .3rem;
                        }
                        del{
                            font-size: .3rem;
                            float:left;
                        }
                    }
                    .carMain-goods-add{
                        float:right;
                        .minus{
                            border-top-left-radius: .25rem;
                            border-bottom-left-radius: .25rem;
                            text-align: right;
                            float:left;
                            height:.5rem;
                            width:.5rem;
                            background: #f5f5f5;
                        }
                        .plus{
                            border-top-right-radius: .25rem;
                            border-bottom-right-radius: .25rem;
                            text-align: right;
                            float:left;
                            height:.5rem;
                            width:.5rem;
                            background: #f5f5f5;
                        }
                        .price-ipt{
                            width: .65rem;
                            float: left;
                            background: #f5f5f5;
                            height:.5rem;
                            text-align: center;
                            border:0;
                            font-size: .26rem;
                            box-shadow: none;
                            outline: none;

                        }
                    }
                }
            }
        }
    }
</style>