<template>
  <div class="mine">
    <div class="top">
      <img src="http://wmall.wochu.cn/h5/personal/img/header_bg@3x.png" alt>
      <div class="phone">
        <p>
          <img src="http://wmall.wochu.cn/h5/personal/img/cust-icon-defualt.png" alt>
        </p>
        <router-link :to="{name:'login'}">
          <span>User</span>
        </router-link>
        <router-view></router-view>
        <!-- <span>{{this.$router.name}}</span> -->
      </div>
    </div>
    <div class="zhanghu">
      <div class="zhangone">
        <p>0</p>
        <span>账户余额</span>
      </div>
      <div class="zhangtwo">
        <p>3</p>
        <span>优惠券</span>
      </div>
    </div>
    <img src="http://wmall.wochu.cn/h5/personal/img/profile-arrow@3x.png" alt class="img1">
    <div class="zhangbottom">
      <div class="zhangleft">
        <img src="http://wmall.wochu.cn/h5/personal/img/g-recharge@3x.png" alt>
        <p>充值立送现金券哦~</p>
      </div>
      <div class="zhangright">
        <p>马上充值</p>
        <img src="http://wmall.wochu.cn/h5/personal/img/recharge@3x.png" alt>
      </div>
    </div>
    <div class="shouhuo">
      <ul>
        <!--<li v-for="item in shouhuo">-->
        <router-link to="menu" tag="li" v-for="(item,index) in shouhuo" :key="index">
          <img :src="item.img">
          <p>{{item.tit}}</p>
        </router-link>
        <router-view></router-view>
      </ul>
    </div>
    <div class="tgou">
      <ul>
        <router-link to="Gbuying" tag="li" v-for="(i,index) in tg" :key="index">
          <img :src="i.img1" alt>
          <p>{{i.tit1}}</p>
        </router-link>
        <router-view></router-view>
      </ul>
    </div>
    <div class="help">
      <ul>
        <router-link v-for="(j,index) in help" :key="index" to="help" tag="li">
          <img :src="j.img2" alt>
          <p>{{j.tit2}}</p>
        </router-link>
        <router-view></router-view>
      </ul>
    </div>
    <div class="invite">
      <a href>
        <img
          src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/55b93ad6-c0df-4e6f-bbcd-eaaad88630c1.gif"
          alt
        >
      </a>
    </div>
  </div>
</template>

<script>

