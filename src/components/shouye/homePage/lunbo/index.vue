<template>
  <!-- 轮播图 -->
  <div class="swiper-container swiper" ref="swiperlunbo">
    <div class="swiper-wrapper" v-for="(val,index) in lists" :key="index">
      <div class="swiper-slide" v-for="(item,index) in val.data.carousel" :key="index">
        <a href="#"><img :src="item.picUrl"></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination swiper-pagination-clickable"></div>
  </div>
</template>
<script>
export default {
  name: "lunbo",
  components: {},
  data() {
    return {
      lists: [
        {
          hasError: false,
          errorCode: "200",
          statusCode: "200",
          errorMessage: "",
          data: {
            carousel: [
              {
                title: "轮播",
                picUrl:
                  "https://img.wochu.cn/upload/c6a28103-4e8d-419e-9871-02344b8c15d2.jpg",
                enabled: 1,
                sortIndex: 2,
                sortIndexDes: "水果",
                action: {
                  type: 2,
                  data: {
                    type: 1,
                    target:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=69"
                  }
                }
              },
              {
                title: "轮播",
                picUrl:
                  "https://img.wochu.cn/upload/d47e1894-00c3-4fab-8f13-a8d28e294937.jpg",
                enabled: 1,
                sortIndex: 3,
                sortIndexDes: "团购",
                action: {
                  type: 2,
                  data: {
                    type: 1,
                    target: "https://wmall.wochu.cn/h5/tg/groupList.html"
                  }
                }
              },
              {
                title: "轮播",
                picUrl:
                  "https://img.wochu.cn/upload/29502e76-fbdc-4c2a-9627-c35cacb55a6a.gif",
                enabled: 1,
                sortIndex: 4,
                sortIndexDes: "指南",
                action: {
                  type: 2,
                  data: {
                    type: 1,
                    target:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=67"
                  }
                }
              },
              {
                title: "轮播",
                picUrl:
                  "https://img.wochu.cn/upload/ca8241a9-444c-4161-98f1-dc2cf1dd7717.gif",
                enabled: 1,
                sortIndex: 5,
                sortIndexDes: "菜园",
                action: {
                  type: 2,
                  data: {
                    type: 1,
                    target:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=65"
                  }
                }
              }
            ],
            recommendedContent: [
              {
                items: [
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/2c16adf3-0d5a-482b-9c09-050884593bd5.jpg",
                    type: "1",
                    source:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/newActivityTemplatew.html?activityId=65",
                    pos: 1,
                    $$hashKey: "object:229",
                    goodsName: "",
                    posDes: "菜园"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/14714b0c-4e45-43f6-a587-87d9d8d300eb.jpg",
                    type: "8",
                    source: "",
                    pos: 2,
                    $$hashKey: "object:189",
                    goodsName: "",
                    posDes: "套餐"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/8536ea6a-c33e-4b34-a0ec-ebaf91aa6f6f.jpg",
                    type: "5",
                    source: "https://wmall.wochu.cn/h5/tg/groupList.html",
                    pos: 3,
                    $$hashKey: "object:244",
                    goodsName: "",
                    posDes: "团购"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/47aa716a-c6e6-4177-bc33-814c8ca8da34.jpg",
                    type: "1",
                    source:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=268",
                    pos: 4,
                    $$hashKey: "object:262",
                    goodsName: "",
                    posDes: "特价净菜专区"
                  }
                ],
                templateType: "8",
                $$hashKey: "object:166",
                sortIndex: 1,
                sortIndexDes: "icon1",
                onlyNewCustomer: 1
              },
              {
                items: [
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/55d4fb56-2b41-4afd-8127-397961195e7e.jpg",
                    type: "12",
                    source: "",
                    pos: 1,
                    goodsName: "",
                    posDes: "充值"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/00ce31f2-9eb3-4a6f-9525-85d333a72e51.jpg",
                    type: "11",
                    source: "",
                    pos: 2,
                    goodsName: "",
                    posDes: "老带新"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/ed6a91a5-2430-4ba4-82c8-96347576a559.jpg",
                    type: "1",
                    source:
                      "https://wmall.wochu.cn/h5/AppPage/LaXinRegisterPage/beforeShare.html?activityid=1",
                    pos: 3,
                    goodsName: "",
                    posDes: "红包"
                  },
                  {
                    imgUrl:
                      "https://img.wochu.cn/upload/e0e182b6-c34f-49c7-a733-db8c1a813f66.jpg",
                    type: "1",
                    source:
                      "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=597",
                    pos: 4,
                    goodsName: "",
                    posDes: "本周新品区"
                  }
                ],
                templateType: "8",
                onlyNewCustomer: 0,
                sortIndex: 2,
                sortIndexDes: "icon2"
              }
            ],
            specialBanner: [],
            floatingWindow: {}
          }
        }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(this.$refs.swiperlunbo, {
      loop: true, // 循环模式选项
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
