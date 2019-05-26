<template>
  <div class="home">
    <!-- 头部 -->
    <div class="topbox">
      <header>
        <div class="logo">
          <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png">
        </div>
        <div class="addr">
          <p class="addr-detail">请填写地址</p>
          <span class="down-arr">
            <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png">
          </span>
        </div>
        <div class="search-btn">
          <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png">
        </div>
      </header>
    </div>
    <!-- Con -->
    <div id="con">
      <!-- 轮播图 -->
      <Lunbo></Lunbo>
      <!-- nav -->
      <Navcon></Navcon>
      <!-- 滚动 -->
      <div class="goods-list">
        <div class="wochu-broadcast">
          <div class="broadcast-title">
            <img
              src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg"
              lazy="loaded"
            >
          </div>
          <div class="broadcast-content">
            <div class="scroll-content">
              <ul class="animate">
                <li class="ellipsis line-height2">【5折】清美内酯豆腐1.9元/400g</li>
                <li class="ellipsis line-height2">【59减20券】邀请好友双方都可得！</li>
              </ul>
            </div>
            <div class="show-all">
              <img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png">
            </div>
          </div>
        </div>
      </div>
      <!-- 鸡翅0元抢  goods-list 1  -->
      <div class="goods-list">
        <div class="img-link">
          <img :src="goods[1].items[0].imgUrl" alt>
        </div>
      </div>

      <!-- 限时特惠   goods-list 2   w-->
      <div class="goods-list">
        <Xianshi1></Xianshi1>
      </div>

      <!--限时特惠  优选虾仁   goods-list 3  -->
      <div class="goods-list">
        <Xianshi2></Xianshi2>
      </div>

      <!--限时特惠 imglink1   goods-list 4  -->
      <div class="goods-list">
        <div class="img-link">
          <img :src="goods[4].items[0].imgUrl" alt>
        </div>
      </div>

      <!-- 限时特惠 imglink2   goods-list 5  -->
      <div class="goods-list">
        <div class="img-link">
          <img :src="goods[5].items[0].imgUrl" alt>
        </div>
      </div>
      <!-- 限时特惠 imglink3   goods-list 6  -->
      <div class="goods-list">
        <div class="group-list3">
          <div class="left-view">
            <img :src="goods[6].items[0].imgUrl" alt>
          </div>
          <div class="right-view">
            <div class="rt-top-view">
              <img :src="goods[6].items[1].imgUrl" alt>
            </div>
            <div class="rt-bottom-view">
              <img :src="goods[6].items[2].imgUrl" alt>
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
      <!-- <div class="footer2">
        <div class="ceshi"></div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Xianshi1 from "../../components/shouye/homePage/xianshitehui/goodslist1.vue";
import Xianshi2 from "../../components/shouye/homePage/xianshitehui/goodslist2.vue";
import Miaobian1 from "../../components/shouye/homePage/miaobiandachu/goodslist1.vue";
import Miaobian2 from "../../components/shouye/homePage/miaobiandachu/goodslist2.vue";
import Lunbo from "../../components/shouye/homePage/lunbo/index.vue";
import Navcon from "../../components/shouye/homePage/navCon/index.vue";
import Goodslist from "../../components/shouye/homePage/goodslist/index.vue";
import Vuex from "vuex";
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
  
    };
  },
  created() {
    this.getGoods()
  },
  computed: {
      ...Vuex.mapState({
      goods:state=>state.shouye.homegoods
    })
  },
  methods: {
     ...Vuex.mapActions({
      getGoods:"shouye/gethomeGoods"
    }),
  },
};
</script>
<style scoped>
/* top */
.topbox{
   width: 100%;
   height: .9rem;
}
header {
    position: fixed;
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    padding: 0 .24rem;
    background: #fff;
    z-index: 3;
    top: 0;
    left: 0;
}
header .logo {
    margin-right: .3rem;
    float: left;
}
header .logo img {
    width: .88rem;
    margin-top: .25rem;
}
header .addr {
    width: 3.5rem;
    float: left;
    font-size: .3rem;
    color: #1f6117;
    text-align: center;
}
header .addr .addr-detail {
    width: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    height: .9rem;
}
header .addr .down-arr {
    float: left;
}
header .addr img {
    width: .15rem;
    vertical-align: 6%;
    margin-top: .35rem
}
header .search-btn {
    width: .8rem;
    float: right;
    font-size: .26rem;
    color: #666;
    text-align: right;
}
header .search-btn img {
    width: .36rem;
    height: auto;
    margin-top: .30rem
}
/* main */
.con {
  height: 100%;
  overflow: auto;
  flex: 1;
}
/* nav */

/* 滚动scroll */
.wochu-broadcast {
  width: 100%;
  height: 1.16rem;
  border-top: 1px solid #e5e5e5;
}
.wochu-broadcast .broadcast-title {
  width: 1.08rem;
  float: left;
  padding: 0.24rem 0 0 0.24rem;
  position: relative;
}
.wochu-broadcast .broadcast-content {
  width: 6.42rem;
  float: right;
}
.wochu-broadcast .broadcast-title img {
  position: absolute;
  top: 0.24rem;
  width: 0.84rem;
  height: 0.6rem;
  border-right: 1px solid #e5e5e5;
  padding-right: 0.24rem;
}
.wochu-broadcast .broadcast-content .scroll-content {
  width: 100%;
  height: 1.14rem;
  overflow: hidden;
}
.animate {
  /* transition: all .3s ease-out; */
  animation: mymove 20s ease-out 2s infinite alternate;
}

@keyframes mymove {
  0% {
    translateY: -57px;
  }
  50% {
    translateY: 0px;
  }
  100% {
    translateY: -57px;
  }
}
.wochu-broadcast .broadcast-content .scroll-content ul li {
  width: 100%;
  height: 1.14rem;
  padding: 0.24rem 0.9rem 0.24rem 0.26rem;
  color: #001e00;
  font-size: 0.26rem;
}
.wochu-broadcast .broadcast-content .line-height2 {
  line-height: 0.68rem !important;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wochu-broadcast .broadcast-content .show-all {
  position: absolute;
  right: 0;
  top: 0;
  height: 1.14rem;
  width: 0.9rem;
}
.wochu-broadcast .broadcast-content .show-all img {
  position: absolute;
  top: 0.49rem;
  width: 0.3rem;
  height: 0.16rem;
  right: 0.24rem;
}
.img-link {
  background: #f8f8f8;
}
.img-link img {
  width: 100%;
  height: 3.04rem;
  margin-bottom: 0.08rem;
}
/* <!-- 限时特惠 imglink3   goods-list 6  --> */
.goods-list .group-list3 {
  width: 100%;
  padding: 0.3rem 0.2rem 0;
  background: #f4f4f4;
}
.goods-list .group-list3 .left-view {
  background: #fff;
  width: 3.5rem;
  height: 5.2rem;
  border-radius: 0.06rem;
  float: left;
}
.goods-list .group-list3 .right-view {
  width: 3.5rem;
  height: 5.2rem;
  border-radius: 0.06rem;
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
  border-radius: 0.06rem;
  width: 100%;
  height: 100%;
}
.goods-list .group-list3 .right-view img {
  width: 100%;
  height: 100%;
}

/* <!-- 本周新菜list  goods-list 9  --> */
</style>
