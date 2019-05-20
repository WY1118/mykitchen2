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
      titlename: "餐馆名菜",
      wrappernav: [
        "本帮菜",
        "苏/浙菜",
        "粤菜",
        "川/湘菜",
        "北方菜/鲁菜",
        "东南亚风味",
        "日韩菜",
        "西餐",
        "烘焙工具"
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
            id: 1260,
            name: "本帮菜",
            displayIndex: 9,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4708eb00-5959-4e8d-a44e-84817368396e.jpg",
                type: "checkicon",
                categoryId: 1260
              }
            ],
            goods: [
              {
                goodsGuid: "8ec8872b-56bf-4bfe-8ed1-cc76f8eacfc0",
                goodsName: "老上海油爆虾",
                description: "外脆里嫩，略带酸甜，来不及用筷子就想直接上手",
                isSplit: 0,
                sn: "WOC000007130",
                price: 32.9,
                marketPrice: 32.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4fb56747-3d97-487f-9d76-db6a6e97d224.jpg",
                salableStock: 997,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "8ec8872b-56bf-4bfe-8ed1-cc76f8eacfc0",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4a880863-3a92-4720-8de8-44c5f9d09969.png",
                    labelType: 1,
                    createTime: 1556183840
                  }
                ]
              },
              {
                goodsGuid: "e4668bb6-6676-48a8-90ae-00eabc866d9b",
                goodsName: "美极时蔬炒牛蛙",
                description: "超人气！新鲜活杀牛蛙块，极致细腻嫩滑，爽呆呆",
                isSplit: 0,
                sn: "WOC000004361",
                price: 38.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7310503-602c-44ab-baa3-b5cf0b6728b3.jpg",
                salableStock: 50,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e97f2ac3-62f1-4341-9ea1-2cfd7c366bdb",
                goodsName: "糟溜鱼片",
                description: "经典鲁菜！喝醉后的鱼肉，绝对令人着迷",
                isSplit: 0,
                sn: "WOC000002186",
                price: 25.9,
                marketPrice: 32.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9b870125-0ebe-4edb-bf13-9ffd87ea5161.jpg",
                salableStock: 998,
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "05dc100d-c6b0-4202-ab09-c73affc70ca0",
                goodsName: "香菜鱼丸汤",
                description: "鱼丸和汤一个都不放过！",
                isSplit: 0,
                sn: "WOC000306",
                price: 14.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/35229e9c-296d-447d-8539-489954d0f7fb.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "21fe4151-32df-4b49-86e1-8c7e697cf34e",
                goodsName: "阿婆芋艿炖老鸭",
                description: "【5分钟做菜】江南中秋第一汤！芋头粉面鸭肉酥",
                isSplit: 0,
                sn: "WOC000007464",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/51e92744-ff87-4a60-ab69-481b99ad455e.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3bb85368-07d9-49cc-9f59-f68fab2feb01",
                goodsName: "海派京酱肉丝",
                description: "知名京菜蜕变诱人海派风！用饼皮包着吃，老嗲了",
                isSplit: 0,
                sn: "WOC000005145",
                price: 28.0,
                marketPrice: 28.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e0cc2590-4070-4be0-bd22-977ae52f0d91.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "55d496a9-dabd-4ed3-98c5-077b59485c78",
                goodsName: "本帮糖醋黄鱼【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008167",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/26ca001e-0b0f-43e3-9b3d-c4877a784525.jpg",
                salableStock: 0,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "baf8f3af-c9fa-4788-8602-e24207f2a6e4",
                goodsName: "蟹黄豆腐",
                description: "真蟹粉！10分钟搞定特色京菜，滑嫩鲜香，绝对光盘",
                isSplit: 0,
                sn: "WOC000004222",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0eaaff0d-3493-4537-ab46-0595ad35aff5.jpg",
                salableStock: 30,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e20b848b-1459-4f08-bae8-a73101e05616",
                goodsName: "荠菜肉馅",
                description: "味道都调好了，直接省下一半时间！",
                isSplit: 0,
                sn: "WOC000004000",
                price: 22.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fb38c876-d177-4b9b-a022-7f658edb38ea.jpg",
                salableStock: 0,
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aaded3d3-0271-4f53-bf33-b16ac362ced7",
                goodsName: "椒盐排条",
                description: "经典上海菜！外焦里嫩，口感咸香，停不下口",
                isSplit: 0,
                sn: "WOC000001395",
                price: 35.0,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/788afa37-7fee-4753-8c14-d1a4fd38ff40.jpg",
                salableStock: 20,
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1c24e137-7a9c-4134-b6f1-f592a0d618f5",
                goodsName: "可乐鸡翅",
                description: "【5分钟做菜】红亮浓郁甜津津，剩下一个算我输！",
                isSplit: 0,
                sn: "WOC000002750",
                price: 28.8,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1a739a65-ca3c-4a09-ba14-57d5fe0f8d6c.jpg",
                salableStock: 30,
                categoryId: 1260,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd778451-d645-4785-bca5-f8a5fb46fcbe",
                goodsName: "香菇肉馅500克",
                description: "便捷调味肉馅，香郁柔滑",
                isSplit: 0,
                sn: "WOC000003999",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/34165e54-a045-483f-b6e1-acec2e61931c.jpg",
                salableStock: 171,
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8cbd6bab-5d86-4eb4-bed0-6663eaaba06e",
                goodsName: "番茄鱼",
                description: "满满维生素+不饱和脂肪酸！美味、健康家常菜",
                isSplit: 0,
                sn: "WOC000003683",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7480d8b7-4dd2-4615-9124-5966eed184be.jpg",
                salableStock: 500,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14b1596a-348a-4f80-925e-e9108630236c",
                goodsName: "海派鱼香肉丝",
                description: "特制本帮鱼香汁，爱本帮风味的一定别错过",
                isSplit: 0,
                sn: "WOC000002607",
                price: 18.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/310b9080-4621-424b-979d-26e09b4f576a.jpg",
                salableStock: 98,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dfeefcd9-78d5-4e86-8219-9cf05f459edd",
                goodsName: "蟹黄粉丝煲",
                description: "鲜香爽滑的江浙名菜",
                isSplit: 0,
                sn: "WOC000004513",
                price: 22.0,
                marketPrice: 22.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3f9ef5cc-08d9-4d6e-bf54-acd779e8db7d.jpg",
                salableStock: 50,
                categoryId: 1260,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7fa48a7e-73ab-4663-a4d9-2288b3803c6a",
                goodsName: "罗汉上素",
                description: "汉族传统素菜，营养荟萃",
                isSplit: 0,
                sn: "WOC000004481",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7b971ecc-3536-42fb-a761-97668c9c4c46.jpg",
                salableStock: 500,
                categoryId: 1260,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "52848633-77b8-4109-acfa-7bf6fc8386a5",
                goodsName: "鸡汁百叶包",
                description: "懒人美味蒸菜，照样鲜到没商量！",
                isSplit: 0,
                sn: "WOC000004972",
                price: 22.9,
                marketPrice: 28.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b88738bc-1043-403e-a9c1-84b8bf316b1d.jpg",
                salableStock: 10,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "10b9d696-e36f-40d0-ac19-8b31ac92f13c",
                goodsName: "乡里红烧素鸡",
                description: "比肉还好吃的素食美味！汁浓味甜，配饭又下酒",
                isSplit: 0,
                sn: "WOC000006971",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e54f7d3d-55a7-43b3-b90e-75bd2c004fc0.jpg",
                salableStock: 20,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "30c540da-ee15-46c9-acf1-4b086ac49d90",
                goodsName: "刀豆炒土豆",
                description:
                  "浓油赤酱的本帮佳肴。嫩刀豆肉厚鲜美，可口清香 。土豆绵软香甜，诱人食欲大开。",
                isSplit: 0,
                sn: "WOC000377",
                price: 12.5,
                marketPrice: 15.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/da6b8407-c78f-4748-acb4-171d7bbc1014.jpg",
                salableStock: 997,
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ebb7d092-33c0-478c-a962-2e8b5221698a",
                goodsName: "老上海什锦烩",
                description: "【5分钟做菜】汤汁金黄，蟹香浓郁",
                isSplit: 0,
                sn: "WOC000007023",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8bd75bd4-89e6-4baf-8b05-3873e2f163fa.jpg",
                salableStock: 50,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0c952be6-17d7-47fc-9a25-bb096cec871b",
                goodsName: "老上海油面筋塞肉",
                description: "上海姆妈拿手菜，魔都小囡都爱吃",
                isSplit: 0,
                sn: "WOC000007068",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7fbd05cd-11ac-4f9e-90d9-ab98e015f767.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eb20e6a6-e3d6-4d37-b99d-149acfa76542",
                goodsName: "阿婆板栗烧鸡",
                description: "【5分钟做菜】一口香浓，就像外婆给你满满的爱",
                isSplit: 0,
                sn: "WOC000007135",
                price: 36.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/56e11bbb-c650-4864-8020-fd018ae8aceb.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
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
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
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
                categoryId: 1260,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bcd4322d-0c9a-4b5d-a264-a44a4869f029",
                goodsName: "沪上风味金钱肚",
                description: "名菜新吃！爽滑有嚼劲儿，更适合怕辣党星人",
                isSplit: 0,
                sn: "WOC000006806",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6da7f497-f15f-4a29-b095-3565fb8576d4.jpg",
                salableStock: 999,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "28c188f0-c255-4f2f-8237-95ad5077d3b0",
                goodsName: "腌笃鲜",
                description: "【10分钟做菜】本帮特色汤菜，咸鲜浓醇",
                isSplit: 0,
                sn: "WOC000001384",
                price: 32.8,
                marketPrice: 42.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1e9313c9-b4dd-4ea8-b7ed-1379519b30df.jpg",
                salableStock: 20,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1b2d1390-63c2-4eb5-86f8-3dbc32420544",
                goodsName: "番茄肥牛",
                description: "",
                isSplit: 0,
                sn: "WOC000007770",
                price: 43.9,
                marketPrice: 49.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/60012502-6bc2-41a0-ac76-1ad1f0ef1e62.jpg",
                salableStock: 200,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "149781dc-a24e-4765-b478-42c9021acfe0",
                goodsName: "本帮糖醋黄鱼",
                description: "",
                isSplit: 0,
                sn: "WOC000007817",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/01069e92-3408-45a3-ac18-3e4ec7ea44a6.jpg",
                salableStock: 22,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b7850f1a-f71d-4efa-a8b1-4c48f64ff87b",
                goodsName: "三鲜砂锅",
                description: "本帮经典暖汤，喝完全身暖和和",
                isSplit: 0,
                sn: "WOC000007880",
                price: 42.5,
                marketPrice: 49.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bd0f40e6-0469-45b3-b6e9-d97dd48bad4f.jpg",
                salableStock: 2,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4d3953fa-eaaf-4529-aaee-66553e890106",
                goodsName: "蟹粉蹄筋",
                description: "本帮酒席菜，蹄筋一抿就化",
                isSplit: 0,
                sn: "WOC000007882",
                price: 39.9,
                marketPrice: 49.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c56f9fe-beff-4b05-a996-6ed942372996.jpg",
                salableStock: 20,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f163eef5-3331-4e3d-bf2e-9758376001ec",
                goodsName: "阿婆芋艿炖老鸭【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008166",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/b84d2e4b-835f-4745-96b5-e0e37c34cd0c.jpg",
                salableStock: 0,
                categoryId: 1260,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1261,
            name: "苏/浙菜",
            displayIndex: 8,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/72eadb4b-e562-4d1e-9fb2-5df27604e4c4.jpg",
                type: "checkicon",
                categoryId: 1261
              }
            ],
            goods: [
              {
                goodsGuid: "5a8eebd2-d013-4657-bdc9-1d2238c58ea1",
                goodsName: "竹笋老鸭汤",
                description: "【5分钟做菜】鲜到眉毛，比餐馆更大量更低价",
                isSplit: 0,
                sn: "WOC000629",
                price: 35.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/032ca44d-0c32-4b0a-9930-b52fb18a4c06.jpg",
                salableStock: 50,
                categoryId: 1261,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dd88c7ce-7c9a-4a66-ba46-e8a72e2653f3",
                goodsName: "田园小炒皇",
                description: "田园时蔬大荟萃，清新时蔬好搭配。",
                isSplit: 0,
                sn: "WOC000004091",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fc5a0445-0263-4a66-a981-d7ae73cc1fab.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0f623883-2f31-4db8-87b0-b42245114e2e",
                goodsName: "杭椒牛柳",
                description: "因原料问题，蚝油牛肉暂时调整为黑椒牛肉",
                isSplit: 0,
                sn: "WOC000003968",
                price: 38.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6a4790ce-89a5-4af2-b238-7b31a6ac653f.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "899ecccd-4be4-486d-b76b-fbc4e62c3c44",
                goodsName: "荷塘小炒",
                description: "餐桌上的营养调色盘",
                isSplit: 0,
                sn: "WOC000001932",
                price: 12.9,
                marketPrice: 15.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e337b0d-573c-460d-809b-81cc1f65a219.jpg",
                salableStock: 998,
                categoryId: 1261,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c425547b-2512-47c6-a20a-a44ef62314bd",
                goodsName: "黑椒牛仔粒",
                description: "比吃牛肉干过瘾！香浓柔嫩，下饭下酒一口一个",
                isSplit: 0,
                sn: "WOC000003741",
                price: 35.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1604f794-09ef-4609-8d5d-b4324419dc0f.jpg",
                salableStock: 200,
                categoryId: 1261,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a932434-eb98-441b-ae64-4183ff0792b3",
                goodsName: "腰果爆鸡丁",
                description: "【5分钟做菜】上班族简单快手菜",
                isSplit: 0,
                sn: "WOC000002601",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d258922-6b56-4541-bdf8-04094a7b0979.jpg",
                salableStock: 86,
                categoryId: 1261,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "75969b32-bf47-43b4-a4af-36887b8c6547",
                goodsName: "温州招牌细粉",
                description: "温州殿堂级美食！炒粉丝的顶配版",
                isSplit: 0,
                sn: "WOC000007570",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/cde7a941-c47b-4c85-910f-66c3dc422f2c.jpg",
                salableStock: 50,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0dc000c4-ef71-48f6-9bdc-069289ee2994",
                goodsName: "手捏菜炒蘑菇",
                description: "菇香与清香的营养碰撞",
                isSplit: 0,
                sn: "WOC000004158",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/57011b73-5e0f-4d4b-aa8a-e6ef15a2bda8.jpg",
                salableStock: 30,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "61f9b0a4-2e5b-4a80-b813-b4bbad643c0a",
                goodsName: "松仁玉米粒",
                description: "高颜值的零食小菜！",
                isSplit: 0,
                sn: "WOC000437",
                price: 13.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2ce12698-12f6-4e22-9182-377a4e1824ac.jpg",
                salableStock: 100,
                categoryId: 1261,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "02c1693c-7b40-41b6-992a-1878a0563325",
                goodsName: "蟹粉煮干丝",
                description: "金黄诱人，尽享沙质鲜滋味",
                isSplit: 0,
                sn: "WOC000004571",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f738b502-1030-4009-968d-0f842a7a9544.jpg",
                salableStock: 20,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a3bf99df-3aa1-4070-86d3-cde10023d2d6",
                goodsName: "扬州干丝",
                description:
                  "淮扬名菜，干丝外加鲜虾仁，色美味更鲜，迷倒乾隆不稀奇",
                isSplit: 0,
                sn: "WOC000003803",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/386351c4-4369-4516-b213-f170cf798a21.jpg",
                salableStock: 30,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a31b6efe-9cc5-4ad2-a2ba-597574fe4508",
                goodsName: "糖醋里脊",
                description: "【5分钟做菜】外脆里嫩，酸甜可口",
                isSplit: 0,
                sn: "WOC000002494",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/6b836de2-9ebd-4db7-b9e4-91243bf63c40.jpg",
                salableStock: 49,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "06990407-618c-43ee-9e8f-c9fe61c85e25",
                goodsName: "蒜香鸭血",
                description: "蒜香浓郁，滑嫩不腥，多吃多红润",
                isSplit: 0,
                sn: "WOC000003138",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3c68bb71-0bb2-4334-8a24-0529e1d39f9a.jpg",
                salableStock: 50,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8f0d0eda-2ccf-447e-9994-77809856be68",
                goodsName: "蟹粉金汤烩菌菇",
                description:
                  "3种鲜菇在蟹粉金汤中沐浴，嫩滑柔软，何仙姑都没它鲜",
                isSplit: 0,
                sn: "WOC000007070",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b0a024bf-4c3a-4438-9705-caec1dd4ae8b.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f1584a6a-2756-49b0-b1f8-36a222571413",
                goodsName: "扬州红烧狮子头",
                description: "扬州名菜！像吃了一口有肉味儿的嫩豆腐，好吃到掉牙",
                isSplit: 0,
                sn: "WOC000007071",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c91e2c3-2a26-4110-9a96-a1436aa5f0b4.jpg",
                salableStock: 500,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "71338a46-b70a-4e7a-a896-2b1034fa3527",
                goodsName: "丰收日夏日小炒",
                description: "",
                isSplit: 0,
                sn: "WOC000007128",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/839425c6-3966-4aa9-8e8a-48706dc5f82c.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f53fefda-97a6-4fcb-8851-7d3d1ce04c82",
                goodsName: "皖南一碗香",
                description: "安徽土菜！鸡蛋伙同五花肉，消灭米饭没商量",
                isSplit: 0,
                sn: "WOC000007126",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cdb05abf-14ad-4afb-88eb-4995229887bb.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ea15bfbf-28b9-4104-889a-5a1d95b482e3",
                goodsName: "舟山芹香海鲜羹",
                description: "煲汤只会老三样可不行，这道海鲜羹绝对惊艳四座",
                isSplit: 0,
                sn: "WOC000007131",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f6cbd834-a10f-4747-a869-8e996ab09cc3.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cae3d3ba-e0cf-4e48-afc3-444f3c37aa91",
                goodsName: "酸菜爽嫩鱿鱼花",
                description: "江浙名菜，蒜香酸菜融入Q弹鱿鱼",
                isSplit: 0,
                sn: "WOC000007265",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/dfbdbfb2-67cf-4c2f-a10b-9eb6ce1b3e51.jpg",
                salableStock: 50,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b814d13e-b0db-4326-9052-b1e41c2b2e6a",
                goodsName: "响油葱爆毛芋艿",
                description: "【5分钟做菜】秋补素食一宝，可当粮食，又可作蔬菜",
                isSplit: 0,
                sn: "WOC000007516",
                price: 16.8,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f4da4285-200b-4224-b713-881f138ea7a1.jpg",
                salableStock: 999,
                categoryId: 1261,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d6d1bdac-a65e-4ed1-b7a7-d01416e29ced",
                goodsName: "家烧安徽臭鳜鱼",
                description: "越臭越香，餐厅开价100元+",
                isSplit: 0,
                sn: "WOC000007884",
                price: 89.0,
                marketPrice: 110.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7875a1b6-2f21-470b-91e8-974bde99331d.jpg",
                salableStock: 0,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8a74f643-4a67-45a8-85e3-bfe27828e0e0",
                goodsName: "响油鳝丝",
                description: "本帮餐厅必点菜，为下饭而生",
                isSplit: 0,
                sn: "WOC000007885",
                price: 37.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/a8bd3885-9a6e-4042-8965-a0561b656647.jpg",
                salableStock: 16,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4b7bbdc1-0854-4e89-942e-d2a2299c3643",
                goodsName: "阳澄湖螺蛳炒花蛤",
                description: "螺蛳已剪头",
                isSplit: 0,
                sn: "WOC000008340",
                price: 11.9,
                marketPrice: 23.8,
                picUrl:
                  "https://img.wochu.cn/upload/422b35c9-90b7-4503-950b-221b0041003a.jpg",
                salableStock: 17,
                categoryId: 1261,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1262,
            name: "粤菜",
            displayIndex: 7,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b99f5cab-4512-4e7c-b172-9589ca87a44f.jpg",
                type: "checkicon",
                categoryId: 1262
              }
            ],
            goods: [
              {
                goodsGuid: "60fbea98-972e-41f6-a409-e68dbe569c22",
                goodsName: "蚝油牛肉",
                description: "鲜香能量餐，10min即成！",
                isSplit: 0,
                sn: "WOC000340",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/c4ff2257-d839-457c-98c9-9f6caa30a1d6.jpg",
                salableStock: 30,
                categoryId: 1262,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1dee46dd-dbb1-42f7-9985-d24b33a1d5c4",
                goodsName: "杏鲍菇嫩滑牛仔粒",
                description: "超高好评！超高回购率！香浓滑嫩，滑到家",
                isSplit: 0,
                sn: "WOC000005976",
                price: 34.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f4904cff-fbb7-4961-b7a9-b081e6a516dc.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "797b064c-a9b9-4b6b-8c26-3d86391a5676",
                goodsName: "浓香麦仁筒骨汤",
                description: "加入小麦仁的浓浓筒骨汤",
                isSplit: 0,
                sn: "WOC000007881",
                price: 27.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/78d628e2-648d-4bff-8224-895532618291.jpg",
                salableStock: 30,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "797b064c-a9b9-4b6b-8c26-3d86391a5676",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fdc2df6a-099c-4d9e-acce-3458ec56a2f4.png",
                    labelType: 1,
                    createTime: 1556182997
                  }
                ]
              },
              {
                goodsGuid: "675f9545-31b7-4bfa-88ec-51d24af2ba39",
                goodsName: "蒜蓉开片蒸南美熟虾",
                description:
                  "粤菜经典！海虾之鲜，佐以浓浓蒜香，连虾壳都能吃下肚",
                isSplit: 0,
                sn: "WOC000007458",
                price: 35.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3c251dd2-2f6f-48a6-9979-996a2d809e90.jpg",
                salableStock: 50,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "13245f4d-f4da-419a-85f9-813864ec346d",
                goodsName: "美极杏鲍菇滑肉片",
                description: "",
                isSplit: 0,
                sn: "WOC000006882",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/144fc552-8da2-4ba5-9030-4c7a846c9631.jpg",
                salableStock: 50,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "45febb07-621a-419e-8dda-ca3f9e31a02d",
                goodsName: "白灼芥兰",
                description:
                  "一焯一淋，清新蔬菜瞬间滋味无穷，5分钟的快手素菜，挑食者也爱。",
                isSplit: 0,
                sn: "WOC000003345",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ff3147e2-e9f8-45fe-9b2e-2df65446a3dd.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a3594da5-fea6-4435-9af4-f72eac998fcb",
                goodsName: "懒人三杯鸡",
                description: "【5分钟做菜】赫赫有名台湾菜！酱红油亮，肉香味浓",
                isSplit: 0,
                sn: "WOC000002954",
                price: 32.9,
                marketPrice: 39.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/860a62c8-b08a-47fa-8bd8-3a597ac6fe8e.jpg",
                salableStock: 20,
                categoryId: 1262,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c88299d0-57e0-487f-b5e8-8de4402b65c6",
                goodsName: "猪肚鸡汤",
                description: "",
                isSplit: 0,
                sn: "WOC000003042",
                price: 39.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c9259587-6456-4add-8513-39dd24ba42a4.jpg",
                salableStock: 111,
                categoryId: 1262,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "400e3e7c-af52-484b-9034-36134abc1190",
                goodsName: "莲藕炖老鸭",
                description: "",
                isSplit: 0,
                sn: "WOC000004593",
                price: 21.5,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/98fada68-fc0c-42f6-82a9-49b1d441421c.jpg",
                salableStock: 100,
                categoryId: 1262,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0da933c2-1d48-491c-808d-11aec31d6bc7",
                goodsName: "咖喱鱼丸",
                description: "香港街头小吃台柱子，在家10min速成",
                isSplit: 0,
                sn: "WOC000002368",
                price: 20.5,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/40697c33-4a72-4e58-b8ba-c98d1813f12d.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9b80e575-69aa-4313-9ce0-d1748e9a543f",
                goodsName: "蚝油生菜",
                description: "经典粤菜，生菜鲜嫩可口，清鲜嫩滑！",
                isSplit: 0,
                sn: "WOC000003682",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c24e2664-1721-4fbe-846e-33f2796b3629.jpg",
                salableStock: 998,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4c8ae86c-9ed1-4853-a873-a0c1522c37d8",
                goodsName: "上汤娃娃菜",
                description: "袖珍白菜的鲜美吃法",
                isSplit: 0,
                sn: "WOC000003734",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/960578d5-4b8e-4563-9e4b-57467ee6f4c9.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bc1bedbd-6769-4af5-9f80-aae3ddb31b84",
                goodsName: "XO酱炒饭伴侣",
                description: "懒人必备炒饭伴侣！",
                isSplit: 0,
                sn: "WOC000006531",
                price: 10.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/24251fba-2d06-4a3d-9f57-c1d4414e1606.jpg",
                salableStock: 50,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f91bd3e3-ac40-4705-a9b1-834a0cee31d7",
                goodsName: "三杯杏鲍菇",
                description: "",
                isSplit: 0,
                sn: "WOC000003091",
                price: 12.8,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8df3748-de45-4fe9-99c3-70d8c252c7db.jpg",
                salableStock: 20,
                categoryId: 1262,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
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
                categoryId: 1262,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "452c3d67-1643-4a10-913d-e4014d587b20",
                goodsName: "水晶香梨咕咾虾球",
                description: "港式茶餐厅必点，大虾酸甜开胃",
                isSplit: 0,
                sn: "WOC000007219",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/44d996d6-9b1d-42e7-b9bb-7705a86e9ac3.jpg",
                salableStock: 20,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4443da6b-b6f3-4de3-91b1-204c63ace8e7",
                goodsName: "港式豆豉蒸仔排",
                description: "【5分钟做菜】港式早茶名点，仔排的无油烟烧法",
                isSplit: 0,
                sn: "WOC000007323",
                price: 34.5,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b744cab9-54c2-4c8c-961b-94d6e5cce9ca.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "25141150-6f22-4651-8489-7d23f460b346",
                goodsName: "港式XO酱群菇牛柳",
                description: "牛柳吃出海鲜味儿，顶配XO酱一口入魂",
                isSplit: 0,
                sn: "WOC000007325",
                price: 29.9,
                marketPrice: 59.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0fa6a651-293e-4374-9376-c907027a8882.jpg",
                salableStock: 50,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "25141150-6f22-4651-8489-7d23f460b346",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/44376414-d78d-45e3-8830-b5a7782cb035.png",
                    labelType: 1,
                    createTime: 1556075873
                  }
                ]
              },
              {
                goodsGuid: "5c1e0acf-85bd-4b48-8fef-7308c00cba70",
                goodsName: "水晶香梨咕咾肉",
                description: "【5分钟做菜】广东名菜，香梨小清新搭配肉肉重口味",
                isSplit: 0,
                sn: "WOC000007520",
                price: 26.8,
                marketPrice: 32.9,
                picUrl:
                  "https://img.wochu.cn/upload/f2474ffe-5602-42bf-a836-f6f26de56ac6.jpg",
                salableStock: 20,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c542edfe-4485-4ec9-ba6c-199cfa9a844c",
                goodsName: "招牌黑椒牛仔骨",
                description: "",
                isSplit: 0,
                sn: "WOC000007571",
                price: 45.9,
                marketPrice: 55.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c0878e56-ad1a-4966-84f1-ad9ea1e0ca5f.jpg",
                salableStock: 100,
                categoryId: 1262,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fcf70ff4-5f06-42a7-99f1-9dcc09e76e1c",
                goodsName: "咸肉鲜虾娃娃菜",
                description: "",
                isSplit: 0,
                sn: "WOC000008091",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/6de30e6d-8223-4840-8ab2-01f8a1fa8d03.jpg",
                salableStock: 999,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6c05d637-a509-4fb8-bb61-89acbc051626",
                goodsName: "XO酱小瓜炒鸡柳",
                description: "",
                isSplit: 0,
                sn: "WOC000008450",
                price: 18.8,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/a07668f7-bd6f-4fe0-b45f-23fd4a89d810.jpg",
                salableStock: 997,
                categoryId: 1262,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1263,
            name: "川/湘菜",
            displayIndex: 6,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/dec5c9e1-0470-4f2d-8af7-51987cfb0e5d.jpg",
                type: "checkicon",
                categoryId: 1263
              }
            ],
            goods: [
              {
                goodsGuid: "1449856f-099f-4453-bbcc-750140cf2098",
                goodsName: "酸豆角肉末",
                description: "酸香让人忍不住流口水，下饭神器",
                isSplit: 0,
                sn: "WOC000002244",
                price: 14.9,
                marketPrice: 18.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7ae15c26-1f4a-429e-8f99-b5dc617af5fd.jpg",
                salableStock: 998,
                categoryId: 1263,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7a5bf763-1128-4947-a544-8cae730789c4",
                goodsName: "干锅千页豆腐",
                description: '"比肉还好吃的下饭菜！Q弹爽嫩，外焦里嫩 "',
                isSplit: 0,
                sn: "WOC000007019",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c9cc0203-8f92-4181-aa6b-2ba6824ed4e0.jpg",
                salableStock: 500,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d0f3bdb6-c548-46c6-b29a-4d0095892a39",
                goodsName: "香菇面筋煲",
                description: "浓油赤酱本帮菜，面筋吃出肉味来",
                isSplit: 0,
                sn: "WOC000001375",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/281c2881-1736-44b7-9b14-1661ef44d514.jpg",
                salableStock: 30,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "204741df-844c-4a76-b37a-a2ff51e419b9",
                goodsName: "青花椒砂锅鱼",
                description: "网红名菜！肉嫩滑汤鲜麻，无需排长队，在家就能吃",
                isSplit: 0,
                sn: "WOC000003003",
                price: 26.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d8881ad-2c0d-429e-9aa0-5c983b9a1bce.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "970dda30-3158-4d59-994c-38a950736e1c",
                goodsName: "鱼香茄子",
                description: "软糯浓香，犹胜肉食",
                isSplit: 0,
                sn: "WOC000003679",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/0be0770f-efac-4929-aeb3-63d0a69297f2.jpg",
                salableStock: 999,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c141502-d14c-4e9e-a1aa-9b47e9032597",
                goodsName: "酸菜鱼",
                description: "【5分钟做菜】一根刺都没有大块鱼肉，酸爽开胃",
                isSplit: 0,
                sn: "WOC000002552",
                price: 38.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1ffb3065-a417-418e-a2d1-5faf86c95bf0.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7ce9a62e-9d06-4094-838b-d1fdb9b256ab",
                goodsName: "酸辣蕨根粉（3人份）",
                description: "四川名小吃！滑嫩爽口，微辣鲜香~~",
                isSplit: 0,
                sn: "WOC000004282",
                price: 16.9,
                marketPrice: 21.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17e27a45-2db7-43a2-ac76-f171ff865b81.jpg",
                salableStock: 30,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "029dc19f-8b3a-476f-9bf3-2072c8009ea5",
                goodsName: "QQ酸汤鱼",
                description:
                  "一道菜搞定一餐！酸汤鱼+乌冬面的cp组合，Q滑更甚，料包中含有微量转基因大豆油",
                isSplit: 0,
                sn: "WOC000004572",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5f0a2ba8-c492-42c0-acd4-79501a3f9d94.jpg",
                salableStock: 40,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1eba778a-cf26-4c96-9249-8f03907a261b",
                goodsName: "酸辣汤",
                description: "酸辣开胃，闻闻口水就忍不住往下流呀",
                isSplit: 0,
                sn: "WOC000369",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cdd17b33-893e-4063-b890-85ae749471f6.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b7f6d358-9cbf-47f1-a3cf-861028e515a8",
                goodsName: "水煮牛肉",
                description: "【5分钟做菜】地道川香菜！重口星人必爱",
                isSplit: 0,
                sn: "WOC000289",
                price: 44.5,
                marketPrice: 55.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4bd29ac1-6d6c-4845-9aea-01092ec67442.jpg",
                salableStock: 30,
                categoryId: 1263,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3511baa6-6210-4d5c-945a-e3379f3e1163",
                goodsName: "酸汤肥牛",
                description: "经典川菜！酸辣开胃，光闻闻就要流口水啦~~",
                isSplit: 0,
                sn: "WOC000003004",
                price: 35.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/49d392bc-0be6-457a-bd1e-8ef03b530ec0.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3180b098-0550-4715-96ae-b3c2eecc4195",
                goodsName: "毛血旺",
                description: "【10分钟做菜】重庆江湖菜鼻祖",
                isSplit: 0,
                sn: "WOC000004092",
                price: 36.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/649697ec-447e-4f64-b68f-d1ac2fcaa805.jpg",
                salableStock: 30,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aa19ce54-2b87-46ce-9258-3f9ea9d1ff43",
                goodsName: "麻婆豆腐",
                description: "一道耳熟能详的著名川菜",
                isSplit: 0,
                sn: "WOC000002557",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7088c5eb-7c5f-455a-b36c-b38bd1835701.jpg",
                salableStock: 49,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cf31aaf3-107a-49f2-98a8-ec94b19d5e64",
                goodsName: "回锅肉",
                description: "川菜之首，肥而不腻，吃一次必有第二次",
                isSplit: 0,
                sn: "WOC000383",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5d3fb144-b682-48cf-9fe7-31c966e06c5f.jpg",
                salableStock: 999,
                categoryId: 1263,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "081253dd-a252-4fc6-be0c-da2c698a322a",
                goodsName: "水煮鱼片",
                description: "红油麻辣的川味经典。",
                isSplit: 0,
                sn: "WOC000330",
                price: 35.8,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bd6521fc-0920-4bc9-baeb-534bf40c50d1.jpg",
                salableStock: 100,
                categoryId: 1263,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "acba71ef-9d4e-4372-abc2-2b0329b16f30",
                goodsName: "干锅花菜",
                description: "花菜一点都不“菜”！各种营养素，多吃没坏处",
                isSplit: 0,
                sn: "WOC000004515",
                price: 16.5,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/80286916-6a8e-4399-85dd-9b5457fa5e0c.jpg",
                salableStock: 997,
                categoryId: 1263,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "32fad9b5-7374-4519-ae67-5d11f1323c7b",
                goodsName: "藤椒金针肥牛",
                description: "10min搞定能宴客的菜，不输餐厅品质",
                isSplit: 0,
                sn: "WOC000005094",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5ad43569-d7bb-4e49-8f5a-7827d6fb8d80.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "75717229-d52c-43a6-b3ca-0ac0e9823d5f",
                goodsName: "湘味小炒肉",
                description:
                  "肥瘦相间五花肉片，焦香不腻，一口饭一片肉，倍儿香！",
                isSplit: 0,
                sn: "WOC000006884",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ec6930e-a308-47a1-ba37-fa81e3b19067.jpg",
                salableStock: 999,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a47253a4-5d03-4744-b6cb-7658678c32c4",
                goodsName: "网红重庆酸菜鸡",
                description:
                  "网红名菜！鸡肉这么烧，打开味蕾新世界，连汤都想喝光",
                isSplit: 0,
                sn: "WOC000006879",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a9e08027-ae08-4400-aa16-f04e31e511fe.jpg",
                salableStock: 30,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "99f9a10f-323c-4aaa-964e-6854635b6625",
                goodsName: "经典干煸四季豆",
                description: "焦香淡淡，口感脆嫩，下饭指数超越老干妈",
                isSplit: 0,
                sn: "WOC000007129",
                price: 20.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2c7337f8-6409-4aaf-a58e-b6ab5a8947ba.jpg",
                salableStock: 999,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ebd3d559-d466-47ca-b982-fb15da790ad7",
                goodsName: "蜀香冒菜",
                description: "重口味最爱的Q版火锅，6种食材吃过瘾",
                isSplit: 0,
                sn: "WOC000007134",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d880f40f-5529-46d4-bb82-9ead8beead0f.jpg",
                salableStock: 99,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0d81f7b7-3811-4067-a256-5b5105d03ed0",
                goodsName: "干锅湘味肥肠",
                description: "湖南名菜，肥肠微辣有嚼头",
                isSplit: 0,
                sn: "WOC000007223",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/758e56ba-6c27-4ae8-bf4a-e983016b81d8.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "811526ac-51a8-4a56-a64a-4728731cd5f5",
                goodsName: "辣子鸡丁",
                description: "四川名菜，无骨鸡胸肉微辣过瘾",
                isSplit: 0,
                sn: "WOC000007264",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b562a1ef-45cc-4d17-93df-eac422a50e08.jpg",
                salableStock: 999,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "afa66672-a579-469c-8fa5-8c520df75954",
                goodsName: "开胃酸汤牛蛙",
                description:
                  "开胃的酸、激情的辣，轻轻一咬，爆浆“鲜肉弹”在舌尖炸裂",
                isSplit: 0,
                sn: "WOC000007459",
                price: 35.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/556e26f5-fb7b-4685-8f53-e1d744b34f68.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dc35eda6-2257-4f02-a56b-a564217736db",
                goodsName: "湘西外婆菜",
                description: "湘西下饭名菜，一菜汇集人生百味",
                isSplit: 0,
                sn: "WOC000007566",
                price: 17.5,
                marketPrice: 21.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b98e4a84-d971-4f35-b560-7eb4fafc7d3b.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3a81e884-1c96-4ad2-ada6-63a4d6d29249",
                goodsName: "青花椒砂锅牛蛙",
                description: "【5分钟做菜】弹嫩牛蛙遇到麻香青花椒",
                isSplit: 0,
                sn: "WOC000007683",
                price: 45.9,
                marketPrice: 45.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9d9f96fe-f4a4-48ab-8146-494210a4732e.jpg",
                salableStock: 50,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ae0e30fd-ce42-4a19-993d-64b95e74f1ad",
                goodsName: "宫保鸡丁【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008169",
                price: 22.9,
                marketPrice: 24.0,
                picUrl:
                  "https://img.wochu.cn/upload/2ff13ff5-a510-4a7c-b5e2-8101a4eed80d.jpg",
                salableStock: 0,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9f4999b5-901d-41cb-89b5-872e7373b149",
                goodsName: "椒麻素鲍鱼",
                description: "",
                isSplit: 0,
                sn: "WOC000008448",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/627f117a-bf14-4636-9ea7-050e6e48fc88.jpg",
                salableStock: 20,
                categoryId: 1263,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1264,
            name: "北方菜/鲁菜",
            displayIndex: 6,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4a82a646-5e8f-4ad9-b223-726133944922.jpg",
                type: "checkicon",
                categoryId: 1264
              }
            ],
            goods: [
              {
                goodsGuid: "60830018-d559-4834-88d1-04a58645c87f",
                goodsName: "珍味大盘鸡",
                description: "",
                isSplit: 0,
                sn: "WOC000006534",
                price: 35.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/c3de7c4f-c010-4a53-bfbb-27189cb624b3.jpg",
                salableStock: 100,
                categoryId: 1264,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1c3d1d4f-f990-49e7-9716-56c89ac868ed",
                goodsName: "孜然羊肉",
                description: "精选羊羔肉，质地滑嫩无膻！鲜辣咸香，5min速成",
                isSplit: 0,
                sn: "WOC000003509",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9639418e-ca04-4ad1-b81b-94e887fc93ad.jpg",
                salableStock: 100,
                categoryId: 1264,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "13c863f7-b800-41c9-86b6-8b5674eb5b43",
                goodsName: "黄焖鸡",
                description: "【5分钟做菜】网红中的战斗鸡！大块鲜嫩鸡腿肉",
                isSplit: 0,
                sn: "WOC000647",
                price: 22.9,
                marketPrice: 28.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e48330d8-363f-4ab3-9e35-4563d21e0d2a.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c4f55f47-8ab3-4293-820b-9b329c88da11",
                goodsName: "酱爆芹香鲜鱿卷 ",
                description: "清香袭人，10min速成的Q弹鲜嫩",
                isSplit: 0,
                sn: "WOC000006486",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48839fe7-f20e-42e2-8c84-9e89b59e157f.jpg",
                salableStock: 997,
                categoryId: 1264,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5b17a3e7-b7ec-4468-92fe-c930907ee054",
                goodsName: "经典皮蛋豆腐",
                description: "入口微微凉感，豆腐超嫩超滑",
                isSplit: 0,
                sn: "WOC000006211",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/778da8e6-16e0-4fcc-ac87-305a668023db.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "007cd017-119a-418c-9ae4-7526e6c1bdef",
                goodsName: "地三鲜",
                description: "特色东北菜，鲜美味浓营养多",
                isSplit: 0,
                sn: "WOC000378",
                price: 11.9,
                marketPrice: 11.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/85ead11c-a148-4efe-a3c5-a3338aecea78.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6f1f92ed-5d05-4c86-89ff-188445e2f16b",
                goodsName: "葱爆羊肉",
                description: "精选羔羊肉，滑嫩无膻！",
                isSplit: 0,
                sn: "WOC000002495",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e41bcf22-52e3-44b7-8499-19a02a28178e.jpg",
                salableStock: 100,
                categoryId: 1264,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "70334dea-56e6-408b-8099-d23157bee8bb",
                goodsName: "木须肉",
                description: "鲁菜经典，6种食材，营养好下饭",
                isSplit: 0,
                sn: "WOC000002241",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e9577019-7833-434a-acbe-96e3e42aa933.jpg",
                salableStock: 500,
                categoryId: 1264,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1c0f62c0-936b-4ff6-8cf2-f549bc5571fa",
                goodsName: "清爽嫩香炒合菜",
                description: "鲜蔬大杂烩！6种食材吃过瘾，一口太饱满",
                isSplit: 0,
                sn: "WOC000006969",
                price: 11.9,
                marketPrice: 11.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/409df955-f4b1-4e15-8ad1-8cebb7c8b0f5.jpg",
                salableStock: 50,
                categoryId: 1264,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bbe6c874-5c9b-4dce-912b-4a1ea8f202f5",
                goodsName: "醋溜土豆丝",
                description: "家常菜的宠儿，酸爽超下饭",
                isSplit: 0,
                sn: "WOC000429",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9453025b-cee1-4954-b07b-735a38522a7f.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "46d2fd97-5355-494f-98c6-a8670a9e3359",
                goodsName: "东北乱炖大丰收",
                description: "东北人请客必备，煮一锅，够一桌",
                isSplit: 0,
                sn: "WOC000007270",
                price: 33.9,
                marketPrice: 33.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/641b6e6e-3cee-48f5-9353-484b5f7ef01d.jpg",
                salableStock: 200,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d20a7d4e-b221-4532-b6cb-3c7f6e76fa15",
                goodsName: "上海鸡骨酱",
                description: "老上海经典！啃完鸡腿，酱汁拌饭一滴不剩",
                isSplit: 0,
                sn: "WOC000003805",
                price: 22.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4f9b80ba-5cee-48a7-80f3-c0f0b6101aad.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9a81770b-0f0d-448c-8221-c3228b82abaf",
                goodsName: "小鸡炖蘑菇",
                description:
                  "东北四大炖之首！鸡肉软烂脱骨，茶树菇代替蘑菇更加鲜",
                isSplit: 0,
                sn: "WOC000001072",
                price: 29.9,
                marketPrice: 30.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/66b82d8b-2521-4729-9184-3b460a2bbd44.jpg",
                salableStock: 20,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3fe67b69-d625-44e9-9d7e-075478c95be3",
                goodsName: "薄饼羊肉",
                description: "",
                isSplit: 0,
                sn: "WOC000008187",
                price: 39.9,
                marketPrice: 49.0,
                picUrl:
                  "https://img.wochu.cn/upload/14a7b78e-6242-4c12-b801-41d5fbdf3a0b.jpg",
                salableStock: 50,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "35724afe-8a4c-4fd1-a507-ba4532cc0dc3",
                goodsName: "家烧安徽臭鳜鱼【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008168",
                price: 66.0,
                marketPrice: 86.0,
                picUrl:
                  "https://img.wochu.cn/upload/058bba16-d731-44df-8e67-7c02f0f5aaa0.jpg",
                salableStock: 0,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "70dc31d5-f10a-4d00-a266-52581c4823ea",
                goodsName: "薄饼羊肉【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008177",
                price: 35.9,
                marketPrice: 35.9,
                picUrl:
                  "https://img.wochu.cn/upload/75d13791-dd88-454e-9b96-e0cd1b6f5df2.jpg",
                salableStock: 0,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4e9699da-672d-4393-90c1-9e5606ee58b2",
                goodsName: "羊肉粉丝汤",
                description: "",
                isSplit: 0,
                sn: "WOC000008213",
                price: 39.9,
                marketPrice: 49.0,
                picUrl:
                  "https://img.wochu.cn/upload/77386d59-b0e8-45c4-9fb0-f11842117012.jpg",
                salableStock: 999,
                categoryId: 1264,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 201,
            name: "东南亚风味",
            displayIndex: 5,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fafef492-f85c-46fc-9994-5afba3b86e27.jpg",
                type: "checkicon",
                categoryId: 201
              }
            ],
            goods: [
              {
                goodsGuid: "0038618e-fb64-4e86-9423-e3e088cc772a",
                goodsName: "咖喱金针肥牛",
                description: "滑嫩肥牛卷碰上辛香咖喱，火花四射",
                isSplit: 0,
                sn: "WOC000002838",
                price: 32.5,
                marketPrice: 39.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c1ae31bd-d6cf-4c17-8953-498de5953763.jpg",
                salableStock: 999,
                categoryId: 201,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b63e2151-a57b-4c52-9304-bf15a9cfefb4",
                goodsName: "泰式咖喱鸡",
                description: "【5分钟做菜】吃完嫩滑鸡肉，咖喱汁拌饭超完美",
                isSplit: 0,
                sn: "WOC000004786",
                price: 26.9,
                marketPrice: 46.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a4780785-096b-4a8b-bb86-db4d001e2268.jpg",
                salableStock: 999,
                categoryId: 201,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "b63e2151-a57b-4c52-9304-bf15a9cfefb4",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c6d7517e-3001-4078-bdc0-2ce59d7bb287.png",
                    labelType: 1,
                    createTime: 1556075926
                  }
                ]
              }
            ]
          },
          {
            id: 203,
            name: "日韩餐",
            displayIndex: 4,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e2eec301-26bb-4e5b-9bc3-3d381f0b90ab.jpg",
                type: "checkicon",
                categoryId: 203
              }
            ],
            goods: [
              {
                goodsGuid: "a89b2a82-3c12-4ca7-95e2-0767306286bd",
                goodsName: "日式牛肉饭伴侣",
                description: "超下饭！酱汁浓厚，肥牛醇香，孩子都光盘",
                isSplit: 0,
                sn: "WOC000005939",
                price: 28.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/76799de6-99a4-4224-be07-146fcff54fca.jpg",
                salableStock: 50,
                categoryId: 203,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "a89b2a82-3c12-4ca7-95e2-0767306286bd",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9c3b335b-a54a-479c-8988-e6bbec10b9c2.png",
                    labelType: 1,
                    createTime: 1556075900
                  }
                ]
              },
              {
                goodsGuid: "06c2b928-fdfb-4ac6-a57a-6ca01af430b1",
                goodsName: "寿喜烧",
                description: "正宗日式牛肉锅，5种食材齐聚，超满足！",
                isSplit: 0,
                sn: "WOC000003348",
                price: 49.9,
                marketPrice: 55.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f9b77958-c1d6-487c-b586-964f967dfb17.jpg",
                salableStock: 50,
                categoryId: 203,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 204,
            name: "西餐",
            displayIndex: 3,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2ffb9168-90fa-481e-8954-8cb3a30e34a8.jpg",
                type: "checkicon",
                categoryId: 204
              }
            ],
            goods: [
              {
                goodsGuid: "4c071cf9-54d2-43df-b882-2b5334304385",
                goodsName: "素罗宋汤",
                description: "【5分钟做菜】酸中带甜、甜中飘香，乐歪歪",
                isSplit: 0,
                sn: "WOC000655",
                price: 12.9,
                marketPrice: 16.0,
                picUrl:
                  "https://img.wochu.cn/upload/8a0b2e0e-2472-4c52-94c8-6bf69655a0e7.jpg",
                salableStock: 999,
                categoryId: 204,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a6c269f9-7649-4442-a699-03461c1c6752",
                goodsName: "咖喱土豆牛腩煲",
                description: "挑剔小孩都无法自持的下饭菜！",
                isSplit: 0,
                sn: "WOC000007460",
                price: 42.5,
                marketPrice: 49.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b706a929-0f05-45da-9de2-05a049e01889.jpg",
                salableStock: 500,
                categoryId: 204,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605266,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 206,
            name: "烘焙工具",
            displayIndex: 1,
            description: "",
            parentId: 3,
            path: "/3/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4c718aa7-0837-4a9e-986b-95988b7fd391.jpg",
                type: "checkicon",
                categoryId: 206
              }
            ],
            goods: []
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
