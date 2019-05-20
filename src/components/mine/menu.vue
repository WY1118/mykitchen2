<template>
  <div>
    <div class="top">
      <!-- <router-link tag="div" to="mine"> -->
        <img src="http://wmall.wochu.cn/h5/user/css/images/q-fanhui@3x.png"  @click="goBack()">
      <!-- </router-link>
      <router-view></router-view> -->
      <span>全部订单</span>
      <div></div>
    </div>
    <div>
      
      <ul class="all_list">
        <!-- <li
          v-for="(item,index) in all_list"
          :class="{all_active:current==index}"
          @click="toggle('index')"
          :key="index"
        >
          {{item.tit}}
          <div>{{item.tab}}</div>
        </li> -->
        <li @click="tabChange('all');"  >全部</li>
        <li  @click="tabChange('pay');" >待付款 </li>
        <li  @click="tabChange('shop');"  >待收货</li>
        <li  @click="tabChange('evaluate');"  >待评价</li>
      </ul>
      <div :is="currentView" ></div>
      
    </div>
    <!-- <all></all>
    <pay></pay>
    <shop></shop>
    <evaluate></evaluate> -->
  </div>
</template>
<script>
import all from "../../components/mine/all";
import pay from "../../components/mine/pay";
import shop from "../../components/mine/shop";
import evaluate from "../../components/mine/evaluate";


export default {
  name: "menu",
  methods: {
    //  addClass: function(li) {
    //   let Li = document.getElementsByName('li');
    //   this.style.background = red
     
    //   // alert(1)
    //  },
    tabChange(tabItem) {
      this.currentView = tabItem;
    },
    goBack:function(){
      this.$router.back()
    }
    // toggleTab:function(tab){
    //   this.cuttentTab = tab
    // }
  },
  components: {
    pay,
    shop,
    evaluate,
    all
  },
  data() {
    return {
      currentView:0,
      all:'all',
      shop:'shop',
      pay:'pay',
      evaluate:'evaluate',
      currentView:"all"
      // currentTab:pay,
      // all_list: [
      //   {
      //     tit: "全部",
      //     tab: "all"
      //   },
      //   {
      //     tit: "待付款",
      //     tab: "pay"
      //   },
      //   {
      //     tit: "待收货",
      //     tab: "shop"
      //   },
      //   {
      //     tit: "待评价",
      //     tab: "evaluate"
      //   }
      // ]
    };
  }
};
</script>

<style scoped>
body {
  background: #ccc !important;
  display: flex;
}

.top {
  position: fixed;
  top: 0;
  z-index: 30;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*float: left;*/
  width: 100%;
  height: 1rem;
  border-bottom: 0.01rem solid #e5e5e5;
  background: #fff;
  line-height: 1rem;
  padding-left: 0.3rem
}
.top img {
  height: 0.5rem;
  margin-left: 0.1rem;
}
.top span {
  width: 4rem;
  font-size: 0.36rem;
  color: #32532e;
  text-align: center;
  margin: 0 auto;
  font-weight: 300;
}
/* .all {
  padding-left: 0.56rem;
  padding-right: 0.56rem;
  font-size: 0.28rem;
  color: #001e00;
  /* background: #fff; */
 
.all_list {
  height: 0.9rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  background: #fff;
  position: fixed;
  top: 1rem;
  z-index: 30
  
}
.all_active {
  color: #6eb042;
  border-bottom: 0.04rem solid #6eb042;
}
.all_list li {
  
  height: 1rem;
  width: 25%;
  margin-left: 0.2rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem
  /*color: #6eb042;*/
  /*border-bottom: .04rem solid #6eb042;*/
}

</style>

