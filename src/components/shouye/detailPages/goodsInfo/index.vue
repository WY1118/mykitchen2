<template>
  <div class="goodsinfoBox">
    <Lunbo></Lunbo>
    <!--  -->
   <Info></Info>
    <div class="d-rate clear">
      <span>商品评价</span>
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/next.png" alt>
    </div>
    <!--  -->
    <div class="d-advice-text">
      <i></i>
      <p>猜你喜欢</p>
    </div>
    <!--  -->
    <div class="d-advice-info">
      <Ilike></Ilike>
    </div>
    <!--  -->
    <div class="detialMain">
      <div>
        <p>
          <img src="https://img.wochu.cn/upload/82690166-dfbc-4b36-b8fc-7a79e7be323e.jpg">
          <img src="https://img.wochu.cn/upload/4f1b5640-9875-4868-891f-80f51c991caa.jpg">
          <img src="https://img.wochu.cn/upload/4b410b04-9a3a-4d59-924d-10e1fcc5ffc5.jpg">
          <img src="https://img.wochu.cn/upload/b7bdc365-a9f2-40ad-b377-8dda8f2545f7.jpg">
          <img src="https://img.wochu.cn/upload/8fea3709-1053-4559-bb2e-f1f408c22a3d.jpg">
          <img src="https://img.wochu.cn/upload/d7d2ec1e-fbd9-482e-82fd-7ef9bb066617.jpg">
        </p>
      </div>
    </div>
    <!--  -->
    <div class="cart">
      <div class="cart-l">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/catr.png" alt>
        <span>1</span>
      </div>
      <div class="cart-r">加入购物车</div>
      <div></div>
    </div>
    <!--  -->
    <div class="cart-on" style="display: none;">加入购物车</div>
    <!--  -->
    <div class="pop" style="display: none;"></div>
    <!--  -->
    <div class="cart-info" style="display: none;">
      <div class="close">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/close.png" alt>
      </div>
      <img
        alt
        class="good"
        src="https://img.wochu.cn/upload/93d29a16-752d-4a65-89e3-beded886c8b2.jpg"
      >
      <p>商品售价</p>
      <div class="price">￥19.9</div>
      <span>购买数量</span>
      <div class="addmin">
        <span class="min">
          <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/min1.png" alt>
        </span>
        <span class="min">
          
        </span>
        <input type="text" maxlength="3">
        <span class="add">
          <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/addreal.png" alt>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Ilike from "../../homePage/xianshitehui/goodslist2.vue";
import Lunbo from "../components/lunbo.vue";
import Info from "../components/info.vue";
export default {
  name: "goodsinfo",
  components: {
    Ilike,
    Lunbo,
    Info
  },
  data() {
    return {};
  },
  created() {
    
  },
  methods: {

  },
  mounted() {

  }
};
</script>
<style scoped>
.goodsinfoBox {
  background: #f4f4f4;
  padding-bottom: 1rem;
  overflow: auto;
  color: #001e00;
}
img{
  width: 100%;
  
}
.d-rate {
  background: #fff;
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.24rem;
  font-size: 0.3rem;
  margin-top: 0.22rem;
}
.d-rate span {
  color: #001e00;
  font-size: 0.3rem;
  float: left;
  /* margin-top: .3rem; */
  text-align: left;
}
.d-rate img {
  width: 0.14rem;
  float: right;
  margin-top: 0.3rem;
}
.d-advice-text,
.d-advice-text p {
  position: relative;
  background: #f4f4f4;
}
.d-advice-text p {
  width: 1.68rem;
  display: inline-block;
}
.d-advice-text {
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
  color: #001e00;
  text-align: center;
}
.d-advice-text i {
  display: block;
  height: 1px;
  width: 4.7rem;
  position: absolute;
  top: 0.45rem;
  left: 1.4rem;
  background: #000;
  line-height: 1;
}
.detialMain {
  width: 100%;
  overflow: hidden;
}

.cart {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    z-index: 20;
}
.cart .cart-l {
    float: left;
    width: 1.8rem;
    height: 1rem;
    background: #eb481c;
}
.cart .cart-l img {
    width: .42rem;
    margin: .26rem 0 0 .68rem;
}
.cart .cart-l span {
    font-size: .22rem;
    color: #ff5918;
    background: #fff;
    position: absolute;
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    top: .2rem;
    left: 1rem;
    border-radius: 50% 50% 50% 50%;
}
.cart-on, .cart .cart-r {
    background: #ff5918;
    color: #fff;
    font-size: .32rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}
.cart .cart-r {
    width: 5.7rem;
    float: left;
}
.pop, .safe-modal {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.pop {
    z-index: 15;
    background: #000;
    opacity: .5;
}

.cart-info {
    bottom: 1rem;
    background: #fff;
    height: 2.22rem;
    padding: .74rem 0 .74rem .24rem;
}
.cart-info, .cart-on {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 4;
}
.cart-info .close {
    width: .36rem;
    height: .36rem;
    position: absolute;
    top: .28rem;
    left: 6.89rem;
}
.cart-info .good {
    width: 2.2rem;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    float: left;
}
.cart-info p {
    font-size: .28rem;
    color: #999;
    position: absolute;
    left: 2.74rem;
    top: .74rem;
}
.cart-info .price {
    float: left;
    font-size: .36rem;
    color: #ff5918;
    position: absolute;
    left: 2.74rem;
    top: 1.2rem;
}
.cart-info span {
    font-size: .3rem;
    color: #001e00;
    position: absolute;
    left: 2.74rem;
    top: 2.4rem;
}
.cart-info .addmin {
    width: 2.94rem;
    height: .8rem;
    border: 1px solid #e5e5e5;
    border-radius: .24rem;
    position: absolute;
    left: 4.2rem;
    top: 2.15rem;
    font-size: 0;
}
.cart-info .addmin .min {
    width: .38rem;
    height: .38rem;
    position: absolute;
    left: .34rem;
    top: .25rem;
}
.cart-info span {
    font-size: .3rem;
    color: #001e00;
}
.cart-info .addmin input {
    width: 1.1rem;
    height: .4rem;
    position: absolute;
    font-size: .36rem;
    color: #001e00;
    text-align: center;
    top: .21rem;
    left: 1rem;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-radius: 0;
}
.cart-info .addmin .add {
    width: .38rem;
    height: .38rem;
    position: absolute;
    left: 2.35rem;
    top: .24rem;
}
.cart-info .addmin .add img {
    width: .37rem;
}
</style>
