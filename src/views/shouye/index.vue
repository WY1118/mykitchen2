<template>
  <div class="home">
    <!-- 头部 -->
    <header>
      <div class="fix">
        <div class="logo">
          <img src="img/logo.png" alt>
        </div>
        <div class="city">
          <a href="#">请填写地址</a>
          <span>
            <img src="img/icon.png" alt>
          </span>
        </div>
        <div></div>
        <div class="search">
          <img src="img/search-icon.png">
        </div>
      </div>
    </header>
    <!-- Con -->
    <div id="con">
      <!-- 轮播图 -->
      <Lunbo></Lunbo>
      <!-- nav -->
      <Navcon></Navcon>
      <!-- <nav class="nav">
        <ul class="nav-list" v-for="(item,key) in navs" :key="key">
          <li v-for="(val,index) in item" :key="index">
            <a href="#">
              <img :src="val" alt>
            </a>
          </li>
        </ul>
      </nav> -->
      <!-- 滚动scroll   goods-list 0  -->
      <div class="goods-list">
        <div class="scroll-con">
          <div class="scroll-logo">
            <img src="img/kuaibao.jpg" alt class="pic1">
          </div>
          <div class="scroll-box">
            <ul class="scroll" style="transform: translateY(0rem);">
              <li>【5折】清美内酯豆腐1.9元/400g</li>
              <li>【59减20券】邀请好友双方都可得！</li>
            </ul>
            <div class="jiantou">
              <img src="img/jiantou1.png" alt class="pic2">
            </div>
          </div>
        </div>
      </div>
      <!-- 鸡翅0元抢  goods-list 1  -->
      <div class="goods-list">
        <div class="img-link">
          <img src="img/jichi.gif" alt>
        </div>
      </div>

      <!-- 限时特惠   goods-list 2   w-->
      <div class="goods-list">
        <!-- <div class="temp-list1">
          <div class="temp-title">
            <span></span>
            限时特惠
            <span></span>
          </div>
          <ul>
            <li>
              <div class="img-view">
                <img src="img/rou.jpg" alt>
                <div class="zhijiang">
                  <img src="img/zhijiang.png" alt>
                </div>
              </div>
              <div class="temp-goods-info">
                <p class="temp-goods-name">我厨优选小排400g</p>
                <div class="goods-intro">不腥不臊，厨艺小白也能做出鲜滋味</div>
                <div class="temp-goods-price">
                  <div class="price-wrap">
                    <div class="real-price">
                      ¥
                      <span class="before-point">14</span>
                      <span class="affter-point">.9</span>
                    </div>
                    <p class="markt-price">¥ 24.9</p>
                  </div>
                  <div class="add-to-cart">
                    <img src="img/add.png" alt>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> -->
        <Xianshi1></Xianshi1>
      </div>

      <!--限时特惠  优选虾仁   goods-list 3  -->
      <div class="goods-list">
         <Xianshi2></Xianshi2>
      </div>

      <!--限时特惠 imglink1   goods-list 4  -->
      <div class="goods-list">
        <div class="imglink">
          <img src="img/niunan.jpg" alt="">
        </div>
      </div>

      <!-- 限时特惠 imglink2   goods-list 5  -->
      <div class="goods-list">
        <div class="imglink">
          <img src="img/zubu.jpg" alt="">
        </div>
      </div>
      <!-- 限时特惠 imglink3   goods-list 6  -->
      <div class="goods-list">
        <div class="group-list3">
          <div class="left-view">
            <img src="img/xileng.jpg" alt="">
          </div>
          <div class="right-view">
            <div class="rt-top-view">
              <img src="img/wei.jpg" alt="">
            </div>
            <div class="rt-bottom-view">
              <img src="img/jinqun.jpg" alt="">
            </div>
          </div>

        </div>
      </div>

      <!-- 秒变大厨   goods-list 7 w -->
      <div class="goods-list">
        <Miaobian1></Miaobian1>
      </div>
      <!-- 秒变大厨 list  goods-list 7 w -->
      <div class="goods-list">
        <Miaobian2></Miaobian2>
      </div>

      <!-- 本周新菜      goods-list 8  **-->
     
      <!-- 本周新菜list  goods-list 9  -->
      
      <Goodslist></Goodslist>
      <!-- 我厨优选      goods-list 10  -->
      <div class="footer2">
        <div class="ceshi">
          
        </div>
      </div>
      <!-- 我厨优选list  goods-list 10  -->
      <!-- 时令蔬菜      goods-list 11  -->
      <!-- 时令蔬菜list  goods-list 12  -->
      <!-- 新鲜水果      goods-list 13  -->
      <!-- 新鲜水果list  goods-list 14  -->
      <!-- 过瘾肉类      goods-list 15  -->
      <!-- 过瘾肉类list  goods-list 16  -->
      <!-- 营养禽粥      goods-list 17  -->
      <!-- 营养禽粥list  goods-list 18  -->
      <!-- 水中鲜物      goods-list 19  -->
      <!-- 水中鲜物list  goods-list 20  -->
      <!-- 乳饮西点      goods-list 21  -->
      <!-- 乳饮西点list  goods-list 22 -->
      <!-- 点心速食      goods-list 23 -->
      <!-- 点心速食list  goods-list 24 -->
      <!-- 油粮副食      goods-list 25 -->
      <!-- 油粮副食list  goods-list 26 -->
    </div>
  </div>
