<template>
      <!-- 限时特惠   goods-list 2   w-->
        <div class="temp-list1">
          <div class="temp-title">
            <span></span>
            限时特惠
            <span></span>
          </div>
          <ul>
            <li>
              <div class="img-view">
                <img src="img/rou.jpg" alt>
                <div class="zhijiang">
                  <img src="img/zhijiang.png" alt>
                </div>
              </div>
              <div class="temp-goods-info">
                <p class="temp-goods-name">我厨优选小排400g</p>
                <div class="goods-intro">不腥不臊，厨艺小白也能做出鲜滋味</div>
                <div class="temp-goods-price">
                  <div class="price-wrap">
                    <div class="real-price">
                      ¥
                      <span class="before-point">14</span>
                      <span class="affter-point">.9</span>
                    </div>
                    <p class="markt-price">¥ 24.9</p>
                  </div>
                  <div class="add-to-cart">
                    <img src="img/add.png" alt>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
</template>
<script>
export default {
  name: "goodslist1",
  components: {},
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
/* 限时特惠 */
.temp-list1 {
  padding-top: 0.3rem;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4.44rem;
  align-items: center;
  justify-content: space-around;
}
.temp-title {
  width: 100%;
  height: 1rem;
  line-height: 0.4rem;
  background: #fff;
  padding: 0.3rem 0;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.32rem;
  color: #001e00;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
.temp-title span {
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  border-bottom: 2px solid #011e00;
  margin: auto 0.22rem;
}
.img-view {
  position: relative;
  width: 2.26rem;
  height: 2.26rem;
}
.img-view:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.zhijiang {
  position: absolute;
  top: 0;
  left: 0;
}
.temp-list1 ul {
  width: 100%;
  height: 3.12rem;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.temp-list1 ul li {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.temp-goods-info {
  height: 2.54rem;
  width: 4.34rem;
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.temp-goods-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #666;
}
.price-wrap {
  display: flex;
}
.temp-goods-name {
  width: 100%;
  height: 1rem;
  line-height: 0.36rem;
  font-size: 0.32rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.32rem;
}
.goods-intro {
  width: 100%;
  height: 0.56rem;
  font-size: 0.26rem;
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.32rem;
}
.before-point {
  font-size: 0.4rem;
  line-height: 0.5rem;
  font-weight: 700;
}
.affter-point {
  font-size: 0.26rem;
}
.real-price {
  color: #ff5918;
  font-size: 0.3rem;
}
.markt-price {
  font-size: 0.24rem;
  text-decoration: line-through;
  color: #999;
  margin-left: 0.18rem;
  line-height: 0.6rem;
}
.add-to-cart {
  width: 25%;
}
</style>