<template>
  <div>
    <div class="shop">
      <div class="shop_menu" v-for="(item,index) in shop_menu" :key="index">
        <div class="shop_top">
          <p>{{item.time}}</p>
          <span>{{item.state}}</span>
        </div>
        <div class="shop_center">
          <img :src="item.img" alt>
        </div>
        <div class="shop_bottom">
          <span></span>
          <p>共{{item.piece}}件商品 需支付:￥{{item.payment}}</p>
        </div>
        <div class="shop_foot">
          <div class="footer"></div>
          <div class="foot">
            <span>取消订单</span>
            <p>立即支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shop_menu: [
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        },
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        },
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        },
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        },
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        },
        {
          time: "2019/04/28 20:43:14",
          state: "待付款",
          img:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
          piece: 1,
          payment: 119.7
        }
      ]
    };
  }
};
</script>
<style scope>
.shop {
  height: 20rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 20;
  top: 2rem;
}
.shop_menu {
  width: 100%;
  height: 4.44rem;
  margin-top: 0.22rem;
  background: #fff;
}
.shop_top {
  height: 0.8rem;
  padding: 0 0.3rem;
  line-height: 0.8rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  color: #999;
}
/* .shop_center {
  width: 100%;
  padding: 0.22rem 0;
  background: #fafafa;
} */
.shop_center img {
  width: 1.8rem;
  height: 1.8rem;
}
.shop_bottom {
  height: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding-top: 0.2rem;
}
.shop_bottom p {
  margin-right: 0.1rem;
}
.shop_foot {
  display: flex;
  justify-content: space-around;
  margin-top: 0.1rem;
}
.footer {
  width: 60%;
}
.foot {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.shop_foot span {
  display: block;
  text-align: center;
  line-height: 0.5rem;
  width: 1.1rem;
  height: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.1rem;
}
.shop_foot p {
  display: block;
  text-align: center;
  line-height: 0.5rem;
  width: 1.1rem;
  height: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.1rem;
}

/* #footer {
  display: none !important;
  z-index: -10 !important;
} */
</style>