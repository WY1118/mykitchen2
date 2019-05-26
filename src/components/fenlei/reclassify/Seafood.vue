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
      titlename: "水产海鲜",
      wrappernav: [
        "我厨优选水产",
        "新鲜活杀",
        "冷鲜水产",
        "刺身即食",
        "鱼类",
        "虾类",
        "蟹贝其他",
        "海鲜制品",
        "水产礼盒"
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
            id: 901,
            name: "我厨优选水产",
            displayIndex: 23,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b2de53b7-1574-488c-bcdf-0e86607195b1.jpg",
                type: "checkicon",
                categoryId: 901
              }
            ],
            goods: [
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "90045aab-a73c-4018-88be-ba83ebf32f5c",
                goodsName: "舟山冷鲜黄鱼一条装180g",
                description: "舟山直达，真正白嫩蒜瓣肉，清蒸红烧糖醋都好吃",
                isSplit: 0,
                sn: "WOC000002430",
                price: 13.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/652fe069-43e3-4de0-abf3-5b157ba1c823.jpg",
                salableStock: 109,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb500770-7b73-4abf-a5a5-f288a8ab1e2c",
                goodsName: "舟山冷鲜黄立鲳（金鲳）一条装250g以上",
                description: "去腮净膛，刺少肉嫩，清蒸8分钟，大菜就上桌",
                isSplit: 0,
                sn: "WOC000002431",
                price: 19.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/357ff77e-0a73-470e-9cfd-8d0fddbdd3ef.jpg",
                salableStock: 50,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                goodsName: "新鲜活杀鳊鱼一条装500g",
                description:
                  "湖泊里生活一年以上的野生鳊鱼！宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004527",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0baa2a3d-ad6d-4c1b-af41-ea8c7d82cf34.jpg",
                salableStock: 0,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/74383777-1d27-4d11-b684-19131714a9fa.png",
                    labelType: 1,
                    createTime: 1555914922
                  }
                ]
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                goodsName: "我厨优选新鲜活杀鲫鱼两条装550g",
                description: "去鳞净膛，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000003697",
                price: 19.9,
                marketPrice: 23.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/64acf819-495d-46c9-be9e-86a2a7619f74.jpg",
                salableStock: 0,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/148f28b0-17eb-4996-9b2c-750c10e06588.png",
                    labelType: 1,
                    createTime: 1555915051
                  }
                ]
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0186d663-007e-46cd-b7a8-7660c7afcaf3",
                goodsName: "新鲜活杀草鱼段450—500g",
                description: "草鱼中段，爽滑无腥",
                isSplit: 0,
                sn: "WOC000004529",
                price: 12.9,
                marketPrice: 13.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fae41253-1c2d-4a51-bf21-17c795aa6065.jpg",
                salableStock: 48,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bf2a8aed-2617-43f2-9f0a-b3d634da1e61",
                goodsName: "新鲜活杀草鱼头400g",
                description:
                  "活鱼现杀草鱼头，煲汤首选，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004530",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ddd0e5da-c4a2-4840-b850-571e318248e5.jpg",
                salableStock: 1,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bfc373de-4bb3-4f22-9221-8f0dd71a67a8",
                goodsName: "新鲜活杀草鱼划水200g",
                description: "草鱼尾段，肉质紧实Q弹",
                isSplit: 0,
                sn: "WOC000004528",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a31bbb91-b9f7-47f3-aaae-834fc28a1fbe.jpg",
                salableStock: 5,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fdae3b8f-ba1b-466f-bf96-ac2097453715",
                goodsName: "新鲜活杀牛蛙块350g",
                description: "冰鲜牛蛙，越早食用，口感越赞",
                isSplit: 0,
                sn: "WOC000005986",
                price: 16.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ed26269c-02f0-4baf-b5b8-1df60f70be1c.jpg",
                salableStock: 50,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4110cfab-bcda-4e25-a5e5-b27e5868b49b",
                goodsName: "我厨优选活杀白水鱼450g以上",
                description: "“太湖三白”之一，古时贡品鱼",
                isSplit: 0,
                sn: "WOC000007675",
                price: 22.8,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3511a6bb-3ccb-4c3e-83de-04dc71a66474.jpg",
                salableStock: 0,
                categoryId: 901,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 902,
            name: "新鲜活杀",
            displayIndex: 22,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/07c31590-5d52-4e49-8843-0feed6d59e8d.jpg",
                type: "checkicon",
                categoryId: 902
              }
            ],
            goods: [
              {
                goodsGuid: "8ddbdbc4-e9a6-4a6c-bb34-1786ad6faca9",
                goodsName: "活杀多宝鱼",
                description: "欧洲“比目鱼”，清蒸红烧都美味",
                isSplit: 0,
                sn: "WOC000006122",
                price: 39.9,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b8f81d0f-a313-4c2a-9588-012b33a0a5e3.jpg",
                salableStock: 3,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                goodsName: "新鲜活杀鳊鱼一条装500g",
                description:
                  "湖泊里生活一年以上的野生鳊鱼！宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004527",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0baa2a3d-ad6d-4c1b-af41-ea8c7d82cf34.jpg",
                salableStock: 0,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/74383777-1d27-4d11-b684-19131714a9fa.png",
                    labelType: 1,
                    createTime: 1555914922
                  }
                ]
              },
              {
                goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                goodsName: "我厨优选新鲜活杀鲫鱼两条装550g",
                description: "去鳞净膛，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000003697",
                price: 19.9,
                marketPrice: 23.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/64acf819-495d-46c9-be9e-86a2a7619f74.jpg",
                salableStock: 0,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/148f28b0-17eb-4996-9b2c-750c10e06588.png",
                    labelType: 1,
                    createTime: 1555915051
                  }
                ]
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
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0186d663-007e-46cd-b7a8-7660c7afcaf3",
                goodsName: "新鲜活杀草鱼段450—500g",
                description: "草鱼中段，爽滑无腥",
                isSplit: 0,
                sn: "WOC000004529",
                price: 12.9,
                marketPrice: 13.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fae41253-1c2d-4a51-bf21-17c795aa6065.jpg",
                salableStock: 48,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bf2a8aed-2617-43f2-9f0a-b3d634da1e61",
                goodsName: "新鲜活杀草鱼头400g",
                description:
                  "活鱼现杀草鱼头，煲汤首选，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004530",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ddd0e5da-c4a2-4840-b850-571e318248e5.jpg",
                salableStock: 1,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bfc373de-4bb3-4f22-9221-8f0dd71a67a8",
                goodsName: "新鲜活杀草鱼划水200g",
                description: "草鱼尾段，肉质紧实Q弹",
                isSplit: 0,
                sn: "WOC000004528",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a31bbb91-b9f7-47f3-aaae-834fc28a1fbe.jpg",
                salableStock: 5,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fdae3b8f-ba1b-466f-bf96-ac2097453715",
                goodsName: "新鲜活杀牛蛙块350g",
                description: "冰鲜牛蛙，越早食用，口感越赞",
                isSplit: 0,
                sn: "WOC000005986",
                price: 16.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ed26269c-02f0-4baf-b5b8-1df60f70be1c.jpg",
                salableStock: 50,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4110cfab-bcda-4e25-a5e5-b27e5868b49b",
                goodsName: "我厨优选活杀白水鱼450g以上",
                description: "“太湖三白”之一，古时贡品鱼",
                isSplit: 0,
                sn: "WOC000007675",
                price: 22.8,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3511a6bb-3ccb-4c3e-83de-04dc71a66474.jpg",
                salableStock: 0,
                categoryId: 902,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 903,
            name: "冷鲜水产",
            displayIndex: 21,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c1efd073-3a69-43f4-ae30-99f732d71e05.jpg",
                type: "checkicon",
                categoryId: 903
              }
            ],
            goods: [
              {
                goodsGuid: "90045aab-a73c-4018-88be-ba83ebf32f5c",
                goodsName: "舟山冷鲜黄鱼一条装180g",
                description: "舟山直达，真正白嫩蒜瓣肉，清蒸红烧糖醋都好吃",
                isSplit: 0,
                sn: "WOC000002430",
                price: 13.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/652fe069-43e3-4de0-abf3-5b157ba1c823.jpg",
                salableStock: 109,
                categoryId: 903,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb500770-7b73-4abf-a5a5-f288a8ab1e2c",
                goodsName: "舟山冷鲜黄立鲳（金鲳）一条装250g以上",
                description: "去腮净膛，刺少肉嫩，清蒸8分钟，大菜就上桌",
                isSplit: 0,
                sn: "WOC000002431",
                price: 19.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/357ff77e-0a73-470e-9cfd-8d0fddbdd3ef.jpg",
                salableStock: 50,
                categoryId: 903,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4372a0f0-9ebe-4d22-9c97-f15015215959",
                goodsName: "冰鲜深海放养黄鱼200-300g",
                description:
                  "自然野生“小鲜肉”，冰鲜非冷冻，净膛后净含量140g以上",
                isSplit: 0,
                sn: "WOC000006124",
                price: 19.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1250eced-962a-49be-8f81-c740766db1b1.jpg",
                salableStock: 50,
                categoryId: 903,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 903,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 903,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 904,
            name: "刺身即食",
            displayIndex: 20,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bba9c690-f38e-483e-a43e-06a8f23b5150.jpg",
                type: "checkicon",
                categoryId: 904
              }
            ],
            goods: [
              {
                goodsGuid: "cb3d2981-439b-419d-8f12-466a1d7a34ae",
                goodsName: "海水来了冰冻三文鱼刺身100g",
                description: "纹理清晰，鲜甜细腻，入口鲜美。",
                isSplit: 0,
                sn: "WOC000009587",
                price: 18.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/500d15ac-93b5-4503-9e12-e19eab589def.jpg",
                salableStock: 114,
                categoryId: 904,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6f5bd20b-d218-4ce3-a426-2d756fdc1fb0",
                goodsName: "海藻沙拉（海草）400g",
                description: "即食裙带菜，休闲佐餐小食。",
                isSplit: 0,
                sn: "WOC000005205",
                price: 11.9,
                marketPrice: 15.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7bf395cf-7cbf-46c6-bccb-ebaf4c92fb3e.jpg",
                salableStock: 0,
                categoryId: 904,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 904,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd23b276-0ea6-455d-b929-805c8fc40ce7",
                goodsName: "蒲烧星鳗鱼切片160g",
                description: "无腥味刺少，加热1分钟，美食即刻呈现",
                isSplit: 0,
                sn: "WOC000006096",
                price: 26.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ce6e1ee-4ebc-4990-97f7-2ec632393cb0.jpg",
                salableStock: 0,
                categoryId: 904,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b18b40f3-bd6d-4b67-ad8e-f28b95085f55",
                goodsName: "日式刺身瑶贝柱（带子）400g",
                description:
                  "刺身级瑶柱，鲜脆味美，解冻刺身级即食，如需烹饪可做铁板烧和爆炒，但烹饪时间必须短",
                isSplit: 0,
                sn: "WOC000004980",
                price: 49.9,
                marketPrice: 69.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1bea125c-ad08-4812-85e4-24ace7b0da59.jpg",
                salableStock: 133,
                categoryId: 904,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 905,
            name: "鱼类",
            displayIndex: 19,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/473e0845-4c82-4abe-b039-4bc5d04c6b74.jpg",
                type: "checkicon",
                categoryId: 905
              }
            ],
            goods: [
              {
                goodsGuid: "cd252f08-16bc-4125-8221-b025c052fa8d",
                goodsName: "海里仙秋刀鱼3号425g",
                description: "壮硕肥美，香煎肉质更细腻！",
                isSplit: 0,
                sn: "WOC000009050",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/5434f7b8-c15e-4f5a-9ea6-c168d5753e66.jpg",
                salableStock: 33,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5c2b2805-e991-447d-bce7-4ae1905d0b3f",
                goodsName: "海里仙安康鱼柳230g",
                description: "深海捕捞，肉质细腻，肥硕刺少",
                isSplit: 0,
                sn: "WOC000009048",
                price: 14.9,
                marketPrice: 17.9,
                picUrl:
                  "https://img.wochu.cn/upload/ca2b1807-d2b8-44f5-a8c6-01778b62ae6c.jpg",
                salableStock: 81,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "50b7c9c8-50fe-4123-8ba6-0f470f0a5070",
                goodsName: "倍特鲷鱼片140g",
                description: "去皮去刺，纹理清晰，弹牙更细腻。",
                isSplit: 0,
                sn: "WOC000008932",
                price: 18.8,
                marketPrice: 18.8,
                picUrl:
                  "https://img.wochu.cn/upload/e53fb53f-7eb3-4a61-af83-2440caf1fa43.jpg",
                salableStock: 9,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d46c5062-5e04-412d-afdd-55cc075a2695",
                goodsName: "倍特带鱼段500g",
                description: "鱼段大而肥嫩，鲜而不腥",
                isSplit: 0,
                sn: "WOC000008933",
                price: 24.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/1f65e163-41e0-4e1c-a932-e3c42c5264fc.jpg",
                salableStock: 378,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5ae33515-322b-49d9-b170-6a538c6f1207",
                goodsName: "开片雅片鱼头300g",
                description: "冰岛海捕，适合剁椒或清蒸",
                isSplit: 0,
                sn: "WOC000008013",
                price: 26.8,
                marketPrice: 36.8,
                picUrl:
                  "http://img.wochu.cn/upload/d3b849ed-4d12-4f9d-b4df-6ee0eaa3d6ad.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aa4bd90b-262b-4029-9e6b-0dd398261e68",
                goodsName: "舟山野生冰冻带鱼段（3-5两/条）450g",
                description: "正宗舟山，野生更鲜美",
                isSplit: 0,
                sn: "WOC000006102",
                price: 36.9,
                marketPrice: 42.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/965b85c9-5cab-4109-98b5-67afe983b33f.jpg",
                salableStock: 123,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b01c4930-13eb-40af-98d8-f07e60c8dbb3",
                goodsName: "舟山野生鲳鱼（2-3两/条）2条装220g",
                description: "正宗舟山野生，红烧、干煎皆美味",
                isSplit: 0,
                sn: "WOC000006100",
                price: 39.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7643ed49-3be4-4a9b-83ee-07fff22e34eb.jpg",
                salableStock: 54,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "10be4fd1-84ba-4e5a-9802-c8aef63aceba",
                goodsName: "舟山野生小黄鱼（7—8条）300g",
                description: "野生捕捞，干煎后酥脆不吐刺",
                isSplit: 0,
                sn: "WOC000006302",
                price: 14.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ac43a3e5-9256-4eab-8acd-17f1ce51371d.jpg",
                salableStock: 108,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "90045aab-a73c-4018-88be-ba83ebf32f5c",
                goodsName: "舟山冷鲜黄鱼一条装180g",
                description: "舟山直达，真正白嫩蒜瓣肉，清蒸红烧糖醋都好吃",
                isSplit: 0,
                sn: "WOC000002430",
                price: 13.9,
                marketPrice: 22.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/652fe069-43e3-4de0-abf3-5b157ba1c823.jpg",
                salableStock: 109,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb500770-7b73-4abf-a5a5-f288a8ab1e2c",
                goodsName: "舟山冷鲜黄立鲳（金鲳）一条装250g以上",
                description: "去腮净膛，刺少肉嫩，清蒸8分钟，大菜就上桌",
                isSplit: 0,
                sn: "WOC000002431",
                price: 19.9,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/357ff77e-0a73-470e-9cfd-8d0fddbdd3ef.jpg",
                salableStock: 50,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b8ae73d1-d2e3-44aa-89fb-c9c6ba518b20",
                goodsName: "舟山野生船冻硬皮红鱿鱼300g",
                description: "大大大鱿鱼！像果冻般Q弹",
                isSplit: 0,
                sn: "WOC000007759",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/dfbb4df9-770c-4556-beb7-0a3f37169d5b.jpg",
                salableStock: 213,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f75d45e0-c04d-44d0-aa66-f64de8625c3a",
                goodsName: "舟山野生海鲜拼盘250g",
                description: "小海鲜，大拼盘，炒饭煲粥必备",
                isSplit: 0,
                sn: "WOC000007760",
                price: 18.9,
                marketPrice: 28.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0ab6869f-1afe-4dac-bb6a-a2df7acd23d7.jpg",
                salableStock: 183,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a90be4f8-6c68-47a8-ba85-c10db8fd0173",
                goodsName: "舟山野生带鱼段(4-6两)450g",
                description: "舟山美味，肉质厚实，红烧家常菜！",
                isSplit: 0,
                sn: "WOC000008076",
                price: 36.9,
                marketPrice: 49.0,
                picUrl:
                  "http://img.wochu.cn/upload/12bb8445-84d4-4611-9f78-20ad14be37b4.jpg",
                salableStock: 129,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4372a0f0-9ebe-4d22-9c97-f15015215959",
                goodsName: "冰鲜深海放养黄鱼200-300g",
                description:
                  "自然野生“小鲜肉”，冰鲜非冷冻，净膛后净含量140g以上",
                isSplit: 0,
                sn: "WOC000006124",
                price: 19.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1250eced-962a-49be-8f81-c740766db1b1.jpg",
                salableStock: 50,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "39aaa4b3-4f96-4b8c-bce0-6771cce8d706",
                goodsName: "烧烤青花鱼80—100g一条",
                description: "烧烤佳品，胆固醇更低！",
                isSplit: 0,
                sn: "WOC000005861",
                price: 19.9,
                marketPrice: 22.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1af43016-92ac-4557-9a96-555c1c019e31.jpg",
                salableStock: 600,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "39aaa4b3-4f96-4b8c-bce0-6771cce8d706",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "d2f78ba8-3318-4160-a7b2-d7c3d35c5de2",
                goodsName: "小银鱼150g",
                description: "云南原产地直供，肥美无鱼刺，宝宝辅食之选",
                isSplit: 0,
                sn: "WOC000006852",
                price: 13.5,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7001f69a-3dff-4da8-aa82-6dfc3e595001.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3aea626b-1a23-4079-b30b-1c9181dc5e9b",
                goodsName: "东海白鲳1条装200g以上",
                description: "东海捕捞超新鲜，简单清蒸谁都会",
                isSplit: 0,
                sn: "WOC000002540",
                price: 36.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a8f7eae8-2e17-4ddb-b67d-4c45f2b3e053.jpg",
                salableStock: 12,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b6749ed3-e79b-4017-bb41-3058247df7ac",
                goodsName: "荷裕美式炭烤三文鱼230g（鱼排130g+酱汁100g）",
                description: "大西洋鲑，调味腌制，炭烤风味绝佳。",
                isSplit: 0,
                sn: "WOC000002993",
                price: 28.9,
                marketPrice: 28.9,
                picUrl:
                  "https://img.wochu.cn/upload/fda1ee90-18f5-4b9a-8c60-4cd2747bdac1.jpg",
                salableStock: 54,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd23b276-0ea6-455d-b929-805c8fc40ce7",
                goodsName: "蒲烧星鳗鱼切片160g",
                description: "无腥味刺少，加热1分钟，美食即刻呈现",
                isSplit: 0,
                sn: "WOC000006096",
                price: 26.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ce6e1ee-4ebc-4990-97f7-2ec632393cb0.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8ddbdbc4-e9a6-4a6c-bb34-1786ad6faca9",
                goodsName: "活杀多宝鱼",
                description: "欧洲“比目鱼”，清蒸红烧都美味",
                isSplit: 0,
                sn: "WOC000006122",
                price: 39.9,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b8f81d0f-a313-4c2a-9588-012b33a0a5e3.jpg",
                salableStock: 3,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                goodsName: "新鲜活杀鳊鱼一条装500g",
                description:
                  "湖泊里生活一年以上的野生鳊鱼！宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004527",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0baa2a3d-ad6d-4c1b-af41-ea8c7d82cf34.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "4edafb65-60a1-4ee3-8d80-e2a0127b5f63",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/74383777-1d27-4d11-b684-19131714a9fa.png",
                    labelType: 1,
                    createTime: 1555914922
                  }
                ]
              },
              {
                goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                goodsName: "我厨优选新鲜活杀鲫鱼两条装550g",
                description: "去鳞净膛，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000003697",
                price: 19.9,
                marketPrice: 23.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/64acf819-495d-46c9-be9e-86a2a7619f74.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "b3b9475f-cf77-4b59-bb80-67ff412ca781",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/148f28b0-17eb-4996-9b2c-750c10e06588.png",
                    labelType: 1,
                    createTime: 1555915051
                  }
                ]
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0186d663-007e-46cd-b7a8-7660c7afcaf3",
                goodsName: "新鲜活杀草鱼段450—500g",
                description: "草鱼中段，爽滑无腥",
                isSplit: 0,
                sn: "WOC000004529",
                price: 12.9,
                marketPrice: 13.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fae41253-1c2d-4a51-bf21-17c795aa6065.jpg",
                salableStock: 48,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bf2a8aed-2617-43f2-9f0a-b3d634da1e61",
                goodsName: "新鲜活杀草鱼头400g",
                description:
                  "活鱼现杀草鱼头，煲汤首选，宰杀后净含量为宰杀前的85%",
                isSplit: 0,
                sn: "WOC000004530",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ddd0e5da-c4a2-4840-b850-571e318248e5.jpg",
                salableStock: 1,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bfc373de-4bb3-4f22-9221-8f0dd71a67a8",
                goodsName: "新鲜活杀草鱼划水200g",
                description: "草鱼尾段，肉质紧实Q弹",
                isSplit: 0,
                sn: "WOC000004528",
                price: 5.9,
                marketPrice: 6.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a31bbb91-b9f7-47f3-aaae-834fc28a1fbe.jpg",
                salableStock: 5,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "349da7de-bff4-469e-ba25-400b85e57501",
                goodsName: "冰岛比目鱼切片230g",
                description: "深海海鲜 鲜嫩少刺 欧洲国宴常见菜",
                isSplit: 0,
                sn: "WOC000006988",
                price: 27.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/45d7d66e-50ad-4da1-a58a-756948a3bde5.jpg",
                salableStock: 26,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4110cfab-bcda-4e25-a5e5-b27e5868b49b",
                goodsName: "我厨优选活杀白水鱼450g以上",
                description: "“太湖三白”之一，古时贡品鱼",
                isSplit: 0,
                sn: "WOC000007675",
                price: 22.8,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3511a6bb-3ccb-4c3e-83de-04dc71a66474.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ffdc1b6d-67d3-491c-b93b-d1f0bd359e86",
                goodsName: "滨江码头大西洋黄金鲍300g",
                description: "深海海鲜，适合爆炒煲汤涮火锅",
                isSplit: 0,
                sn: "WOC000007925",
                price: 29.9,
                marketPrice: 57.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5d0ac73e-43d0-4185-b2cf-d35897d8837c.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc0ecd58-c8db-4acd-8dbd-fc90d15fe17b",
                goodsName: "生冻比目鱼排300g",
                description: "冰岛深海急冻，肉质细嫩弹滑。",
                isSplit: 0,
                sn: "WOC000008108",
                price: 38.9,
                marketPrice: 43.9,
                picUrl:
                  "https://img.wochu.cn/upload/ad7c104d-af7d-4b62-a9df-f34c4c1ed5a4.jpg",
                salableStock: 0,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "97d40b94-830f-4884-940c-06fe1b70f5b5",
                goodsName: "生冻银鳕鱼排200g",
                description: "低温急冻，孕妈宝宝的营养之选。",
                isSplit: 0,
                sn: "WOC000008111",
                price: 128.0,
                marketPrice: 178.0,
                picUrl:
                  "https://img.wochu.cn/upload/25ea9271-48d1-40ef-874d-fa55826131eb.jpg",
                salableStock: 9,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "45361c33-1ba9-4b4e-839b-fcde91e20d70",
                goodsName: "水煮鲷鱼片300g",
                description: "肉质鲜嫩，味道浓郁~",
                isSplit: 0,
                sn: "WOC000008831",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/7b7b1800-2cc3-4181-90d4-ad6d18aa5f82.jpg",
                salableStock: 18,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7bb0fa11-b244-4890-bd77-57da9a66bbb2",
                goodsName: "荷裕热熏大西洋鲭鱼200g",
                description: "源自挪威，去脏清洗，口感肥美有质感。",
                isSplit: 0,
                sn: "WOC000008582",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/9b3869f1-cb09-4546-b9ef-2ef754a86386.jpg",
                salableStock: 54,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b9b955fe-789e-4a57-8565-79131d97cdaa",
                goodsName: "倍特三文鱼头300g",
                description: "肉层丰厚腥味淡，炖汤浓郁醇厚",
                isSplit: 0,
                sn: "WOC000008927",
                price: 16.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/febe0ae1-085d-485a-bbcf-7ede23ac5330.jpg",
                salableStock: 66,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "18be3d06-b779-47a5-b677-859fe116c848",
                goodsName: "倍特深海鳕鱼片200g",
                description: "肉质厚实刺少，入口弹滑细腻。",
                isSplit: 0,
                sn: "WOC000008928",
                price: 22.8,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/551a2f95-ef04-4181-9009-63d0542efd41.jpg",
                salableStock: 69,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d523165-5fb5-4609-8259-80238add6c50",
                goodsName: "倍特黄金蝶鱼300g",
                description: "深海低温孕育，口感水润柔滑",
                isSplit: 0,
                sn: "WOC000008929",
                price: 13.8,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/208090ca-3a11-47fc-87f1-7b4b90f4640f.jpg",
                salableStock: 54,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "23846a91-069f-4bad-a96f-3a2e0c1a55be",
                goodsName: "倍特鳗鱼段500g",
                description: "肉质嫩滑，家庭红烧之选。",
                isSplit: 0,
                sn: "WOC000008930",
                price: 19.9,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/ed1fa42d-c73e-4f71-8423-23748ed2f924.jpg",
                salableStock: 414,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9486b637-1469-4c9a-ab85-271623568f03",
                goodsName: "倍特多春鱼125g",
                description: "皮薄籽多，肉质鲜嫩酥脆。",
                isSplit: 0,
                sn: "WOC000008935",
                price: 9.9,
                marketPrice: 12.8,
                picUrl:
                  "https://img.wochu.cn/upload/bbd36c66-7bad-4b4b-b2b4-45bb160adcb4.jpg",
                salableStock: 78,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a68fd9b8-bdc9-4b74-b6a8-577e3c679c8b",
                goodsName: "倍特五去小黄鱼200g",
                description: "去头去内脏，肉质鲜滑细腻。",
                isSplit: 0,
                sn: "WOC000008937",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/dc117325-c5b7-42b2-a91c-fe52a873cdf1.jpg",
                salableStock: 114,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "260834a5-d767-4d83-b965-320778975cd9",
                goodsName: "倍特黑鱼片300g",
                description: "鱼片肥厚，酸菜鱼必选食材！",
                isSplit: 0,
                sn: "WOC000008938",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/96cd2f35-6a2f-4ed6-95f5-823cfc4c2729.jpg",
                salableStock: 48,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f64e156d-7c68-4311-bc8f-7b807f1d20b0",
                goodsName: "倍特去头小黄鱼500g",
                description: "肉质细腻，口感鲜美，老少皆宜。",
                isSplit: 0,
                sn: "WOC000008931",
                price: 17.9,
                marketPrice: 18.8,
                picUrl:
                  "https://img.wochu.cn/upload/c22a8b4f-30ab-42c9-8a73-bc91588c5012.jpg",
                salableStock: 57,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "548ffb81-363d-4e05-a41b-3a00949987a5",
                goodsName: "海里仙开片红娘鱼400g",
                description: "高蛋白低脂肪，肉质细腻，易消化吸收。",
                isSplit: 0,
                sn: "WOC000009047",
                price: 13.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/76455928-bed6-426d-8863-661275d7ba16.jpg",
                salableStock: 33,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "73e44f1d-9cfa-439b-8454-d68a3c0eddce",
                goodsName: "海里仙咸鳗段（腌制去头去尾）300g",
                description: "预调肉质，个大肥美，肉质松软易消化。",
                isSplit: 0,
                sn: "WOC000009053",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/8be16fe8-b298-48aa-91f2-4e1d88ba5dc3.jpg",
                salableStock: 486,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4dccdb82-1622-4854-975f-1dddb7c3c6fe",
                goodsName: "海里仙油带鱼段（2-3两）350g",
                description: "银鳞完整，鱼肉厚实，清蒸红烧皆宜！",
                isSplit: 0,
                sn: "WOC000009052",
                price: 15.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/078e1637-5afe-4924-91fa-b8808b3b5715.jpg",
                salableStock: 75,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4565bef2-fab4-4a1e-a28e-2b805dbbc151",
                goodsName: "荷裕柠檬香煎鱼排200g",
                description: "原料为巴沙鱼，口感鲜嫩细腻，3分钟秒变大厨~",
                isSplit: 0,
                sn: "WOC000001822",
                price: 18.8,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6bd28c0e-3ddf-4937-8f7b-02a9210eb16c.jpg",
                salableStock: 360,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd4bc36f-52d8-4eb9-90e6-b32bfd3104f7",
                goodsName: "荷裕原味三文鱼排250g（银鲑）",
                description: "产自智利，香煎炖汤皆宜。",
                isSplit: 0,
                sn: "WOC000009504",
                price: 59.0,
                marketPrice: 59.0,
                picUrl:
                  "https://img.wochu.cn/upload/e2c77ce7-a92b-487e-bd0c-3ec307a59183.jpg",
                salableStock: 15,
                categoryId: 905,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 906,
            name: "虾类",
            displayIndex: 18,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0a5c5d5e-52f4-43f7-b095-5e90a0b4b06a.jpg",
                type: "checkicon",
                categoryId: 906
              }
            ],
            goods: [
              {
                goodsGuid: "f4f20ffa-1b9a-4ff8-bedc-f50074eb2335",
                goodsName: "北极甜虾虾仁200g",
                description: "来自极地海域，细腻弹嫩",
                isSplit: 0,
                sn: "WOC000008981",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/85cfad25-3a62-4cd3-bb75-583474f3ad7c.jpg",
                salableStock: 6,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "72096f6e-a482-409e-a916-60d5fa7849d4",
                goodsName: "免浆河虾仁200g",
                description:
                  "去壳去肠，不用上浆，嫩如现剥，毛重200g，虾仁净重185g",
                isSplit: 0,
                sn: "WOC000001937",
                price: 39.9,
                marketPrice: 45.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/733eab61-a2c4-4f4e-9180-9ef43678993a.jpg",
                salableStock: 1935,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "72096f6e-a482-409e-a916-60d5fa7849d4",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c639ec01-789e-4078-ad72-2eeb780c98ff.png",
                    labelType: 1,
                    createTime: 1556183769
                  }
                ]
              },
              {
                goodsGuid: "75f07709-9075-4281-ae19-bad54e570d24",
                goodsName: "熟冻南美白虾（带头带壳）400g",
                description: "保质期至7/10，介意者慎拍",
                isSplit: 0,
                sn: "WOC000008109",
                price: 59.9,
                marketPrice: 99.9,
                picUrl:
                  "https://img.wochu.cn/upload/cd41c324-432e-47bc-883c-a7431366292c.jpg",
                salableStock: 150,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "58ac39fe-3dbc-42cc-8a82-73d6e4fb0826",
                goodsName: "天妇罗棒虾（芙蓉虾）10尾200g",
                description: "油炸3分钟，高端日料即享，金黄酥脆",
                isSplit: 0,
                sn: "WOC000007430",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9ca68f34-cacb-40e6-940a-700fee1286e6.jpg",
                salableStock: 132,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
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
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f03f6c19-e7a2-4f56-b586-00f1f56780c5",
                goodsName: "越南进口黑虎虾大草虾400g（18-20）",
                description: "虾中之王，一份400g含18~20只",
                isSplit: 0,
                sn: "WOC000007428",
                price: 49.9,
                marketPrice: 79.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3f760730-d05e-45eb-b18b-6ee73817eae9.jpg",
                salableStock: 147,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "82559776-3474-47c9-8297-97bbb7474aac",
                goodsName: "泰国进口河虾仁150g（71-90）",
                description: "餐桌人气小鲜肉，百种吃法等你解锁",
                isSplit: 0,
                sn: "WOC000007429",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a65de354-6b69-4955-8d75-141d7212c031.jpg",
                salableStock: 90,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2ebffbe3-b6c9-4f81-8e9f-4ed441742016",
                goodsName: "倍特南美白虾400g",
                description: "虾壳薄，硕大肥美，白灼油焖皆宜！",
                isSplit: 0,
                sn: "WOC000008936",
                price: 39.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/5f298b15-49b9-4999-84e9-ed2bf4f03e3b.jpg",
                salableStock: 88,
                categoryId: 906,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 907,
            name: "蟹贝其它",
            displayIndex: 17,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b3ff78d-8974-4080-b5b2-5c8dddd38f7b.jpg",
                type: "checkicon",
                categoryId: 907
              }
            ],
            goods: [
              {
                goodsGuid: "36871538-a2a8-4dd6-b913-ee382e013474",
                goodsName: "鲜贝柱120g",
                description: "无包冰，分量实打实，熬海鲜粥必备",
                isSplit: 0,
                sn: "WOC000002543",
                price: 13.9,
                marketPrice: 16.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f5501733-1f2e-479a-9ef9-0275eef431a0.jpg",
                salableStock: 75,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5af9cfe7-fb31-41ba-915c-5d2cf2f73a00",
                goodsName: "花蛤500g",
                description: "免洗，个头大，肉质弹而饱满",
                isSplit: 0,
                sn: "WOC000003801",
                price: 9.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a38d7206-d2f3-4c2d-a10d-a06a690e5c2e.jpg",
                salableStock: 240,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5db39139-2a5c-4821-9ac9-77838ae898cb",
                goodsName: "小章鱼200g",
                description: "越南进口，肉质鲜美，口感香脆。",
                isSplit: 0,
                sn: "WOC000003795",
                price: 14.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/59f05487-924b-42ef-8ed8-98217becf861.jpg",
                salableStock: 0,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b18b40f3-bd6d-4b67-ad8e-f28b95085f55",
                goodsName: "日式刺身瑶贝柱（带子）400g",
                description:
                  "刺身级瑶柱，鲜脆味美，解冻刺身级即食，如需烹饪可做铁板烧和爆炒，但烹饪时间必须短",
                isSplit: 0,
                sn: "WOC000004980",
                price: 49.9,
                marketPrice: 69.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1bea125c-ad08-4812-85e4-24ace7b0da59.jpg",
                salableStock: 133,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8b64eadb-a9eb-49b7-8aac-ece3ae6ac6a4",
                goodsName: "鲜动生活冻鲜贝柱300g",
                description: "鲜活速冻，家常营养炒菜来一份！",
                isSplit: 0,
                sn: "WOC000008454",
                price: 26.9,
                marketPrice: 36.8,
                picUrl:
                  "https://img.wochu.cn/upload/61de55b5-d2f5-4709-abf3-1e3566c3aeb4.jpg",
                salableStock: 0,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f6adfe37-ffac-472b-9b1c-eae7a2182ab2",
                goodsName: "倍特半壳扇贝175g",
                description: "个大肉厚，紧实弹牙，5分钟快手菜！",
                isSplit: 0,
                sn: "WOC000008934",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/a6542b6b-7aea-4266-a5ec-c7f75e33f008.jpg",
                salableStock: 159,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "89381127-6f99-40e2-91f5-acf4a461fa8d",
                goodsName: "海里仙鱿鱼须400g",
                description: "低温急冻，肥美有嚼劲。",
                isSplit: 0,
                sn: "WOC000009049",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/0395b276-77d1-495f-b5b9-2d6fcebcadae.jpg",
                salableStock: 51,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0e374eca-da34-4e29-99c6-46a5cbf83794",
                goodsName: "倍特漂烫小鲍鱼200g",
                description: "肉质柔嫩细腻，蒜蓉鲜香有弹性！",
                isSplit: 0,
                sn: "WOC000009330",
                price: 39.9,
                marketPrice: 42.9,
                picUrl:
                  "https://img.wochu.cn/upload/3ffe9eec-c922-4aff-a8c7-a3ded26c632b.jpg",
                salableStock: 87,
                categoryId: 907,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 908,
            name: "海鲜制品",
            displayIndex: 16,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/35dd252d-a21c-4566-a3a5-952c675842a8.jpg",
                type: "checkicon",
                categoryId: 908
              }
            ],
            goods: [
              {
                goodsGuid: "6f5bd20b-d218-4ce3-a426-2d756fdc1fb0",
                goodsName: "海藻沙拉（海草）400g",
                description: "即食裙带菜，休闲佐餐小食。",
                isSplit: 0,
                sn: "WOC000005205",
                price: 11.9,
                marketPrice: 15.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7bf395cf-7cbf-46c6-bccb-ebaf4c92fb3e.jpg",
                salableStock: 0,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0c9bf0aa-245a-4055-bfa8-e78fdd3c319b",
                goodsName: "美田屋芥末章鱼100g",
                description: "生章鱼+秘制芥末，日料餐厅必点",
                isSplit: 0,
                sn: "WOC000007310",
                price: 15.9,
                marketPrice: 19.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/39b3ae45-8375-4a38-be9f-1ebc437f371b.jpg",
                salableStock: 0,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2fa5c937-601a-4378-8af1-c64e7eac39f6",
                goodsName: "美田屋芥末海螺片100g",
                description: "甜咸重口味，解冻后即享美味",
                isSplit: 0,
                sn: "WOC000007313",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c2d6d1de-ef5f-40be-b97a-80965f0048c1.jpg",
                salableStock: 9,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "50b005a2-31fe-480a-891b-2e9db5a857e1",
                goodsName: "美田屋照烧扇贝100g",
                description: "甜咸重口味，解冻后即享美味",
                isSplit: 0,
                sn: "WOC000007312",
                price: 13.9,
                marketPrice: 19.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c35ddc55-3d18-4dca-9762-40af9a18ff87.jpg",
                salableStock: 69,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ba8662ff-97e8-49dc-811b-e9b52b6a2a3e",
                goodsName: "迷你鱼丸100g",
                description: "营养丰富，细嫩鲜美，弹性十足，健康低脂",
                isSplit: 0,
                sn: "WOC000006382",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/562fbbeb-964c-4151-a0fc-2e6a9b2e6d9e.jpg",
                salableStock: 0,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0346b885-1f79-4a7f-bdae-0ac0e646c2ab",
                goodsName: "即食海蜇丝原味360g",
                description: "开袋凉拌即食，一咬发出咯噔咯噔脆响",
                isSplit: 0,
                sn: "WOC000003428",
                price: 9.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5cac1f2f-eecd-4a1a-83ee-62e53a2ec864.jpg",
                salableStock: 60,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "56bfb9fd-1692-4ef4-9947-8f03a673aede",
                goodsName: "深海小海带（丝菜）288g",
                description: "盐渍海带丝，无沙免蒸。",
                isSplit: 0,
                sn: "WOC000001140",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d5ea87c6-f870-4900-bfad-dfc581f3910e.jpg",
                salableStock: 0,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "56bfb9fd-1692-4ef4-9947-8f03a673aede",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f6a1bc69-56cf-4737-a99f-7500289d4c8e.png",
                    labelType: 1,
                    createTime: 1555914203
                  }
                ]
              },
              {
                goodsGuid: "8a6c93fc-cd21-4b99-b111-b45fcd8116e3",
                goodsName: "美田屋朝鲜海螺片100g",
                description: "爽口不辣，解冻后即享美味",
                isSplit: 0,
                sn: "WOC000007311",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c40bcc5d-3802-4a01-a732-e14740b0e2e6.jpg",
                salableStock: 102,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "51e0bcad-d79b-4277-ab79-792d8e0a8807",
                goodsName: "照烧鱿鱼120g",
                description: "3分钟快手菜，日式照烧风味！",
                isSplit: 0,
                sn: "WOC000008982",
                price: 18.8,
                marketPrice: 19.0,
                picUrl:
                  "https://img.wochu.cn/upload/b9d341e2-1acd-471a-8849-7643cc3a497d.jpg",
                salableStock: 105,
                categoryId: 908,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605531,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 909,
            name: "水产礼盒",
            displayIndex: 15,
            description: "",
            parentId: 9,
            path: "/9/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d5ef592d-1775-4d00-bc4e-02859c1d5645.jpg",
                type: "checkicon",
                categoryId: 909
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
