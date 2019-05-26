<template>
    <section class="car-goodsTop">
        <div class="car-goodsTop-title"></div>
        <ul class="car-goodsTop-list">
            <router-link tag="li" :to="{path:'/detailsGoods/'+item._id}" class="goodsTop-list-item" v-for="item in $store.state.shopCar.topGoodsList">
                <div class="item-img"><img :src="'http://39.106.67.233:100/'+item.goodsSmallPic" alt=""></div>
                <div class="item-info">
                    <p class="item-info-title">{{item.goodsName}}</p>
                    <div class="item-info-main">
                        <div class="item-info-price">
                            <del class="carGoodsTop-old" v-text="item.originalPrice?'￥'+item.originalPrice:''"></del>
                            <span class="carGoodsTop-new">{{item.currentPrice | carPrice}}</span>
                        </div>
                        <div class="item-info-add"></div>
                    </div>
                </div>
            </router-link>
        </ul>
        <div class="car-load-more">没有更多了~</div>
    </section>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: "carGoodsTop",
        data(){
            return {
            }
        },
        mounted(){
            this.$store.dispatch("getTopGoods");
        },

    }
</script>
<style scoped lang="scss">
    .car-goodsTop{
        padding: 1rem .28rem 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .car-goodsTop-title{
            margin-bottom: .3rem;
            width: 4.72rem;
            height: .3rem;
            background:url('../../views/shopcar/recommend.png') center/100%;
        }
        .car-goodsTop-list{
            width:6.92rem;
            height:auto;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: wrap;
            .goodsTop-list-item{
                display: flex;
                flex-direction: column;
                background:#fff;
                border-radius: .1rem;
                width: 32.5%;
                height: 3.92rem;
                margin-bottom:.28rem;
                .item-img{
                    >img{
                        width:100%;
                    }
                }
                .item-info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    flex: 1;
                    padding: .12rem .16rem .22rem;
                    background: #fff;
                    .item-info-title{
                        font-size: .28rem;
                        color: #333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .item-info-main{
                        display: flex;
                        flex: 1;
                        justify-content: space-between;
                        align-items: flex-end;
                        .item-info-price{
                            display: flex;
                            flex: 1;
                            flex-direction: column;
                            align-items: flex-start;
                            .carGoodsTop-old{
                                font-size: .22rem;
                                color: grey;
                                text-decoration: line-through;
                            }
                            .carGoodsTop-new{
                                font-size:.28rem;
                                color: #f96d16;
                            }
                        }
                    }
                    .item-info-add{
                        margin: 0;
                        width: .5rem;
                        height: .5rem;
                        background: url('../../views/shopcar/add_cart.png');
                        background-size: 100%;
                    }
                }
            }
        }
        .car-load-more{
            color: #666;
            font-size: .28rem;
        }
    }

</style>