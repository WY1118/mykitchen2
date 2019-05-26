<template>
  <!-- 本周新菜      goods-list 8  **-->
  <div class="goods-list">
    <div v-for="(val,i) in arr" :key="i">
      <div v-for="(item,key) in val[0].items" :key="key">
        <div class="goods-list1">
          <div class="imglink">
            <img :src="item.imgUrl" alt>
          </div>
          <!-- 本周新菜list  goods-list 9  -->
        </div>
        <div class="goods-list2">
          <div class="goods-list-con">
            <ul>
              <router-link v-for="(item,key) in val[1].items" :key="key" tag="li" :to="'/goodsinfo?goodsId='+item.source">
                <a href="">
                  <img :src="item.imgUrl" lazy="loaded">
                </a>
                <div class="goods-name ellipsis">
                  <span></span>
                  {{item.goodsName}}
                </div>
                <div class="price-cart">
                  <div class="price-ctl">
                    <div class="market-price">
                      <div>￥{{item.marketPrice}}</div>
                    </div>
                    <div class="price">￥{{item.price}}</div>
                  </div>
                  <div class="addCart">
                    <img src="img/add.png" alt>
                  </div>
                </div>
              </router-link>
              <router-view></router-view>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "goodslist",
    created() { 
  },
  data() {
    return {
      arr:[]
    }
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
    goodspush(){
      this.arr.push([this.goods[9],this.goods[10]],[this.goods[11],this.goods[12]],[this.goods[13],this.goods[14]],
      [this.goods[15],this.goods[16]],[this.goods[17],this.goods[18]],[this.goods[19],this.goods[20]],[this.goods[21],this.goods[22]],
      [this.goods[23],this.goods[24]],[this.goods[25],this.goods[26]],[this.goods[27],this.goods[28]]  
      )
    }
  },
  mounted() {
    var that = this;
    this.getGoods(function(){
       that.goodspush();
    });
  }
};
</script>
<style scoped>
/* 限时特惠 imglink1/imglink12 /  goods-list 4/5  */
.goods-list .imglink img {
  width: 7.5rem;
  height: 3.04rem;
  margin-bottom: 0.08rem;
}

.goods-list .imglink {
  background: #f8f8f8;
}
/* <!-- 本周新菜list  goods-list 9  --> */
.goods-list .goods-list-con {
  height: 7.68rem;
  padding: 0 0.2rem 0.2rem 0.28rem;
}
.goods-list .goods-list-con ul li {
  width: 2.26rem;
  height: 3.46rem;
  margin-top: 0.28rem;
  margin-right: 0.08rem;
  float: left;
}
a {
  text-decoration: none;
  color: #000;
  display: inline-block;
}
.goods-list .goods-list-con ul li a img {
  width: 2.26rem;
  height: 2.26rem;
}
.goods-list .goods-list-con ul li .goods-name {
  width: 100%;
  height: 0.58rem;
  font-size: 0.26rem;
  line-height: 0.25rem;
  padding-top: 0.08rem;
  color: #333;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list .goods-list-con ul li .goods-name span {
  color: #6eb042;
  font-size: 0.26rem;
  height: 0.32rem;
  font-weight: 700;
  vertical-align: baseline;
}
.goods-list .goods-list-con ul li .price-cart {
  height: 0.64rem;
  margin-top: 0.08rem;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl {
  height: 0.64rem;
  width: 1.6rem;
  float: left;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl .market-price {
  height: 0.24rem;
  font-size: 0.24rem;
  color: #999;
  text-decoration: line-through;
  line-height: 0.24rem;
  height: auto;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl .price {
  height: 0.3rem;
  font-size: 0.3rem;
  color: #f96d16;
  line-height: 0.3rem;
  margin-top: 0.1rem;
}
.goods-list .goods-list-con ul li .price-cart .addCart {
  width: 0.66rem;
  height: 0.54rem;
  line-height: 0.54rem;
  float: right;
  text-align: center;
}
.goods-list .goods-list-con ul li .price-cart .addCart img {
  width: 0.48rem !important;
  height: 0.48rem !important;
  float: left;
}
</style>