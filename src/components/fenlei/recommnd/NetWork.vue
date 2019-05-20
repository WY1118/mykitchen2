<template>
  <div class="cleanvegetables">
    <div class="header">
      <div class="back">
        <a href="/feilei">
          <img src="../../../../public/img/carback.png">
        </a>
      </div>    
      <div class="ac-cart">
        <a href="#shopcar">
          <img src="https://wmall.wochu.cn/h5/activityTemplate/img/ac-cart.png">
        </a>
      </div>
    </div>
    <img
      class="newactivity-position-item"
      data-aid="2513"
      src="http://img.wochu.cn/upload/4022611c-64c0-4931-8234-5a6bbc4a3dfc.jpg"
    >
    <img
      class="newactivity-position-item"
      data-aid="2995"
      src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/afbf6ea3-99b8-4ff4-b2f5-0c4522538e24.jpg"
    >
    <!-- <img
      class="newactivity-position-item"
      data-aid="4428"
      src="https://img.wochu.cn/upload/91a26b44-6eb5-4303-9127-ac15ec1ffde9.jpg"
    > -->
    <div class="newactivity-position-item" data-aid="4429">
      <ul class="activity-goods-list2 activity-goodss">
        <li>
          <a
            href="#"
            goodsid="1dee46dd-dbb1-42f7-9985-d24b33a1d5c4"
          >
            <div class="corner-mark">
              <!-- <img
                src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/783a4ca0-17ef-4e73-947a-89baa5489e03.png"
                style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              > -->
            </div>
            <img
              src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f4904cff-fbb7-4961-b7a9-b081e6a516dc.jpg"
              alt
              style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
            >
            <div class="text-area">
              <p>杏鲍菇嫩滑牛仔粒</p>
              <div class="txt">
                <div class="num">
                  <span>
                    ￥29.9
                    <i>￥39.9</i>
                  </span>
                </div>
              </div>
              <div
                class="add-cart"
                style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              >加入购物车</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style scoped>
.header {
  width: 100%;
  padding: 0.58rem 0.1rem 0;
  z-index: 2;
  position: fixed;
}
.ac-cart,
.ac-share {
  float: right;
  margin-left: 0.3rem;
}
.header a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.header img {
  height: 0.84rem;
  width: 0.84rem;
}
.activity-main {
  position: unset;
  z-index: 1;
}
img {
  width: 100%;
}
.activity-goods-list2 {
  width: 100%;
}
/* .activity-goods-list2 li:nth-child(2n+1) {
    padding: 0 .13rem .26rem .26rem;
} */

.activity-goods-list2 li {
  width: 50%;
  float: left;
  text-align: center;
}
.activity-goods-list2 li a .corner-mark {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  z-index: 2;
  overflow: hidden;
}
.activity-goods-list2 li a .corner-mark img {
  width: 0.86rem;
  height: 0.86rem;
  vertical-align: super;
  border-radius: 0;
  margin: 0 0.08rem 0 0;
}
.activity-goods-list2 li a img {
  width: 3.36rem;
  height: 3.36rem;
}
.activity-goods-list2 li a p {
  width: 100%;
  height: 0.94rem;
  line-height: 0.36rem;
  font-size: 0.3rem;
  color: #000;
  padding: 0.2rem 0.4rem 0 0.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.activity-goods-list2 .txt {
  display: table;
  width: 100%;
  line-height: 0.3rem;
  margin-top: 0.06rem;
}
.activity-goods-list2 .txt .num {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
}
.txt .num {
  /* vertical-align: middle;
    text-align: center; */
  width: 2.2rem;
  font-size: 0.14rem;
  color: grey;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.activity-goods-list2 .num span {
  color: #c5331e;
  font-size: 0.3rem;
  vertical-align: super;
}
.num span {
  /* color: red;
    font-size: .2rem; */
  font-weight: 600;
}
.activity-goods-list2 .num span i {
  display: inline-block;
  font-style: normal;
  text-decoration: line-through;
  margin-left: 0.1rem;
  color: grey;
  font-size: 0.26rem;
}
.activity-goods-list2 .add-cart {
  height: 0.6rem;
  margin: 0.22rem auto;
  width: 2.2rem;
  text-align: center;
  background: #ffe313;
  color: #000;
  font-size: 0.28rem;
  border-radius: 0.3rem;
  line-height: 0.6rem;
}
.back{
  width: .84rem;
  height: .84rem;
  /* background: rgba(240, 240, 240, 0.3); */
  border-radius: 50%;
  display: inline-block
}
</style>
