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
          <li v-for="(ite,num) in data.categories[i].goods" :key="num">
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
          </li>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlename: "儿童专区",
      wrappernav: [
        "宝宝餐",
        "儿童营养主食",
        "儿童优质食材",
        "儿童水果乳饮"
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
            id: 401,
            name: "宝宝餐",
            displayIndex: 62,
            description: "",
            parentId: 4,
            path: "/4/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6caa5715-2527-486a-9b5a-e4c031bc3566.jpg",
                type: "checkicon",
                categoryId: 401
              }
            ],
            goods: [
              {
                goodsGuid: "b1eef202-165f-4614-b285-924589c45627",
                goodsName: "芦笋炒虾仁",
                description: "清新弹嫩，营养好搭档。",
                isSplit: 0,
                sn: "WOC000004719",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a129cbfa-6bb5-4799-8ed9-2fa06b10f73c.jpg",
                salableStock: 999,
                categoryId: 401,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14600a06-87fc-4abb-a293-6a1335d3e644",
                goodsName: "蜜汁元宝虾",
                description: "本帮蜜汁菜，外脆里嫩，形似金元宝，迎财咯",
                isSplit: 0,
                sn: "WOC000006532",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e5e459aa-640a-43fc-ae91-cdda050a491c.jpg",
                salableStock: 999,
                categoryId: 401,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e3189acc-4a73-4525-adbb-be8c15cccba9",
                goodsName: "水晶虾仁",
                description: "",
                isSplit: 0,
                sn: "WOC000006881",
                price: 25.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/63eca68c-5e9b-4a64-be79-84632d1b562b.jpg",
                salableStock: 20,
                categoryId: 401,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ec765d32-8178-464f-9ce2-40db1b7d15a2",
                goodsName: "蒜蓉粉丝虾",
                description: "鲜到连一根粉丝都不会剩下！10min蒸好的美味",
                isSplit: 0,
                sn: "WOC000002134",
                price: 39.9,
                marketPrice: 48.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c24452d4-6b7c-463e-a75a-d796463942c1.jpg",
                salableStock: 50,
                categoryId: 401,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "77b218b1-b4d9-4b4b-97a4-c7691cad8c48",
                goodsName: "牛肉粉丝煲",
                description: "浓香爽口，汤汁也不能放过",
                isSplit: 0,
                sn: "WOC000004546",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6e0baee8-403a-4cdd-b6ea-4d2a38d59695.jpg",
                salableStock: 20,
                categoryId: 401,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 402,
            name: "儿童营养主食",
            displayIndex: 61,
            description: "",
            parentId: 4,
            path: "/4/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ebcbc1ce-7a1b-451f-a4e8-41ed19b9a493.jpg",
                type: "checkicon",
                categoryId: 402
              }
            ],
            goods: [
              {
                goodsGuid: "0985c953-2cd6-4280-b1f9-876f4741969c",
                goodsName: "桂冠奶香刀切馒头320g",
                description: "爱喝牛奶的小馒头！空口吃都香甜",
                isSplit: 0,
                sn: "WOC000001985",
                price: 8.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a4c5eead-1418-4b2c-80c0-cfdb748f1cf3.jpg",
                salableStock: 0,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c90ddf31-2b88-4243-a8bc-396659f3de02",
                goodsName: "桂冠奶黄包360g",
                description: "品牌速食，奶香浓郁，松软细腻。",
                isSplit: 0,
                sn: "WOC000001983",
                price: 11.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/de2283bf-cbc0-4b8c-8e4f-922ba538f74f.jpg",
                salableStock: 0,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3ecfc0af-c7c7-4704-b8bc-a8e676795d97",
                goodsName: "红糖馒头850g",
                description: "甜而不腻，古早的味道。",
                isSplit: 0,
                sn: "WOC000003160",
                price: 15.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2dfe9618-9fc6-4fe1-afde-7828b6180d56.jpg",
                salableStock: 108,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "67096ab7-7123-4547-811a-688db9590559",
                goodsName: "九洲丰园有机儿童馒头260g",
                description: "含30%蔬菜的五彩馒头，宝宝喜欢吃",
                isSplit: 0,
                sn: "WOC000004846",
                price: 12.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f110184c-82d7-4664-9b62-7d619aae36e8.jpg",
                salableStock: 156,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "24b43d54-4736-4e86-90ab-fba5ee27a989",
                goodsName: "光明海丰香而糯2000g",
                description: "来自海丰农场的香糯大米，非真空包装",
                isSplit: 0,
                sn: "WOC000005766",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/994ce26c-9f9b-4129-b5f0-b36cd6a140f3.jpg",
                salableStock: 36,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9454db93-f101-4ca8-a4f0-6683518a1b77",
                goodsName: "避风塘培根葱油花卷350g",
                description: "肉质鲜嫩 咸香适口",
                isSplit: 0,
                sn: "WOC000006098",
                price: 13.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/04001dde-9507-4883-afac-4ce950cb8b40.jpg",
                salableStock: 0,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c78e9032-0397-4dcb-a0e7-ecd03ac63c18",
                goodsName: "龙凤牛奶馒头400g",
                description: "",
                isSplit: 0,
                sn: "WOC000005564",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://img.wochu.cn/upload/06875228-d430-454e-b736-0be42ad9f710.jpg",
                salableStock: 0,
                categoryId: 402,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 403,
            name: "儿童优质食材",
            displayIndex: 60,
            description: "",
            parentId: 4,
            path: "/4/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ce6f150a-6f1e-4c38-8588-12a22958ff21.jpg",
                type: "checkicon",
                categoryId: 403
              }
            ],
            goods: [
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
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
                goodsGuid: "3245e9e2-591f-420b-bc39-69aba7e6560f",
                goodsName: "我厨优选生虾仁（91/110)",
                description: "颗颗弹嫩，毛重200g,虾仁净重180g",
                isSplit: 0,
                sn: "WOC000006228",
                price: 29.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/54d16185-317c-4860-af5c-0bed4cc2cd51.jpg",
                salableStock: 1221,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b7c23bef-832d-477a-98da-2aa473373332",
                goodsName: "冰岛开片海参斑600—800g",
                description: "进口野生，稀有深海鱼",
                isSplit: 0,
                sn: "WOC000006188",
                price: 69.9,
                marketPrice: 79.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b32cdc0-7200-4421-89b3-35aff3bfbc3b.jpg",
                salableStock: 78,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eedecc9c-2e5b-4239-8f56-4a848546dbcd",
                goodsName: "我厨优选香酥猪排240g（120g*2片）",
                description: "金黄外衣，一口下去酥脆脆，上海小囡最爱",
                isSplit: 0,
                sn: "WOC000007067",
                price: 8.8,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f5cd0c87-0c6e-4bcb-93e1-0d0dd1597e08.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c86c7b74-ea07-4135-bea7-12ab78b0001d",
                goodsName: "鸡腿块200g",
                description: "只选鸡腿最精华",
                isSplit: 0,
                sn: "WOC000004971",
                price: 12.8,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/a1923077-1d1c-4199-a33b-e47f1e78a89c.jpg",
                salableStock: 117,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b413c8db-1581-4584-8661-c9d0de1e19e0",
                goodsName: "荷裕薄盐三文鱼240g",
                description: "原料为大西洋鲑，肉质细嫩",
                isSplit: 0,
                sn: "WOC000001821",
                price: 39.8,
                marketPrice: 48.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b6abe15e-78e9-4b11-881d-f4c8aa42d681.jpg",
                salableStock: 456,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b7df0b34-bb07-47ac-a185-eeccd5742b7e",
                goodsName: "荷裕三文鱼刺身100g",
                description: "零下65°C急冻，入口鲜滑，唇齿留香。",
                isSplit: 0,
                sn: "WOC000001817",
                price: 29.8,
                marketPrice: 39.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/94f4780f-fd31-4ae9-b79c-ac35e061b7ff.jpg",
                salableStock: 78,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14b6063d-a798-4aee-bac5-4eef80cedf37",
                goodsName: "荷裕烟熏三文鱼100g",
                description: "传统烟熏制法，肉质鲜艳紧实。",
                isSplit: 0,
                sn: "WOC000006298",
                price: 26.8,
                marketPrice: 34.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c0442b84-d678-4ff5-88cb-355e8005c4db.jpg",
                salableStock: 171,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fee40d45-85a4-488f-b90d-1403d77e65f0",
                goodsName: "我厨优选鸡翅中500g",
                description: "风靡烧烤界的小鲜肉，肉多骨细",
                isSplit: 0,
                sn: "WOC000004989",
                price: 26.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c70f23bd-41a1-4a6d-bcda-b071333bcb7a.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ab9a3efb-7fe7-4e08-a19c-b79688d0b970",
                goodsName: "大别山老母鸡1100g",
                description: "罗曼鸡品种，鸡冠较大；500天玉米喂养",
                isSplit: 0,
                sn: "WOC000004597",
                price: 49.9,
                marketPrice: 58.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2e0b2586-cbfd-4803-9bd1-10d122fce8d9.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2d932f14-6f0f-4e2f-b6dd-3925738c8056",
                goodsName: "我厨优选鲜鸡蛋10枚",
                description: "鸡蛋品牌现为正大鲜鸡蛋",
                isSplit: 0,
                sn: "WOC000005934",
                price: 14.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5b3cc85e-55a8-46b9-bd03-bf643592745d.jpg",
                salableStock: 27,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2d932f14-6f0f-4e2f-b6dd-3925738c8056",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b38904cc-fc96-4289-8d65-91b6e9ed155e.png",
                    labelType: 1,
                    createTime: 1554773985
                  }
                ]
              },
              {
                goodsGuid: "72bd3cc7-3dcd-4287-8a3d-c03d5665feb9",
                goodsName: "鸿轩农业土鸡蛋10枚425g",
                description: "个头均匀，清黄层次分明。",
                isSplit: 0,
                sn: "WOC000003168",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/94ee3446-8ca7-433d-86dc-ccaef31e84e8.jpg",
                salableStock: 513,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a95b1a5e-83bb-41fb-a338-d0d6ecb0e235",
                goodsName: "东土鹌鹑蛋24枚260g",
                description: "农家散养，营养丰富，老少皆宜",
                isSplit: 0,
                sn: "WOC000005849",
                price: 9.9,
                marketPrice: 11.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/66d97af4-036f-4c52-a0b1-497ebfecef45.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c1a8e12b-4647-490a-a940-c73fc798a202",
                goodsName: "活杀山东黑鱼",
                description: "营养丰富，家庭酸菜鱼必备！",
                isSplit: 0,
                sn: "WOC000006121",
                price: 22.8,
                marketPrice: 26.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c21f567-9973-4423-9c07-6b75778e9f30.jpg",
                salableStock: 3,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2e7ef7c4-eee6-4f67-9035-f2d7b1b1c061",
                goodsName: "生虾仁（71/90）250g",
                description:
                  "毛重250g，包含海虾仁39-49个，包冰率30%。虾仁净重175g。",
                isSplit: 0,
                sn: "WOC000002793",
                price: 36.0,
                marketPrice: 43.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/55d73f35-0ef1-4de7-ba05-604b6346346e.jpg",
                salableStock: 258,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0b494a61-f702-4f35-adef-5546dd0ff5a7",
                goodsName: "新鲜活杀鲈鱼一条装450g",
                description: "清蒸0失败。接单现杀",
                isSplit: 0,
                sn: "WOC000004526",
                price: 29.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cbf31a50-ca9a-4e5f-8fa7-f96d7004d15d.jpg",
                salableStock: 8,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c3cd940b-e60f-4cf7-b4ce-bb3f91ec684d",
                goodsName: "新鲜活杀昂刺鱼两条装240g",
                description:
                  "个头小巧鱼刺少，炖汤红烧味道好，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004524",
                price: 29.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/381dca0e-f255-427f-9595-4d5334f82097.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e42e2bfd-b2da-4738-a142-bc2c5a2630e0",
                goodsName: "新鲜活杀鳜鱼一条装450g",
                description: "四大淡水名鱼之一，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004525",
                price: 59.9,
                marketPrice: 69.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/55d53806-a626-40a9-82c7-1a43e9ed7556.jpg",
                salableStock: 0,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "58663789-9e40-46fd-80d7-f4f84d6181b0",
                goodsName: "我厨优选冰鲜黄鱼2条装（360-500）",
                description: "标注重量为没有净膛的重量。",
                isSplit: 0,
                sn: "WOC000002429",
                price: 22.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c1f4da1-5d04-42ff-ba3b-2e27e36600e5.jpg",
                salableStock: 50,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e5f02b9e-3efc-4aff-b099-6f1c965af61b",
                goodsName: "挪威北极鳕鱼300g",
                description: "北极深海鱼，刺少肉多",
                isSplit: 0,
                sn: "WOC000004601",
                price: 39.9,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/03fb3340-af91-4c7f-8fb5-e8e2477f105a.jpg",
                salableStock: 42,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "15d81960-dc14-4861-9bb2-43846bca04b5",
                goodsName: "我厨优选新鲜活杀花鲢鱼头500g以上",
                description: "接单现杀，去鳃对半切，剁椒鱼头或鱼头汤必备",
                isSplit: 0,
                sn: "WOC000006385",
                price: 29.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8455effa-8157-4b34-b8c1-f4a2ee0e97ac.jpg",
                salableStock: 100,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "714794a8-9eb8-4ee8-b866-b62787d7f575",
                goodsName: "我厨优选新鲜牛腩肉500g",
                description: "肥瘦相间，有奶香的牛腩",
                isSplit: 0,
                sn: "WOC000004707",
                price: 46.8,
                marketPrice: 56.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2aeb4209-47c2-4ce2-9c24-c5c92b1ff094.jpg",
                salableStock: 100,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d9f87c5-7d9c-429e-89f6-6dce2a3d3356",
                goodsName: "我厨优选牛腱子400g",
                description: "肉中含筋，红白镶嵌，适合卤、红烧、炖",
                isSplit: 0,
                sn: "WOC000006453",
                price: 41.9,
                marketPrice: 53.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cc2ff076-5578-4421-9dac-dbe9461004ce.jpg",
                salableStock: 100,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5f7a0420-4ce8-44d4-a112-ca1306d9e1ff",
                goodsName: "徐鸿飞无添加营养鸡蛋10枚425g",
                description: "精挑细选，质量上乘",
                isSplit: 0,
                sn: "WOC000005064",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48324153-ee99-4cda-aab1-d0342ecaacbd.jpg",
                salableStock: 88,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1554aef7-f948-4758-952c-f9a5cdf09940",
                goodsName: "蘭皇生鲜鸡蛋10枚，可生食的鸡蛋",
                description: "可生食的鸡蛋",
                isSplit: 0,
                sn: "WOC000005852",
                price: 27.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8db6f455-b35c-4fd0-ab6b-f03b0b9588b6.jpg",
                salableStock: 27,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "97472cd2-8d72-4a92-accf-a7e5bfb85410",
                goodsName: "天然无污染绿色鸽子蛋12枚",
                description:
                  "含有丰富维生素及微量元素，易于消化吸收，对人体有益",
                isSplit: 0,
                sn: "WOC000006148",
                price: 65.0,
                marketPrice: 79.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8b05878c-d311-4cb7-8fc0-8ff1e3001af1.jpg",
                salableStock: 12,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d64b4969-a388-46cb-8b96-efc9b91a05a1",
                goodsName: "冷冻去皮鸡大胸500g",
                description: "低卡低热细嫩鸡肉，健身党必入",
                isSplit: 0,
                sn: "WOC000004491",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9b6d3415-a02a-4a99-a766-19b4b138543f.jpg",
                salableStock: 270,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a2af6cb2-5525-49f0-916e-c7cddf937f92",
                goodsName: "崇明生态鸽350g",
                description: "崇明生态饲养，专业活禽宰杀，纯天然谷物喂养",
                isSplit: 0,
                sn: "WOC000004338",
                price: 32.9,
                marketPrice: 68.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b8958166-2f9c-408c-a57a-b42c431d1a98.jpg",
                salableStock: 264,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "796ac6db-aaa6-4238-89c8-f2f18b585e73",
                goodsName: "我厨优选甲鱼（500g以上）",
                description:
                  "我厨优选甲鱼都是鲜活的甲鱼，当场验货，订单在配送时不接受退货、更改时期及地址,在下单成功后不支持非质量问题退换货。",
                isSplit: 0,
                sn: "WOC000006244",
                price: 48.8,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/132adac7-6c7b-477b-b075-953469079ff8.jpg",
                salableStock: 4,
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
                categoryId: 403,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 404,
            name: "儿童水果乳饮",
            displayIndex: 59,
            description: "",
            parentId: 4,
            path: "/4/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/55d1d30a-c2ca-4d98-b02b-96cca0df34e0.jpg",
                type: "checkicon",
                categoryId: 404
              }
            ],
            goods: [
              {
                goodsGuid: "e623a4c6-00ae-47d9-8460-61788368b619",
                goodsName: "进口香蕉6根",
                description: "菲律宾进口，来自热带雨林的香蕉，松糯香甜",
                isSplit: 0,
                sn: "WOC000002964",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62a02141-d151-475e-8cfd-eedcdc6f2b2e.jpg",
                salableStock: 92,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b6cd11d1-741b-4ce1-b4cd-51bf31d1a80b",
                goodsName: "卡士·3.3原味鲜酪乳三联杯100*3\n",
                description: "最受厨友欢迎的一款酸奶",
                isSplit: 0,
                sn: "WOC000006009",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0545768d-9e92-4d83-a563-7cc2ea4f8c99.jpg",
                salableStock: 18,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c8654fbc-0459-4c38-8fe4-3efd67336cf5",
                goodsName: "卡士·餐后一小时风味发酵乳",
                description: "助消化的好酸奶",
                isSplit: 0,
                sn: "WOC000006440",
                price: 13.8,
                marketPrice: 15.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ef93e2cd-ba27-41af-a930-c49cfe561f85.jpg",
                salableStock: 18,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a60d605c-6216-4477-877a-9647810ccfbc",
                goodsName: "越南红心火龙果2粒装(小果350g以上)",
                description: "玫瑰色鲜红果肉，比白心火龙果更甜",
                isSplit: 0,
                sn: "WOC000005663",
                price: 19.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c5914681-97a2-4795-ae0d-dc4de0516a44.jpg",
                salableStock: 50,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "50807436-71b8-4cb4-b475-9a9228507667",
                goodsName: "韩国原装进口延世牛奶（大原味）1000ml",
                description: "进口直送 浓醇鲜香",
                isSplit: 0,
                sn: "WOC000005152",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/945de6ce-2205-44c0-8fb6-458f961fc8a5.jpg",
                salableStock: 132,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "51ffa3da-afda-4241-ad0a-a9e68182f204",
                goodsName: "光明莫斯利安110g*18盒/提杯装原味酸奶",
                description: "我厨酸奶销量TOP3",
                isSplit: 0,
                sn: "WOC000006011",
                price: 59.9,
                marketPrice: 70.2,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/68e717cb-79bc-4d7a-b46c-df417cc3d744.jpg",
                salableStock: 51,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e7f68580-c0fd-4709-89e4-4a5a0e7e2dba",
                goodsName: "养乐多100g装5瓶组",
                description: "饭后来一瓶，绝对爽歪歪！",
                isSplit: 0,
                sn: "WOC000002490",
                price: 12.5,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/87e827a8-3a12-4f73-a3d0-b8e224667900.jpg",
                salableStock: 75,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "78eea28a-8033-490f-aaa5-d360cdcb3603",
                goodsName: "养乐多活菌型乳酸菌乳饮品（低糖）500g",
                description: "低糖更健康，畅饮无负担",
                isSplit: 0,
                sn: "WOC000003170",
                price: 13.5,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/08bce659-c389-4e58-b220-5017fe2a627f.jpg",
                salableStock: 27,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "75a5dee2-2298-41ec-8a94-3586d89ca76a",
                goodsName: "光明优+纯牛奶（礼盒装）250ml*12盒/提",
                description: "高品质的好牛奶，盒装携带更方便！",
                isSplit: 0,
                sn: "WOC000001419",
                price: 49.9,
                marketPrice: 72.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d71519ce-e606-464d-8121-deffeb91909a.jpg",
                salableStock: 102,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "54e9303c-c03a-4f40-a395-5cc6ae61657b",
                goodsName: "蒙牛特仑苏纯牛奶250ml12瓶装",
                description: "奶中新贵，不是所有牛奶都叫特仑苏",
                isSplit: 0,
                sn: "WOC000002654",
                price: 62.9,
                marketPrice: 69.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/82b332a7-1b59-48f3-9d5b-69823f30f29e.jpg",
                salableStock: 50,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ebc66c58-e4f2-4d22-93e6-cce10c8c7425",
                goodsName: "A2全脂鲜牛奶1000ml装",
                description: "来自澳大利亚的好牛奶",
                isSplit: 0,
                sn: "WOC000006082",
                price: 49.9,
                marketPrice: 59.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f8f2d69e-6259-46d3-8fd2-a325bd3fc6d1.jpg",
                salableStock: 7,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "62a87c67-8583-403c-9b9f-c8ba45362fb0",
                goodsName: "光明莫斯利安钻石包原味酸牛奶200g*12盒/提",
                description: "人人都知道的酸奶，无限回购",
                isSplit: 0,
                sn: "WOC000001417",
                price: 58.8,
                marketPrice: 69.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/73e40d4f-b1f1-4597-8ba3-540d140a9e9a.jpg",
                salableStock: 38,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2712ff34-bd9c-4d72-ada7-e24a39022d7d",
                goodsName: "蒙牛纯甄酸牛奶200g12瓶装",
                description: "好酸奶  不添加",
                isSplit: 0,
                sn: "WOC000002655",
                price: 55.9,
                marketPrice: 66.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b9355369-5e32-41f1-8da9-55940f4a5916.jpg",
                salableStock: 60,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cee3841b-c02e-44de-81dd-8e683ad48e42",
                goodsName: "卡士·原态酪乳三联杯125*3\n",
                description: "口感更浓稠细腻，棒呆！",
                isSplit: 0,
                sn: "WOC000006008",
                price: 25.9,
                marketPrice: 32.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/97e2297f-4883-4daf-a9fa-74a878a8591e.jpg",
                salableStock: 9,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f1547508-ba8b-4c91-8b16-6024059c563c",
                goodsName: "卡士·120g原味鲜酪乳三联杯120*3\n",
                description: "厨友评论都说好",
                isSplit: 0,
                sn: "WOC000006010",
                price: 11.9,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fab7e6af-4905-4a93-855f-848520a07db9.jpg",
                salableStock: 21,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d1909016-46e4-46e5-a7c2-0d441244d539",
                goodsName: "墨西哥牛油果4粒装(单果130g以上)",
                description: "口感丝滑胜奶酪，美味堪比三文鱼",
                isSplit: 0,
                sn: "WOC000007292",
                price: 47.9,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ee1482a-b6f5-413c-a3a6-8d1f5d08ce7c.jpg",
                salableStock: 50,
                categoryId: 404,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605340,
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
