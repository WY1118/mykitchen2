<template>
  <div class="swiper-container swiper-view" ref="swiperxianshi">
    <div class="swiper-wrapper swiper-item">
       <router-link tag="div" class="swiper-slide advice-group" v-for="(item,index) in goods" :key="index" :to="'/goodsinfo?goodsId='+item.source">
        <div class="group-icon">
          <img :src="item.labelUrl" lazy="loaded">
          <img :src="item.labelUrl2" lazy="loaded">
          
        </div>
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
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodslist2",
  components: {},
  data() {
    return {
      goods: [
        {
          imgUrl:
            "https://img.wochu.cn/upload/2889490f-b387-4458-8caf-f197380dfcc7.jpg",
          type: "2",
          source: "246f5f55-97bf-41fa-b003-45a3421ed6f1",
          pos: 1,
          goodsName: "海南头茬麒麟瓜1只装(单果5斤以上)",
          posDes: "海南头茬麒麟瓜1只装(单果5斤以上)",
          description: "",
          price: 39.9,
          unit: "1只",
          marketPrice: 49.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/445f467a-a32f-454d-981e-9339ed23d7f8.png",
          labels: [
            {
              goodsGuid: "246f5f55-97bf-41fa-b003-45a3421ed6f1",
              labelName: "",
              labelType: 1,
              createTime: 1556075637
            }
          ],
          stock: 16,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/907078de-7350-4cd5-870d-63da6afb4143.jpg",
          type: "2",
          source: "afaecf66-c872-46aa-9c50-9cc578f16e21",
          pos: 2,
          goodsName: "荷兰小黄瓜500g",
          posDes: "荷兰小黄瓜500g",
          description: "玲珑身躯，超浓黄瓜味",
          price: 12.9,
          unit: "500g",
          marketPrice: 15.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e3b62e16-d8ed-42fa-acd0-8a43ab857fd9.png",
          labels: [
            {
              goodsGuid: "afaecf66-c872-46aa-9c50-9cc578f16e21",
              labelName: "",

              labelType: 1,
              createTime: 1555914074
            }
          ],
          stock: 24,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5cdd9982-fb28-43ba-bbd3-d96d8bfb2e46.jpg",
          type: "2",
          source: "179c6bdc-e362-4271-909a-c6c43a42572a",
          pos: 3,
          goodsName: "中粮家佳康精装梅花肉片240g",
          posDes: "中粮家佳康精装梅花肉片240g",
          description: "切片薄嫩精瘦，居家香煎猪排最佳选择！",
          price: 13.9,
          unit: "240g",
          marketPrice: 19.9,
          preSale: 0,
          labels: [],
          stock: 18,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://img.wochu.cn/upload/e7b91f26-dda4-43f5-b8ef-e849fe600350.jpg",
          type: "2",
          source: "cb31b987-9c1f-4398-bc76-196ff7c9129c",
          pos: 4,
          goodsName: "红焖猪脚",
          posDes: "红焖猪脚",
          description: "10min叮一下，满满胶原蛋白就是你的了",
          price: 27.9,
          unit: "240g",
          marketPrice: 27.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3d8acfd0-f95c-4a99-8f6b-733833982bf1.png",
          labelUrl2:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/334f5634-c282-4e2c-be1a-f64c9c94c64a.png",
          labels: [
            {
              goodsGuid: "cb31b987-9c1f-4398-bc76-196ff7c9129c",
              labelName: "",

              labelType: 1,
              createTime: 1555472889
            },
            {
              goodsGuid: "cb31b987-9c1f-4398-bc76-196ff7c9129c",
              labelName: "",

              labelType: 1,
              createTime: 1555471870
            }
          ],
          stock: 174,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://img.wochu.cn/upload/4d786e2a-f778-4e95-a174-a45914f28ad8.jpg",
          type: "2",
          source: "decfa79f-afb1-4d39-b030-9d3e9c451291",
          pos: 5,
          goodsName: "蒙牛纯牛奶1L装",
          posDes: "蒙牛纯牛奶1L装",
          description: "",
          price: 10.9,
          unit: "1L",
          marketPrice: 12.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00ae65fd-9d82-416e-8bee-52f9b1b914f5.png",
          labels: [
            {
              goodsGuid: "decfa79f-afb1-4d39-b030-9d3e9c451291",
              labelName: "",

              labelType: 1,
              createTime: 1556076765
            }
          ],
          stock: 39,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://img.wochu.cn/upload/f8a10ec2-a724-4df6-98ef-97404f04ce9d.jpg",
          type: "2",
          source: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
          pos: 6,
          goodsName: "菲律宾进口菠萝1粒装(单果1000g以上)",
          posDes: "菲律宾进口菠萝1粒装(单果1000g以上)",
          description: "",
          price: 13.9,
          unit: "1粒",
          marketPrice: 23.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7323e461-6e1a-4e9c-b7e0-aa560f337f12.png",
          labels: [
            {
              goodsGuid: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
              labelName: "",

              labelType: 1,
              createTime: 1556075681
            }
          ],
          stock: 50,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
          type: "2",
          source: "26bd5c39-a17e-49cd-b314-51c43e5866bb",
          pos: 7,
          goodsName: "小青菜350g",
          posDes: "小青菜350g",
          description: "清香爽口，农家滋味",
          price: 2.9,
          unit: "350g",
          marketPrice: 4.5,
          preSale: 0,
          labels: [],
          stock: 80,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://img.wochu.cn/upload/ca8a1fc4-65d4-4d9e-9ddb-ab246d1fdce7.jpg",
          type: "2",
          source: "895e0366-9d1e-413f-9fe8-2ec8c67cafac",
          pos: 8,
          goodsName: "我厨优选猪精肉丝（300g）",
          posDes: "我厨优选猪精肉丝（300g）",
          description: "粉嫩鲜，家常小炒没它不行",
          price: 10.9,
          unit: "3g/盒",
          marketPrice: 15.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b696f5d-1407-4c37-943b-a60217047374.png",
          labels: [
            {
              goodsGuid: "895e0366-9d1e-413f-9fe8-2ec8c67cafac",
              labelName: "",

              labelType: 1,
              createTime: 1555914783
            }
          ],
          stock: 41,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://img.wochu.cn/upload/9973b5ee-8068-4b7d-8ce8-d838668667a0.jpg",
          type: "2",
          source: "9e9c2e6b-63e9-4729-9344-c6a4692646f5",
          pos: 9,
          goodsName: "清美内酯豆腐400g",
          posDes: "清美内酯豆腐400g",
          description: "质地更加细嫩，特别适合做豆腐煲！",
          price: 1.3,
          unit: "400g",
          marketPrice: 3.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fb84326d-f3a7-4aa2-9c2d-17a8ff74c1d9.png",
          labels: [
            {
              goodsGuid: "9e9c2e6b-63e9-4729-9344-c6a4692646f5",
              labelName: "",

              labelType: 1,
              createTime: 1556089169
            }
          ],
          stock: 27,
          offShelve: 0,
          onSale: 1
        },
        {
          imgUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d8881ad-2c0d-429e-9aa0-5c983b9a1bce.jpg",
          type: "2",
          source: "204741df-844c-4a76-b37a-a2ff51e419b9",
          pos: 10,
          goodsName: "青花椒砂锅鱼",
          posDes: "青花椒砂锅鱼",
          description: "网红名菜！肉嫩滑汤鲜麻，无需排长队，在家就能吃",
          price: 26.9,
          unit: "682g",
          marketPrice: 39.9,
          preSale: 0,
          labelUrl:
            "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3d8acfd0-f95c-4a99-8f6b-733833982bf1.png",
          labels: [
            {
              goodsGuid: "204741df-844c-4a76-b37a-a2ff51e419b9",
              labelName: "",

              labelType: 1,
              createTime: 1555472889
            }
          ],
          stock: 16,
          offShelve: 0,
          onSale: 1
        }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(this.$refs.swiperxianshi, {
      loop: false,
      slidesPerView: 3.3,
      spaceBetween: 0
    });
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
  
    
