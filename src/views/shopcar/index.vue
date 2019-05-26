<template>
  <div class="home">
    <!--<div class="car-User" v-if="userId">-->
      <!--<div class="exGoods" v-if="carGoods">-->
        <!--<header>-->
          <!--<div class="header-top">-->
            <!--<div id="carback" :stlye="left" @click="carBack">-->
              <!--<img :src="back">-->
            <!--</div>-->
            <!--<div id="carlocation">-->
              <!--<img :src="carlocation" alt="" :style="left">-->
              <!--<span>请填写地址</span>-->
              <!--<img :src="cardown" alt="">-->
            <!--</div>-->
            <!--<div class="redact">编辑</div>-->
          <!--</div>-->
        <!--</header>-->
        <!--<section class="main-body">-->
          <!--<orderTime :isDeliveryTime.sync="isDeliveryTime"></orderTime>-->
          <!--<tradeIn></tradeIn>-->
          <!--<carMain></carMain>-->
        <!--</section>-->
      <!--</div>-->
    <!--</div>-->
    <div v-if="!userId">
      <unLogin></unLogin>
    </div>
    <!--修改送货时间的设置页面-->
    <deliveryTime v-show="isDeliveryTime" :isDeliveryTime.sync="isDeliveryTime"></deliveryTime>
    <carGoodsTop></carGoodsTop>

  </div>
</template>
<script>
  import orderTime from '../../components/shopCar/orderTime.vue';
  import TradeIn from "../../components/shopCar/tradeIn";
  import carMain from "../../components/shopCar/carMain";
  import unLogin from "../../components/shopCar/unLogin";
  import deliveryTime from "../../components/shopCar/deliveryTime";
  import Vue from "vue"
  //推荐商品
  // import carGoodsTop from "./components/carGoodsTop";
  //这里使用了全局的过滤器
   Vue.filter("carPrice",(v)=>{return "￥" + v;})
export default {
  name: 'shopcar',
  data(){
    return {
      back : "img/carback.png",
      left : "float:left",
      carlocation : "img/carlocation.png",
      cardown:"img/cardown-arr.png",
      //是否显示配送时间
      isDeliveryTime : false,
      //是否有购物车
      carGoods:true,
      //是否登录
      userId:localStorage.userId
    }
  },
  methods:{
    carBack(){
      this.$router.go(-1);
    }
  },
  mounted(){
  },
  components: {
    TradeIn,
    orderTime,
    carMain,
    unLogin,
    deliveryTime,
    carGoodsTop:resolve => {
      require(['../../components/shopCar/carGoodsTop.vue'],resolve)
    },
  }
}
</script>

<style scoped lang="scss">
  body, ol, ul, li, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, dt, form, fieldset, legend, input, textarea, select {
    margin: 0;
    padding: 0;
    color: #333;
    outline: none;
  }
  html,body{
    width:100%;
    height:100%;
  }

.home{
  width:100%;
  /*height:100%;*/
  background:#f4f5f6;
  font-family: "微软雅黑";
}
  header{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    .header-top{
      width:100%;
      display: flex;
      align-items: center;
      background:#fff;
      line-height:.88rem;
      height:.88rem;
      margin-bottom:.02rem;
      #carback{
        margin-left:.28rem;
        width:.8rem;
        height:.88rem;
        position: relative;
        >img{
          position:absolute;
          top:.34rem;
          left:0;
        }
      }
      #carlocation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .88rem;
        height:.88rem;
        width:3.4rem;
        margin-left:1rem;
        >span{
          font-size:.28rem;
          color:#333;
        }
        >img{
          float:left;
          height:.3rem;
          width:auto;
        }
      }
      .redact{
        float:right;
        margin-left:1.04rem;
        font-size:.26rem;
        color:#666;
      }
    }
  }
  .main-body{
    height:auto;
    width:100%;
    background:#f4f5f7;
    overflow-y: scroll;
  }
</style>