<template>
  <div class="swiper-container swiper-view" ref="swiperxianshi">
    <div class="swiper-wrapper swiper-item">
      <router-link tag="div" class="swiper-slide advice-group" v-for="(item,index) in goods[8].items" :key="index" :to="'/goodsinfo?goodsId='+item.source">
        <!-- <div class="group-icon">
          <img :src="item.labels.labelUrl">
          <img :src="item.labelUrl2">        
        </div> -->
        <img class="pic1" :src="item.imgUrl" lazy="loaded">
        <div class="group-name ellipsis">
          <span class id="textIcon"></span>
          {{item.goodsName}}
        </div>
        <div class="m-price">
          <div>￥{{item.marketPrice}}</div>
        </div>
        <div class="o-price">￥{{item.price}}</div>
        <div class="add-cart">
          <img src="img/add.png" alt>
        </div>
      </router-link >
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "goodslist2",
  components: {},
  data() {
    return {
    };
  },
  created() {
    
  },
  computed: {
      ...Vuex.mapState({
      goods:state=>state.shouye.homegoods
    })
  },
  methods: {
    swiperInit(){
        var swiper = new Swiper(this.$refs.swiperxianshi, {
          loop: false,
          slidesPerView: 3.3,
          spaceBetween: 0,
          lazyLoading : true,//懒加载开启
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
    },
     ...Vuex.mapActions({
      getGoods:"shouye/gethomeGoods"
    }),
  },
  mounted() {
    var that = this;
    this.getGoods(function(){
      that.swiperInit()
    })
  }
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 3.78rem !important;
}
.swiper-wrapper {
  min-height: 3.78rem !important;
  padding: 0.26rem 0 0 0.24rem;
  z-index: 1;
}
.swiper-view .swiper-item .advice-group .swiper-slide {
  height: 3.52rem;
  margin-right: 0.36rem;
  width: 1.9rem;
  position: relative;
  vertical-align: top;
}
.swiper-view .swiper-item .advice-group .group-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.54rem;
  border: none;
}
.swiper-view .swiper-item .advice-group .group-icon img {
  width: 0.6rem;
  float: left;
  margin-right: 0.08rem;
  z-index: 2;
}
.pic1 {
  width: 1.9rem !important;
  height: 1.9rem !important;
}
.swiper-view .swiper-item .advice-group .group-name {
  font-size: 0.24rem;
  margin-top: 0.24rem;
  width: 1.9rem;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.swiper-view .swiper-item .advice-group .group-name span {
  vertical-align: top;
  font-size: 0.22rem;
  color: #6eb042;
  font-weight: bolder;
}
.swiper-view .swiper-item .advice-group .m-price {
  height: 0.24rem;
  margin-top: 0.14rem;
  font-size: 0.2rem;
  color: #bababa;
  text-decoration: line-through;
}
.swiper-view .swiper-item .advice-group .o-price {
  height: 0.24rem;
  margin-top: 0.1rem;
  font-size: 0.24rem;
  color: #001e00;
  line-height: 0.24rem;
}
.swiper-view .swiper-item .advice-group .add-cart {
  position: absolute;
  bottom: 0.58rem;
  left: 1.42rem;
  width: 0.38rem;
}
.swiper-view .swiper-item .advice-group .add-cart img {
  width: 0.48rem !important;
  height: 0.48rem !important;
  float: left;
}
</style>
  
    
