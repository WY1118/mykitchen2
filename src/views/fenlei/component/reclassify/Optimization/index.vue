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
      <div class="pice-up" @click="pricesort(1)">
        <span>
          价格
          <em>
            <img src="../../img/icon-fenlei-arrow@3x.png" alt>
          </em>
        </span>
      </div>
    </div>
    <div class="shadowWrap"></div>
    <!-- 内容 -->
    <section class="goods-list">
      <ul class="goods-ul" id="scroller">
        <!-- <div class="class-item" v-for="(item,index) in categories" :key="index" v-if=""> -->
        <div class="class-item">
          <!-- <li v-for="(ite,num) in data.categories[i].goods" :key="num"> -->
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
                <img src="../../img/icon-listcart-75@3x.png" alt>
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
      titlename: "我厨优选",
      wrappernav: [
        "我厨优选蔬菜",
        "我厨优选禽蛋",
        "我厨优选肉类",
        "我厨优选鲜活水产",
        "我厨优选冷冻水产",
        "我厨优选冰鲜水产"
      ],
      orderType: 0,
      i: 0,
      statusCode: "200",
      errorMessage: "",
      data: {
        categories: [
          {
            id: 601,
            name: "我厨优选蔬菜",
            displayIndex: 56,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4e3b486b-51fc-4147-90f8-54cdb5cf28c2.jpg",
                type: "checkicon",
                categoryId: 601
              }
            ],
            goods: [
              {
                goodsGuid: "074d0183-6fd9-4583-8510-61f4ead8a7c6",
                goodsName: "我厨牛津布袋",
                description: "",
                isSplit: 0,
                sn: "WOC000008543",
                price: 49.9,
                marketPrice: 49.9,
                picUrl:
                  "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1556520246&di=f12d275ddb9e53645fccc2f33bb7e587&src=http://img11.007swz.com/cpimg/qitabuliaozhipin/CB8ksoP6d_1389684346.jpg",
                salableStock: 198,
                categoryId: 601,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1255,
            name: "我厨优选禽蛋",
            displayIndex: 0,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/458265f0-184d-4101-a281-77021e46b08b.jpg",
                type: "checkicon",
                categoryId: 1255
              }
            ],
            goods: [
              {
                goodsGuid: "0188e44e-171c-4d2e-b29d-c39211792656",
                goodsName: "我厨优选鸡全腿500g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000004993",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/23bd1c6a-4bf4-4304-9e79-e93c5fc25b71.jpg",
                salableStock: 0,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 120,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "59b9af93-55b9-4b9e-a190-a3f6d1a08be5",
                goodsName: "我厨优选香酥鸡排240g（80g*3片）",
                description: "",
                isSplit: 0,
                sn: "WOC000008837",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/5c308a5e-61aa-45c0-84f7-259151c0748a.jpg",
                salableStock: 0,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 63,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                goodsGuid: "a603e9d7-d558-4654-8851-55116ba44b3c",
                goodsName: "我厨优选去皮鸡胸肉500g",
                description: "低卡低热细嫩鸡肉，健身党必入",
                isSplit: 0,
                sn: "WOC000004994",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/efb55288-cd8c-4be7-8d7d-c77e7d52fbd5.jpg",
                salableStock: 0,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 282,
                categoryId: 1255,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1256,
            name: "我厨优选肉类",
            displayIndex: 0,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8ce3cf53-5547-4b51-9d07-3a882fbceea9.jpg",
                type: "checkicon",
                categoryId: 1256
              }
            ],
            goods: [
              {
                goodsGuid: "c1d7747f-f4e4-4ccf-ac0d-526158d6636c",
                goodsName: "我厨优选澳洲羔羊蝴蝶排400g",
                description: "",
                isSplit: 0,
                sn: "WOC000009543",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/abb5fb4c-3f4e-42cf-8a88-7639c4be58e6.jpg",
                salableStock: 1080,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "c1d7747f-f4e4-4ccf-ac0d-526158d6636c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "ff45adc4-4d80-4540-8d7f-4b97361ea855",
                goodsName: "我厨优选猪五花肉块400g",
                description: "大如麻将牌，本帮红烧肉必备",
                isSplit: 0,
                sn: "WOC000006221",
                price: 16.5,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2af92749-b258-48c0-bb1e-253670576fc2.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "81d9cfce-f18f-45a0-9219-7a15ab7f9016",
                goodsName: "我厨优选黑胡椒牛肉粒250g",
                description: "微辣开胃，爆炒、红烧、烧烤百变烧法",
                isSplit: 0,
                sn: "WOC000006877",
                price: 17.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/91d07167-dd37-462b-8e48-5f3816bba1b7.jpg",
                salableStock: 438,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "31e93b08-cfaa-4864-862b-2fdc0efc3670",
                goodsName: "我厨优选牛肉片250g",
                description: "肉里包筋，筋内有肉，做酱牛肉最赞",
                isSplit: 0,
                sn: "WOC000006452",
                price: 23.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e58e3f0c-629e-43fe-bdaf-e136ea35fd92.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e20d734f-7c97-44e4-b20b-4bafba0a2a5a",
                goodsName: "我厨优选猪五花肉片400g",
                description: "瘦肉多肥肉少，又香又嫩根本停不下",
                isSplit: 0,
                sn: "WOC000006223",
                price: 16.9,
                marketPrice: 23.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9b0e72c4-6f65-4af1-9d99-d48d2451b679.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "251b3e38-0a89-45c5-8dbf-35eab1327257",
                goodsName: "我厨优选新鲜牛后腿肉500g",
                description: "草饲纯瘦肉，炒、酱、炖皆美味",
                isSplit: 0,
                sn: "WOC000004706",
                price: 42.9,
                marketPrice: 43.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70e3f463-bfbd-4e0f-9a78-5a1919b9b841.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eba26bfb-7101-44fc-8b10-b5096ab6fb46",
                goodsName: "我厨优选猪瘦肉片500g",
                description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
                isSplit: 0,
                sn: "WOC000001033",
                price: 17.5,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/df034fb7-4206-40b9-8be6-7cb7cd5250ca.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "eba26bfb-7101-44fc-8b10-b5096ab6fb46",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d41699b-bb3c-4eca-8ea4-63497237e15b.png",
                    labelType: 1,
                    createTime: 1555914850
                  }
                ]
              },
              {
                goodsGuid: "669f19bf-f208-4f64-ad27-48203637446f",
                goodsName: "我厨优选猪里脊肉400g",
                description: "精瘦无骨，经典食材，糖醋小炒都好吃",
                isSplit: 0,
                sn: "WOC000006220",
                price: 16.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b634e2a5-05f4-43b3-a00e-68fe1e6e67ad.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "953b3b5c-feb5-4aba-b360-0cf7d8d66744",
                goodsName: "我厨优选(3:7)肉糜400g",
                description: "保鲜排酸，更香更多汁，厨房百搭食材",
                isSplit: 0,
                sn: "WOC000006219",
                price: 16.9,
                marketPrice: 23.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e8a92353-c4e8-4035-b505-2b802a89051b.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c439261d-5412-4f0a-89c0-bb1a563252ca",
                goodsName: "我厨优选猪大排400g",
                description: "肉质厚实，细嫩Q弹",
                isSplit: 0,
                sn: "WOC000006222",
                price: 15.9,
                marketPrice: 27.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7abadbe3-46c1-47fa-96d4-28c228889c40.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dbf4c991-0502-4568-b0e0-2ea6354d092c",
                goodsName: "我厨优选小排400g",
                description: "不腥不臊，厨艺小白也能做出鲜滋味",
                isSplit: 0,
                sn: "WOC000006217",
                price: 14.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/86c3cdd5-c06e-410b-9e11-070693aaeb2c.jpg",
                salableStock: 99,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "dbf4c991-0502-4568-b0e0-2ea6354d092c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62a796ec-e949-43cc-995e-d4ecd9059ef9.png",
                    labelType: 1,
                    createTime: 1555914811
                  }
                ]
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
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3f7a0399-e92f-4e52-bf07-1e8f8db3bb2b",
                goodsName: "我厨优选牛肉丝250g",
                description: "筋少不塞牙，一家三口的量刚刚好",
                isSplit: 0,
                sn: "WOC000006450",
                price: 23.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e6890482-eb1d-49ad-9afc-fc6ae3ec464f.jpg",
                salableStock: 100,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "62de6d4b-dedf-490e-be35-3613f07023bd",
                goodsName: "我厨优选蚝油牛肉片250g",
                description: "大厨调理，蚝油完全入味，打开直接炒",
                isSplit: 0,
                sn: "WOC000006875",
                price: 17.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/cfc27c31-5aab-464b-aaaa-098a20f5f647.jpg",
                salableStock: 0,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "895e0366-9d1e-413f-9fe8-2ec8c67cafac",
                goodsName: "我厨优选猪精肉丝（300g）",
                description: "粉嫩鲜，家常小炒没它不行",
                isSplit: 0,
                sn: "WOC000008473",
                price: 10.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/ca8a1fc4-65d4-4d9e-9ddb-ab246d1fdce7.jpg",
                salableStock: 99,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "895e0366-9d1e-413f-9fe8-2ec8c67cafac",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b696f5d-1407-4c37-943b-a60217047374.png",
                    labelType: 1,
                    createTime: 1555914783
                  }
                ]
              },
              {
                goodsGuid: "efe5bf9c-4bcb-46bc-ab91-d4b23e20aaf8",
                goodsName: "我厨优选仔排300g",
                description: "",
                isSplit: 0,
                sn: "WOC000008555",
                price: 18.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/c619fd5a-4e6a-4ad6-a28c-cdcc4cdcb0f9.jpg",
                salableStock: 0,
                categoryId: 1256,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1257,
            name: "我厨优选鲜活水产",
            displayIndex: 0,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/777df022-c9a1-4c13-9a6b-14757d75c020.jpg",
                type: "checkicon",
                categoryId: 1257
              }
            ],
            goods: [
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
                salableStock: 10,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 5,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 12,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 3,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 23,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 4,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 9,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 10,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 49,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 6,
                categoryId: 1257,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1258,
            name: "我厨优选冷冻水产",
            displayIndex: 0,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5feb1437-d38f-4311-9149-c4c52bd316b7.jpg",
                type: "checkicon",
                categoryId: 1258
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
                salableStock: 531,
                categoryId: 1258,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1258,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1258,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1259,
            name: "我厨优选冰鲜水产",
            displayIndex: 0,
            description: "",
            parentId: 2,
            path: "/2/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5e586f7a-05c2-4731-b2a4-e8dbb05bf1cc.jpg",
                type: "checkicon",
                categoryId: 1259
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
                salableStock: 50,
                categoryId: 1259,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1259,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1259,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                categoryId: 1259,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
                salableStock: 4,
                categoryId: 1259,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556504076,
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
    },
    backOne() {
      this.$router.back();
    },
    pricesort(orderType) {
      console.log(orderType)
      this.orderType = orderType;
    }
  },
  computed: {
    filterPersons() {
      // 取出相关数据
      console.log(54231)
      const { data, orderType } = this;
      let arr = [...data];
      // 排序
      if (orderType) {
        arr.sort(function(p1, p2) {
          if (orderType === 1) {
            // 降序
            return p2.categories[i].goods.price - p1.categories[i].goods.price;
          } else {
            // 升序
            return p1.age - p2.age;
          }
        });
      }
      return arr;
    }
  },
  
  
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
