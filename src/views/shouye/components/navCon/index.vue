<template>
  <nav>
    <div class="top-nav" v-for="(val,index1) in lists" :key="index1">
      <ul v-for="(item,index2) in val.data.recommendedContent" :key="index2">
        <router-link
          v-for="(item2,index3) in item.items"
          :key="index3"
          tag="li"
          :to="paths[index2][index3]"
        >
          <a href="">
            <img :src="item2.imgUrl">
          </a>
        </router-link>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navcon",
  components: {},
  data() {
    return {
      paths: [
        ["/buyone", "/setmeal", "/onegroup", "/cleanvegetables"],
        ["/returnmoney", "/reduce20", "/redpacket", "/newproduct"]
      ],
      lists: [
        {
          hasError: false,
          errorCode: "200",
          statusCode: "200",
          errorMessage: "",
          data: {
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
  }
};
</script>
<style>
/* 导航 */
.top-nav ul {
  padding: 0.14rem 0 0.2rem 0.14rem;
  float: left;
}
.top-nav ul li {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0.14rem 0.14rem 0;
  float: left;
}
a {
  display: inline-block;
}
.top-nav ul li img {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