</template>
<script>
import Xianshi1 from "./components/xianshitehui/goodslist1.vue";
import Xianshi2 from "./components/xianshitehui/goodslist2.vue";
import Miaobian1 from "./components/miaobiandachu/goodslist1.vue";
import Miaobian2 from "./components/miaobiandachu/goodslist2.vue";
import Lunbo from "./components/lunbo/index.vue";
import Navcon from "./components/navCon/index.vue";
import Goodslist from "./components/goodslist/index.vue";
export default {
  name: "shouye",
  components: {
    Xianshi1,
    Xianshi2,
    Miaobian1,
    Miaobian2,
    Goodslist,
    Lunbo,
    Navcon
  },
  data() {
    return {
      navs: [
        ["img/f.jpg", "img/f.jpg", "img/f.jpg", "img/f.jpg"],
        ["img/f.jpg", "img/f.jpg", "img/f.jpg", "img/f.jpg"]
      ]
    };
  }
};
</script>
<style>
header {
  height: 0.9rem;
  width: 100%;
}
header .fix {
  height: 0.9rem;
  width: 100%;
  line-height: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.logo img {
  height: 70%;
  width: 70%;
}
.city {
  display: flex;
  font-size: 0.3rem;
  width: 28%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #1f6117;
}
.con {
  height: 100%;
  overflow: auto;
  flex: 1;
}
/* nav */
nav {
  width: 100%;
}
.nav-list {
  width: 100%;
  height: 2.18rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 滚动scroll */
.scroll-con {
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: palegoldenrod; */
  position: relative;
}
.scroll-con .pic1 {
  padding: 0.12rem;
}
.scroll-box {
  height: 1.14rem;
  display: flex;
  width: 85.6%;
  justify-content: space-between;
  align-items: center;
}
.scroll {
  height: 1.14rem;
  overflow: hidden;
}
.scroll li {
  padding-left: 0.13rem;
  font-size: 0.26rem;
}
.scroll:first-child {
  height: 1.14rem;
  width: 85.6%;
  line-height: 1.14rem;
  /* background: yellow; */
  position: absolute;
  top: 0;
  left: 1.08rem;
}
.jiantou {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 0.9rem;
  height: 1.2rem;
  right: 0;
  top: 0;
}
.pic2 {
  width: 45%;
}
/* 限时特惠 */
/* .temp-list1 {
  padding-top: 0.3rem;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4.44rem;
  align-items: center;
  justify-content: space-around;
}
.temp-title {
  width: 100%;
  height: 1rem;
  line-height: 0.4rem;
  background: #fff;
  padding: 0.3rem 0;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.32rem;
  color: #001e00;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
.temp-title span {
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  border-bottom: 2px solid #011e00;
  margin: auto 0.22rem;
}
.img-view {
  position: relative;
  width: 2.26rem;
  height: 2.26rem;
}
.img-view:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.zhijiang {
  position: absolute;
  top: 0;
  left: 0;
}
.temp-list1 ul {
  width: 100%;
  height: 3.12rem;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.temp-list1 ul li {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.temp-goods-info {
  height: 2.54rem;
  width: 4.34rem;
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.temp-goods-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #666;
}
.price-wrap {
  display: flex;
}
.temp-goods-name {
  width: 100%;
  height: 1rem;
  line-height: 0.36rem;
  font-size: 0.32rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.32rem;
}
.goods-intro {
  width: 100%;
  height: 0.56rem;
  font-size: 0.26rem;
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.32rem;
}
.before-point {
  font-size: 0.4rem;
  line-height: 0.5rem;
  font-weight: 700;
}
.affter-point {
  font-size: 0.26rem;
}
.real-price {
  color: #ff5918;
  font-size: 0.3rem;
}
.markt-price {
  font-size: 0.24rem;
  text-decoration: line-through;
  color: #999;
  margin-left: 0.18rem;
  line-height: 0.6rem;
}
.add-to-cart {
  width: 25%;
} */
/* 限时特惠 imglink1/imglink12   goods-list 4/5  */
.goods-list .imglink img {
    width: 7.5rem;
    height: 3.04rem;
    margin-bottom: .08rem;
}

.goods-list .imglink {
    background: #f8f8f8;
}

/* <!-- 限时特惠 imglink3   goods-list 6  --> */
.goods-list .group-list3 {
    width: 100%;
    padding: .3rem .2rem 0;
    background: #f4f4f4;
}
.goods-list .group-list3 .left-view {
    background: #fff;
    width: 3.5rem;
    height: 5.2rem;
    border-radius: .06rem;
    float: left;
}
.goods-list .group-list3 .right-view {
    width: 3.5rem;
    height: 5.2rem;
    border-radius: .06rem;
    background: #fff;
    float: right;
}
.goods-list .group-list3 .right-view .rt-top-view {
    height: 2.6rem;
    border-bottom: 1px solid #e5e5e5;
}
.goods-list .group-list3 .right-view .rt-bottom-view {
    height: 2.6rem;
}
.goods-list .group-list3 .left-view img {
    border-radius: .06rem;
    width: 100%;
    height: 100%;
}
.goods-list .group-list3 .right-view img {
    width: 100%;
    height: 100%;
}

/* <!-- 本周新菜list  goods-list 9  --> */
</style>