import Vuex from "vuex";
export default {
  created() {
    // axios
    //   .get(
    //     "api/client/v1/groupBuy/HotSaleList?parameters=%7B%22pageSize%22%3A5%2C%22pageIndex%22%3A1%7D"
    //   )
    //   .then(data => {
    //     // console.log(data);
    //      this.arr.push(data.data);
    //      console.log(this.arr.data)
    //   });
    this.getbuying();

    
    
      
     
  },
  name: "mine",
  components: {},
  computed: {
    ...Vuex.mapState({
      arrGbuy:state=>state.mine.arr
    })
  },
  methods: {
    ...Vuex.mapActions({
      getbuying:"mine/getGbuying"
    })
  },
  data() {
    return {
      userInfo: [],
      arr:[],
      shouhuo: [
        {
          img: "http://wmall.wochu.cn/h5/personal/img/needtopay@3x.png",
          tit: "待付款"
        },
        {
          img: "http://wmall.wochu.cn/h5/personal/img/no-receive@3x.png",
          tit: "待收货"
        },
        {
          img: "http://wmall.wochu.cn/h5/personal/img/no-comment@3x.png",
          tit: "待评价"
        },
        {
          img: "http://wmall.wochu.cn/h5/personal/img/historyget@3x.png",
          tit: "退货/售后"
        },
        {
          img: "http://wmall.wochu.cn/h5/personal/img/myorders@3x.png",
          tit: "我的订单"
        }
      ],
      tg: [
        {
          img1: "http://wmall.wochu.cn/h5/personal/img/mytg@3x.png",
          tit1: "我的团购"
        },
        {
          img1: "http://wmall.wochu.cn/h5/personal/img/location@3x.png",
          tit1: "收货地址"
        },
        {
          img1: "http://wmall.wochu.cn/h5/personal/img/favorite@3x.png",
          tit1: "我的收藏"
        },
        {
          img1: "http://wmall.wochu.cn/h5/personal/img/aboutus@3x.png",
          tit1: "关于我厨"
        }
      ],
      help: [
        {
          img2: "http://wmall.wochu.cn/h5/personal/img/help@3x.png",
          tit2: "帮助中心"
        },
        {
          img2: "http://wmall.wochu.cn/h5/personal/img/yjfk@3x.png",
          tit2: "意见反馈"
        },
        {
          img2: "http://wmall.wochu.cn/h5/personal/img/setup@3x.png",
          tit2: "设置中心"
        },
        {
          img2: "http://wmall.wochu.cn/h5/personal/img/kefu@3x.png",
          tit2: "客服电话"
        }
      ]
    };
  }
};
</script>
<style scoped>
body {
  background: #cccccc;
}
.top {
  height: 11.16rem;
  position: relative;
}
.top img {
  width: 100%;
}
.phone {
  position: absolute;
  top: 0.78rem;
  left: 45%;
}
.phone img {
  display: block;
  width: 1.2rem;
  height: 1.14rem;
  border-radius: 1rem;
  margin-bottom: 0.4rem;
}
.phone span {
  font-size: 0.24rem;
  color: #fff;
  font-weight: 600;
  margin-left: 0.2rem !important;
}
.zhanghu {
  position: absolute;
  width: 7.02rem;
  height: 1.7rem;
  top: 2.94rem;
  left: 50%;
  margin-left: -3.51rem;
  text-align: center;
  border-top-left-radius: 0.24rem;
  border-top-right-radius: 0.24rem;
  padding-top: 0.4rem;
  background: #fff;
  box-shadow: 1px -1px 20px rgba(34, 34, 34, 0.3);
  font-size: 0.28rem;
  color: #999;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhanghu p {
  color: black;
  font-size: 0.4rem;
}
.zhangone {
  width: 50%;
  height: 1rem;
  border-right: 1px solid #ccc;
  margin-top: -0.8rem;
  padding-top: 0.2rem;
}
.zhangtwo {
  width: 50%;
  height: 1rem;
  margin-top: -0.8rem;
  padding-top: 0.2rem;
}
.zhangbottom {
  position: absolute;
  top: 4.9rem;
  left: 0.25rem;
  height: 0.86rem;
  background: #428b0e;
  width: 7.01rem;
  border-bottom-left-radius: 0.24rem;
  border-bottom-right-radius: 0.24rem;

  /* height: .86rem;
    line-height: .86rem;
    margin-top: .4rem;
    
    
    */
}
.img1 {
  position: absolute;
  top: 4.3rem;
  left: 1rem;
}
.zhangbottom {
  top: 4.6rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.zhangleft {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  font-size: 0.28rem;
}
.zhangleft img {
  width: 0.33rem;
  height: 0.36rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}
.zhangright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5rem;
  color: #fff;
  font-size: 0.28rem;
}
.zhangright img {
  width: 0.14rem;
  height: 0.24rem;
  margin-left: 0.3rem;
  vertical-align: middle;
}
.shouhuo {
  position: absolute;
  width: 100%;
  height: 1.78rem;
  top: 5.65rem;

  background: #fff;
}
.shouhuo ul {
  display: flex;
  justify-content: space-around;
}
.shouhuo ul li {
  height: 1.5rem;
  width: 1.5rem;
  /* background: red; */
  color: #999;
  font-size: 0.24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  /* margin-top: 0.45rem;
  margin-left: 0.3rem; */
}
.shouhuo ul li:last-child {
  /* height: 1.1rem; */
  border-left: 1px solid #000;
  /* padding-left: 0.3rem; */
}
.shouhuo ul li p {
  margin-top: 0.2rem;
  margin-left: -0.1rem;
}
.shouhuo ul li img {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 0.2rem;
}
.tgou ul {
  display: flex;
  height: 1.5rem;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 7.65rem;
}
.tgou ul li {
  height: 1.5rem;
  width: 1.5rem;
  /* background: red; */
  padding: 0.3rem 0;
  color: #999;
  font-size: 0.24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.3rem;
  margin-top: -0.1rem;
}
.tgou ul li img {
  /* margin-left: 0.5rem;
  margin-top: -0.1rem; */
  margin-bottom: 0.15rem;
  display: block;
  width: 0.8rem;
  height: 0.8rem;
}
.help ul {
  display: flex;
  justify-content: space-around;
}
.help {
  position: absolute;
  top: 9.1rem;
  background: #fff;
  height: 1.5rem;
  width: 100%;
  border-top: 1px solid #ccc;
}
.help ul li {
  margin-top: -0.1rem;
  height: 1.5rem;
  width: 1.5rem;
  /* background: red; */
  padding: 0.3rem 0;
  color: #999;
  font-size: 0.24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.05rem;
}
.help li img {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  /* margin-left: 0.55rem; */
  margin-bottom: 0.15rem;
}
/* .help li p {
  /* margin-left: 0.15rem; */

.invite img {
  width: 95%;
  margin-top: -0.45rem;
  margin-left: 0.2rem;
  height: 1.6rem;
}
</style>
