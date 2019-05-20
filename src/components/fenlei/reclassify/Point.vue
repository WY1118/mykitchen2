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
      titlename: "乳饮西点",
      wrappernav: [
        "常温牛奶",
        "低温鲜奶",
        "常温酸奶",
        "低温酸奶",
        "其他乳制品",
        "新鲜蛋糕面包",
        "西式点心",
        "酒饮",
        "休闲食品"
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
            id: 1251,
            name: "常温牛奶",
            displayIndex: 17,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/73b997ee-ce08-4fa0-a673-ad784d723715.jpg",
                type: "checkicon",
                categoryId: 1251
              }
            ],
            goods: [
              {
                goodsGuid: "50c6985d-4cde-41d1-9d93-870c01314706",
                goodsName: "小西牛全脂灭菌纯牛奶250ml*10盒",
                description: "",
                isSplit: 0,
                sn: "WOC000008402",
                price: 59.9,
                marketPrice: 65.9,
                picUrl:
                  "https://img.wochu.cn/upload/f7dfe59c-393c-4cec-8656-0a42b0651f71.jpg",
                salableStock: 114,
                categoryId: 1251,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2be43a5a-3126-40ea-aa27-ec61eb8bf72c",
                goodsName: "小西牛原生奶200克*16袋/箱",
                description: "",
                isSplit: 0,
                sn: "WOC000007090",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ff158a9d-fedb-42c0-b09a-9eeb4dab98a0.jpg",
                salableStock: 171,
                categoryId: 1251,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2be43a5a-3126-40ea-aa27-ec61eb8bf72c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f17c4327-a1fc-473c-a0ef-008967b51407.png",
                    labelType: 1,
                    createTime: 1556078080
                  }
                ]
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
                categoryId: 1251,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1251,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "decfa79f-afb1-4d39-b030-9d3e9c451291",
                goodsName: "蒙牛纯牛奶1L装",
                description: "",
                isSplit: 0,
                sn: "WOC000010186",
                price: 10.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/4d786e2a-f778-4e95-a174-a45914f28ad8.jpg",
                salableStock: 41,
                categoryId: 1251,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "decfa79f-afb1-4d39-b030-9d3e9c451291",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00ae65fd-9d82-416e-8bee-52f9b1b914f5.png",
                    labelType: 1,
                    createTime: 1556076765
                  }
                ]
              }
            ]
          },
          {
            id: 1001,
            name: "低温鲜奶",
            displayIndex: 16,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aecc4f1c-36ca-47ad-85fa-97465757a0bf.jpg",
                type: "checkicon",
                categoryId: 1001
              }
            ],
            goods: [
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
                categoryId: 1001,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1001,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1002,
            name: "常温酸奶",
            displayIndex: 15,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/47eaa29c-71dd-47b1-9624-edaa9f17ffb7.jpg",
                type: "checkicon",
                categoryId: 1002
              }
            ],
            goods: [
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
                categoryId: 1002,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1002,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1002,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1252,
            name: "低温酸奶",
            displayIndex: 14,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7ca6535b-073a-4a54-8042-2f00ebffd732.jpg",
                type: "checkicon",
                categoryId: 1252
              }
            ],
            goods: [
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a4387044-79b9-4568-920e-9733fffc5d4c",
                goodsName: "新疆网红酸奶牛奶天润低温浓缩 冰淇淋化了180g*12/箱",
                description: "",
                isSplit: 0,
                sn: "WOC000007052",
                price: 58.0,
                marketPrice: 78.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/90580859-13d0-4c10-bd19-c3bb4f642105.jpg",
                salableStock: 27,
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "a4387044-79b9-4568-920e-9733fffc5d4c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0386d75b-2f28-4b23-a4db-64a0e5f15f3c.png",
                    labelType: 1,
                    createTime: 1556183066
                  }
                ]
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
                categoryId: 1252,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1253,
            name: "其他乳制品",
            displayIndex: 13,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c7344615-5919-4cb5-851c-897be44a7c19.jpg",
                type: "checkicon",
                categoryId: 1253
              }
            ],
            goods: [
              {
                goodsGuid: "5a549bea-bfa0-4d52-a2ae-923e4fd3e803",
                goodsName: "大麦若叶青汁牛奶180ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008683",
                price: 5.9,
                marketPrice: 5.9,
                picUrl:
                  "https://img.wochu.cn/upload/c6807e55-325d-44b2-85ea-9cbf99eb4de6.jpg",
                salableStock: 0,
                categoryId: 1253,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "5a549bea-bfa0-4d52-a2ae-923e4fd3e803",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "58a65e6e-05d8-4c9b-89ec-47ce4ad0ffa4",
                goodsName: "百吉福棒棒（原味）120g",
                description: "",
                isSplit: 0,
                sn: "WOC000005335",
                price: 19.8,
                marketPrice: 22.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c96d1148-2eed-4fb6-910d-337db62cb017.jpg",
                salableStock: 102,
                categoryId: 1253,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9f288ccf-4ee0-4701-9f98-16f8646f5db2",
                goodsName: "贝花子大麦若叶青汁豆奶180ml*16包",
                description: "新近网红,你一定会喝完最后一滴",
                isSplit: 0,
                sn: "WOC000008432",
                price: 39.9,
                marketPrice: 56.9,
                picUrl:
                  "https://img.wochu.cn/upload/b325ee1d-1e96-4fa8-adfc-fbe9c46bbd58.jpg",
                salableStock: 0,
                categoryId: 1253,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "214d3312-dd5f-4b4b-b758-437cad98764c",
                goodsName: "罐装旺仔牛奶245ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008868",
                price: 5.5,
                marketPrice: 5.5,
                picUrl:
                  "https://img.wochu.cn/upload/e6be9e9a-9cf9-40d0-8be6-b9dc0c8154ee.jpg",
                salableStock: 0,
                categoryId: 1253,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1003,
            name: "新鲜蛋糕面包",
            displayIndex: 12,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bcbad4d5-753f-457b-b1c0-93442a19a41a.jpg",
                type: "checkicon",
                categoryId: 1003
              }
            ],
            goods: []
          },
          {
            id: 1004,
            name: "西式点心",
            displayIndex: 11,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/920892da-795c-4fe9-a679-431d536e189b.jpg",
                type: "checkicon",
                categoryId: 1004
              }
            ],
            goods: [
              {
                goodsGuid: "cef35a36-1424-4db9-b6d1-e71586c1e45c",
                goodsName: "榴莲慕斯大福180g",
                description: "",
                isSplit: 0,
                sn: "WOC000010686",
                price: 26.8,
                marketPrice: 26.8,
                picUrl:
                  "https://img.wochu.cn/upload/e6e2d7bd-9a08-484a-8b4e-b23157912cbf.jpg",
                salableStock: 48,
                categoryId: 1004,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1010,
            name: "酒饮",
            displayIndex: 6,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e2f461f8-4b92-4bbf-a326-bcc3d34cc7e1.jpg",
                type: "checkicon",
                categoryId: 1010
              }
            ],
            goods: [
              {
                goodsGuid: "2dd86cd7-7103-4587-b447-760f33b040d7",
                goodsName: "听装加多宝凉茶310ML",
                description: "金罐红罐包装随机发货",
                isSplit: 0,
                sn: "WOC000001207",
                price: 3.9,
                marketPrice: 4.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ea59ae81-29d8-466a-8038-0496874f455c.jpg",
                salableStock: 183,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ae76ad68-1aef-4b37-8e0e-4aebe75666b2",
                goodsName: "听装可口可乐330ML",
                description: "8折抢购每日限量200份（新老包装随机发）",
                isSplit: 0,
                sn: "WOC000001209",
                price: 2.5,
                marketPrice: 2.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bd31ba3f-6c20-4769-979e-f2c5c4346b40.jpg",
                salableStock: 97,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0cd37be2-e44d-4ecc-8ebe-cf1839ed8b2d",
                goodsName: "听装椰树椰奶310ML",
                description: "",
                isSplit: 0,
                sn: "WOC000001206",
                price: 4.9,
                marketPrice: 5.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2752f483-3a04-4d5f-bd66-b3ffce703b9a.jpg",
                salableStock: 0,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0202a3d7-e45e-437e-9316-ceaf20ebb4d0",
                goodsName: "雪碧1.25L",
                description: "酸甜舒爽，清凉整个夏日",
                isSplit: 0,
                sn: "WOC000002333",
                price: 6.2,
                marketPrice: 6.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b723ddcd-fd95-4714-a8e8-ad4803515db4.jpg",
                salableStock: 16,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "80f19d98-d27e-4f9e-94cc-5757d6ef7e39",
                goodsName: "巴黎水原味330ml",
                description: "天然含气矿泉水",
                isSplit: 0,
                sn: "WOC000006133",
                price: 8.9,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e353693b-f3e6-4029-a3b4-4c5ec0aaad70.jpg",
                salableStock: 12,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fed826f4-8adb-44f3-8d5f-536d5b23c4c7",
                goodsName: "屈臣氏苏打水330ml",
                description: "绵密气泡，休闲时尚饮料",
                isSplit: 0,
                sn: "WOC000006367",
                price: 3.9,
                marketPrice: 5.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d3d99b78-f4eb-4407-b5e4-d894b6f383de.jpg",
                salableStock: 0,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d0dad6f8-f67b-498f-8942-cb39752ab7e1",
                goodsName: "雀巢咖啡丝滑拿铁268ml*3联包",
                description: "优质选材，科学工艺，甘醇顺滑",
                isSplit: 0,
                sn: "WOC000006361",
                price: 15.9,
                marketPrice: 18.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/58d9729d-14ef-4161-bace-77df072bc3c0.jpg",
                salableStock: 33,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "81a35f48-6b52-4f31-a75a-ef9478542a19",
                goodsName: "维他柠檬茶6连包",
                description: "够真才出涩，此商品为新老包装随机发货，请知悉！",
                isSplit: 0,
                sn: "WOC000006933",
                price: 14.5,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ca5ef2ff-c372-49bd-87e1-f966a39284b5.jpg",
                salableStock: 51,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f0a158a6-46be-48c3-810b-d3cbc8751ce6",
                goodsName: "听装雪碧330Ml",
                description: "畅销佳品，清凉醒神",
                isSplit: 0,
                sn: "WOC000001205",
                price: 2.5,
                marketPrice: 2.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c9f98c35-74e9-45f2-a0b6-eb679b765225.jpg",
                salableStock: 51,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d0cdc0b-3fba-4893-aa91-183b4899b1b1",
                goodsName: "景田百岁山饮用天然矿泉水570ml*24",
                description: "家中常备的矿泉水",
                isSplit: 0,
                sn: "WOC000007155",
                price: 55.0,
                marketPrice: 69.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b46a36ef-9deb-42b4-8e9a-6051f24c0573.jpg",
                salableStock: 5,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6a974c06-96d3-4002-8b7e-3bb02645d20c",
                goodsName: "巴黎水青柠味330ml*4",
                description: "水好喝，瓶子更好看！",
                isSplit: 0,
                sn: "WOC000007160",
                price: 29.9,
                marketPrice: 39.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/36fc1832-6ad1-4241-8f5a-67a53f271b62.jpg",
                salableStock: 0,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aa674919-4318-4d18-9081-4a20f8fee207",
                goodsName: "农夫山泉550ml*28瓶/箱",
                description: "",
                isSplit: 0,
                sn: "WOC000007945",
                price: 33.8,
                marketPrice: 43.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/87e24710-0930-4d11-9df9-50a1326676f9.jpg",
                salableStock: 19,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1bab894c-d080-4fe0-a0d8-928939eacdee",
                goodsName: "农夫山泉茶π（茶派）柠檬红茶500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008381",
                price: 4.2,
                marketPrice: 5.5,
                picUrl:
                  "https://img.wochu.cn/upload/bee4d206-2cf1-4dcd-adf9-79c373f7f64d.jpg",
                salableStock: 0,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "871114e2-840d-45a4-9593-33dea23e37a0",
                goodsName: "农夫山泉茶π（茶派）柚子绿茶500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008382",
                price: 4.5,
                marketPrice: 5.5,
                picUrl:
                  "https://img.wochu.cn/upload/f4b87d82-b259-4a87-908e-89f8fcc700a2.jpg",
                salableStock: 39,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "312bf462-8dd4-40ef-b239-f9bcf8893be1",
                goodsName: "三得利无糖乌龙茶饮料500ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008383",
                price: 3.8,
                marketPrice: 3.9,
                picUrl:
                  "https://img.wochu.cn/upload/ab10c1be-48e1-4ef2-926f-5de22aa0cf03.jpg",
                salableStock: 63,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c79f3d9-6bab-49ce-810a-02e6841eac61",
                goodsName: "三得利沁柠水550ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008384",
                price: 3.5,
                marketPrice: 3.8,
                picUrl:
                  "https://img.wochu.cn/upload/1a70ee7e-c10e-4a12-9f9d-19cc09abeb50.jpg",
                salableStock: 39,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e48d9737-80b2-4a80-bd7f-fec1991f8999",
                goodsName: "统一冰红茶（柠檬味红茶饮料)250ml*24",
                description: "",
                isSplit: 0,
                sn: "WOC000008385",
                price: 29.9,
                marketPrice: 35.9,
                picUrl:
                  "https://img.wochu.cn/upload/6d317e1b-6f37-4d28-80bb-ac51549c0197.jpg",
                salableStock: 24,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6568ed99-aec0-4b5b-bad7-04bc942b6882",
                goodsName: "百威啤酒330ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008387",
                price: 4.9,
                marketPrice: 6.5,
                picUrl:
                  "https://img.wochu.cn/upload/243c1858-e54f-49d5-9fb0-5b222fef08a4.jpg",
                salableStock: 108,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ef8e63b0-9fca-4638-9157-9d76b3b899c3",
                goodsName: "脉动（Mizone）维生素饮料青柠味 600ml",
                description: "",
                isSplit: 0,
                sn: "WOC000008388",
                price: 4.2,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/f5dccabb-e186-4c4c-8b5c-6dd6e7401733.jpg",
                salableStock: 78,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "56fffac3-d359-4107-8399-983e9e261241",
                goodsName: "1664BLANC 白啤",
                description: "",
                isSplit: 0,
                sn: "WOC000008455",
                price: 13.8,
                marketPrice: 14.9,
                picUrl:
                  "https://img.wochu.cn/upload/29e2221e-78c0-4e63-b055-04937b58ab09.jpg",
                salableStock: 147,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "05f59bdc-6ab8-4dd3-951a-c565e95dc651",
                goodsName: "延中盐汽水600ml*20瓶/箱",
                description: "",
                isSplit: 0,
                sn: "WOC000008817",
                price: 35.9,
                marketPrice: 50.0,
                picUrl:
                  "https://img.wochu.cn/upload/a2a10c70-3860-49ac-9a1f-63542100f7e4.jpg",
                salableStock: 21,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a07966c-4adc-4909-96aa-af6c952eb5ef",
                goodsName: "瘦瘦果荷叶茶100g",
                description: "",
                isSplit: 0,
                sn: "WOC000009576",
                price: 55.0,
                marketPrice: 55.0,
                picUrl:
                  "https://img.wochu.cn/upload/12f2b329-c965-4adb-b43b-9d644a4aae1f.jpg",
                salableStock: 30,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "295ac5f7-c704-45d8-a1c6-3792b6506a41",
                goodsName: "意大利原装进口多洛米亚含气天然饮用水500nl",
                description: "",
                isSplit: 0,
                sn: "WOC000009658",
                price: 13.8,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/94da8a6b-6a7e-4ecf-90ee-e048017944a8.jpg",
                salableStock: 0,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7bf489da-6eee-4101-95b8-e7c43cb5f0d7",
                goodsName: "达亦多牛奶咖啡饮料260g/瓶",
                description: "",
                isSplit: 0,
                sn: "WOC000010183",
                price: 16.0,
                marketPrice: 16.0,
                picUrl:
                  "https://img.wochu.cn/upload/21ff19b6-410b-4b2c-8703-16d000f069fc.jpg",
                salableStock: 57,
                categoryId: 1010,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1011,
            name: "休闲食品",
            displayIndex: 5,
            description: "",
            parentId: 10,
            path: "/10/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/51cede94-180e-4269-946f-a576c67088da.jpg",
                type: "checkicon",
                categoryId: 1011
              }
            ],
            goods: [
              {
                goodsGuid: "18a8de80-be4a-4092-b4d7-15e883bfa866",
                goodsName: "致中和古法龟苓膏150g*3",
                description: "古法秘制，滋阴润燥",
                isSplit: 0,
                sn: "WOC000003817",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/8b0c7022-2edf-4bee-9229-4a3d21e8e1bd.jpg",
                salableStock: 48,
                categoryId: 1011,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "18a8de80-be4a-4092-b4d7-15e883bfa866",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ce982da0-6b20-4176-85c7-f678d596eeff.png",
                    labelType: 1,
                    createTime: 1556076670
                  }
                ]
              },
              {
                goodsGuid: "f7e44e04-0114-45ee-a0b8-11de4d780ef7",
                goodsName: "避风塘糯米鸡255g",
                description: "",
                isSplit: 0,
                sn: "WOC000006097",
                price: 24.8,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/15dae598-3a96-4c38-8f56-7152fab24698.jpg",
                salableStock: 33,
                categoryId: 1011,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605557,
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
