<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="search-ctl">
        <div class="back">
          <img
            src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628"
            alt
            @click="backOne"
          >
        </div>
        <div class="parent-name">
          <p>
            <span>{{titlename}}</span>
          </p>
        </div>
        <div class="go-cart">
          <img src="http://wmall.wochu.cn/h5/classify/img/icon-cart-60@3x.png" alt>
        </div>
        <div class="serch-key">
          <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" alt>
        </div>
      </div>
    </header>
    <!-- 导航栏 -->
    <ul class="nav">
      <li v-for="(item,index) in wrappernav" :key="index">
        <p @click="fn(index)" :class="{active:i===index}">{{item}}</p>
      </li>
    </ul>
    <div class="zdw"></div>
    <!-- 特惠价格 -->
    <div class="three-class">
      <div class="prvilege" @click="pricesort(0)">
        <span>特惠</span>
      </div>
      <span class="dev-line"></span>
      <div class="pice-up" @click="pricesort(orderType)">
        <span>
          价格
          <em>
            <img src="../../../../public/img/icon-fenlei-arrow@3x.png" id="pic">
          </em>
        </span>
      </div>
    </div>
    <div class="shadowWrap"></div>
    <!-- 内容 -->
    <section class="goods-list">
      <ul class="goods-ul" id="scroller">
        <div class="class-item">
          <router-link tag="li" v-for="(ite,num) in data.categories[i].goods" :key="num" :to="'/mall'">
            <div class="fl">
              <img :src="ite.picUrl" alt>
            </div>
            <div class="fr">
              <p class="goods-name">{{ite.goodsName}}</p>
              <div class="goods-intro">{{ite.description}}</div>
              <div class="goods-mark"></div>
              <div class="goods-price">
                <span class="real-price">￥{{ite.price}}</span>
                <span class="old-price">￥{{ite.marketPrice}}</span>
              </div>
              <div class="addTo-cart">
                <img src="../../../../public/img/icon-listcart-75@3x.png" alt>
              </div>
            </div>
          </router-link>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlename: "蔬菜",
      wrappernav: [
        "我厨优选蔬菜",
        "时令蔬菜",
        "叶菜类",
        "茄果类",
        "根茎类",
        "菌菇类",
        "豆类",
        "葱姜蒜调味菜",
        "色拉啊菜",
        "豆制品",
        "冷冻蔬菜",
        "净蔬菜"
      ],
      orderType: 1,
      i: 0,
      arr: [],
      arr2: [],

      statusCode: "200",
      errorMessage: "",
      data: {
        categories: [
          {
            id: 1254,
            name: "我厨优选蔬菜",
            displayIndex: 56,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e4d3df26-d41f-4206-a283-58480ec03db5.jpg",
                type: "checkicon",
                categoryId: 1254
              }
            ],
            goods: []
          },
          {
            id: 602,
            name: "时令蔬菜",
            displayIndex: 55,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6e7f2a1b-7e3d-4b80-b4a1-cd2f40a663d3.jpg",
                type: "checkicon",
                categoryId: 602
              }
            ],
            goods: [
              {
                goodsGuid: "1fee7faf-6d4a-4a34-838c-3f44d410943d",
                goodsName: "西葫芦700g",
                description: "吃了会让你变苗条的蔬菜！",
                isSplit: 0,
                sn: "WOC000005957",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0273edad-1167-4982-bfd8-236f589bb332.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "1fee7faf-6d4a-4a34-838c-3f44d410943d",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/603217ed-3380-4a68-ac0a-4b46dc8d59a9.png",
                    labelType: 1,
                    createTime: 1556161023
                  }
                ]
              },
              {
                goodsGuid: "afaecf66-c872-46aa-9c50-9cc578f16e21",
                goodsName: "荷兰小黄瓜500g",
                description: "玲珑身躯，超浓黄瓜味",
                isSplit: 0,
                sn: "WOC000001326",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/907078de-7350-4cd5-870d-63da6afb4143.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "afaecf66-c872-46aa-9c50-9cc578f16e21",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e3b62e16-d8ed-42fa-acd0-8a43ab857fd9.png",
                    labelType: 1,
                    createTime: 1555914074
                  }
                ]
              },
              {
                goodsGuid: "a95d9156-d381-4bf5-bdd9-ce933c8e9fb4",
                goodsName: "优选西红柿（650g以上）",
                description: "诱人的红，美味不加价",
                isSplit: 0,
                sn: "WOC000002141",
                price: 9.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/4cb89fcc-4b6d-4caa-8234-a135e0367ea9.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f781241a-4782-48a0-929d-6c11fb317cbd",
                goodsName: "生菜350g",
                description: "新鲜采摘，清炒、沙拉的不二之选",
                isSplit: 0,
                sn: "WOC000000507",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/718e0df3-9278-4333-a569-5a017a260d01.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c1d77b6-7809-406d-bacc-5576c24c30b7",
                goodsName: "玉米棒700g以上",
                description: "富含膳食纤维的营养粗粮",
                isSplit: 0,
                sn: "WOC000005012",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c34da16d-1c79-4ca3-a0bc-4c1d34bad62f.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0494cc64-3881-401e-be9f-5010f53f3f30",
                goodsName: "油麦菜350g",
                description: "百搭蔬菜，口口清香四溢",
                isSplit: 0,
                sn: "WOC000000510",
                price: 4.2,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2e7e87d2-5ffd-4964-944e-b25c12468553.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "60d44977-d0a2-428a-80ac-c879edf08716",
                goodsName: "黄瓜600g以上",
                description: "嘎吱脆多汁，拍根黄瓜下酒菜!",
                isSplit: 0,
                sn: "WOC000001836",
                price: 4.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e9c90231-e15e-4b9e-a8bf-926f30107179.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a2a2ad5e-cc4e-438f-825f-ecceacfcb0fa",
                goodsName: "四季豆（300g）",
                description: "干煸清炒都下饭！",
                isSplit: 0,
                sn: "WOC000001496",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/2a420d8e-743f-42b7-9817-94c86e1feb6c.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d3944515-6cd8-406d-a2af-bd876f76f1b9",
                goodsName: "本地白玉米棒500g以上",
                description: "粒粒饱满，甜中带糯",
                isSplit: 0,
                sn: "WOC000002175",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b6275921-72ff-4337-99ef-a4336da2e660.jpg",
                salableStock: 10,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b749ab4f-1745-467c-bef8-a671eee87346",
                goodsName: "鲜银耳120g",
                description: "优质饱满，平民素“燕窝”",
                isSplit: 0,
                sn: "WOC000005920",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ac256376-a0e2-4e32-bc70-cad91cd1bc02.jpg",
                salableStock: 50,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2107fd29-80b8-4faa-9293-89127f2e2174",
                goodsName: "菠菜250g",
                description: "大力水手最爱的新鲜滋味",
                isSplit: 0,
                sn: "WOC000003000",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9924ac68-8d07-4d02-8172-d458b29eda03.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2107fd29-80b8-4faa-9293-89127f2e2174",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/08ad00d2-36a0-433e-9e2f-579035430b71.png",
                    labelType: 1,
                    createTime: 1555914650
                  }
                ]
              },
              {
                goodsGuid: "a53dc460-f4bf-4799-98e8-fe891c785050",
                goodsName: "鸡毛菜350g",
                description: "家常烹炒鲜蔬，新鲜水灵",
                isSplit: 0,
                sn: "WOC000000501",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4764400e-d987-48ef-b5cb-e671e07b73e2.jpg",
                salableStock: 81,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a258e1e2-2003-4b40-98a5-d1ce62dab5e3",
                goodsName: "香椿苗150g",
                description: "",
                isSplit: 0,
                sn: "WOC000001321",
                price: 9.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c2205120-40d8-4d9d-ba24-add2679688a2.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "23d399d9-4e1c-401f-9272-6852e205ba2b",
                goodsName: "韭菜花300g",
                description: "“韭”香不怕巷子深，开胃爽口！",
                isSplit: 0,
                sn: "WOC000002058",
                price: 8.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/030a30f8-0ecc-4264-9908-ff4db16e78d2.jpg",
                salableStock: 10,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "130a56d3-b78c-4f10-a03b-1e98cc34b4fb",
                goodsName: "空心菜350g",
                description: "时令蔬菜，鲜嫩爽脆",
                isSplit: 0,
                sn: "WOC000003284",
                price: 4.5,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2325f5d3-6ab4-4d53-8959-59f102c77e0c.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "58b8bf70-7226-419b-bdda-9da20e470346",
                goodsName: "青米苋350g",
                description: "味道鲜美，营养高",
                isSplit: 0,
                sn: "WOC000659",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/314e086c-735f-4290-8c17-b5c88c683087.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2beafaca-2535-4722-80e7-3ec246b27421",
                goodsName: "红米苋350g",
                description: "当季头茬！红汁诱人",
                isSplit: 0,
                sn: "WOC000001360",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/40f7cdba-0917-4639-a1d3-55d6e203af42.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "16c276ba-4701-4e20-90ce-d48dd8d1241a",
                goodsName: "茄子（450g以上）",
                description: "简单美味，百吃不厌",
                isSplit: 0,
                sn: "WOC000001499",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d65cc91-3686-453d-9048-ca9f3078a108.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7891f4b7-a65f-4d2d-b99a-24f6c27998b9",
                goodsName: "苦瓜（400g以上）",
                description: "清火食材，爽脆多汁",
                isSplit: 0,
                sn: "WOC000001498",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/961f7830-a182-49f5-bb75-24ae62649ae2.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "752b0f9f-0830-48db-a82b-c6da14bf96f3",
                goodsName: "优选芦笋(500g)",
                description: "清甜脆爽，鲜嫩时蔬",
                isSplit: 0,
                sn: "WOC000001180",
                price: 32.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4af7f724-c8d6-44e1-b53b-ec5401918af5.jpg",
                salableStock: 20,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "68952c32-a086-4db2-bd0c-3078214a94c7",
                goodsName: "鲜百合80g",
                description: "沙质土壤生长，味甜更营养",
                isSplit: 0,
                sn: "WOC000003424",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5fd025aa-4550-4775-aa2b-8e6de92fa49c.jpg",
                salableStock: 100,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9ae11b7d-8d35-4b5b-a0d6-0d7de8101181",
                goodsName: "带壳鲜蚕豆500g",
                description: "",
                isSplit: 0,
                sn: "WOC000005958",
                price: 5.5,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/dba498b1-88b2-47c9-a0e0-fff1f9799f43.jpg",
                salableStock: 50,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3b52afab-59b5-41f2-8f32-c3929373ae30",
                goodsName: "卷心菜1500g",
                description: "色拉、炝炒，中西料理都美味",
                isSplit: 0,
                sn: "WOC000001328",
                price: 4.5,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aac28b0f-23d6-4f3b-bffd-6f7b74f8cf28.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "3b52afab-59b5-41f2-8f32-c3929373ae30",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ec6b5398-afde-4c94-ac9c-09b092ef82fb.png",
                    labelType: 1,
                    createTime: 1556172811
                  }
                ]
              },
              {
                goodsGuid: "8572bc74-c172-43bf-98f4-1bd9d0b6f408",
                goodsName: "红薯叶350g",
                description: '翠绿鲜嫩，被称为"蔬菜皇后"',
                isSplit: 0,
                sn: "WOC000002127",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62cb6a21-a88b-49d6-b0ec-70c51aecd705.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "50931266-4df6-4ec3-82b0-0a6456f58f35",
                goodsName: "紫色细长茄500g",
                description: "阿拉上海宁最喜欢买的茄子！",
                isSplit: 0,
                sn: "WOC000001358",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/59f3177d-2140-42e8-b921-10c5f0c6f90d.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fe588fe4-4df3-4914-bd2f-9e43ae9356e5",
                goodsName: "西红柿（650g以上）",
                description: "酸甜适中，亦蔬亦果",
                isSplit: 0,
                sn: "WOC000000936",
                price: 7.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/c9746522-b350-40be-b229-d4663fdec1e6.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c121aa5-659d-44e1-bdb4-66d8d5726e7f",
                goodsName: "优选秋葵（250g）",
                description: "好秋葵！营养赛人参",
                isSplit: 0,
                sn: "WOC000001495",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/18527ec6-9912-4805-b196-421cd98fb363.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8d849f00-9904-4b2a-879d-bd04311e6b9b",
                goodsName: "老南瓜1000g以上",
                description: "不一样的瓜香味",
                isSplit: 0,
                sn: "WOC000001479",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c00baf3-7aa3-4746-a9ee-3548332ebd43.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7c07459a-a339-4013-a955-a86e3fd97760",
                goodsName: "扁豆450g",
                description: "烹饪时请务必炒熟食用！",
                isSplit: 0,
                sn: "WOC000003772",
                price: 7.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4f07967d-3a80-418f-b198-318c875f9cec.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "775a7cba-3bba-4eda-95ae-f713fd3cdd42",
                goodsName: "优选甜豆（200g）",
                description: "清香滑嫩，热炒做汤涮火锅都好吃",
                isSplit: 0,
                sn: "WOC000001497",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17987fbd-1e72-464b-807f-2f0cd4cd6852.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ecfa7a65-1935-4205-b4a2-6437e14cef47",
                goodsName: "夜开花500g",
                description: "营养价值丰富，鲜味直达味蕾",
                isSplit: 0,
                sn: "WOC000006536",
                price: 4.9,
                marketPrice: 6.9,
                picUrl:
                  "https://img.wochu.cn/upload/3643521b-0189-45a4-9ae5-a62bd1453c28.jpg",
                salableStock: 30,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7e96ad51-31e2-45c5-a8f1-c25cadde2d86",
                goodsName: "紫包菜（450g）",
                description: "富含花青素，生熟两食",
                isSplit: 0,
                sn: "WOC000000518",
                price: 3.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f0e43b59-7232-4f70-9d78-f5e2b871c244.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "26bd5c39-a17e-49cd-b314-51c43e5866bb",
                goodsName: "小青菜350g",
                description: "清香爽口，农家滋味",
                isSplit: 0,
                sn: "WOC000000512",
                price: 2.9,
                marketPrice: 4.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a6ade441-fc5e-4296-81e6-1a94f97a3540",
                goodsName: "日本小南瓜(900g以上）",
                description: "像栗子一样软糯香甜",
                isSplit: 0,
                sn: "WOC000000946",
                price: 11.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a6a5d82e-3d57-4369-b1f0-1f9e15f21a66.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "57a28def-23ce-43b2-88de-979d3180fb36",
                goodsName: "土豆（500g以上）",
                description: "低脂又饱腹，能瘦身的家常菜",
                isSplit: 0,
                sn: "WOC000000901",
                price: 4.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d521e8ff-f364-41ec-99a4-9e13e8f84567.jpg",
                salableStock: 100,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "acc2ad4a-e215-4598-8093-9fe8924c1037",
                goodsName: "优选菜苔350g",
                description: "精挑细选   比心推荐",
                isSplit: 0,
                sn: "WOC000001332",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/955c5f32-3661-4323-befa-32210315e105.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "184abdaf-689e-4893-86d5-84a6fe25ecbb",
                goodsName: "大芥兰400g",
                description: "柔嫩爽脆，简单白灼就美味",
                isSplit: 0,
                sn: "WOC000007841",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f8532509-6ed1-4f7c-b361-da2a59b1b339.jpg",
                salableStock: 999,
                categoryId: 602,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 603,
            name: "叶菜类",
            displayIndex: 54,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b40a5f96-1bbf-4c24-92ea-2ce534b10724.jpg",
                type: "checkicon",
                categoryId: 603
              }
            ],
            goods: [
              {
                goodsGuid: "f781241a-4782-48a0-929d-6c11fb317cbd",
                goodsName: "生菜350g",
                description: "新鲜采摘，清炒、沙拉的不二之选",
                isSplit: 0,
                sn: "WOC000000507",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/718e0df3-9278-4333-a569-5a017a260d01.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "59b9a882-0d48-4c6f-8a5e-78059238e5f9",
                goodsName: "杭白菜350g",
                description: "柔嫩清香，含丰富维C",
                isSplit: 0,
                sn: "WOC000000497",
                price: 2.9,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c500c948-3e55-487b-af6b-fa9ec0936f61.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9ebeab2a-2fec-48bc-b091-8c56e0c82174",
                goodsName: "高山娃娃菜600g",
                description: "更小更鲜美，营养佳品",
                isSplit: 0,
                sn: "WOC000000515",
                price: 6.9,
                marketPrice: 8.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9242409e-c13e-4473-a2aa-43ea166381ba.jpg",
                salableStock: 49,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "9ebeab2a-2fec-48bc-b091-8c56e0c82174",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b715e0a9-4d24-4503-ae90-f604df7cea66.png",
                    labelType: 1,
                    createTime: 1555914891
                  }
                ]
              },
              {
                goodsGuid: "a511f1b6-f018-47f0-bc2f-961fcefc0e8d",
                goodsName: "优选广东菜心（350g）",
                description: "精挑细选   比心推荐",
                isSplit: 0,
                sn: "WOC000000469",
                price: 5.9,
                marketPrice: 8.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ea2829b4-a145-4bae-a0a3-75724c7ad9fb.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0494cc64-3881-401e-be9f-5010f53f3f30",
                goodsName: "油麦菜350g",
                description: "百搭蔬菜，口口清香四溢",
                isSplit: 0,
                sn: "WOC000000510",
                price: 4.2,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2e7e87d2-5ffd-4964-944e-b25c12468553.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d19c919f-6011-4bc8-9c0e-af0a7437ef79",
                goodsName: "木耳菜350g",
                description: "新鲜采摘，清新爽口",
                isSplit: 0,
                sn: "WOC000002126",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ab429cf6-38a1-40f0-ba9c-e7feabeacee2.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e22b1a68-2c57-4f4a-b9d2-ff61617f8d04",
                goodsName: "韭黄350g",
                description: "含丰富纤维，炒蛋超好吃！",
                isSplit: 0,
                sn: "WOC000001364",
                price: 9.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c052503-5bbb-4d58-86da-268284c62331.jpg",
                salableStock: 12,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "94b5598b-a2a5-40dc-a21f-791168fe216b",
                goodsName: "牛心菜500g以上",
                description: "比白菜多一倍VC的“能量小巨蛋”",
                isSplit: 0,
                sn: "WOC000002582",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://img.wochu.cn/upload/965af4f2-3980-49c9-b628-97244b43b2ce.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "47e4413a-3950-4060-b350-f3811ae04728",
                goodsName: "优选芥兰（350g）",
                description: "咔擦一口，清淡爽脆",
                isSplit: 0,
                sn: "WOC000000491",
                price: 7.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/35cd0252-34a6-4bd9-b924-008edc1ba517.jpg",
                salableStock: 50,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bee88871-44cd-40fc-9ec9-21d0a6bc034c",
                goodsName: "冰草250g",
                description: "星级餐厅才吃得到的生食珍品",
                isSplit: 0,
                sn: "WOC000001501",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/078d384c-8b6c-4a54-b991-400baa247b30.jpg",
                salableStock: 50,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "91a0cfc9-2a64-493c-8a50-64ea129500df",
                goodsName: "紫叶生菜350g",
                description: "富含花青素，沙拉必备鲜蔬",
                isSplit: 0,
                sn: "WOC000003190",
                price: 8.5,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/572787e4-e78f-4329-9729-6ce1b276aed8.jpg",
                salableStock: 20,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e709b597-131d-4605-a937-0445a937dfe9",
                goodsName: "芝麻菜150g",
                description: "新鲜营养，颇具独特风味",
                isSplit: 0,
                sn: "WOC000001093",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/61cebef6-555b-4a74-b01a-39081766843a.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c0502306-2728-49b5-a367-59900748e529",
                goodsName: "罗马生菜（350g）",
                description: "减肥生菜，最宜制作沙拉",
                isSplit: 0,
                sn: "WOC000001090",
                price: 5.9,
                marketPrice: 8.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f839d598-3c53-4dce-ab3b-442460e179b4.jpg",
                salableStock: 10,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3296b92d-c7fe-4f05-938f-248fb4c69a50",
                goodsName: "球生菜(600g）",
                description: "口感更脆爽",
                isSplit: 0,
                sn: "WOC000005956",
                price: 10.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c98eb06a-a057-472c-b78b-e0d29533bf83.jpg",
                salableStock: 100,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2107fd29-80b8-4faa-9293-89127f2e2174",
                goodsName: "菠菜250g",
                description: "大力水手最爱的新鲜滋味",
                isSplit: 0,
                sn: "WOC000003000",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9924ac68-8d07-4d02-8172-d458b29eda03.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2107fd29-80b8-4faa-9293-89127f2e2174",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/08ad00d2-36a0-433e-9e2f-579035430b71.png",
                    labelType: 1,
                    createTime: 1555914650
                  }
                ]
              },
              {
                goodsGuid: "a53dc460-f4bf-4799-98e8-fe891c785050",
                goodsName: "鸡毛菜350g",
                description: "家常烹炒鲜蔬，新鲜水灵",
                isSplit: 0,
                sn: "WOC000000501",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4764400e-d987-48ef-b5cb-e671e07b73e2.jpg",
                salableStock: 81,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a258e1e2-2003-4b40-98a5-d1ce62dab5e3",
                goodsName: "香椿苗150g",
                description: "",
                isSplit: 0,
                sn: "WOC000001321",
                price: 9.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c2205120-40d8-4d9d-ba24-add2679688a2.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "23d399d9-4e1c-401f-9272-6852e205ba2b",
                goodsName: "韭菜花300g",
                description: "“韭”香不怕巷子深，开胃爽口！",
                isSplit: 0,
                sn: "WOC000002058",
                price: 8.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/030a30f8-0ecc-4264-9908-ff4db16e78d2.jpg",
                salableStock: 10,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "130a56d3-b78c-4f10-a03b-1e98cc34b4fb",
                goodsName: "空心菜350g",
                description: "时令蔬菜，鲜嫩爽脆",
                isSplit: 0,
                sn: "WOC000003284",
                price: 4.5,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2325f5d3-6ab4-4d53-8959-59f102c77e0c.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "58b8bf70-7226-419b-bdda-9da20e470346",
                goodsName: "青米苋350g",
                description: "味道鲜美，营养高",
                isSplit: 0,
                sn: "WOC000659",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/314e086c-735f-4290-8c17-b5c88c683087.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2beafaca-2535-4722-80e7-3ec246b27421",
                goodsName: "红米苋350g",
                description: "当季头茬！红汁诱人",
                isSplit: 0,
                sn: "WOC000001360",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/40f7cdba-0917-4639-a1d3-55d6e203af42.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a2ecf51a-d269-49b4-a691-2a3e18e30c05",
                goodsName: "草头350g",
                description: "清凉爽口，上海人家最爱绿叶菜",
                isSplit: 0,
                sn: "WOC000001134",
                price: 8.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1cb94727-a81e-4af6-9d94-7c73841e11e6.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7cf7f8e0-6bf8-4607-9e7d-df27f6ddb23e",
                goodsName: "蓬花菜350g",
                description: "这是一棵灵魂有香气的蔬菜",
                isSplit: 0,
                sn: "WOC000001133",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d92f375e-53ef-4f98-8924-8dc67acfeeea.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fbb954b3-9a10-4765-8052-74221c135174",
                goodsName: "荠菜150g",
                description: "翠绿鲜美，清炒入馅超美味",
                isSplit: 0,
                sn: "WOC000001330",
                price: 4.5,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1b405c90-3fb2-478f-867c-990a1ecdcab8.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fc6ce42b-6e13-41ed-bdb7-4c9e217a7aba",
                goodsName: "马兰头350g",
                description: "营养丰富，极具药用价值",
                isSplit: 0,
                sn: "WOC000001336",
                price: 4.9,
                marketPrice: 8.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/25239f46-8646-4250-9ae1-51e1ee332f2a.jpg",
                salableStock: 12,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3b52afab-59b5-41f2-8f32-c3929373ae30",
                goodsName: "卷心菜1500g",
                description: "色拉、炝炒，中西料理都美味",
                isSplit: 0,
                sn: "WOC000001328",
                price: 4.5,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aac28b0f-23d6-4f3b-bffd-6f7b74f8cf28.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "3b52afab-59b5-41f2-8f32-c3929373ae30",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ec6b5398-afde-4c94-ac9c-09b092ef82fb.png",
                    labelType: 1,
                    createTime: 1556172811
                  }
                ]
              },
              {
                goodsGuid: "8572bc74-c172-43bf-98f4-1bd9d0b6f408",
                goodsName: "红薯叶350g",
                description: '翠绿鲜嫩，被称为"蔬菜皇后"',
                isSplit: 0,
                sn: "WOC000002127",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62cb6a21-a88b-49d6-b0ec-70c51aecd705.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d5ee0543-dee3-49d2-b1d2-8dfb78659ce0",
                goodsName: "香芹（250g）",
                description: "芹香诱人，清新爽口",
                isSplit: 0,
                sn: "WOC000000912",
                price: 3.9,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d2edceee-267a-4c48-91b3-b3a26588c3cf.jpg",
                salableStock: 37,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "d5ee0543-dee3-49d2-b1d2-8dfb78659ce0",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e37975ce-0f2c-4367-b0e8-826ac31e3e71.png",
                    labelType: 1,
                    createTime: 1555914750
                  }
                ]
              },
              {
                goodsGuid: "f5619146-cf45-47b1-a0cf-328cc1277e8d",
                goodsName: "西兰花500g以上",
                description: "超高营养价值，蔬菜中的女王",
                isSplit: 0,
                sn: "WOC000000905",
                price: 8.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e79a5d18-6292-4060-8bc9-9854b0c32f5a.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8913ccb2-fdb0-47a0-b388-a66fe116df64",
                goodsName: "韭菜350g",
                description: "新鲜味浓，健胃提神",
                isSplit: 0,
                sn: "WOC000000495",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2974a73e-7371-498f-832a-9272bd2d9546.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7e96ad51-31e2-45c5-a8f1-c25cadde2d86",
                goodsName: "紫包菜（450g）",
                description: "富含花青素，生熟两食",
                isSplit: 0,
                sn: "WOC000000518",
                price: 3.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f0e43b59-7232-4f70-9d78-f5e2b871c244.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "26bd5c39-a17e-49cd-b314-51c43e5866bb",
                goodsName: "小青菜350g",
                description: "清香爽口，农家滋味",
                isSplit: 0,
                sn: "WOC000000512",
                price: 2.9,
                marketPrice: 4.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "874c7c30-10f5-455a-ac75-26255a939502",
                goodsName: "茼蒿菜350g",
                description: "餐桌小清新，清炒涮火锅都好吃",
                isSplit: 0,
                sn: "WOC000001132",
                price: 5.5,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e319ff2-2ee0-412d-983c-ce2d2eb3b62c.jpg",
                salableStock: 30,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "acc2ad4a-e215-4598-8093-9fe8924c1037",
                goodsName: "优选菜苔350g",
                description: "精挑细选   比心推荐",
                isSplit: 0,
                sn: "WOC000001332",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/955c5f32-3661-4323-befa-32210315e105.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "184abdaf-689e-4893-86d5-84a6fe25ecbb",
                goodsName: "大芥兰400g",
                description: "柔嫩爽脆，简单白灼就美味",
                isSplit: 0,
                sn: "WOC000007841",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f8532509-6ed1-4f7c-b361-da2a59b1b339.jpg",
                salableStock: 999,
                categoryId: 603,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 604,
            name: "茄果类",
            displayIndex: 53,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2550f7dc-44a6-4923-aee8-7fe99869b595.jpg",
                type: "checkicon",
                categoryId: 604
              }
            ],
            goods: [
              {
                goodsGuid: "1fee7faf-6d4a-4a34-838c-3f44d410943d",
                goodsName: "西葫芦700g",
                description: "吃了会让你变苗条的蔬菜！",
                isSplit: 0,
                sn: "WOC000005957",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0273edad-1167-4982-bfd8-236f589bb332.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "1fee7faf-6d4a-4a34-838c-3f44d410943d",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/603217ed-3380-4a68-ac0a-4b46dc8d59a9.png",
                    labelType: 1,
                    createTime: 1556161023
                  }
                ]
              },
              {
                goodsGuid: "afaecf66-c872-46aa-9c50-9cc578f16e21",
                goodsName: "荷兰小黄瓜500g",
                description: "玲珑身躯，超浓黄瓜味",
                isSplit: 0,
                sn: "WOC000001326",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/907078de-7350-4cd5-870d-63da6afb4143.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "afaecf66-c872-46aa-9c50-9cc578f16e21",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e3b62e16-d8ed-42fa-acd0-8a43ab857fd9.png",
                    labelType: 1,
                    createTime: 1555914074
                  }
                ]
              },
              {
                goodsGuid: "a95d9156-d381-4bf5-bdd9-ce933c8e9fb4",
                goodsName: "优选西红柿（650g以上）",
                description: "诱人的红，美味不加价",
                isSplit: 0,
                sn: "WOC000002141",
                price: 9.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/4cb89fcc-4b6d-4caa-8234-a135e0367ea9.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "60d44977-d0a2-428a-80ac-c879edf08716",
                goodsName: "黄瓜600g以上",
                description: "嘎吱脆多汁，拍根黄瓜下酒菜!",
                isSplit: 0,
                sn: "WOC000001836",
                price: 4.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e9c90231-e15e-4b9e-a8bf-926f30107179.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "16c276ba-4701-4e20-90ce-d48dd8d1241a",
                goodsName: "茄子（450g以上）",
                description: "简单美味，百吃不厌",
                isSplit: 0,
                sn: "WOC000001499",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d65cc91-3686-453d-9048-ca9f3078a108.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7891f4b7-a65f-4d2d-b99a-24f6c27998b9",
                goodsName: "苦瓜（400g以上）",
                description: "清火食材，爽脆多汁",
                isSplit: 0,
                sn: "WOC000001498",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/961f7830-a182-49f5-bb75-24ae62649ae2.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "50931266-4df6-4ec3-82b0-0a6456f58f35",
                goodsName: "紫色细长茄500g",
                description: "阿拉上海宁最喜欢买的茄子！",
                isSplit: 0,
                sn: "WOC000001358",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/59f3177d-2140-42e8-b921-10c5f0c6f90d.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fe588fe4-4df3-4914-bd2f-9e43ae9356e5",
                goodsName: "西红柿（650g以上）",
                description: "酸甜适中，亦蔬亦果",
                isSplit: 0,
                sn: "WOC000000936",
                price: 7.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/c9746522-b350-40be-b229-d4663fdec1e6.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c121aa5-659d-44e1-bdb4-66d8d5726e7f",
                goodsName: "优选秋葵（250g）",
                description: "好秋葵！营养赛人参",
                isSplit: 0,
                sn: "WOC000001495",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/18527ec6-9912-4805-b196-421cd98fb363.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8d849f00-9904-4b2a-879d-bd04311e6b9b",
                goodsName: "老南瓜1000g以上",
                description: "不一样的瓜香味",
                isSplit: 0,
                sn: "WOC000001479",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c00baf3-7aa3-4746-a9ee-3548332ebd43.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7bcb9bde-c9f1-4f0e-8398-361c043c2b7a",
                goodsName: "红黄彩椒400g",
                description: "甜中微辛，汁多脆甜",
                isSplit: 0,
                sn: "WOC000006160",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1e604040-27a2-4356-a19d-5b6833acf9bc.jpg",
                salableStock: 50,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ecfa7a65-1935-4205-b4a2-6437e14cef47",
                goodsName: "夜开花500g",
                description: "营养价值丰富，鲜味直达味蕾",
                isSplit: 0,
                sn: "WOC000006536",
                price: 4.9,
                marketPrice: 6.9,
                picUrl:
                  "https://img.wochu.cn/upload/3643521b-0189-45a4-9ae5-a62bd1453c28.jpg",
                salableStock: 30,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a6ade441-fc5e-4296-81e6-1a94f97a3540",
                goodsName: "日本小南瓜(900g以上）",
                description: "像栗子一样软糯香甜",
                isSplit: 0,
                sn: "WOC000000946",
                price: 11.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a6a5d82e-3d57-4369-b1f0-1f9e15f21a66.jpg",
                salableStock: 999,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c319f647-8ff2-4d82-8c00-cb2865eff6fe",
                goodsName: "青节瓜450g",
                description: "另类西葫芦，炒菜煲汤都好吃",
                isSplit: 0,
                sn: "WOC000007319",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0915643b-d9c0-4739-8199-c5528a60bc6b.jpg",
                salableStock: 50,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a227d09e-312a-498d-a1af-80982f9228c9",
                goodsName: "黄节瓜450g",
                description: "丰富胡萝卜素！可荤可素，可菜可馅",
                isSplit: 0,
                sn: "WOC000007320",
                price: 9.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b29d5063-6502-4bb8-a185-7debb5b94bb1.jpg",
                salableStock: 50,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ec977a1b-f3b3-4159-9797-c4ac10423311",
                goodsName: "贝贝富硒南瓜1000g以上",
                description: "迷你“小甜心”，软糯如板栗",
                isSplit: 0,
                sn: "WOC000002171",
                price: 15.5,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7368635a-ef82-41cb-a6cf-cc58167e455b.jpg",
                salableStock: 50,
                categoryId: 604,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 605,
            name: "根茎类",
            displayIndex: 52,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a4b0001d-5cf3-47c8-9563-3457ccf1cb08.jpg",
                type: "checkicon",
                categoryId: 605
              }
            ],
            goods: [
              {
                goodsGuid: "28ba24d7-9810-4d91-864a-7b3c1809c11c",
                goodsName: "优选土豆（500g以上）",
                description: "精品土豆，人类的“第二面包”",
                isSplit: 0,
                sn: "WOC000002140",
                price: 8.8,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a7d7c3e3-b6d9-4a4e-9f1c-42d37d2971a0.jpg",
                salableStock: 152,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "28ba24d7-9810-4d91-864a-7b3c1809c11c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3afcebe7-c027-49d3-a940-99f40f16a4c1.png",
                    labelType: 1,
                    createTime: 1556162805
                  }
                ]
              },
              {
                goodsGuid: "e12ec18b-cf55-4b56-a28a-b2cd39d69f68",
                goodsName: "崇明大瀛黑糯玉米1根(单果约10cm)",
                description:
                  "玉米属于农产品，规格在8至10公分左右，小而精华，介意者慎拍",
                isSplit: 0,
                sn: "WOC000008756",
                price: 5.9,
                marketPrice: 6.8,
                picUrl:
                  "https://img.wochu.cn/upload/7f8e2508-1dc6-4b26-b042-238edd8fd441.jpg",
                salableStock: 0,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b1300e8a-542e-419b-8764-c26faceb2bd2",
                goodsName: "红薯1000g以上",
                description:
                  "因季节原因，表皮红色和黄色都属正常，丰硕甜美味道好",
                isSplit: 0,
                sn: "WOC000590",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2599eb01-6ff5-4f52-9903-e95f9c4f67c5.jpg",
                salableStock: 200,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c1d77b6-7809-406d-bacc-5576c24c30b7",
                goodsName: "玉米棒700g以上",
                description: "富含膳食纤维的营养粗粮",
                isSplit: 0,
                sn: "WOC000005012",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c34da16d-1c79-4ca3-a0bc-4c1d34bad62f.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f7de93b1-6d26-4eb7-ab35-4dc25bcb6449",
                goodsName: "铁棍山药（500g）",
                description: "正宗温县铁棍山药，有“铁锈”味道更佳！",
                isSplit: 0,
                sn: "WOC000000882",
                price: 11.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3d9cd48f-e842-42ff-a71d-31a3380af706.jpg",
                salableStock: 50,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6e5729fc-c77a-43a6-a83c-42f5098a5a76",
                goodsName: "小紫薯（500g以上）",
                description: "花青素满满，软糯香甜绵密",
                isSplit: 0,
                sn: "WOC000000829",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d1c31008-df2a-49c7-ba09-61762b0630c5.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9875aa9c-d3e8-4ef1-a4a0-881c68977c95",
                goodsName: "小洋芋500g",
                description: "个头迷你，皮薄易刮",
                isSplit: 0,
                sn: "WOC000001318",
                price: 4.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62a934f1-af28-4c00-a1be-683404fe8d5b.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d10e2287-0d02-400b-b61c-c4bc4bbfabc6",
                goodsName: "黄豆芽300g",
                description:
                  "温馨提示：由于近期气温上升，个别豆芽容易发生渗水腐烂现象，请挑拣后食用。介意者慎选。",
                isSplit: 0,
                sn: "WOC000002795",
                price: 3.0,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f0084cbd-9c0d-4b27-8b52-ed7e9b39740a.jpg",
                salableStock: 38,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8db9f835-68b2-4234-b70a-f50068b20801",
                goodsName: "天目山香薯750g",
                description: "香而糯的长寿蔬菜",
                isSplit: 0,
                sn: "WOC000006275",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6b229431-0e11-44bd-900f-87db0f27166b.jpg",
                salableStock: 0,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "8db9f835-68b2-4234-b70a-f50068b20801",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4921b5fb-9ce8-47bd-87e9-c76ffd77c2fb.png",
                    labelType: 1,
                    createTime: 1555914129
                  }
                ]
              },
              {
                goodsGuid: "03f6266e-a3d1-4704-870a-8111e7b27f10",
                goodsName: "藕段600g以上",
                description: "脆甜藕断，凉拌更爽口！",
                isSplit: 0,
                sn: "WOC000002963",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b76dc596-739c-413b-b482-5739c1801661.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2f96ae85-3f8a-4786-bbc2-dff3a36e6150",
                goodsName: "带壳生花生500g",
                description: "新鲜带壳，营养丰富",
                isSplit: 0,
                sn: "WOC000006053",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1c3e8201-572b-4dca-840c-0f4aacffbb35.jpg",
                salableStock: 30,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e0681da8-72ef-41c0-8dec-1d71f8f0ff8f",
                goodsName: "海南富硒板栗地瓜1000g",
                description: "",
                isSplit: 0,
                sn: "WOC000002059",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cbb6df38-2d67-448f-b08f-840b56152033.jpg",
                salableStock: 9,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "40f935ef-9ac6-4b7e-b757-2fc346272846",
                goodsName: "胡萝卜（500g以上）",
                description: "富含胡萝卜素，营养“小人参”",
                isSplit: 0,
                sn: "WOC000000857",
                price: 3.8,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a0ac1771-8bf6-42cd-8719-409f7beb76fc.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0f69c6c8-a0c6-4112-847d-841c0b9cbd16",
                goodsName: "白萝卜（700g以上）",
                description: "色泽亮白，煮汤味浓，因克重原因，部分切断",
                isSplit: 0,
                sn: "WOC000000854",
                price: 2.9,
                marketPrice: 5.9,
                picUrl:
                  "https://img.wochu.cn/upload/ee4093bb-adce-4df1-8023-4a8ee983ffa0.jpg",
                salableStock: 998,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0f69c6c8-a0c6-4112-847d-841c0b9cbd16",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0bb05c24-ff0f-4a42-8b52-7d51c08e9357.png",
                    labelType: 1,
                    createTime: 1555914688
                  }
                ]
              },
              {
                goodsGuid: "ffe2a753-05fa-47ab-9104-dc3704cd10ec",
                goodsName: "大红洋葱（500g以上）",
                description: "营养高，请你一层一层剥开我的心",
                isSplit: 0,
                sn: "WOC000001494",
                price: 2.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bfd61ddf-a1ec-4fcd-a1fe-6af1d76fa223.jpg",
                salableStock: 50,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f44ad7ef-e8d5-4023-a297-bbd511f9fb64",
                goodsName: "毛芋艿500g",
                description: "外表粗糙味道好",
                isSplit: 0,
                sn: "WOC000001255",
                price: 4.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a83167b9-ffaa-4df7-9f9c-8851ff9768ec.jpg",
                salableStock: 23,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c1646d51-dafc-4ee8-8408-f4bbd4019f36",
                goodsName: "带壳鲜豌豆500g",
                description: "翠绿圆润，带壳更新鲜",
                isSplit: 0,
                sn: "WOC000004888",
                price: 8.8,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/7bcb9fa9-a6a1-4bee-8754-b09d9e8c0bfd.jpg",
                salableStock: 50,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "03981253-a76e-46f4-bc9b-6a2504cb837f",
                goodsName: "优选手指萝卜300g",
                description: "袖珍小“人参”，生吃甘甜香脆",
                isSplit: 0,
                sn: "WOC000001258",
                price: 9.9,
                marketPrice: 13.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aa031843-678f-4dbc-8837-538005487677.jpg",
                salableStock: 30,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f56bd7cd-44c3-4aef-8344-50458aa48fce",
                goodsName: "绿豆芽300g",
                description: "清香脆嫩适口",
                isSplit: 0,
                sn: "WOC000002796",
                price: 2.9,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9dbfd41b-fa41-417c-8c7a-26d6a844d055.jpg",
                salableStock: 20,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9382d8a1-5eeb-4094-ab0a-3bfdb47af815",
                goodsName: "淮山药（500g）",
                description: "根根精挑细选，药食两用",
                isSplit: 0,
                sn: "WOC000000886",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8550b889-d64f-4d5c-9e9e-c5189970cdd5.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "56fe28c0-753c-4d75-8504-78b56c4ab80e",
                goodsName: "大红洋葱(700g以上）",
                description: "被欧洲人誉为“蔬菜皇后”",
                isSplit: 0,
                sn: "WOC000005010",
                price: 4.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/528d6029-b7e6-4bad-8974-87d38366cbbd.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a40fdd15-b0fe-4403-a95c-df08a614a731",
                goodsName: "黄洋葱750g以上",
                description: "色黄圆润，辣味较浓",
                isSplit: 0,
                sn: "WOC000001363",
                price: 4.2,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/ac2cf98d-d3b3-46fd-ad9f-69b237aaf407.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "752b0f9f-0830-48db-a82b-c6da14bf96f3",
                goodsName: "优选芦笋(500g)",
                description: "清甜脆爽，鲜嫩时蔬",
                isSplit: 0,
                sn: "WOC000001180",
                price: 32.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4af7f724-c8d6-44e1-b53b-ec5401918af5.jpg",
                salableStock: 20,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "68952c32-a086-4db2-bd0c-3078214a94c7",
                goodsName: "鲜百合80g",
                description: "沙质土壤生长，味甜更营养",
                isSplit: 0,
                sn: "WOC000003424",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5fd025aa-4550-4775-aa2b-8e6de92fa49c.jpg",
                salableStock: 100,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9ae11b7d-8d35-4b5b-a0d6-0d7de8101181",
                goodsName: "带壳鲜蚕豆500g",
                description: "",
                isSplit: 0,
                sn: "WOC000005958",
                price: 5.5,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/dba498b1-88b2-47c9-a0e0-fff1f9799f43.jpg",
                salableStock: 50,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "492cc609-32dd-4a97-9418-eb4f7da1fa9d",
                goodsName: "松花菜1000g以上",
                description: "蓬松造型，炝炒更美味",
                isSplit: 0,
                sn: "WOC000002826",
                price: 8.8,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b7453ce1-8852-480f-a394-16f9fe1b4ec6.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f234c658-1357-4b85-9c44-586976e76c5c",
                goodsName: "大蒜叶（250g）",
                description: "蒜香浓郁，富含天然杀菌素",
                isSplit: 0,
                sn: "WOC000000471",
                price: 5.5,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f201c571-423a-495b-8d01-354f4628a95f.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6648b474-22d6-45f5-8ed2-37f70d860a39",
                goodsName: "姜肉(250g)",
                description: "家备小姜，炒菜不慌",
                isSplit: 0,
                sn: "WOC000000730",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c13673a4-8e8a-4658-8544-41a4dfb29520.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "506e3a3c-c1a8-4914-8503-7addb7c995f0",
                goodsName: "整蒜（250g）",
                description: "蒜香浓郁，配烤肉绝佳",
                isSplit: 0,
                sn: "WOC000000791",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/248b72a8-8314-4b97-a362-e908e17b6f4a.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7fbb9395-fb6f-45b3-92b5-314685d2574f",
                goodsName: "香葱50g",
                description: "葱香浓郁，调味必备",
                isSplit: 0,
                sn: "WOC000001264",
                price: 2.5,
                marketPrice: 2.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/af9aa6fb-4111-40c9-8ded-709ede6fd718.jpg",
                salableStock: 998,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ed9dffcf-5174-4b50-a294-03fb1234d8bd",
                goodsName: "香菜（100g）",
                description: "家庭必备调味菜",
                isSplit: 0,
                sn: "WOC000001510",
                price: 2.9,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2680d1c1-a032-4ca7-8bc2-78985b4d8ddc.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ecfa7a65-1935-4205-b4a2-6437e14cef47",
                goodsName: "夜开花500g",
                description: "营养价值丰富，鲜味直达味蕾",
                isSplit: 0,
                sn: "WOC000006536",
                price: 4.9,
                marketPrice: 6.9,
                picUrl:
                  "https://img.wochu.cn/upload/3643521b-0189-45a4-9ae5-a62bd1453c28.jpg",
                salableStock: 30,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "57a28def-23ce-43b2-88de-979d3180fb36",
                goodsName: "土豆（500g以上）",
                description: "低脂又饱腹，能瘦身的家常菜",
                isSplit: 0,
                sn: "WOC000000901",
                price: 4.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d521e8ff-f364-41ec-99a4-9e13e8f84567.jpg",
                salableStock: 100,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3a2a0295-02b0-4988-a8a5-eddcef915243",
                goodsName: "茭白（400g以上）",
                description: "江南名菜，鲜脆“水中参”",
                isSplit: 0,
                sn: "WOC000007536",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/27afb8c9-0aba-4195-9d93-a02f7bc2418b.jpg",
                salableStock: 50,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "82e23c28-1643-44c7-8376-5ca4d8185770",
                goodsName: "蒜苔250g",
                description: "新鲜脆嫩，无粗老纤维",
                isSplit: 0,
                sn: "WOC000007985",
                price: 3.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e1dd2a5c-e459-4c2c-8e53-14ae67eb9e1b.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f2119080-6c84-4ef6-afae-df4afdcbdf45",
                goodsName: "西芹450g",
                description: "轻松补充纤维素",
                isSplit: 0,
                sn: "WOC000007986",
                price: 5.8,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/57f21041-f91f-4517-85d5-1d8284f2de49.jpg",
                salableStock: 999,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5d3b9398-1c5e-49bd-921b-96836cc88925",
                goodsName: "长豆角300g",
                description: "纤长新鲜，饱满脆嫩",
                isSplit: 0,
                sn: "WOC000007987",
                price: 3.9,
                marketPrice: 7.9,
                picUrl:
                  "https://img.wochu.cn/upload/1ea5ad98-8f65-477e-88b8-9bf8d0e83afb.jpg",
                salableStock: 998,
                categoryId: 605,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 606,
            name: "菌菇类",
            displayIndex: 51,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a842f087-45d8-4b3d-9019-f9f7e9395608.jpg",
                type: "checkicon",
                categoryId: 606
              }
            ],
            goods: [
              {
                goodsGuid: "7cb3b429-8ffd-4ebf-9a0c-48bfc8d169d9",
                goodsName: "金针菇（150g）",
                description: "超人气，营养“益智菇”",
                isSplit: 0,
                sn: "WOC000000978",
                price: 2.5,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b5db2482-c680-42a1-8230-86adf82c13dd.jpg",
                salableStock: 199,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "7cb3b429-8ffd-4ebf-9a0c-48bfc8d169d9",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/91cd8b68-8348-4d91-9a93-224a180d21ce.png",
                    labelType: 1,
                    createTime: 1555914587
                  }
                ]
              },
              {
                goodsGuid: "78fd3752-ba74-40c5-882e-ca9835b76bed",
                goodsName: "丰科白玉菇150g",
                description: "整朵包装，白嫩鲜美",
                isSplit: 0,
                sn: "WOC000002204",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/02cbfbaa-6333-416d-a600-f4a7aaa398f1.jpg",
                salableStock: 24,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b749ab4f-1745-467c-bef8-a671eee87346",
                goodsName: "鲜银耳120g",
                description: "优质饱满，平民素“燕窝”",
                isSplit: 0,
                sn: "WOC000005920",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ac256376-a0e2-4e32-bc70-cad91cd1bc02.jpg",
                salableStock: 50,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "40b956e7-daeb-4f22-bc0b-65d6962a0ef8",
                goodsName: "鲜香菇150g",
                description: "新鲜采摘，洗净即烹",
                isSplit: 0,
                sn: "WOC000001511",
                price: 5.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8a495371-c855-4844-a02b-441e66b5e698.jpg",
                salableStock: 200,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a21e7b08-e552-43c4-ac52-cd8461893394",
                goodsName: "白蘑菇230g",
                description: "鲜香“植物肉”，营养高于一般蔬菜",
                isSplit: 0,
                sn: "WOC000004135",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3541e405-9b34-4dc0-9093-1f193c6a6444.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "281cf531-614c-4efb-8a56-2664cda724e1",
                goodsName: "栽培松茸200g",
                description: "养生珍品,媲美野生松茸",
                isSplit: 0,
                sn: "WOC000005208",
                price: 11.9,
                marketPrice: 16.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3e484a47-d8cb-497a-8844-33056858c70f.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "042ce870-c5dc-4540-a0cf-8a88b7ffc67a",
                goodsName: "小平菇150g",
                description: "新鲜肉厚，高蛋白超营养",
                isSplit: 0,
                sn: "WOC000002580",
                price: 5.6,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7f14e427-1862-4fae-8a0c-b08e51f9f9ae.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bde5301b-2ae8-46f6-848f-ac114cdcef55",
                goodsName: "杏鲍菇（200g）",
                description: "肉质肥厚脆嫩，淡淡杏仁香",
                isSplit: 0,
                sn: "WOC000000493",
                price: 3.9,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0324178e-b55a-48d7-ad93-e5ca21d94664.jpg",
                salableStock: 200,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "74b0077a-0472-4979-bc79-8db42a6fac4e",
                goodsName: "鲜茶树菇200g",
                description: "云南空运，新鲜稀有，药食兼用",
                isSplit: 0,
                sn: "WOC000005641",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9060add0-b1db-40f9-82ab-94a73c4d7352.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a3a109e-68f8-425a-b111-262f30794ce1",
                goodsName: "丰科蟹味菇150g",
                description: "珍稀食用菌，独特蟹鲜味",
                isSplit: 0,
                sn: "WOC000002205",
                price: 4.5,
                marketPrice: 5.7,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1607d7dc-239b-48cc-a3b5-6e80e7c483c7.jpg",
                salableStock: 54,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "08f5caf1-64fc-4a45-ba39-b7fbf3290370",
                goodsName: "鲜鸡枞菌100g",
                description: "食用时有鸡肉清香，滋味鲜美",
                isSplit: 0,
                sn: "WOC000005642",
                price: 10.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/28e368dc-b4f1-4833-ae4b-a7bf638be5c0.jpg",
                salableStock: 50,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f1e4d831-4a37-4cc9-9730-93b06c3979bb",
                goodsName: "鲜蛹虫草100g",
                description: "高价值蔬菜，新鲜营养",
                isSplit: 0,
                sn: "WOC000005639",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fb9fdb10-f42c-4d02-b1a7-67d61f875478.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "53c33aab-525d-4ede-981e-0173dd862554",
                goodsName: "鹿茸菇125g",
                description: "新鲜稀有，药用价值高",
                isSplit: 0,
                sn: "WOC000005774",
                price: 5.6,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/18a3660b-9380-43bf-9eec-82b74e5c2e7a.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "86978271-14cd-4024-9014-6bd4a3eb0505",
                goodsName: "海鲜菇150g",
                description: "海蟹味菌菇，炖食与涮火锅必备",
                isSplit: 0,
                sn: "WOC000005773",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aabe4db4-4111-4320-aff0-ef9dc6eee0c9.jpg",
                salableStock: 100,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "87b6c775-4674-47f6-91d1-96cec370189f",
                goodsName: "牛排菇150g",
                description: "肉质饱满细腻，吃牛肉的感觉",
                isSplit: 0,
                sn: "WOC000007030",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8eab6136-8c26-4248-be67-5a3cabb7371c.jpg",
                salableStock: 50,
                categoryId: 606,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1265,
            name: "豆类",
            displayIndex: 50,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/de8f9cbd-c2fd-40d7-a7b4-7a88a520255f.jpg",
                type: "checkicon",
                categoryId: 1265
              }
            ],
            goods: [
              {
                goodsGuid: "4745f699-f524-4745-8984-eb3b929494b0",
                goodsName: "优选荷兰豆（250g）",
                description: "豆荚脆嫩，比心推荐",
                isSplit: 0,
                sn: "WOC000000919",
                price: 9.8,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1cb174c9-e32b-4dce-96be-481300a92e05.jpg",
                salableStock: 999,
                categoryId: 1265,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a2a2ad5e-cc4e-438f-825f-ecceacfcb0fa",
                goodsName: "四季豆（300g）",
                description: "干煸清炒都下饭！",
                isSplit: 0,
                sn: "WOC000001496",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/2a420d8e-743f-42b7-9817-94c86e1feb6c.jpg",
                salableStock: 999,
                categoryId: 1265,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7c07459a-a339-4013-a955-a86e3fd97760",
                goodsName: "扁豆450g",
                description: "烹饪时请务必炒熟食用！",
                isSplit: 0,
                sn: "WOC000003772",
                price: 7.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4f07967d-3a80-418f-b198-318c875f9cec.jpg",
                salableStock: 999,
                categoryId: 1265,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "775a7cba-3bba-4eda-95ae-f713fd3cdd42",
                goodsName: "优选甜豆（200g）",
                description: "清香滑嫩，热炒做汤涮火锅都好吃",
                isSplit: 0,
                sn: "WOC000001497",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17987fbd-1e72-464b-807f-2f0cd4cd6852.jpg",
                salableStock: 30,
                categoryId: 1265,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 608,
            name: "葱姜蒜调味菜",
            displayIndex: 49,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/adc51f81-9c50-4ed3-8826-17b48fe28d98.jpg",
                type: "checkicon",
                categoryId: 608
              }
            ],
            goods: [
              {
                goodsGuid: "983b5da8-8aa9-427b-8ccd-9f43c9ea5459",
                goodsName: "尖青椒(250g)",
                description: "体长味辣，新鲜翠绿",
                isSplit: 0,
                sn: "WOC000000762",
                price: 5.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/267ee835-41b3-4f43-aa66-8d97a9db7145.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ff852066-5989-4421-84b3-d51aeb4d796a",
                goodsName: "大红椒(250g)",
                description: "味甜不辣，靓丽点缀菜",
                isSplit: 0,
                sn: "WOC000000765",
                price: 9.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d25a1f63-2da2-432f-81d3-d888922e5a7f.jpg",
                salableStock: 20,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e5666e12-c9f7-4bcf-8477-01efba7e7fe6",
                goodsName: "泰椒150g",
                description: "色泽鲜亮，辣味十足",
                isSplit: 0,
                sn: "WOC000001259",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0e4558fc-f4cf-4ac8-acb2-16af9cbe89b3.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e1d6fa57-ccf3-4c41-a9d6-75c5cc4e4d3a",
                goodsName: "杭椒(250g)",
                description: "鲜爽不浓辣，人气调味椒",
                isSplit: 0,
                sn: "WOC000000749",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7b53e4f4-1ec3-43c7-9af3-8a329a3fa42b.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d286e55e-9b05-494e-9192-9ab4653a88c1",
                goodsName: "葱姜蒜组合150g",
                description: "超方便！买这个调味就够了",
                isSplit: 0,
                sn: "WOC000001270",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d5ee0543-dee3-49d2-b1d2-8dfb78659ce0",
                goodsName: "香芹（250g）",
                description: "芹香诱人，清新爽口",
                isSplit: 0,
                sn: "WOC000000912",
                price: 3.9,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d2edceee-267a-4c48-91b3-b3a26588c3cf.jpg",
                salableStock: 37,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "d5ee0543-dee3-49d2-b1d2-8dfb78659ce0",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e37975ce-0f2c-4367-b0e8-826ac31e3e71.png",
                    labelType: 1,
                    createTime: 1555914750
                  }
                ]
              },
              {
                goodsGuid: "7bcb9bde-c9f1-4f0e-8398-361c043c2b7a",
                goodsName: "红黄彩椒400g",
                description: "甜中微辛，汁多脆甜",
                isSplit: 0,
                sn: "WOC000006160",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1e604040-27a2-4356-a19d-5b6833acf9bc.jpg",
                salableStock: 50,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f234c658-1357-4b85-9c44-586976e76c5c",
                goodsName: "大蒜叶（250g）",
                description: "蒜香浓郁，富含天然杀菌素",
                isSplit: 0,
                sn: "WOC000000471",
                price: 5.5,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f201c571-423a-495b-8d01-354f4628a95f.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6648b474-22d6-45f5-8ed2-37f70d860a39",
                goodsName: "姜肉(250g)",
                description: "家备小姜，炒菜不慌",
                isSplit: 0,
                sn: "WOC000000730",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c13673a4-8e8a-4658-8544-41a4dfb29520.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "506e3a3c-c1a8-4914-8503-7addb7c995f0",
                goodsName: "整蒜（250g）",
                description: "蒜香浓郁，配烤肉绝佳",
                isSplit: 0,
                sn: "WOC000000791",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/248b72a8-8314-4b97-a362-e908e17b6f4a.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7fbb9395-fb6f-45b3-92b5-314685d2574f",
                goodsName: "香葱50g",
                description: "葱香浓郁，调味必备",
                isSplit: 0,
                sn: "WOC000001264",
                price: 2.5,
                marketPrice: 2.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/af9aa6fb-4111-40c9-8ded-709ede6fd718.jpg",
                salableStock: 998,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ed9dffcf-5174-4b50-a294-03fb1234d8bd",
                goodsName: "香菜（100g）",
                description: "家庭必备调味菜",
                isSplit: 0,
                sn: "WOC000001510",
                price: 2.9,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2680d1c1-a032-4ca7-8bc2-78985b4d8ddc.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c005a59b-4750-4bff-acbc-31d9db2f13a7",
                goodsName: "大葱(250g)",
                description: "调味必备品，葱叶青绿欲滴，葱白鲜嫩饱满",
                isSplit: 0,
                sn: "WOC000007534",
                price: 2.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/99f57bd7-af0e-4c43-ac0e-e4726046ade4.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bab2df56-eaf9-4d22-9200-82989bb8b584",
                goodsName: "优选青彩椒500g",
                description: "色泽艳丽，非转基因",
                isSplit: 0,
                sn: "WOC000001250",
                price: 6.8,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/df607005-f049-41ac-bf7c-c8ae35e77d7f.jpg",
                salableStock: 100,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4e3efb20-3d16-48fa-a215-260a2dacd6d1",
                goodsName: "优选薄皮青椒（250g）",
                description: "爽口入味，辣度刚刚好",
                isSplit: 0,
                sn: "WOC000007537",
                price: 3.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/61e39b06-1031-4402-a1c6-a1ecb7cde3de.jpg",
                salableStock: 999,
                categoryId: 608,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 609,
            name: "色拉菜",
            displayIndex: 48,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f2f620a0-1870-49fe-b420-413c35ef6953.jpg",
                type: "checkicon",
                categoryId: 609
              }
            ],
            goods: []
          },
          {
            id: 610,
            name: "豆制品",
            displayIndex: 47,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/671065e5-a835-477b-aaa9-d789ec7cf15e.jpg",
                type: "checkicon",
                categoryId: 610
              }
            ],
            goods: [
              {
                goodsGuid: "ec22227b-f9ef-4ac7-bea0-d3b9dba665ad",
                goodsName: "清美老豆腐320g",
                description: "味道浓郁，弹性、韧性更足",
                isSplit: 0,
                sn: "WOC000002895",
                price: 3.9,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/0cc3af57-87be-4e7c-8934-9ef1bc580020.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2918e2c9-95f9-4eed-8b53-b784e65a5b7b",
                goodsName: "清美油面筋75g",
                description: "清美安心豆制品，优质健康",
                isSplit: 0,
                sn: "WOC000002572",
                price: 5.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/03acd702-5ea0-40e6-aa82-ab3918d825d9.jpg",
                salableStock: 15,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c05785ce-dc44-4a1c-9133-6441c5ceb41f",
                goodsName: "清美小油豆腐125g",
                description: "清美安心豆制品，优质健康",
                isSplit: 0,
                sn: "WOC000002571",
                price: 5.9,
                marketPrice: 7.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9f7095fa-703e-4e87-a81f-7d4bd2176d1e.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "214d3962-122c-43df-9654-d5e4b646ce76",
                goodsName: " maruzen魔芋小结350g",
                description: "",
                isSplit: 0,
                sn: "WOC000006099",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d3192ca2-bf74-4754-89b6-8524f5652762.jpg",
                salableStock: 132,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "06a12cfe-910b-4f7e-a902-48bc6afddb22",
                goodsName: "清美厚百页170g",
                description: "上海老牌子，品质有保障",
                isSplit: 0,
                sn: "WOC000002897",
                price: 3.9,
                marketPrice: 4.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d78ed05-c88f-4061-890b-170a1cf4e609.jpg",
                salableStock: 9,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "58cdb9c4-47fc-42fd-965d-9dd42de5fac1",
                goodsName: "清美绢豆腐350g",
                description: "质地细腻，口感丝滑柔软",
                isSplit: 0,
                sn: "WOC000002566",
                price: 2.9,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2a0943f5-f12d-4931-ba08-ac06811ac3da.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "782d7396-168e-4c90-ae71-34cf555816dc",
                goodsName: "清美盐卤五香干120g",
                description: "品质正宗，上海老品牌，吃过忘不了！",
                isSplit: 0,
                sn: "WOC000003291",
                price: 2.9,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/108a469b-70a8-4b9c-b18d-0a9c886eee61.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bfd1c448-6243-4c92-bb0b-05ece1f36e98",
                goodsName: "清美特浓豆浆395ml",
                description: "清美豆浆，早餐必入！",
                isSplit: 0,
                sn: "WOC000002576",
                price: 1.5,
                marketPrice: 1.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/844e010d-97ca-4aa8-a4ed-5759f54b5ef6.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1bd41b67-59cd-4609-bce0-cd6d76d9a82d",
                goodsName: "清美黑豆豆浆290ml",
                description: "醇香如现磨，黑豆口感更好",
                isSplit: 0,
                sn: "WOC000002577",
                price: 1.5,
                marketPrice: 1.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/65a25d48-b277-4428-8bf7-103d1207d50e.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4424914b-c044-442e-9196-a2f8674fe6bb",
                goodsName: "大豆原浆（盖装）250ml",
                description: "甜味即食豆浆，豆香更浓郁",
                isSplit: 0,
                sn: "WOC000002608",
                price: 1.5,
                marketPrice: 1.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ee5e60cc-98bb-4997-a710-e4b4c18e793e.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9e9c2e6b-63e9-4729-9344-c6a4692646f5",
                goodsName: "清美内酯豆腐400g",
                description: "质地更加细嫩，特别适合做豆腐煲！",
                isSplit: 0,
                sn: "WOC000002565",
                price: 1.9,
                marketPrice: 3.9,
                picUrl:
                  "https://img.wochu.cn/upload/9973b5ee-8068-4b7d-8ce8-d838668667a0.jpg",
                salableStock: 99,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "53497ba9-d26a-4fba-832e-67b2481bb966",
                goodsName: "清美日本玉子豆腐85g",
                description: "宝宝最爱！蛋味浓郁，细腻爽滑",
                isSplit: 0,
                sn: "WOC000003381",
                price: 2.5,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/12119113-8110-4407-bf08-6a1b67d47b8c.jpg",
                salableStock: 96,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "53497ba9-d26a-4fba-832e-67b2481bb966",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4db5d69e-f148-4209-bf90-00d395316d0e.png",
                    labelType: 1,
                    createTime: 1555914722
                  }
                ]
              },
              {
                goodsGuid: "ef4feade-dd4d-4551-8ea1-25203cd6482f",
                goodsName: "清美七两素鸡350g",
                description: "味道好似鸡肉，红烧味道好",
                isSplit: 0,
                sn: "WOC000002570",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/45a29dcd-4c1c-46be-b3dc-abca56438b9e.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ae7a63a0-07b7-4687-9d1c-007c2d5a5c15",
                goodsName: "清美百叶结150g",
                description: "清美安心豆制品，优质健康",
                isSplit: 0,
                sn: "WOC000003140",
                price: 5.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7526c757-6637-4019-9c83-b8840c6ff1fb.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c9b76e16-dbe2-42b3-89ed-68b77093ad20",
                goodsName: "四鲜烤麸250g",
                description: "咸中带甜，味香可口",
                isSplit: 0,
                sn: "WOC000003200",
                price: 6.9,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3c0c42bf-9b2f-4bdb-80bc-3f1555b34621.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "70637951-b55f-4a18-99d9-021312c48c25",
                goodsName: "清美绍兴臭豆腐285g",
                description: "令人欲罢不能的小吃",
                isSplit: 0,
                sn: "WOC000002610",
                price: 6.9,
                marketPrice: 8.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6bae25f5-4de7-4cc8-9c10-3c11ccea2bb3.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e481c389-e3c7-439b-a37c-2aa5453dc3bd",
                goodsName: "清美扬州干丝150g",
                description: "清美安心豆制品，优质健康",
                isSplit: 0,
                sn: "WOC000002896",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a2f4c4d9-5f77-40cc-b838-e18db74be81c.jpg",
                salableStock: 100,
                categoryId: 610,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 612,
            name: "冷冻蔬菜",
            displayIndex: 46,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c61406c6-bf07-4fd2-b70a-be458c965195.jpg",
                type: "checkicon",
                categoryId: 612
              }
            ],
            goods: [
              {
                goodsGuid: "a7a4e445-f783-4049-8e71-2b9f0347f5d4",
                goodsName: "美国杂菜200g",
                description: "好吃营养米饭配菜好搭档！",
                isSplit: 0,
                sn: "WOC000001487",
                price: 6.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fb28cd80-0e8c-4b68-b6b7-6d77be1c19f0.jpg",
                salableStock: 0,
                categoryId: 612,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 607,
            name: "净蔬菜",
            displayIndex: 0,
            description: "",
            parentId: 6,
            path: "/6/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/22cfcf3e-d848-4eb7-a0a7-2a7b13f57ca0.jpg",
                type: "checkicon",
                categoryId: 607
              }
            ],
            goods: [
              {
                goodsGuid: "12eb917e-f522-4056-bde7-5aab4f9b3642",
                goodsName: "藕片300g",
                description: "贴心切片，烹饪更便捷",
                isSplit: 0,
                sn: "WOC000596",
                price: 6.5,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/46476ba1-8704-4e8d-a7de-9c2bd452a1eb.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7d35be5c-97f4-4ffd-ace4-4fe39018176c",
                goodsName: "西芹片250g",
                description: "",
                isSplit: 0,
                sn: "WOC000001170",
                price: 6.4,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/3d7d1fa4-b2af-4dde-aa87-b95658741a97.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9aec01be-1b90-4ba2-9cb5-9e5ec4405e17",
                goodsName: "老南瓜片400g",
                description: "",
                isSplit: 0,
                sn: "WOC000001174",
                price: 6.5,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/196c59cd-bf3c-4e7c-ac95-a1dfe2526da4.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d06c7970-4690-4729-a46e-e048cb20229d",
                goodsName: "白萝卜块350g/份",
                description: "",
                isSplit: 0,
                sn: "WOC000001420",
                price: 2.5,
                marketPrice: 3.9,
                picUrl:
                  "https://img.wochu.cn/upload/c430c320-5633-4801-9a89-58bc9d6b7ec0.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f799f5e0-a702-4809-9409-92f8f7ef3f67",
                goodsName: "花菜块350g",
                description: "贴心切块，烹饪更便捷",
                isSplit: 0,
                sn: "WOC000001164",
                price: 6.5,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8d256469-4179-4f0e-bb02-07421444917d.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7176a89b-06aa-4f8d-b8e8-48d705cda56a",
                goodsName: "冬瓜厚片350g",
                description: "贴心切片，烹饪更便捷",
                isSplit: 0,
                sn: "WOC000001426",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/53a537e2-6374-4e4d-bdef-7b7e2caa80dd.jpg",
                salableStock: 50,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9d594449-d6a2-4653-b947-07205e4640a9",
                goodsName: "土豆丁300g",
                description: "",
                isSplit: 0,
                sn: "WOC000001172",
                price: 4.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/98e2b6b4-4e9d-49f7-8bc6-08e2fbb1e42f.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3b9c05c4-7c38-4154-aa2d-527e4c9115c2",
                goodsName: "大红洋葱片250g",
                description: "",
                isSplit: 0,
                sn: "WOC000001177",
                price: 3.5,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/e325d10d-0758-4bca-aea9-d59366bf7cd7.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "39f01fb3-32f4-43ff-bdec-355781bd18a8",
                goodsName: "苞菜丝350g",
                description: "",
                isSplit: 0,
                sn: "WOC000001428",
                price: 2.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/15aa978d-368a-414d-b70f-5851c058f6f1.jpg",
                salableStock: 999,
                categoryId: 607,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605458,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    fn(v) {
      this.i = v;
      this.arr = this.data.categories[this.i].goods;
      // 深拷贝
      this.arr2 = JSON.parse(JSON.stringify(this.arr));
    },
    // 返回
    backOne() {
      this.$router.back();
    },
    //价格升序降序
    pricesort(orderType) {
      if (orderType == this.orderType) {
        // 每点击一次orderType++
        this.orderType = orderType;
        this.orderType++;
        // 奇数
        if (orderType % 2 == 1) {
          this.data.categories[this.i].goods = this.arr;
          this.arr.sort(function(a, b) {
            return a.price - b.price;
          });
        }
        // 偶数
        else if (orderType % 2 == 0) {
          this.data.categories[this.i].goods = this.arr;
          this.arr.sort(function(a, b) {
            return b.price - a.price;
          });
        }
        // 恢复默认排序
      } else if (orderType === 0) {
        this.data.categories[this.i].goods = this.arr2;
        this.arr2.sort();
      }
    }
  },
  activated() {
    // 页面显示时获取当前数据
    this.i = this.$route.query.sindex;
    this.arr = this.data.categories[this.i].goods;
    this.arr2 = JSON.parse(JSON.stringify(this.arr));
    let { sindex } = this.$route.query;
    this.i = sindex / 1;
  }
};
</script>
<style scoped lang="scss">
.active {
  color: #6eb042 !important;
  font-size: 0.27rem;
  border-bottom: 0.04rem solid #6eb042;
}
header {
  position: fixed;
  width: 100%;
  height: 1rem;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  border-bottom: 0.01rem solid #e5e5e5;
  z-index: 1;
  background: #fff;
}
.search-ctl {
  width: 7.1rem;
  height: 0.58rem;
  margin: 0.15rem 0.2rem;
  line-height: 0.58rem;
  font-size: 0.36rem;
  color: rgb(82, 81, 81);
}
.back {
  width: 1.4rem;
  height: 0.64.28rem;
  float: left;
}
.back img {
  width: 0.64rem;
  height: 0.64rem;
}
.parent-name p {
  display: block;
  float: left;
  width: 4.24rem;
  height: 0.6128rem;
  text-align: center;
  font-weight: bold;
}
parent-name p span {
  font-size: 0.36rem;
}
.go-cart {
  width: 0.58rem;
  float: right;
}
.go-cart img {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 0.07rem;
}
.serch-key {
  width: 0.58rem;
  height: 0.58rem;
  float: right;
  margin-right: 0.3rem;
}
.serch-key img {
  width: 0.44rem;
  height: 0.44rem;
  margin-top: 0.07rem;
}
.nav {
  display: flex;
  width: 100%;
  position: fixed;
  height: 1rem;
  top: 1rem;
  background: #fff;
  border-bottom: 0.03rem solid #e5e5e5;
  z-index: 3;
  overflow: auto;
}
.nav li {
  display: flex;
  // width: 2.28rem;
  float: left;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.nav li p {
  display: flex;
  // width: 2.28rem;
  height: 1rem;
  color: #666;
  padding: 0 0.3rem;
  flex-direction: column;
  justify-content: center;
  font-size: 0.27rem;
  // font-weight: bold
}
.zdw {
  background: #fff;
  width: 100%;
  height: 0.1rem;
  position: fixed;
  top: 1.84rem;
  z-index: 8;
}
//特惠价格
.three-class {
  display: flex;
  width: 100%;
  height: 0.7rem;
  position: fixed;
  background: #fff;
  z-index: 3;
  top: 2rem;
  font-size: 0.28rem;
  color: #001e00;
  justify-content: space-between;
}
.three-class div {
  flex: 1;
  text-align: center;
  line-height: 0.7rem;
}
.three-class div > span {
  display: inline-block;
  width: 1.5rem;
  height: 0.56rem;
  border-radius: 0.1rem;
  line-height: 0.56rem;
}
.three-class .dev-line {
  display: inline-block;
  width: 0.01rem;
  height: 0.56rem;
  background: #e5e5e5;
  margin-top: 0.08rem;
}
.three-class div > span em {
  margin-left: 0.06rem;
  display: inline-block;
  width: 0.14rem;
  height: 0.28rem;
  overflow: hidden;
  position: relative;
}
.three-class div > span em img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.08rem;
}
.shadowWrap {
  display: block;
  position: fixed;
  z-index: 3;
  top: 2.7rem;
  width: 100%;
  height: 0.16rem;
  background: #f4f5f7;
}
// 商品
.goods-list {
  font-size: 0.28rem;
  width: 100%;
  position: absolute;
  top: 2.86rem;
  overflow-y: scroll;
  height: 10.5rem;
  background: #fff;
}
.goods-list .goods-ul {
  width: 100%;
  padding-bottom: 1.5rem;
}
.class-item {
  width: 100%;
  height: auto;
  // display: none;
}
.goods-ul li {
  width: 100%;
  height: 2.92rem;
  padding: 0.4rem 0.24rem 0.32rem;
  border-bottom: 0.02rem solid #e5e5e5;
}
.goods-ul li .fl {
  float: left;
  width: 2.2rem;
  height: 2.2rem;
  position: relative;
}
.goods-ul li .fl img {
  width: 100%;
  height: 100%;
}
.goods-ul li .fr {
  margin-left: 0.2rem;
  float: right;
  width: 4.6rem;
  height: 100%;
}
.goods-name {
  width: 100%;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.02rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.1rem;
  font-weight: bold;
}
.goods-intro {
  width: 100%;
  height: 0.34rem;
  font-size: 0.24rem;
  line-height: 0.32rem;
  letter-spacing: 0.01rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-bottom: 0.18rem;
}
.goods-mark {
  overflow: hidden;
  width: 2.1rem;
  height: 0.4rem;
  margin-bottom: 0.04rem;
}
.price-wrap {
  float: left;
  line-height: 0.5rem;
}
.real-price {
  font-size: 0.32rem;
  color: #ff5918;
  margin-right: 0.2rem;
  font-weight: bold;
}
.old-price {
  font-size: 0.24rem;
  text-decoration: line-through;
  color: #ccc;
}
.addTo-cart {
  float: right;
  width: 0.52rem;
  height: 0.52rem;
}
.addTo-cart img {
  width: 100%;
  height: 100%;
}
.goods-price {
  float: left;
}
</style>
