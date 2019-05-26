<template>
  <div>
    <div class="d-main clear">
      <div class="sign">
        <img
          src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/93e16540-cc1a-4570-ac07-442bf5bc4126.png"
          alt
        >
      </div>
      <h1 class="ellipsis">
        <span></span>
        红烧小圆蹄450g
      </h1>
      <h2>走在乡间的小路上</h2>
      <div class="price clear">
        <div class="o-price">￥26.9</div>
        <div class="m-price">￥34.9</div>
      </div>
      <div class="d-icon"></div>
    </div>
    <!--  -->
    <div class="d-navigation">
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png" alt>
    </div>
    <!--  -->
    <div class="d-info">
      <div class="condition">
        <span>产地：</span>
        上海
      </div>
      <div class="condition">
        <span class="width-14">保质期：</span>
        180天
      </div>
      <div class="condition condition-top">
        <span>规格：</span>
        450g
      </div>
      <div class="condition condition-top">
        <span>储存条件：</span>
        -25.0~-18.0°c
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>
<style scoped>
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
</style>