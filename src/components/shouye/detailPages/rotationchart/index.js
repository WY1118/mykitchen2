<template>
    <div class="d-top">
      <div class="swiper">
        <div class="swiper-container swiper-container-goods" ref="goodsinfoSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://img.wochu.cn/upload/9e72c379-b635-4e64-91a2-0e5f001d4ef6.jpg" alt>
            </div>
            <div class="swiper-slide">
              <img src="https://img.wochu.cn/upload/1351e5df-b46e-41ed-b609-4fcfbf47ba1d.jpg" alt>
            </div>
            <div class="swiper-slide">
              <img src="https://img.wochu.cn/upload/ffb98969-f49e-46a3-a0f7-c9f13dead17d.jpg" alt>
            </div>
            <div class="swiper-slide">
              <img src="https://img.wochu.cn/upload/9251de43-de29-489b-b5f5-c1bd80965bd1.jpg" alt>
            </div>
            <div class="swiper-slide">
              <img src="https://img.wochu.cn/upload/66a43444-7ad0-4724-ad27-7eee904eae9d.jpg" alt>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-goods"></div>
        </div>
      </div>
      <div class="d-refer" @click="back">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" alt>
      </div>
    </div>
</template>
<script>
export default {
  name: "goodsinfo",
  components: {
    
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  mounted() {
    console.log(this.$refs.goodsinfoSwiper)
    var swiper = new Swiper(this.$refs.goodsinfoSwiper, {
      loop: true,
      autoplay: {
        //自动滚动
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function(currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            "\\" +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        }
      }
    });
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
.d-top {
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
}
.d-top .swiper {
  height: 100%;
}
.swiper-pagination {
  z-index: 10;
}
.d-top .swiper .swiper-container-goods .swiper-pagination-goods {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  color: #fff;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.52rem;
  background: #000;
  bottom: 0.84rem;
  left: 6.74rem;
  opacity: 0.3;
}
.d-top .d-refer {
  width: 0.54rem;
  height: 0.54rem;
  position: absolute;
  top: 0.56rem;
  left: 0.24rem;
  z-index: 1;
}
.d-top .d-refer img {
  width: 100%;
}
.d-main {
  background: #fff;
  margin: -0.48rem 0 0 0.24rem;
  width: 7.02rem;
  height: 2.49rem;
  box-shadow: 1px -1px 20px rgba(34, 34, 34, 0.3);
  position: relative;
  border-radius: 10px;
  padding-top: 0.46rem;
  z-index: 2;
  padding-bottom: 0.32rem;
}
.d-main .sign {
  position: absolute;
  top: -0.26rem;
  left: 0.38rem;
  height: 0.52rem;
}
.d-main .sign img {
  width: 0.62rem;
  float: left;
  margin-left: 0.08rem;
}
.d-main h1 {
  font-size: 0.36rem;
  color: #001e00;
  margin: 0 0 0 0.23rem;
  height: 0.45rem;
  line-height: 0.44rem;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.d-main h1 span {
  font-size: 0.32rem;
  color: #6eb042;
}
.d-main h2 {
  font-weight: 400;
  font-size: 0.28rem;
  color: #999;
  margin: 0.23rem 0 0 0.23rem;
  line-height: 0.42rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.d-main .price {
  margin: 0.25rem 0 0 0.23rem;
  font-size: 0;
  float: left;
}
.d-main .price .o-price {
  font-size: 0.36rem;
  color: #ff5918;
  float: left;
}
.d-main .price .m-price {
  font-size: 0.26rem;
  color: #ccc;
  margin: 0.05rem 0 0 0.28rem;
  float: left;
  text-decoration: line-through;
}
.d-main .d-icon {
  float: right;
  margin: 0.1rem 0.32rem 0 0;
}
.d-navigation {
  overflow: hidden;
  width: 100%;
  height: 1rem;
}
.d-navigation img {
  margin-top: 0.32rem;
  width: 100%;
}
.d-info {
  height: 1.88rem;
  text-align: center;
  background: #fff;
  padding: 0.42rem 0 0 0.24rem;
}
.d-info .condition {
  float: left;
  font-size: 0.28rem;
  width: 3.51rem;
  color: #001e00;
}
.d-info .condition span {
  color: #999;
}
.d-info .condition .width-14 {
  width: 1.4rem;
  display: inline-block;
}
.d-info .condition-top {
  margin-top: 0.5rem;
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