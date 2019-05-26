<template>
  <!-- 轮播图 -->
  <div class="swiper-container swiper" ref="swiperlunbo">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
        <a href="#"><img :src="'http://39.106.67.233:100/'+item.smallGoodsTypePic"></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination swiper-pagination-clickable"></div>
    
  </div>
  
</template>
<script>
import Vuex from "vuex";
import axios from "axios"
export default {
  name: "lunbo",
  components: {},
  created() {
    
    
  },
  data() {
    return {
     
    };
  },
  computed: {
    ...Vuex.mapState({
      arr:state=>state.shouye.lunbodata
    })
  },
  methods: {
    ...Vuex.mapActions({
      getGoods:"shouye/getLunbo"
    }),
     SwiperInit(){
        var mySwiper = new Swiper(this.$refs.swiperlunbo, {
          loop: true, // 循环模式选项
          lazyLoading : true,//懒加载开启
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          autoplay: {
            //自动滚动
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
      });
     }
    
  },
  mounted() {
    var that = this;
    this.getGoods(function(){
      that.SwiperInit();
    })
    // setTimeout(this.SwiperInit(),0)
    // this.SwiperInit()
   
  }
};
</script>
<style scope>
/* 轮播 */
.swiper{
  width: 100%;
  height: 3.32rem;
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
a{
  display: block;
  width: 100%;
}

.swiper-container img {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.swiper-pagination-clickable{
  width:100%;
  height:1.12rem;
  text-align: center;
  line-height:1.12rem;
  font-size: .5rem;
}
.swiper-pagination-bullet-active {
    width: .16rem;
    height: .16rem;
    background: #fff;
}
.swiper-pagination-bullet {
    width: .16rem;
    height: .16rem;
}
</style>
