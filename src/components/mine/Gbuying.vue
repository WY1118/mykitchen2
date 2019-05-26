<template>
  <div class="buying">
    <div class="top">
      <img src="http://wmall.wochu.cn/h5/tg/img/goback.png" @click="goBack()" alt>

      <span>超值团购</span>
      <div></div>
    </div>
    <div class="second">
      <div class="banner">
        <img src="http://wmall.wochu.cn/h5/tg/img/myGroup-banner.png" alt>
      </div>
      <div class="shop">
        <div class="shop_list" v-for="(item,index) in arrGbuy.items" :key="index">
          <div class="shop_top">
            <img src="http://hmall.wochu.cn/hotsale/2019-05-24/img/niurouli (4).jpg" alt>
            <h3>{{item.product_describe}}</h3>
            <h4>{{item.sell_point}}</h4>
            <div class="shop_bottom">
              <div class="shop_foot">
              <span>￥{{item.discount_price}}</span>
              <p>￥{{item.market_price}}</p>
              </div>
              <h5>{{item.reduced_rate}}折</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "Gbuying",
  created() {
    this.getbuying();
  },

  components: {},
  computed: {
    ...Vuex.mapState({
      arrGbuy: state => state.mine.arr
    })
  },
  methods: {
    ...Vuex.mapActions({
      getbuying: "mine/getGbuying"
    }),
    goBack: function() {
      this.$router.back();
    }
  },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
.buying {
  display: flex;
  flex-direction: column;
  background: #f8f8f8
}
.second {
  flex: 1;
  overflow: auto;
}
.top {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  background-color: #fff;
  height: 0.88rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.36rem;
  color: #333;
  padding-left: 0.3rem;
}
.top span {
  margin-left: -0.6rem;
  font-weight: 300;
}
.banner {
  height: 5rem;
}
.banner img {
  height: 5rem;
  width: 100%;
}
.shop {
  /* display: flex; */
  width: 100%;
  /* flex-wrap: wrap; */
  display: flex;
  flex-wrap: wrap;
  

}

.shop_list {
  background: #ffffff;
  width: 3.3rem;
  height: 4rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem
  /* border: 1px solid; */
   
}

.shop_list img {
  display: block;
  height: 1.8rem;
  width: 3.2rem;
}

.shop_top {
  height: 4.5rem;
  width: 3rem;
  /* background: red; */
  
  /* margin-left: 0.8rem;
  margin-right: 0.5rem */
}
.shop_top h3{
  margin-top: 0.2rem;
  width: 3.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.3rem;
  
}
.shop_top h4{
  text-align: center;
  margin-left: 0.2rem;
  margin-top: 0.15rem;
  color: #666;
  width: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.22rem;
}
.shop_bottom{
  width: 100%;
  height: 1rem;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem
}
.shop_bottom span{
  color: #ff701e;
  font-size: 0.24rem
}
.shop_foot{
  width: 0.5rem;
  display: flex
}
.shop_foot p{
  color: #999;
  text-decoration: line-through
}
.shop_bottom h5{
  color: #ff701e   
}
</style>