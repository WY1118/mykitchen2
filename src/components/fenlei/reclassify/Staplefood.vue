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
      titlename: "油粮副食",
      wrappernav: [
        "米面杂粮",
        "食用油",
        "粤调味料",
        "干货酱菜"
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
            id: 1101,
            name: "米面杂粮",
            displayIndex: 4,
            description: "",
            parentId: 11,
            path: "/11/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cde66457-707d-4623-a741-0e4125f3e4af.jpg",
                type: "checkicon",
                categoryId: 1101
              }
            ],
            goods: [
              {
                goodsGuid: "0558fee7-83d0-42f3-a9a0-f49780b79161",
                goodsName: "粮管家乳玉香大米2500g",
                description:
                  "生米似乳似玉，淡淡清香；米饭香糯可口，晶莹润泽；真空包装",
                isSplit: 0,
                sn: "WOC000004753",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/c04a685d-4bda-4f58-ba4f-e00183a6f1d3.jpg",
                salableStock: 222,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7f0b3de5-d12b-47c7-bc1e-d2dd99cb858e",
                goodsName: "光明瀛丰五斗生态米5kg",
                description: "真空包装",
                isSplit: 0,
                sn: "WOC000008359",
                price: 89.9,
                marketPrice: 99.0,
                picUrl:
                  "https://img.wochu.cn/upload/aa559aae-0321-4608-afc1-364a7e8d03a8.jpg",
                salableStock: 105,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fdbbc1f8-3080-4b61-b8a5-60291a37bbbd",
                goodsName: "粮管家火山岩小町5000g",
                description: "秋田小町，媲美日本寿司米；真空包装",
                isSplit: 0,
                sn: "WOC000005317",
                price: 45.9,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/8ccc9c8c-d1a3-4f95-9fa8-31dd56e8d271.jpg",
                salableStock: 36,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6a74cba5-860e-47cb-99ed-b9ff84425388",
                goodsName: "粮管家乳玉香大米5000g",
                description: "生米似乳似玉，淡淡清香；真空包装",
                isSplit: 0,
                sn: "WOC000004879",
                price: 45.9,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/5d7a16fa-43af-4ab8-9228-02016d813f98.jpg",
                salableStock: 33,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b4df0893-263e-4ab8-8869-0e5091dcc3a6",
                goodsName: "粮管家稻花香大米2500g",
                description: "纯正五常稻花香，修长清香，清甜软糯；真空包装",
                isSplit: 0,
                sn: "WOC000004754",
                price: 38.9,
                marketPrice: 41.9,
                picUrl:
                  "https://img.wochu.cn/upload/35e338e1-c9cc-4cab-add0-4d68fd00633f.jpg",
                salableStock: 30,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "39bab202-51bc-44f3-8a67-5120ee19d9c3",
                goodsName: "光明崇明好米5000g",
                description: "2018秋季新米全新上市，非真空包装",
                isSplit: 0,
                sn: "WOC000005767",
                price: 35.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/ee51643e-e7b3-416a-8d05-dd012587b1fc.jpg",
                salableStock: 117,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "39bab202-51bc-44f3-8a67-5120ee19d9c3",
                    labelName: "特惠",
                    labelUrl: "",
                    labelType: 0,
                    createTime: 1508484204
                  }
                ]
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
                salableStock: 12,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "edc143fa-cf67-41e8-8bbe-e720527666b3",
                goodsName: "粮管家五常稻花香5000g",
                description: "真空包装",
                isSplit: 0,
                sn: "WOC000006471",
                price: 69.9,
                marketPrice: 85.9,
                picUrl:
                  "https://img.wochu.cn/upload/60cb9711-9ef6-48da-a350-4cc5acca02d7.jpg",
                salableStock: 33,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "99e074dd-5c56-4af0-8b6f-ba329a0f3586",
                goodsName: "粮管家优选长粒香5000g",
                description: "真空包装",
                isSplit: 0,
                sn: "WOC000006470",
                price: 39.9,
                marketPrice: 53.0,
                picUrl:
                  "https://img.wochu.cn/upload/9b6958e1-d5f0-4972-b99e-aa0722b1bf2d.jpg",
                salableStock: 30,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b6da64e3-da9c-422e-842c-cf7fdf01d5a8",
                goodsName: "咪你口袋藜麦200g",
                description: "",
                isSplit: 0,
                sn: "WOC000006472",
                price: 23.8,
                marketPrice: 29.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9ffbb18a-1e4e-44a0-95a0-be6159bd4457.jpg",
                salableStock: 66,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eb4cc06e-8311-4041-8caa-bf539dd8b875",
                goodsName: "光明晶润香大米2500g",
                description: "2018秋季新米全新上市，非真空包装",
                isSplit: 0,
                sn: "WOC000007215",
                price: 25.8,
                marketPrice: 29.8,
                picUrl:
                  "https://img.wochu.cn/upload/f33bff8a-2d4c-412b-be39-2866f9d9f22b.jpg",
                salableStock: 42,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "eb4cc06e-8311-4041-8caa-bf539dd8b875",
                    labelName: "特惠",
                    labelUrl: "",
                    labelType: 0,
                    createTime: 1508484204
                  }
                ]
              },
              {
                goodsGuid: "c0fc5e68-24c8-4323-bab9-dcb3f754f388",
                goodsName: "光明海丰软香米5000g",
                description: "2018秋季新米，非真空包装",
                isSplit: 0,
                sn: "WOC000007216",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/7b5dffab-a310-4863-a079-9d85a3bc1403.jpg",
                salableStock: 117,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bed13587-a9cc-4434-a237-7ed7067fd90f",
                goodsName: "味千猪骨汤拉面双人份305g",
                description: "湿面3分钟快熟，弹嫩劲道，配汤料包",
                isSplit: 0,
                sn: "WOC000003812",
                price: 12.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f677ea20-9ec6-49f8-9ad6-31213d89e5b4.jpg",
                salableStock: 36,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2f2374ea-80d5-4c8b-a386-33774e6c60e9",
                goodsName: "伊田乌冬面200g",
                description: "忒筋道，解馋管饱，炒、汤、拌咋吃都不够",
                isSplit: 0,
                sn: "WOC000003815",
                price: 3.9,
                marketPrice: 3.9,
                picUrl:
                  "https://img.wochu.cn/upload/db8d6ca5-6a2c-40f2-b633-748991dd46b4.jpg",
                salableStock: 1170,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2653e313-4424-4fba-90a9-7832de816340",
                goodsName: "光明晶润香大米500g",
                description: "光明好米，新鲜直达，非真空包装",
                isSplit: 0,
                sn: "WOC000007004",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/b6c800a1-610d-45ff-a320-b771f9f70e7c.jpg",
                salableStock: 66,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "637d5517-f693-4398-864d-b42151700010",
                goodsName: "咪你口袋圆珍香菇150g",
                description: "",
                isSplit: 0,
                sn: "WOC000007259",
                price: 26.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1d27d554-60ff-47b9-bc32-7f2af5c9d82f.jpg",
                salableStock: 57,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "637d5517-f693-4398-864d-b42151700010",
                    labelName: "特惠",
                    labelUrl: "",
                    labelType: 0,
                    createTime: 1507537855
                  }
                ]
              },
              {
                goodsGuid: "b2b347bd-fbe1-48ff-bdf2-bb39b7401d57",
                goodsName: "咪你口袋无根黑木耳80g",
                description: "无根肉厚，泡发率1:10以上",
                isSplit: 0,
                sn: "WOC000007260",
                price: 15.9,
                marketPrice: 17.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/872c763c-57aa-4590-8754-d40d09b9abc8.jpg",
                salableStock: 75,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0e601493-c033-4dc4-9b62-044c792420b7",
                goodsName: "咪你口袋新疆阿克苏实惠红枣454g",
                description: "枣中“小甜甜”，甜香不粘手",
                isSplit: 0,
                sn: "WOC000007591",
                price: 26.8,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/155db544-3d1d-4df6-a2a1-e390bd0728e4.jpg",
                salableStock: 150,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f1c94400-41ad-45a7-8a2f-a320ebfb336f",
                goodsName: "粮管家乳玉香新米2包劲爆团",
                description: "",
                isSplit: 1,
                sn: "WOC000007660",
                price: 73.9,
                marketPrice: 96.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00acf978-afd1-4598-bc64-d42ec9adb825.jpg",
                salableStock: 16,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a1942f5a-3fee-46f4-81e2-f37c523a158a",
                goodsName: "咪你口袋大黄米400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008318",
                price: 11.9,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/f235ad9f-1bd1-4119-8a12-7835ddfa65a8.jpg",
                salableStock: 15,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "109eb69a-a069-462f-88e0-136c6ca75280",
                goodsName: "咪你口袋薏米仁400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008319",
                price: 19.9,
                marketPrice: 23.8,
                picUrl:
                  "https://img.wochu.cn/upload/dcda4900-63f0-4cce-ade3-7a4f37c0cc04.jpg",
                salableStock: 93,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f160ac76-203f-4ee9-aaa1-67e0f5d6d178",
                goodsName: "咪你口袋玉米渣400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008321",
                price: 5.9,
                marketPrice: 6.8,
                picUrl:
                  "https://img.wochu.cn/upload/6a7ea643-6bae-4e09-880e-f94d8b5c168c.jpg",
                salableStock: 33,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "06f36d9d-c89b-406f-8da5-e9a390609324",
                goodsName: "咪你口袋血糯米400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008323",
                price: 16.9,
                marketPrice: 18.9,
                picUrl:
                  "https://img.wochu.cn/upload/218c1185-bc43-4b74-b86a-b985c7500a7f.jpg",
                salableStock: 0,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f3f6c4a8-3b58-4733-8654-14dd7213fcab",
                goodsName: "咪你口袋黑豆400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008322",
                price: 17.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/3018215f-1248-41b4-8897-105262f8bbff.jpg",
                salableStock: 0,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c359d6e3-d6c2-4a67-8f44-8d57f0da926f",
                goodsName: "咪你口袋绿豆400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008324",
                price: 13.5,
                marketPrice: 17.9,
                picUrl:
                  "https://img.wochu.cn/upload/a21c900b-9577-42c7-9833-9831b71fb7ae.jpg",
                salableStock: 15,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cbc98a01-4be6-4f5a-892b-f0c4b1e6671b",
                goodsName: "咪你口袋黑米400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008325",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/b471d6f6-955a-4dda-a0d8-67dbd66a8b22.jpg",
                salableStock: 57,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "851cdd14-94f2-4503-b3d6-f8543d83f7c4",
                goodsName: "咪你口袋红豆400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008326",
                price: 14.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/7550c37f-bdd1-4ddb-90f4-fa46b020f9df.jpg",
                salableStock: 48,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2bcc0412-7bd6-4e65-b486-e2d9c63874ee",
                goodsName: "咪你口袋高粱米400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008327",
                price: 6.9,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/beb7cc31-6ca3-47fd-8815-db689a88d8a5.jpg",
                salableStock: 60,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1b05de5d-68e2-4fb3-bd2c-1065a6bf04ad",
                goodsName: "光明米业瀛丰五斗崇明绿稻香大米5kg",
                description: "真空包装",
                isSplit: 0,
                sn: "WOC000008457",
                price: 79.9,
                marketPrice: 89.9,
                picUrl:
                  "https://img.wochu.cn/upload/f272cd1e-7e1a-4675-81fe-d33540af64c8.jpg",
                salableStock: 27,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "20a747b6-ed8e-49a6-9b09-867496151610",
                goodsName: "光明米业瀛丰五斗崇明原香稻大米2.5kg",
                description: "2018秋季新米全新上市，真空包装",
                isSplit: 0,
                sn: "WOC000008458",
                price: 39.9,
                marketPrice: 45.9,
                picUrl:
                  "https://img.wochu.cn/upload/6cfbc841-6919-4210-a284-aa670cce814e.jpg",
                salableStock: 30,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "41ecdf73-f023-4180-acff-ec4feeddd2a8",
                goodsName: "粮管家绿豆500g",
                description: "",
                isSplit: 0,
                sn: "WOC000008629",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/46313cee-6d29-4bf0-9eb8-82e42df591cd.jpg",
                salableStock: 0,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "64ef1b7e-1efb-4b24-bb55-3acf1c10fe43",
                goodsName: "粮管家燕麦米500g",
                description: "",
                isSplit: 0,
                sn: "WOC000008630",
                price: 7.9,
                marketPrice: 11.9,
                picUrl:
                  "https://img.wochu.cn/upload/992856fa-6670-4ad4-979d-95f02a93aebc.jpg",
                salableStock: 30,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c88cc8b0-7ab5-4d1e-bc29-dfaee68a2ff9",
                goodsName: "粮管家血糯米500g",
                description: "",
                isSplit: 0,
                sn: "WOC000008631",
                price: 9.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/498934ac-5ba1-4282-92c1-1b08b65baeed.jpg",
                salableStock: 57,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6257bcc8-d312-4a9c-84f9-e0d7cf83f1de",
                goodsName: "粮管家糯米500g",
                description: "",
                isSplit: 0,
                sn: "WOC000008632",
                price: 6.9,
                marketPrice: 11.9,
                picUrl:
                  "https://img.wochu.cn/upload/9c4366ea-15f1-41c3-be14-2c245da52f61.jpg",
                salableStock: 63,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ab9be2e3-68da-4071-8440-ad6e907901b8",
                goodsName: "粮管家黑芝麻核桃粉400g",
                description: "",
                isSplit: 0,
                sn: "WOC000009606",
                price: 29.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/bd827145-8bd7-48b5-b026-003e79c25726.jpg",
                salableStock: 60,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fd049afd-e900-474c-9253-3259bb94ad04",
                goodsName: "粮管家红豆薏米粉500g",
                description: "轻食代餐粉",
                isSplit: 0,
                sn: "WOC000007858",
                price: 29.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/142026ac-876b-4db0-b335-4d65c3d9a77b.jpg",
                salableStock: 90,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8e195720-c23a-4a55-bf77-e04d60a2e50b",
                goodsName: "丰收原乡南粳5055大米5kg",
                description: "",
                isSplit: 0,
                sn: "WOC000009607",
                price: 89.0,
                marketPrice: 89.0,
                picUrl:
                  "https://img.wochu.cn/upload/408b12a0-8df6-439a-8a79-1dcb6286696e.jpg",
                salableStock: 36,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c97f5d48-8b3e-4cec-acff-a4c5bda9de19",
                goodsName: "咪你口袋小黄米400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008320",
                price: 11.8,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/4636a91e-7a32-4552-beed-3e889defed02.jpg",
                salableStock: 24,
                categoryId: 1101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1102,
            name: "食用油",
            displayIndex: 3,
            description: "",
            parentId: 11,
            path: "/11/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17efbc76-0b3b-4a28-ab30-c2ff56217d10.jpg",
                type: "checkicon",
                categoryId: 1102
              }
            ],
            goods: [
              {
                goodsGuid: "749721b8-80bb-48e8-add8-db948d0f36a3",
                goodsName: "乌克兰欧利亚提葵花籽油1L",
                description: "",
                isSplit: 0,
                sn: "WOC000008456",
                price: 29.9,
                marketPrice: 36.8,
                picUrl:
                  "https://img.wochu.cn/upload/2cd53bda-2323-4189-a1e6-075f9c4b8ab0.jpg",
                salableStock: 987,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "749721b8-80bb-48e8-add8-db948d0f36a3",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c787dd03-1bde-4638-bcc7-79e724f70e1a.png",
                    labelType: 1,
                    createTime: 1557734069
                  }
                ]
              },
              {
                goodsGuid: "b883cc3e-d732-4492-9a3c-2c87e590ada5",
                goodsName: "土耳其原装进口多丽雅芥花籽油 1L",
                description: "",
                isSplit: 0,
                sn: "WOC000008920",
                price: 36.8,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/2dff6fa5-d38f-4dce-a544-a99b917b5f55.jpg",
                salableStock: 39,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ee6e00a3-80aa-4280-b70c-4cbfb861d4cf",
                goodsName: "光明谷锦葵花籽油5L",
                description: "非转基因葵花籽油,新包装发货",
                isSplit: 0,
                sn: "WOC000005909",
                price: 59.0,
                marketPrice: 79.0,
                picUrl:
                  "https://img.wochu.cn/upload/32218d4a-ae96-47bd-9b5b-6931b065a197.jpg",
                salableStock: 9,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3be1deac-86ab-44a7-a9dc-8411874a43c1",
                goodsName: "土耳其原装进口多丽雅葵花籽油 1L",
                description: "",
                isSplit: 0,
                sn: "WOC000008921",
                price: 36.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/892eea10-e811-4518-8209-be10f91bd7b2.jpg",
                salableStock: 9,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ecfc585b-16a4-474f-9b42-6959b7c78374",
                goodsName: "光明谷锦菜籽油（浓香）5L",
                description: "",
                isSplit: 0,
                sn: "WOC000008964",
                price: 88.0,
                marketPrice: 99.0,
                picUrl:
                  "https://img.wochu.cn/upload/c553aa6f-650e-42a3-89a3-3ab98b448ceb.jpg",
                salableStock: 12,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7cd081d0-0309-43ba-b428-c3fb913cf11d",
                goodsName: "光明谷锦玉米油5L",
                description: "",
                isSplit: 0,
                sn: "WOC000008965",
                price: 69.0,
                marketPrice: 79.0,
                picUrl:
                  "https://img.wochu.cn/upload/0f1d0f51-de3e-4681-921e-238028ad0f40.jpg",
                salableStock: 18,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3471b26e-8a8e-48fb-b360-9fef3ba7c6f4",
                goodsName: "光明谷锦稻米油3L",
                description: "",
                isSplit: 0,
                sn: "WOC000008963",
                price: 69.9,
                marketPrice: 69.9,
                picUrl:
                  "https://img.wochu.cn/upload/a5b1f010-f1a4-475e-ade8-2f9ca517572c.jpg",
                salableStock: 9,
                categoryId: 1102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1103,
            name: "调味料",
            displayIndex: 2,
            description: "",
            parentId: 11,
            path: "/11/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/089575b2-28b0-4b69-8fe1-f25e8beaa5e4.jpg",
                type: "checkicon",
                categoryId: 1103
              }
            ],
            goods: [
              {
                goodsGuid: "099bf760-716b-475a-836d-c083337bb613",
                goodsName: "老长兴八宝辣酱100g",
                description: "口味咸鲜，料足味美",
                isSplit: 0,
                sn: "WOC000010693",
                price: 5.8,
                marketPrice: 7.6,
                picUrl:
                  "https://img.wochu.cn/upload/53634134-b5b3-443d-97d3-62083dae578d.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d6bcb958-57f5-43e9-911a-972c89fe8f25",
                goodsName: "光明谷锦浓香菜籽油1.8L",
                description: "香浓还是菜籽油，非转基因",
                isSplit: 0,
                sn: "WOC000007812",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/4fb3abd0-df30-4baf-b740-ba607ef49ae4.jpg",
                salableStock: 69,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3b40c2ab-738a-4f4f-a2da-230a332239d6",
                goodsName: "中盐无碘精制岩盐500g",
                description: "",
                isSplit: 0,
                sn: "WOC000005520",
                price: 4.8,
                marketPrice: 5.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a50bb680-fa7a-465f-9827-37333b7be1bf.jpg",
                salableStock: 321,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fc5c3ce4-152f-4e02-82f8-38266e917458",
                goodsName: "中盐精制盐500g",
                description: "",
                isSplit: 0,
                sn: "WOC000005523",
                price: 2.9,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ab9307ff-442f-49fa-83e2-f3f449a6d5b4.jpg",
                salableStock: 1062,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6f6a2cb7-a3dd-4d63-bde8-fa951b5eb57e",
                goodsName: "双桥味精250g",
                description: "",
                isSplit: 0,
                sn: "WOC000000664",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/25514285-a5b4-46cf-b00e-fb931745c5ef.jpg",
                salableStock: 57,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "966037ff-15d2-4989-9c77-7d2e311da59f",
                goodsName: "嘉善黄酒400ml",
                description: "",
                isSplit: 0,
                sn: "WOC000003357",
                price: 1.9,
                marketPrice: 1.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5622c6b2-1408-4db8-9d14-0456cd496454.jpg",
                salableStock: 105,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "15f91556-7cfd-49ba-ae14-aa6bbc15b57a",
                goodsName: "宝鼎康乐醋500ml",
                description: "品牌可信，品质优良",
                isSplit: 0,
                sn: "WOC000005175",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/56ee6815-edaf-4f1a-8b6c-3f2558a0e6c1.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e1763f8a-d7fc-4b0d-b1f2-2d731cc8c905",
                goodsName: "老干妈风味豆豉280g",
                description: "",
                isSplit: 0,
                sn: "WOC000001016",
                price: 8.8,
                marketPrice: 9.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e5db0947-c936-4237-b3c8-4d535064a815.jpg",
                salableStock: 9,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "946f66f8-990f-476c-9ab9-a4a1391089d9",
                goodsName: "六月香豆瓣酱300g",
                description: "",
                isSplit: 0,
                sn: "WOC000002766",
                price: 7.5,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/16d95a90-68ea-4d2b-b318-dc92ad47dcb5.jpg",
                salableStock: 33,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c828727-52e2-40a0-9242-a9d43ff85f6d",
                goodsName: "海天上等蚝油700g",
                description: "",
                isSplit: 0,
                sn: "WOC000000642",
                price: 7.8,
                marketPrice: 8.8,
                picUrl:
                  "https://img.wochu.cn/upload/8bec72a6-43cd-4135-879b-f4dc498d4109.jpg",
                salableStock: 3,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "84c425bb-c975-4a3a-a13d-eabd0bea63d9",
                goodsName: "李锦记蒸鱼豉油410ML/瓶",
                description: "清蒸酱油，海鲜、炒饭、剁椒鱼头 。",
                isSplit: 0,
                sn: "WOC000000561",
                price: 12.8,
                marketPrice: 13.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c87db7f1-5130-4fbb-bb7c-70a396cd6c01.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "355eacfa-bf96-4417-ad82-a0986b51faa1",
                goodsName: "六月鲜特级酱油500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000005483",
                price: 12.8,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c6b51268-2ceb-4c04-80a5-85740fe93a7c.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d47c61df-7d65-42fd-b224-4f4d0fae9c7c",
                goodsName: "海底捞菌汤火锅汤料（鲜香味）110g",
                description: "火锅好伴侣，还能拌菜拌面拌凉粉",
                isSplit: 0,
                sn: "WOC000004880",
                price: 13.9,
                marketPrice: 15.0,
                picUrl:
                  "https://img.wochu.cn/upload/edea9ecf-82f4-4292-b727-189fb0cee3c2.jpg",
                salableStock: 171,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9e54ef97-c6e7-4b64-b423-7202ed6a3813",
                goodsName: "宝鼎三年陈糟糟卤500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000658",
                price: 6.9,
                marketPrice: 7.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e7883f8-14c8-46a1-b44f-cbffc0be11b4.jpg",
                salableStock: 2,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e863d99f-8cea-4892-a86e-e75d14a22ee8",
                goodsName: "海底捞番茄火锅底料200g",
                description: "",
                isSplit: 0,
                sn: "WOC000004746",
                price: 13.9,
                marketPrice: 15.0,
                picUrl:
                  "https://img.wochu.cn/upload/3914515a-3f1b-4b26-958a-163220652fec.jpg",
                salableStock: 273,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6046b12a-4ab3-4f18-aa51-e33e80d99bce",
                goodsName: "海底捞火锅蘸料原味120g",
                description:
                  "口感：芝麻花生，香糯可口。食用方法：开袋即食，用于蘸料、拌菜拌面",
                isSplit: 0,
                sn: "WOC000004749",
                price: 4.9,
                marketPrice: 5.0,
                picUrl:
                  "https://img.wochu.cn/upload/edfb18c8-8517-4d55-bf73-7e63a69a911e.jpg",
                salableStock: 234,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dba50928-2caa-4c7e-bf92-46097ff77bbd",
                goodsName: "海底捞火锅蘸料香辣味120g",
                description: "咸鲜适中微辣，一料多用",
                isSplit: 0,
                sn: "WOC000004750",
                price: 4.9,
                marketPrice: 5.0,
                picUrl:
                  "https://img.wochu.cn/upload/1bce5852-da1a-49f7-b912-3e7db526d631.jpg",
                salableStock: 177,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d55f5ca3-4b00-413d-9565-597b49343bf9",
                goodsName: "丘比香甜味沙拉酱30g",
                description: "",
                isSplit: 0,
                sn: "WOC000003851",
                price: 1.9,
                marketPrice: 2.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d251a376-6dbc-4ae0-9cff-e4411a5f7d31.jpg",
                salableStock: 381,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4951dd8f-b0a7-4038-8868-6cea6e7b6938",
                goodsName: "海底捞上汤酸菜鱼调味料360g",
                description: "",
                isSplit: 0,
                sn: "WOC000005917",
                price: 14.9,
                marketPrice: 16.0,
                picUrl:
                  "https://img.wochu.cn/upload/1eb0b009-663a-471e-b6e7-5c7086a69738.jpg",
                salableStock: 21,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1ba94e0f-1c40-4fd5-9d74-b9c2ad33f4d0",
                goodsName: "味好美研磨瓶黑胡椒粒28g",
                description: "",
                isSplit: 0,
                sn: "WOC000006624",
                price: 16.9,
                marketPrice: 18.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8fe5ca2d-4c43-4e8e-9609-05671260e138.jpg",
                salableStock: 24,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "17075088-4bec-44c7-8522-1974494d147d",
                goodsName: "四季宝柔滑花生酱510g",
                description: "",
                isSplit: 0,
                sn: "WOC000006626",
                price: 24.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/099945ea-e604-49f9-9dde-a3bea68d6556.jpg",
                salableStock: 18,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a4ce66e3-e611-4a84-95b4-c58226f76838",
                goodsName: "李锦记黑胡椒汁230g",
                description: "西餐基础汁，煎牛排必备",
                isSplit: 0,
                sn: "WOC000006621",
                price: 13.8,
                marketPrice: 15.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d57b19b-d9f0-4d79-a5be-52effc3f2bad.jpg",
                salableStock: 3,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "61516915-3265-4e05-aba2-3e999bd5775f",
                goodsName: "玉棠白砂糖1kg",
                description: "",
                isSplit: 0,
                sn: "WOC000007497",
                price: 13.8,
                marketPrice: 15.8,
                picUrl:
                  "https://img.wochu.cn/upload/285d852e-6d86-4a97-bd8b-9e35757cc545.jpg",
                salableStock: 492,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "865705d4-6a9e-439b-ad10-c0a3c1ee963d",
                goodsName: "味好美白胡椒粉30g",
                description: "烧汤必备，瓶装更卫生",
                isSplit: 0,
                sn: "WOC000007807",
                price: 12.9,
                marketPrice: 13.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/14e75291-1995-40b6-b3f9-b0b5b9eeca2e.jpg",
                salableStock: 51,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d09837f1-519c-4c43-ba36-1581d73be992",
                goodsName: "泰康黄牌上海辣酱油200ml",
                description: "炸猪排绝配，只有上海人才懂",
                isSplit: 0,
                sn: "WOC000007808",
                price: 4.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5d18dcee-b786-4407-a8da-7a3b1a6fe608.jpg",
                salableStock: 21,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9431ba99-fe76-467f-95ce-a2b9b95b803b",
                goodsName: "海天黄豆酱340g",
                description: "餐餐相”拌“，快乐吃饭",
                isSplit: 0,
                sn: "WOC000007809",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0191ea11-0a8f-4c5b-afc4-b23597d79d00.jpg",
                salableStock: 48,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eddb6c28-f178-41d2-84d9-d4f29457acb7",
                goodsName: "宝鼎天鱼上海白醋500ml",
                description: "上海老牌子，绵酸柔和",
                isSplit: 0,
                sn: "WOC000007810",
                price: 4.8,
                marketPrice: 6.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b24f66ad-ad7b-4c0f-9518-97bea5e7f110.jpg",
                salableStock: 15,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "91ebe314-409a-4295-8d44-6cddb8f3c962",
                goodsName: "海底捞蒜蓉小龙虾调味料320g",
                description: "",
                isSplit: 0,
                sn: "WOC000008584",
                price: 8.5,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/dc00bc1d-cec4-466d-bcc0-22c1db47bed5.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "52b22ac6-ffaa-4e5f-8986-a8dbbb831501",
                goodsName: "海底捞十三种香料小龙虾调味料220g",
                description: "",
                isSplit: 0,
                sn: "WOC000008585",
                price: 7.9,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/06ffade8-48c2-4019-a2fe-efbb89bb35a4.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1c9dbe48-4fc9-4759-97fc-a3118a519cf9",
                goodsName: "海底捞麻辣小龙虾调味料200g",
                description: "",
                isSplit: 0,
                sn: "WOC000008586",
                price: 9.9,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/6602fd56-a7be-4b0f-8617-29198b37c657.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "495d8c53-f811-488e-bc00-0d7e2426dc4f",
                goodsName: "海底捞香辣小龙虾调味料200g",
                description: "",
                isSplit: 0,
                sn: "WOC000008587",
                price: 8.5,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/ee4a5eaf-529d-45ff-9023-ff9aa3a92acf.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6d1c4247-25b8-4fd5-ae84-2d5143cc093c",
                goodsName: "庆丰上海白醋500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008871",
                price: 4.9,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/1ab0c2d8-9211-4c19-a424-7a11e92a160f.jpg",
                salableStock: 0,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ea6d9208-994c-416d-af5d-84918e737020",
                goodsName: "海底捞醇香牛油火锅底料150g",
                description: "",
                isSplit: 0,
                sn: "WOC000009405",
                price: 7.9,
                marketPrice: 9.0,
                picUrl:
                  "https://img.wochu.cn/upload/48bea447-1543-4ebd-a602-706c79d77f91.jpg",
                salableStock: 138,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9ee21d07-b59e-4178-9fb2-df1447584e94",
                goodsName: "儿童成长汤210g",
                description: "",
                isSplit: 0,
                sn: "WOC000009574",
                price: 68.0,
                marketPrice: 68.0,
                picUrl:
                  "https://img.wochu.cn/upload/6a4a4c90-42a8-47dc-802f-dcdc5e443872.jpg",
                salableStock: 24,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cde63ac2-4fb1-4cde-b9ad-caac0b10d111",
                goodsName: "八珍双胶汤140g",
                description: "",
                isSplit: 0,
                sn: "WOC000009575",
                price: 125.0,
                marketPrice: 125.0,
                picUrl:
                  "https://img.wochu.cn/upload/54bc15e8-c7fb-4e7c-936e-253f084fe125.jpg",
                salableStock: 12,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "598579d6-5cd2-4b7f-bc97-1542619d75f5",
                goodsName: "椰子海参炖鸡汤340g",
                description: "商品为炖汤食材，不包含鸡",
                isSplit: 0,
                sn: "WOC000009577",
                price: 98.0,
                marketPrice: 98.0,
                picUrl:
                  "https://img.wochu.cn/upload/09d7d4d3-5be9-4408-b2da-02ca8a1fdee9.jpg",
                salableStock: 15,
                categoryId: 1103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1104,
            name: "干货酱菜",
            displayIndex: 1,
            description: "",
            parentId: 11,
            path: "/11/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/eabdf348-209e-4019-b3be-5f1a00858dc5.jpg",
                type: "checkicon",
                categoryId: 1104
              }
            ],
            goods: [
              {
                goodsGuid: "556bc888-f0c4-48f0-b1cb-e9fd1af26e53",
                goodsName: "云楼肖山萝卜200g",
                description: "",
                isSplit: 0,
                sn: "WOC000002406",
                price: 2.9,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ac6da2fd-8c37-4ebe-89d4-90a18c618bfe.jpg",
                salableStock: 27,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "725afbdb-07fb-4817-9888-244dac5b1b6f",
                goodsName: "王致和玫瑰腐乳340g",
                description: "",
                isSplit: 0,
                sn: "WOC000000769",
                price: 8.9,
                marketPrice: 10.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9451535d-ff4e-488f-8291-468ad2121824.jpg",
                salableStock: 66,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c881f879-ca1a-48ed-8a87-48af8ef24cc0",
                goodsName: "王致和大块腐乳340g",
                description: "",
                isSplit: 0,
                sn: "WOC000001107",
                price: 8.9,
                marketPrice: 10.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3f8c2ae2-b8c9-4bf1-8167-6bc5cad70edd.jpg",
                salableStock: 81,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "df1ef873-c960-4938-9297-8e6fe73bd524",
                goodsName: "云楼雪菜笋丝200g",
                description: "",
                isSplit: 0,
                sn: "WOC000002409",
                price: 3.9,
                marketPrice: 4.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/086f987f-d5d0-4b95-8b9e-378b88dd014f.jpg",
                salableStock: 51,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "24fd589d-81bb-410d-9c50-48b6895aa123",
                goodsName: "双塔龙口粉丝200g",
                description: "泡水48小时不发胀！20种中西餐等你解锁",
                isSplit: 0,
                sn: "WOC000001880",
                price: 6.9,
                marketPrice: 9.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/dc95d79a-29d9-4d32-b532-a9faa21c7518.jpg",
                salableStock: 0,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1f3b76ff-51e7-4dbc-8e0d-1da81ed992f5",
                goodsName: "柳絮粉条325g",
                description: "火锅拍档，口感顺滑劲道",
                isSplit: 0,
                sn: "WOC000004962",
                price: 6.9,
                marketPrice: 10.6,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3265ea3c-ed77-46bb-8d22-94891490b132.jpg",
                salableStock: 18,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4532f969-eadd-4b65-b18f-218a8c3750a7",
                goodsName: "乌江涪陵榨菜鲜脆菜丝80g",
                description: "",
                isSplit: 0,
                sn: "WOC000006778",
                price: 2.5,
                marketPrice: 2.9,
                picUrl:
                  "https://img.wochu.cn/upload/e26c17df-8ef7-470b-8a6f-e62608a4ed24.jpg",
                salableStock: 0,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "01678ff1-36c4-46db-a897-a277458db308",
                goodsName: "乌江涪陵榨菜微辣榨菜80g",
                description: "",
                isSplit: 0,
                sn: "WOC000006779",
                price: 2.5,
                marketPrice: 2.9,
                picUrl:
                  "https://img.wochu.cn/upload/596060df-9b86-4c88-9b4e-4543abc46ec4.jpg",
                salableStock: 87,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f3657b6a-6fe3-46f3-8563-bff0fc3101f8",
                goodsName: "咪你口袋即糯银耳135g",
                description: "福建古田特产，植物燕窝，一烧即糯，",
                isSplit: 0,
                sn: "WOC000007003",
                price: 19.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cea773b6-e097-4a8b-8b25-b7964fef4c01.jpg",
                salableStock: 177,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0226e755-6929-46df-b827-b3d8227d50eb",
                goodsName: "咪你口袋通心莲250g",
                description: "中国四大莲子之一，保留莲心",
                isSplit: 0,
                sn: "WOC000007936",
                price: 36.9,
                marketPrice: 43.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a073728e-887b-4609-9451-a1f7fb693609.jpg",
                salableStock: 15,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0226e755-6929-46df-b827-b3d8227d50eb",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1078e4ab-968d-42b0-921c-796884bbba9d.png",
                    labelType: 1,
                    createTime: 1510912919
                  }
                ]
              },
              {
                goodsGuid: "21e6ce5c-572d-476c-a01b-66bb98a8244a",
                goodsName: "咪你口袋枸杞125g",
                description: "正宗宁夏枸杞，吃货养生必备",
                isSplit: 0,
                sn: "WOC000007938",
                price: 16.9,
                marketPrice: 21.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/69350e49-d7c5-4e1a-b6cd-64ce8acc971f.jpg",
                salableStock: 4,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "db9fed0e-3c61-4aa6-bf9c-2b744f6a6a58",
                goodsName: "咪你口袋莆田桂圆干450g",
                description: "福建特产，跟人参齐名",
                isSplit: 0,
                sn: "WOC000007941",
                price: 24.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ec6ceb89-abee-4856-9224-33847a60b580.jpg",
                salableStock: 12,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ba41cba2-0dd7-43a7-8a3b-79315c1c5e68",
                goodsName: "咪你口袋软糯柿饼500g",
                description: "绵软香甜甜，0添加剂",
                isSplit: 0,
                sn: "WOC000007943",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/29263487-6b4a-4a5c-a566-2e1e924f8a49.jpg",
                salableStock: 198,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2a195859-952c-4bdc-8976-46101dc0745e",
                goodsName: "咪你口袋熟黑芝麻粒400g",
                description: "开袋干吃！“头顶”大事交给它",
                isSplit: 0,
                sn: "WOC000008027",
                price: 14.9,
                marketPrice: 25.9,
                picUrl:
                  "http://img.wochu.cn/upload/e4dd206d-64a6-47b4-a0de-d76c674d25a6.jpg",
                salableStock: 54,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a0c185a9-55b3-4046-8a7a-43d4d0e41be3",
                goodsName: "咪你口袋紫薯花生300g",
                description: "",
                isSplit: 0,
                sn: "WOC000008150",
                price: 8.9,
                marketPrice: 11.9,
                picUrl:
                  "https://img.wochu.cn/upload/807dec34-0498-4273-9cd6-f8d61d21ddb5.jpg",
                salableStock: 30,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "78379b78-e125-4384-bd47-e3a341e2e93c",
                goodsName: "咪你口袋香蕉片200g",
                description: "",
                isSplit: 0,
                sn: "WOC000008152",
                price: 9.9,
                marketPrice: 14.9,
                picUrl:
                  "https://img.wochu.cn/upload/58887aeb-40ef-463f-bd4c-d4230c4f5687.jpg",
                salableStock: 21,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9a340113-61ed-4f49-85d5-01df212f4f83",
                goodsName: "三林萝卜头310g",
                description: "",
                isSplit: 0,
                sn: "WOC000008811",
                price: 8.9,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/253f2671-e70b-4138-ae2e-491311b35050.jpg",
                salableStock: 0,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6d464960-342a-452e-9205-4fc17c24a96b",
                goodsName: "三林宝塔菜310g",
                description: "",
                isSplit: 0,
                sn: "WOC000008812",
                price: 8.9,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/b6fdf12a-7190-49a3-a256-5d6c9cbf11b8.jpg",
                salableStock: 0,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c584ffa8-3ad2-48b0-93ee-79997db2b538",
                goodsName: "三林香脆芯310g",
                description: "",
                isSplit: 0,
                sn: "WOC000008813",
                price: 8.9,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/f1cf0ba2-08c7-4980-aac3-967722cd0239.jpg",
                salableStock: 30,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "29a3ec3e-da88-4f3f-8365-b3919be807d9",
                goodsName: "三林甜酸荞头310g",
                description: "",
                isSplit: 0,
                sn: "WOC000008814",
                price: 8.9,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/a284ff5f-2ead-4a93-beb7-8d4b85a791e9.jpg",
                salableStock: 18,
                categoryId: 1104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913579,
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
