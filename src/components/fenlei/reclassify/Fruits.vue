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
      titlename: "水果",
      wrappernav: [
        "时令水果",
        "热带水果",
        "柑橘橙柚",
        "苹果/梨",
        "奇异果",
        "葡萄提子",
        "椰子",
        "瓜类",
        "牛油果",
        "芒果/香蕉",
        "车厘子",
        "其他水果"
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
            id: 701,
            name: "时令水果",
            displayIndex: 45,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/40834eb4-252d-42f3-aabf-0a31f9da62a8.jpeg",
                type: "checkicon",
                categoryId: 701
              }
            ],
            goods: [
              {
                goodsGuid: "3dfec655-51b8-43a6-907e-faac08089717",
                goodsName: "泰国龙眼400g",
                description: "皮薄，核小，肉厚",
                isSplit: 0,
                sn: "WOC000001136",
                price: 12.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f83f21ce-b00f-44e6-ad76-f25dbf69b4ae.jpg",
                salableStock: 60,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "03025ec5-5fda-4625-a6d1-0bc5bc53ce2e",
                goodsName: "越南白心火龙果2只装（约900g）",
                description: "皮薄肉嫩，香甜多汁，富含膳食纤维",
                isSplit: 0,
                sn: "WOC000002019",
                price: 19.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1ae649a1-f225-4bf4-83e2-65f8fb8f59f8.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4ad64a53-7a44-4db1-ac83-917d4fe888fd",
                goodsName: "新西兰佳沛金奇异果6粒/盒",
                description: "全家人的维C小仓库",
                isSplit: 0,
                sn: "WOC000004083",
                price: 69.9,
                marketPrice: 69.9,
                picUrl:
                  "https://img.wochu.cn/upload/a47725f7-4bbe-4e81-b49b-58852214f853.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8e80f789-c11d-4910-b7bb-f0debb8a281b",
                goodsName: "高乐蜜甜心芒果2粒装(单果350g以上)",
                description: "产自云南，肉厚多汁甜如蜜",
                isSplit: 0,
                sn: "WOC000007973",
                price: 24.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/986eb65c-9760-43b1-802b-708998744ccf.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "8e80f789-c11d-4910-b7bb-f0debb8a281b",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3780a9e5-7fe0-4ebe-83a4-7dd79e4307c1.png",
                    labelType: 1,
                    createTime: 1512375307
                  }
                ]
              },
              {
                goodsGuid: "9683ebdc-a2d1-4ba2-b130-0b7d80ecfefa",
                goodsName: "椰青1只",
                description: "长在树上的矿泉水 大自然的饮料",
                isSplit: 0,
                sn: "WOC000001306",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e53897eb-1854-4ad5-a15e-2d49298a59ac.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc1dccd4-e821-4e84-9605-146c54056638",
                goodsName: "桂林百香果2粒装",
                description: "跨界小能手 百搭新吃法",
                isSplit: 0,
                sn: "WOC000003444",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d254d645-2262-4059-9560-20379e4bcf27.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "de7850ae-7e76-47f0-bd6f-263c7f335fff",
                goodsName: "Driscoll’s巨人蓝莓1盒(125g以上)",
                description: "清甜多汁  清新爽口",
                isSplit: 0,
                sn: "WOC000005873",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/6cee1c91-85e9-4a91-812e-f86a68a26b5a.jpg",
                salableStock: 10,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "de7850ae-7e76-47f0-bd6f-263c7f335fff",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48dc4d77-dece-4cb3-9a94-f335ad906654.png",
                    labelType: 1,
                    createTime: 1556076480
                  }
                ]
              },
              {
                goodsGuid: "fa49cc05-d680-43f6-bd96-77a02fb9f2cb",
                goodsName: "云南青柠檬4粒装(单果65g以上)",
                description: "皮薄汁多的高原小青柠",
                isSplit: 0,
                sn: "WOC000006819",
                price: 11.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e1932465-c9c8-4b60-a308-e094fd94aba2.jpg",
                salableStock: 50,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "78d3fe7c-3ad5-48c9-813b-ae6ae7504b8f",
                goodsName: "泰国山竹500g装",
                description: "5A山竹肤白貌美，红袍加身，名副其实的果中皇后",
                isSplit: 0,
                sn: "WOC000006206",
                price: 20.9,
                marketPrice: 30.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7105af54-f772-49db-9a98-c04577850634.jpg",
                salableStock: 162,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1d208efb-01fb-4b17-833d-62a66c1a12bf",
                goodsName: "台湾红心芭乐2粒装(约500g/盒)",
                description: "低热量低脂肪高维C的养颜鲜果",
                isSplit: 0,
                sn: "WOC000010532",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/adc82582-d769-4781-915c-ecf1ebe1568a.jpg",
                salableStock: 999,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4efe12f1-9870-457e-bbf6-03b7e5e89943",
                goodsName: "台湾莲雾2粒装(约200g/盒)",
                description: "皮薄多汁，脆嫩爽口，脆甜如初恋",
                isSplit: 0,
                sn: "WOC000010531",
                price: 25.0,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/7ee105b3-04c0-46a7-b3a9-6cc95db3b737.jpg",
                salableStock: 999,
                categoryId: 701,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 702,
            name: "热带水果",
            displayIndex: 44,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8bb0c592-2c8b-419b-930b-b888056b7e32.jpg",
                type: "checkicon",
                categoryId: 702
              }
            ],
            goods: [
              {
                goodsGuid: "3dfec655-51b8-43a6-907e-faac08089717",
                goodsName: "泰国龙眼400g",
                description: "皮薄，核小，肉厚",
                isSplit: 0,
                sn: "WOC000001136",
                price: 12.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f83f21ce-b00f-44e6-ad76-f25dbf69b4ae.jpg",
                salableStock: 60,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "03025ec5-5fda-4625-a6d1-0bc5bc53ce2e",
                goodsName: "越南白心火龙果2只装（约900g）",
                description: "皮薄肉嫩，香甜多汁，富含膳食纤维",
                isSplit: 0,
                sn: "WOC000002019",
                price: 19.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1ae649a1-f225-4bf4-83e2-65f8fb8f59f8.jpg",
                salableStock: 50,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4ad64a53-7a44-4db1-ac83-917d4fe888fd",
                goodsName: "新西兰佳沛金奇异果6粒/盒",
                description: "全家人的维C小仓库",
                isSplit: 0,
                sn: "WOC000004083",
                price: 69.9,
                marketPrice: 69.9,
                picUrl:
                  "https://img.wochu.cn/upload/a47725f7-4bbe-4e81-b49b-58852214f853.jpg",
                salableStock: 50,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "78d3fe7c-3ad5-48c9-813b-ae6ae7504b8f",
                goodsName: "泰国山竹500g装",
                description: "5A山竹肤白貌美，红袍加身，名副其实的果中皇后",
                isSplit: 0,
                sn: "WOC000006206",
                price: 20.9,
                marketPrice: 30.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7105af54-f772-49db-9a98-c04577850634.jpg",
                salableStock: 162,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ddc71e69-802a-4c5e-b49a-a3b5ebd09e77",
                goodsName: "金枕头榴莲果肉1盒(净含量300g）",
                description: "果肉不失丝丝韧感，冰爽绵密",
                isSplit: 0,
                sn: "WOC000005078",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/273a1f16-a32f-4571-81bf-c5c8a852a34b.jpg",
                salableStock: 1002,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "ddc71e69-802a-4c5e-b49a-a3b5ebd09e77",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/89ea456c-3245-4e8e-afcd-4259e02f9728.png",
                    labelType: 1,
                    createTime: 1556076506
                  }
                ]
              },
              {
                goodsGuid: "fd62cc22-8634-4d87-a564-ef238e90ca4f",
                goodsName: "秘鲁牛油果2粒装",
                description: "绵滑似乳酪，淡淡乳脂香",
                isSplit: 0,
                sn: "WOC000007093",
                price: 24.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7418debb-cfa1-4535-802e-7d730de64150.jpg",
                salableStock: 50,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "70c9fd25-acce-47f1-96e9-ee200d42599d",
                goodsName: "进口香蕉1500g",
                description: "菲律宾进口，细腻香甜",
                isSplit: 0,
                sn: "WOC000001157",
                price: 22.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17191a55-9162-4042-a221-1cfde6fd49f9.jpg",
                salableStock: 50,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ffdb7780-3345-4c9b-b7a1-3d07e0eb3071",
                goodsName: "佳农进口皇帝蕉300g/份",
                description: "口感润甜 肉质细腻",
                isSplit: 0,
                sn: "WOC000008421",
                price: 11.9,
                marketPrice: 14.9,
                picUrl:
                  "https://img.wochu.cn/upload/a1d9f651-c560-4e42-82e9-3a47578161cf.jpg",
                salableStock: 50,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
                goodsName: "菲律宾进口菠萝1粒装(单果1000g以上)",
                description: "酸甜可口  脆爽多汁",
                isSplit: 0,
                sn: "WOC000010193",
                price: 13.9,
                marketPrice: 23.9,
                picUrl:
                  "https://img.wochu.cn/upload/f8a10ec2-a724-4df6-98ef-97404f04ce9d.jpg",
                salableStock: 999,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7323e461-6e1a-4e9c-b7e0-aa560f337f12.png",
                    labelType: 1,
                    createTime: 1556075681
                  }
                ]
              },
              {
                goodsGuid: "b3441ffe-cd17-477f-b0f0-26523a023f82",
                goodsName: "台湾释迦1枚(单果300g以上)",
                description: "果肉嫩滑 绵密爽口 香甜如初恋",
                isSplit: 0,
                sn: "WOC000010534",
                price: 37.9,
                marketPrice: 37.9,
                picUrl:
                  "https://img.wochu.cn/upload/24685410-d348-4bf2-b41e-984efead4928.jpg",
                salableStock: 999,
                categoryId: 702,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 703,
            name: "柑橘橙柚",
            displayIndex: 43,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e68749e9-5688-4c6f-a2ab-2e3956ae1ded.jpg",
                type: "checkicon",
                categoryId: 703
              }
            ],
            goods: [
              {
                goodsGuid: "b84540dd-efd7-416c-a9ab-195512d1b635",
                goodsName: "四川嫩甜耙耙柑500g",
                description: "酸甜可口 细腻多汁",
                isSplit: 0,
                sn: "WOC000009552",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/e59d6529-3fa8-43b8-b30a-ec51fd86c5ed.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6cdd95da-d377-4a14-9daa-9fe37cbf330f",
                goodsName: "四川柠檬2粒装",
                description: "清新怡人 酸爽可口  百变调味佳品",
                isSplit: 0,
                sn: "WOC000003713",
                price: 5.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8315a79c-67a9-4c85-b868-70e6f3c1004e.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7d9129e7-2e26-4d12-acad-ca621c3915af",
                goodsName: "永春精选芦柑500g",
                description: "芦柑之乡，时令直供。",
                isSplit: 0,
                sn: "WOC000005210",
                price: 14.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/583367d1-202a-4eef-8603-7ab061e6bbc7.jpg",
                salableStock: 0,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d517b77-f01c-4629-a55c-8e49cc3db2d7",
                goodsName: "赣南15年树龄脐橙6粒装(单果160g以上)",
                description: "浓甜芳香，酸甜可口",
                isSplit: 0,
                sn: "WOC000004953",
                price: 22.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/1deb6572-aed1-4e5a-83e6-2e3a647536d6.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fa49cc05-d680-43f6-bd96-77a02fb9f2cb",
                goodsName: "云南青柠檬4粒装(单果65g以上)",
                description: "皮薄汁多的高原小青柠",
                isSplit: 0,
                sn: "WOC000006819",
                price: 11.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e1932465-c9c8-4b60-a308-e094fd94aba2.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "60d543d6-15bb-44c9-8fed-10c9b78d7029",
                goodsName: "桂林金桔400g",
                description: "好吃不麻嘴",
                isSplit: 0,
                sn: "WOC000007886",
                price: 11.9,
                marketPrice: 15.0,
                picUrl:
                  "https://img.wochu.cn/upload/172719c7-1890-4d34-b21d-ca1a10080398.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "da72764a-ea51-43df-8bbb-8e5bda5eb2bd",
                goodsName: "南非香水柠檬2粒装(单果100g以上)",
                description: "浓郁香气  酸爽宜人",
                isSplit: 0,
                sn: "WOC000008775",
                price: 8.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/19c9ae50-8573-488b-8217-9eb0dbd6a6b6.jpg",
                salableStock: 50,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2841d50c-5d1a-4cac-a5bb-cbfffbe22abe",
                goodsName: "桂林沃柑6粒装（单果80g以上）",
                description: "清甜爽口  鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000010213",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/386148af-e13c-4f0a-a26f-e2d6a71392e2.jpg",
                salableStock: 999,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2841d50c-5d1a-4cac-a5bb-cbfffbe22abe",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6e69a570-51b0-4755-9540-99101b8f6ba7.png",
                    labelType: 1,
                    createTime: 1556076451
                  }
                ]
              },
              {
                goodsGuid: "41248155-004d-4ba9-b225-4719694355e3",
                goodsName: "美国新奇士柠檬2粒装(约220g/盒)",
                description: "果味清新，汁水丰沛",
                isSplit: 0,
                sn: "WOC000010537",
                price: 21.9,
                marketPrice: 21.9,
                picUrl:
                  "https://img.wochu.cn/upload/88ebd2c4-686a-480e-862e-4a8e0b597009.jpg",
                salableStock: 999,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "addfc6a9-cf8b-459c-9c5b-3c6a57445f70",
                goodsName: "伦晚脐橙6粒装(单果160g以上)",
                description: "香味浓郁 酸甜可口",
                isSplit: 0,
                sn: "WOC000010543",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/df8f3517-9945-4716-b78f-5e74d9b01fec.jpg",
                salableStock: 998,
                categoryId: 703,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 704,
            name: "苹果/梨",
            displayIndex: 42,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8fbf82e3-ed15-441e-9aa1-bbd7a2c09f45.jpg",
                type: "checkicon",
                categoryId: 704
              }
            ],
            goods: [
              {
                goodsGuid: "8dc53889-ed72-4e5f-b1c3-066854d41dd8",
                goodsName: "河北皇冠梨4粒（单果200g以上）",
                description: "浑圆丰满，梨园美人的鲜甜诱惑",
                isSplit: 0,
                sn: "WOC000004473",
                price: 19.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c25011b8-673b-42d9-ba8a-3b1f0ada976d.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb8e4488-73ce-469f-bc09-608181a162fd",
                goodsName: "山东红富士80-85#6只装",
                description: "皮甜肉脆，果汁含量85%以上",
                isSplit: 0,
                sn: "WOC000002931",
                price: 29.9,
                marketPrice: 34.9,
                picUrl:
                  "https://img.wochu.cn/upload/986f4db8-efde-49c8-823e-3c95d405fbf9.jpg",
                salableStock: 51,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6d34865d-bfa5-41a6-b19c-7a1e0a11fd32",
                goodsName: "山东红富士80-85#2只装",
                description: "甜美清脆，人见人爱，苹果界的小公举",
                isSplit: 0,
                sn: "WOC000006668",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/ddc4a990-17b5-4e1b-b6ba-44b9314d15ad.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "944fce7e-061e-4ec5-90b7-73bb61d6f13b",
                goodsName: "陕西红富士苹果6粒装(单果170g以上)",
                description: "富含果胶 膳食纤维 多种维生素",
                isSplit: 0,
                sn: "WOC000007400",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0f259d3d-c6ae-41b2-90e4-00c8c5a86857.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "75cebeb4-cc58-41f3-a9de-eb344942033c",
                goodsName: "黄蕉苹果2粒装（单果160g以上）",
                description: "粉面质感甜蜜蜜，牙口不好也爱吃",
                isSplit: 0,
                sn: "WOC000005289",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0c4cf089-0984-459e-91ec-6a430fc66c1c.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "21c36967-1970-4bb3-9ae2-68af5ff41065",
                goodsName: "新西兰加力果4粒/盒(单果150g以上)",
                description: "来自新西兰，小小的却很甜哦～",
                isSplit: 0,
                sn: "WOC000008564",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/8106825d-449f-416b-9c58-658b8faf88e3.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "757a90c2-0a5d-4eb9-bb95-fba663cdfa8c",
                goodsName: "山东栖霞优质红富士7粒装(单果155g以上)",
                description: "果肉白，清脆甜，好多汁",
                isSplit: 0,
                sn: "WOC000008633",
                price: 34.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/a3c577ba-6e69-4c19-b062-1b70ec966e71.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "00bb042e-60cc-4b3d-aaf2-9dcbe513560a",
                goodsName: "甘肃红蛇果4粒装(单果200g以上)",
                description: "营养丰富 果汁含量高 肉质细脆 清脆可口",
                isSplit: 0,
                sn: "WOC000009338",
                price: 22.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/29e3675d-1c7f-436c-81fe-1f93b00532a4.jpg",
                salableStock: 50,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d537488e-d146-4dc0-a52b-1034060329be",
                goodsName: "美国红蛇果2粒装(约350g/盒)",
                description: "色泽鲜艳 芳香多汁",
                isSplit: 0,
                sn: "WOC000010535",
                price: 24.9,
                marketPrice: 24.9,
                picUrl:
                  "https://img.wochu.cn/upload/c023b02b-255f-48c4-b0e5-d046f226b290.jpg",
                salableStock: 999,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d3dad197-4de9-4cdb-aa2b-254eadd3fd9e",
                goodsName: "美国青苹果2粒装(约320g/盒)",
                description: "饱满光滑 细腻多汁 酸爽可口",
                isSplit: 0,
                sn: "WOC000010536",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/895f188f-a600-4487-9592-52a508c9d8f6.jpg",
                salableStock: 999,
                categoryId: 704,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 705,
            name: "奇异果",
            displayIndex: 41,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0e2d4569-7895-4c31-8275-10916c13b475.jpg",
                type: "checkicon",
                categoryId: 705
              }
            ],
            goods: [
              {
                goodsGuid: "4ad64a53-7a44-4db1-ac83-917d4fe888fd",
                goodsName: "新西兰佳沛金奇异果6粒/盒",
                description: "全家人的维C小仓库",
                isSplit: 0,
                sn: "WOC000004083",
                price: 69.9,
                marketPrice: 69.9,
                picUrl:
                  "https://img.wochu.cn/upload/a47725f7-4bbe-4e81-b49b-58852214f853.jpg",
                salableStock: 50,
                categoryId: 705,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2d154012-7cf6-4578-b72d-cdf112b3221e",
                goodsName: "智利绿心猕猴桃6粒装(单果90g以上)",
                description: "酸甜爽口 慢慢幸福感",
                isSplit: 0,
                sn: "WOC000008570",
                price: 29.9,
                marketPrice: 36.9,
                picUrl:
                  "https://img.wochu.cn/upload/8f7f77e9-3ddc-4a6b-be2b-c6f9f01e8191.jpg",
                salableStock: 50,
                categoryId: 705,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 706,
            name: "葡萄提子",
            displayIndex: 40,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1319ca9d-0097-4d1d-9902-160ac6d922de.jpg",
                type: "checkicon",
                categoryId: 706
              }
            ],
            goods: [
              {
                goodsGuid: "06477371-2d59-4ddd-a708-2ff850ca4d5c",
                goodsName: "云南夏黑葡萄400g装",
                description: "果粒圆润 果肉细嫩",
                isSplit: 0,
                sn: "WOC000010545",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/73ed0eb5-1777-4ce2-9cc8-a2ecb1000e79.jpg",
                salableStock: 999,
                categoryId: 706,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "98e67b04-f048-4034-97fb-705f986ac88f",
                goodsName: "澳洲无籽青提500g装",
                description: "香醇浓厚  味美多汁",
                isSplit: 0,
                sn: "WOC000010538",
                price: 41.6,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/ad4ba75b-6331-4710-8bc5-14faca382378.jpg",
                salableStock: 999,
                categoryId: 706,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 707,
            name: "椰子",
            displayIndex: 39,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ece4c910-ebba-4c74-9741-e37aa4dda7ec.jpg",
                type: "checkicon",
                categoryId: 707
              }
            ],
            goods: [
              {
                goodsGuid: "9683ebdc-a2d1-4ba2-b130-0b7d80ecfefa",
                goodsName: "椰青1只",
                description: "长在树上的矿泉水 大自然的饮料",
                isSplit: 0,
                sn: "WOC000001306",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e53897eb-1854-4ad5-a15e-2d49298a59ac.jpg",
                salableStock: 50,
                categoryId: 707,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 708,
            name: "瓜类",
            displayIndex: 38,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b47720db-47f4-42e4-a815-b7daf5c97522.jpg",
                type: "checkicon",
                categoryId: 708
              }
            ],
            goods: [
              {
                goodsGuid: "bed1d219-68af-40cb-a61f-5a45bf8b4639",
                goodsName: "海南黄金瓜1粒装(单果1.5kg以上)",
                description: "海南头等黄金瓜，肉细脆甜。",
                isSplit: 0,
                sn: "WOC000005076",
                price: 29.9,
                marketPrice: 30.9,
                picUrl:
                  "https://img.wochu.cn/upload/5dc4a3e5-2f66-42a8-8beb-f797e1654311.jpg",
                salableStock: 50,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "bed1d219-68af-40cb-a61f-5a45bf8b4639",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/20107f5e-edad-4659-a9d8-1d7e4f0ced8a.png",
                    labelType: 1,
                    createTime: 1556076575
                  }
                ]
              },
              {
                goodsGuid: "ab1afed1-b6f5-4d1d-9a76-e96dabfc5cc2",
                goodsName: "广东冰糖木瓜1粒大果(单果700g以上)",
                description: "清甜香浓 肉质细腻",
                isSplit: 0,
                sn: "WOC000009336",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/d3d4a17f-6d2a-497f-aff8-2df8ad17415d.jpg",
                salableStock: 50,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "866f318f-1ce6-4771-a1b7-f1f390c196d5",
                goodsName: "广东黄囊特小凤西瓜1只装(单果900g以上)",
                description: "脆甜多汁  皮薄肉厚",
                isSplit: 0,
                sn: "WOC000009402",
                price: 17.5,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/5713f55a-2039-41ee-86ff-3decf27fc456.jpg",
                salableStock: 50,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d2296405-4ad0-4bcc-a00e-2d51593a0b2b",
                goodsName: "丝路晓蜜1只装(单果3斤以上)",
                description: "果汁丰富  甜蜜不腻  瓜香四溢",
                isSplit: 0,
                sn: "WOC000009489",
                price: 32.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/217a19ff-78d1-4747-9107-41ad4073d2ea.jpg",
                salableStock: 50,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b896053a-7351-4fb4-b977-c8b05bafdcd7",
                goodsName: "海南精选西州蜜大果1只(单果1800g以上)",
                description: "脆甜爽口  海南蜜瓜",
                isSplit: 0,
                sn: "WOC000009553",
                price: 34.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/1fedb2a0-20f3-42e8-bc10-453914760e93.jpg",
                salableStock: 50,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "246f5f55-97bf-41fa-b003-45a3421ed6f1",
                goodsName: "海南头茬麒麟瓜1只装(单果5斤以上)",
                description: "榨汁实力派 啃食很过瘾",
                isSplit: 0,
                sn: "WOC000010544",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/2889490f-b387-4458-8caf-f197380dfcc7.jpg",
                salableStock: 998,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "246f5f55-97bf-41fa-b003-45a3421ed6f1",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/445f467a-a32f-454d-981e-9339ed23d7f8.png",
                    labelType: 1,
                    createTime: 1556075637
                  }
                ]
              },
              {
                goodsGuid: "60c13286-20b3-48d4-8a52-9280dcb53229",
                goodsName: "海南玉菇甜瓜1只装(单果1.2kg以上)",
                description: "饱满圆润  香甜诱人",
                isSplit: 0,
                sn: "WOC000010547",
                price: 32.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/b7d66ede-7524-43a0-aeff-2d1c27ed22ef.jpg",
                salableStock: 999,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8c5f5593-d58b-4783-8695-81b9777de3d1",
                goodsName: "田里厢南汇玉菇甜瓜1只装(单果1.5斤以上)",
                description: "新鲜到货  香甜多汁",
                isSplit: 0,
                sn: "WOC000008462",
                price: 21.5,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/4d776f8a-a308-4080-a170-2b98366cdb83.jpg",
                salableStock: 89,
                categoryId: 708,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "8c5f5593-d58b-4783-8695-81b9777de3d1",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/50b09a34-bfca-48eb-b31f-4be951ef662b.png",
                    labelType: 1,
                    createTime: 1556506024
                  }
                ]
              }
            ]
          },
          {
            id: 709,
            name: "牛油果",
            displayIndex: 37,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/134b17db-e368-4809-93f9-5d2a97aca36a.jpg",
                type: "checkicon",
                categoryId: 709
              }
            ],
            goods: [
              {
                goodsGuid: "fd62cc22-8634-4d87-a564-ef238e90ca4f",
                goodsName: "秘鲁牛油果2粒装",
                description: "绵滑似乳酪，淡淡乳脂香",
                isSplit: 0,
                sn: "WOC000007093",
                price: 24.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7418debb-cfa1-4535-802e-7d730de64150.jpg",
                salableStock: 50,
                categoryId: 709,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
                categoryId: 709,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 710,
            name: "芒果/香蕉",
            displayIndex: 36,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c2a8c29a-48e6-4e49-8d83-106e0a3ea029.jpg",
                type: "checkicon",
                categoryId: 710
              }
            ],
            goods: [
              {
                goodsGuid: "8317aa1a-680e-40a6-8ff0-6c4fbb7d7a8d",
                goodsName: "精选小台农芒果400g",
                description: "皮薄肉嫩 多汁香甜",
                isSplit: 0,
                sn: "WOC000010212",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/9fd088e9-ef2b-44c8-a650-1a0f272c773f.jpg",
                salableStock: 999,
                categoryId: 710,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 710,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "70c9fd25-acce-47f1-96e9-ee200d42599d",
                goodsName: "进口香蕉1500g",
                description: "菲律宾进口，细腻香甜",
                isSplit: 0,
                sn: "WOC000001157",
                price: 22.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17191a55-9162-4042-a221-1cfde6fd49f9.jpg",
                salableStock: 50,
                categoryId: 710,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5c30cf0b-a7cd-4c1f-a925-fcbea9627a12",
                goodsName: "海南水仙芒1枚(单果230-280g)",
                description: "甜度高 核薄  果肉口感Q弹爽口",
                isSplit: 0,
                sn: "WOC000010542",
                price: 21.0,
                marketPrice: 21.0,
                picUrl:
                  "https://img.wochu.cn/upload/8318ba6d-2a53-4857-a259-3ee4a54bed40.jpg",
                salableStock: 999,
                categoryId: 710,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 711,
            name: "车厘子",
            displayIndex: 35,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/72450f34-ca45-4a84-b2d6-c458d8d4f7b6.jpg",
                type: "checkicon",
                categoryId: 711
              }
            ],
            goods: [
              {
                goodsGuid: "60acec9e-5d16-4b57-a5c1-c52b32293a61",
                goodsName: "大连美早樱桃300g装",
                description: "新鲜肉厚  鲜甜多汁",
                isSplit: 0,
                sn: "WOC000010546",
                price: 54.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/c5c3362a-aaa2-48ea-a1d9-b20f9a6dec53.jpg",
                salableStock: 999,
                categoryId: 711,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 712,
            name: "其他水果",
            displayIndex: 34,
            description: "",
            parentId: 7,
            path: "/7/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fd1e63ca-6dc7-4b32-92e0-a996fe3ad31a.jpg",
                type: "checkicon",
                categoryId: 712
              }
            ],
            goods: [
              {
                goodsGuid: "3dfec655-51b8-43a6-907e-faac08089717",
                goodsName: "泰国龙眼400g",
                description: "皮薄，核小，肉厚",
                isSplit: 0,
                sn: "WOC000001136",
                price: 12.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f83f21ce-b00f-44e6-ad76-f25dbf69b4ae.jpg",
                salableStock: 60,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "03025ec5-5fda-4625-a6d1-0bc5bc53ce2e",
                goodsName: "越南白心火龙果2只装（约900g）",
                description: "皮薄肉嫩，香甜多汁，富含膳食纤维",
                isSplit: 0,
                sn: "WOC000002019",
                price: 19.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1ae649a1-f225-4bf4-83e2-65f8fb8f59f8.jpg",
                salableStock: 50,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc1dccd4-e821-4e84-9605-146c54056638",
                goodsName: "桂林百香果2粒装",
                description: "跨界小能手 百搭新吃法",
                isSplit: 0,
                sn: "WOC000003444",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d254d645-2262-4059-9560-20379e4bcf27.jpg",
                salableStock: 50,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9093500b-ab7e-421b-a8a9-3a41c7a8eadb",
                goodsName: "海南木瓜2只装(单果550g以上)",
                description: "",
                isSplit: 0,
                sn: "WOC000002718",
                price: 24.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/dcaf93a1-9029-4a62-ad3f-c677698c0c72.jpg",
                salableStock: 50,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2e088fba-a6c0-4e0c-94e3-365ec1cf858f",
                goodsName: "千禧圣女果500g",
                description: "果型圆滑，皮薄肉嫩，汁水丰沛，酸甜适口",
                isSplit: 0,
                sn: "WOC000001083",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e7233f5e-a3bf-45df-8e40-e9fce2927100.jpg",
                salableStock: 200,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ddc71e69-802a-4c5e-b49a-a3b5ebd09e77",
                goodsName: "金枕头榴莲果肉1盒(净含量300g）",
                description: "果肉不失丝丝韧感，冰爽绵密",
                isSplit: 0,
                sn: "WOC000005078",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/273a1f16-a32f-4571-81bf-c5c8a852a34b.jpg",
                salableStock: 1002,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "ddc71e69-802a-4c5e-b49a-a3b5ebd09e77",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/89ea456c-3245-4e8e-afcd-4259e02f9728.png",
                    labelType: 1,
                    createTime: 1556076506
                  }
                ]
              },
              {
                goodsGuid: "b67de221-934d-4093-a033-8dc6a577f6de",
                goodsName: "海南超甜千禧圣女果500g超值装",
                description: "皮薄肉嫩，汁水丰沛，酸甜适口",
                isSplit: 0,
                sn: "WOC000008314",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/2205b545-3b84-4c85-95df-8157983ce56b.jpg",
                salableStock: 50,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9b95c127-88f3-4b42-a044-9af0ae0d229a",
                goodsName: "智利红布林4粒装(约450g/盒)",
                description: "每一口都甜在心里",
                isSplit: 0,
                sn: "WOC000010541",
                price: 42.0,
                marketPrice: 42.0,
                picUrl:
                  "https://img.wochu.cn/upload/42753d41-6ac5-4721-bbfb-a309f36eb401.jpg",
                salableStock: 999,
                categoryId: 712,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605475,
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
