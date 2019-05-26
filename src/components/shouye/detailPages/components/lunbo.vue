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
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-goods"></div>
      </div>
    </div>
    <!-- 返回上一层 -->
    <div class="d-refer" @click="back">
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      this.$router.back();
    },
    swiperInit() {
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
  },
  mounted() {
    this.swiperInit();
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
img {
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
</style>