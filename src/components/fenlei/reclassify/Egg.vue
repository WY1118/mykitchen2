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
      titlename: "肉禽蛋",
      wrappernav: [
        "我厨优选你你你你肉禽",
        "新鲜肉禽",
        "猪肉",
        "牛羊肉",
        "肉禽制品",
        "蛋类",
        "整禽类",
        "分割禽类",
        "肉类礼盒"
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
            id: 801,
            name: "我厨优选肉禽",
            displayIndex: 33,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ceda0288-2e0d-4133-aa4c-7f1609ca2f65.jpg",
                type: "checkicon",
                categoryId: 801
              }
            ],
            goods: [
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 429,
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 7,
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 9,
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 100,
                categoryId: 801,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
              }
            ]
          },
          {
            id: 802,
            name: "新鲜肉禽",
            displayIndex: 32,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/33e64463-7f85-4ecb-8723-6325cd32863e.jpg",
                type: "checkicon",
                categoryId: 802
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 7,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ef0664db-ab2f-4cd6-84f9-8afc108bfaf1",
                goodsName: "爱森夹心肉糜450g",
                description: "冰鲜半成品，肥瘦相间，做菜入馅皆宜",
                isSplit: 0,
                sn: "WOC000001435",
                price: 26.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6ea581fc-5964-46d3-9801-4b2e8f3e9f40.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b413e6af-8419-4ddb-aa70-22f055c579a2",
                goodsName: "爱森脚圈500g",
                description: "富含胶原蛋白，美容养颜，老少皆宜",
                isSplit: 0,
                sn: "WOC000002063",
                price: 23.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5e08bacf-64a5-4f62-9f96-695930e4fcb3.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0da48115-b473-4e6f-af33-8370ede6230b",
                goodsName: "爱森精肉片400g",
                description: "肉质肥瘦均匀，涮炒煎炸皆宜",
                isSplit: 0,
                sn: "WOC000002061",
                price: 22.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70ac8612-9502-4d3b-a57a-baf32333868c.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e3f7494a-e6b8-4624-8882-11144a9b6111",
                goodsName: "爱森龙骨380g",
                description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
                isSplit: 0,
                sn: "WOC000002062",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c9eda73-d2b7-47ed-9458-8edacc493e91.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5877c3a8-b344-4843-b83b-6c6c243665b3",
                goodsName: "爱森蹄膀530g",
                description: "满满胶原蛋白，连面膜钱都省了！红烧后连皮都好吃",
                isSplit: 0,
                sn: "WOC000001431",
                price: 19.9,
                marketPrice: 28.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a031ad2d-6b30-42ac-a34a-507d1af5f6f8.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a98eba9-8777-4dac-9db3-20f95dc01f9c",
                goodsName: "爱森筒骨450g",
                description: "肉香髓浓，切块加工，烹饪方便",
                isSplit: 0,
                sn: "WOC000002067",
                price: 23.9,
                marketPrice: 32.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2dc8b0d7-4137-4944-ba9a-32a39b1e005a.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0a98eba9-8777-4dac-9db3-20f95dc01f9c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1d514bec-bbe6-4bb5-8ba2-c63dbe837751.png",
                    labelType: 1,
                    createTime: 1555914957
                  }
                ]
              },
              {
                goodsGuid: "f0b67c29-5973-4ea9-a356-69d69844703f",
                goodsName: "爱森五花肉500g",
                description: "上海著名商标，东坡肉回锅肉粉蒸肉必备食材",
                isSplit: 0,
                sn: "WOC000001432",
                price: 38.8,
                marketPrice: 42.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6eca6d2d-590a-4225-9e48-de06fbb3f5a1.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cff27e38-3268-45cd-b3fa-b9fa12e21629",
                goodsName: "爱森小排400g",
                description: "肉层较厚实，肉质有弹性，口感有嚼劲",
                isSplit: 0,
                sn: "WOC000001436",
                price: 27.9,
                marketPrice: 35.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0ac2e88a-110b-4831-a564-855fbaba7ff2.jpg",
                salableStock: 100,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7d709873-719c-4297-ba28-4c15f00eb25c",
                goodsName: "中粮家佳康大排420g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000002632",
                price: 16.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c288399-6f24-4caa-80bd-00623d5f99db.jpg",
                salableStock: 82,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c0fd630-4595-439e-ad28-cf4b086b4e46",
                goodsName: "中粮家佳康精肉糜320g",
                description: "精选猪肉，肉香浓郁，餐桌必食",
                isSplit: 0,
                sn: "WOC000002635",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f20f992c-c31c-4103-854f-ff42c94677c5.jpg",
                salableStock: 49,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1670604e-6aa1-4127-ae3e-db69819c5d48",
                goodsName: "中粮家佳康精装冰鲜梅条肉340g",
                description: "肉条精细，新鲜保证",
                isSplit: 0,
                sn: "WOC000005999",
                price: 19.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7fcb940-10a0-4a6a-aba8-ad8b8bb5e389.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "40eb86b1-cfba-47d7-a290-ab3e6a4886c9",
                goodsName: "中粮家佳康精装肋排500g",
                description: "适合粉蒸煎烤黑椒，肉细嫩，老人小孩也爱吃",
                isSplit: 0,
                sn: "WOC000005477",
                price: 43.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/60d1f0a7-5f97-422f-a9e1-fc006c76f335.jpg",
                salableStock: 5,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "179c6bdc-e362-4271-909a-c6c43a42572a",
                goodsName: "中粮家佳康精装梅花肉片240g",
                description: "切片薄嫩精瘦，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000004033",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5cdd9982-fb28-43ba-bbd3-d96d8bfb2e46.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e7cb304e-68f5-4408-9d9d-1b2df7b25559",
                goodsName: "中粮家佳康精装猪肝250g",
                description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
                isSplit: 0,
                sn: "WOC000004049",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3e659388-d6ea-4baf-b87f-8028b6d726f8.jpg",
                salableStock: 49,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "63988a6d-6e87-4bda-ba36-be2edaf1314e",
                goodsName: "中粮家佳康精装猪蹄单只装420g",
                description: "已切块，烹饪超方便，单只正好吃一顿",
                isSplit: 0,
                sn: "WOC000005630",
                price: 35.8,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/310921a7-8a5f-4561-b02e-470604027dfd.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14a0a084-d4c2-4fcb-8230-7063d807044f",
                goodsName: "中粮家佳康五花肉片240g",
                description: "肥瘦相间，瘦肉占90%，适合火锅烤肉",
                isSplit: 0,
                sn: "WOC000002630",
                price: 13.9,
                marketPrice: 18.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8d76b9c2-cbe9-4c27-85a6-dac5f2684566.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7a76ba9d-8494-4747-b18f-d5917915b8cc",
                goodsName: "中粮家佳康小排400g",
                description: "精选猪肉，肉香浓郁，餐桌必食",
                isSplit: 0,
                sn: "WOC000002628",
                price: 16.9,
                marketPrice: 27.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/27e2c9a5-a583-416b-8818-55f97c2d26b7.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "115009bc-0b24-4d5d-8fdf-ff49a55c1dac",
                goodsName: "中粮家佳康五花肉丁470g",
                description: "肥而不腻。瘦而不柴，适合红烧",
                isSplit: 0,
                sn: "WOC000002629",
                price: 28.8,
                marketPrice: 33.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/92151b2c-f24d-44e0-bb5c-3a36a8a57e02.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f3138c19-173b-4efa-a17b-58e646fabc0f",
                goodsName: "中粮家佳康里脊肉340g",
                description: "几乎不含肥肉，制作肉丝、肉丁、肉块的上佳部位",
                isSplit: 0,
                sn: "WOC000002633",
                price: 20.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/95a97fcf-1bcc-4446-8fe1-740a241e4568.jpg",
                salableStock: 5,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 9,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b4c4f6d9-151a-449c-a281-8d76c991c07e",
                goodsName: "天然无公害鲜鸭蛋10枚",
                description: "蛋香醇厚  蛋白紧实，有弹性，无腥味",
                isSplit: 0,
                sn: "WOC000006146",
                price: 15.0,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aa5969fb-ae93-4e6f-8ede-07291478ca2d.jpg",
                salableStock: 9,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d65ec0ca-1704-45f3-9ef0-c6eb54a9e6a2",
                goodsName: "中粮家佳康精装冰鲜肋软骨360g",
                description: "软骨嫩脆有嚼头，做面条浇头不能更赞！",
                isSplit: 0,
                sn: "WOC000006582",
                price: 32.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8cd8895b-570f-4e35-a6b9-110e0cd39613.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d59fd27-3d39-4ce6-aa27-f37f203bf3a6",
                goodsName: "崇明二年半龄老麻鸭900g",
                description: "崇明本地老麻鸭，散养年龄超过900天",
                isSplit: 0,
                sn: "WOC000004337",
                price: 88.0,
                marketPrice: 98.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0a5ff6e1-b510-408a-8225-4d5fedc8b936.jpg",
                salableStock: 93,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4edd9dae-9f97-433d-bcaa-57de2e60ce3a",
                goodsName: "崇明一年半龄老母鸡1000g",
                description: "崇明本地鸡，500天以上林间散养老母鸡",
                isSplit: 0,
                sn: "WOC000005202",
                price: 69.9,
                marketPrice: 79.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1465b4fb-febd-463f-b8e0-4f21a3e8ee53.jpg",
                salableStock: 72,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dd3cad52-05cc-43c5-b3f8-64d8fcc53284",
                goodsName: "崇明麻鸭1100g",
                description: "正宗崇明农家散养麻鸭，桃林自足觅食",
                isSplit: 0,
                sn: "WOC000005203",
                price: 49.0,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7efb8f27-86b9-487f-86e6-e23ac2d63772.jpg",
                salableStock: 81,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2b66c7ca-bea1-44fe-a202-79cfa0076ef9",
                goodsName: "崇明乌骨鸡900g",
                description: "正宗崇明农家散养乌骨鸡，连内脏都是黑的，煲汤佳品",
                isSplit: 0,
                sn: "WOC000005204",
                price: 69.0,
                marketPrice: 79.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fd4a78c6-9372-41c4-970c-632b7730708b.jpg",
                salableStock: 69,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1028df15-1180-4ff3-89a7-a3747d9e5304",
                goodsName: "中粮家佳康精装冰鲜劈半蹄髈450g",
                description: "富含胶原蛋白，美容养颜，老少皆宜",
                isSplit: 0,
                sn: "WOC000006000",
                price: 22.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/107887c2-6cfc-405b-b8aa-e1985db30e45.jpg",
                salableStock: 50,
                categoryId: 802,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 803,
            name: "猪肉",
            displayIndex: 31,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62b50299-18f6-4386-a228-109acb14a9c2.jpg",
                type: "checkicon",
                categoryId: 803
              }
            ],
            goods: [
              {
                goodsGuid: "2ba1bb0c-eb55-4bc2-8f53-4d1e7e8baf94",
                goodsName: "海水来了智利谷饲汤骨600g",
                description: "口感厚实有嚼劲，肉香四溢",
                isSplit: 0,
                sn: "WOC000009601",
                price: 19.9,
                marketPrice: 22.9,
                picUrl:
                  "https://img.wochu.cn/upload/93712feb-4714-4800-9cfc-625cdaf4bf31.jpg",
                salableStock: 69,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5b0c08b6-ea38-41d8-a40b-a274995aa135",
                goodsName: "海水来了丹麦皇冠龙骨500g",
                description: "骨嫩肉香，多汁味香",
                isSplit: 0,
                sn: "WOC000009588",
                price: 19.9,
                marketPrice: 22.9,
                picUrl:
                  "https://img.wochu.cn/upload/ec28f77c-ea2c-4a70-ac1d-17ccc0c50f1e.jpg",
                salableStock: 0,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ef0664db-ab2f-4cd6-84f9-8afc108bfaf1",
                goodsName: "爱森夹心肉糜450g",
                description: "冰鲜半成品，肥瘦相间，做菜入馅皆宜",
                isSplit: 0,
                sn: "WOC000001435",
                price: 26.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6ea581fc-5964-46d3-9801-4b2e8f3e9f40.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b413e6af-8419-4ddb-aa70-22f055c579a2",
                goodsName: "爱森脚圈500g",
                description: "富含胶原蛋白，美容养颜，老少皆宜",
                isSplit: 0,
                sn: "WOC000002063",
                price: 23.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5e08bacf-64a5-4f62-9f96-695930e4fcb3.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0da48115-b473-4e6f-af33-8370ede6230b",
                goodsName: "爱森精肉片400g",
                description: "肉质肥瘦均匀，涮炒煎炸皆宜",
                isSplit: 0,
                sn: "WOC000002061",
                price: 22.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70ac8612-9502-4d3b-a57a-baf32333868c.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e3f7494a-e6b8-4624-8882-11144a9b6111",
                goodsName: "爱森龙骨380g",
                description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
                isSplit: 0,
                sn: "WOC000002062",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c9eda73-d2b7-47ed-9458-8edacc493e91.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5877c3a8-b344-4843-b83b-6c6c243665b3",
                goodsName: "爱森蹄膀530g",
                description: "满满胶原蛋白，连面膜钱都省了！红烧后连皮都好吃",
                isSplit: 0,
                sn: "WOC000001431",
                price: 19.9,
                marketPrice: 28.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a031ad2d-6b30-42ac-a34a-507d1af5f6f8.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a98eba9-8777-4dac-9db3-20f95dc01f9c",
                goodsName: "爱森筒骨450g",
                description: "肉香髓浓，切块加工，烹饪方便",
                isSplit: 0,
                sn: "WOC000002067",
                price: 23.9,
                marketPrice: 32.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2dc8b0d7-4137-4944-ba9a-32a39b1e005a.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0a98eba9-8777-4dac-9db3-20f95dc01f9c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1d514bec-bbe6-4bb5-8ba2-c63dbe837751.png",
                    labelType: 1,
                    createTime: 1555914957
                  }
                ]
              },
              {
                goodsGuid: "f0b67c29-5973-4ea9-a356-69d69844703f",
                goodsName: "爱森五花肉500g",
                description: "上海著名商标，东坡肉回锅肉粉蒸肉必备食材",
                isSplit: 0,
                sn: "WOC000001432",
                price: 38.8,
                marketPrice: 42.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6eca6d2d-590a-4225-9e48-de06fbb3f5a1.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cff27e38-3268-45cd-b3fa-b9fa12e21629",
                goodsName: "爱森小排400g",
                description: "肉层较厚实，肉质有弹性，口感有嚼劲",
                isSplit: 0,
                sn: "WOC000001436",
                price: 27.9,
                marketPrice: 35.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0ac2e88a-110b-4831-a564-855fbaba7ff2.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7d709873-719c-4297-ba28-4c15f00eb25c",
                goodsName: "中粮家佳康大排420g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000002632",
                price: 16.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6c288399-6f24-4caa-80bd-00623d5f99db.jpg",
                salableStock: 82,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c0fd630-4595-439e-ad28-cf4b086b4e46",
                goodsName: "中粮家佳康精肉糜320g",
                description: "精选猪肉，肉香浓郁，餐桌必食",
                isSplit: 0,
                sn: "WOC000002635",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f20f992c-c31c-4103-854f-ff42c94677c5.jpg",
                salableStock: 49,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1670604e-6aa1-4127-ae3e-db69819c5d48",
                goodsName: "中粮家佳康精装冰鲜梅条肉340g",
                description: "肉条精细，新鲜保证",
                isSplit: 0,
                sn: "WOC000005999",
                price: 19.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7fcb940-10a0-4a6a-aba8-ad8b8bb5e389.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "40eb86b1-cfba-47d7-a290-ab3e6a4886c9",
                goodsName: "中粮家佳康精装肋排500g",
                description: "适合粉蒸煎烤黑椒，肉细嫩，老人小孩也爱吃",
                isSplit: 0,
                sn: "WOC000005477",
                price: 43.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/60d1f0a7-5f97-422f-a9e1-fc006c76f335.jpg",
                salableStock: 5,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "179c6bdc-e362-4271-909a-c6c43a42572a",
                goodsName: "中粮家佳康精装梅花肉片240g",
                description: "切片薄嫩精瘦，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000004033",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5cdd9982-fb28-43ba-bbd3-d96d8bfb2e46.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e7cb304e-68f5-4408-9d9d-1b2df7b25559",
                goodsName: "中粮家佳康精装猪肝250g",
                description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
                isSplit: 0,
                sn: "WOC000004049",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3e659388-d6ea-4baf-b87f-8028b6d726f8.jpg",
                salableStock: 49,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "63988a6d-6e87-4bda-ba36-be2edaf1314e",
                goodsName: "中粮家佳康精装猪蹄单只装420g",
                description: "已切块，烹饪超方便，单只正好吃一顿",
                isSplit: 0,
                sn: "WOC000005630",
                price: 35.8,
                marketPrice: 36.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/310921a7-8a5f-4561-b02e-470604027dfd.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14a0a084-d4c2-4fcb-8230-7063d807044f",
                goodsName: "中粮家佳康五花肉片240g",
                description: "肥瘦相间，瘦肉占90%，适合火锅烤肉",
                isSplit: 0,
                sn: "WOC000002630",
                price: 13.9,
                marketPrice: 18.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8d76b9c2-cbe9-4c27-85a6-dac5f2684566.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7a76ba9d-8494-4747-b18f-d5917915b8cc",
                goodsName: "中粮家佳康小排400g",
                description: "精选猪肉，肉香浓郁，餐桌必食",
                isSplit: 0,
                sn: "WOC000002628",
                price: 16.9,
                marketPrice: 27.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/27e2c9a5-a583-416b-8818-55f97c2d26b7.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "115009bc-0b24-4d5d-8fdf-ff49a55c1dac",
                goodsName: "中粮家佳康五花肉丁470g",
                description: "肥而不腻。瘦而不柴，适合红烧",
                isSplit: 0,
                sn: "WOC000002629",
                price: 28.8,
                marketPrice: 33.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/92151b2c-f24d-44e0-bb5c-3a36a8a57e02.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f3138c19-173b-4efa-a17b-58e646fabc0f",
                goodsName: "中粮家佳康里脊肉340g",
                description: "几乎不含肥肉，制作肉丝、肉丁、肉块的上佳部位",
                isSplit: 0,
                sn: "WOC000002633",
                price: 20.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/95a97fcf-1bcc-4446-8fe1-740a241e4568.jpg",
                salableStock: 5,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 9,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                goodsGuid: "7e225889-45e5-4027-8e0f-5d0595565e7f",
                goodsName: "爱森香酥猪排200g",
                description: "新老包装随机发货",
                isSplit: 0,
                sn: "WOC000001438",
                price: 18.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/af12dd44-6cba-4b71-8a8f-94d539b5e59a.jpg",
                salableStock: 339,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d65ec0ca-1704-45f3-9ef0-c6eb54a9e6a2",
                goodsName: "中粮家佳康精装冰鲜肋软骨360g",
                description: "软骨嫩脆有嚼头，做面条浇头不能更赞！",
                isSplit: 0,
                sn: "WOC000006582",
                price: 32.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8cd8895b-570f-4e35-a6b9-110e0cd39613.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8ec40400-342d-45c6-9041-861a57e2c673",
                goodsName: "瑞今黑猪冷冻小排450g",
                description: "精切小排，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000007737",
                price: 39.0,
                marketPrice: 39.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7c236515-b989-46ff-90ad-1f779c573aa1.jpg",
                salableStock: 0,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1028df15-1180-4ff3-89a7-a3747d9e5304",
                goodsName: "中粮家佳康精装冰鲜劈半蹄髈450g",
                description: "富含胶原蛋白，美容养颜，老少皆宜",
                isSplit: 0,
                sn: "WOC000006000",
                price: 22.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/107887c2-6cfc-405b-b8aa-e1985db30e45.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                goodsGuid: "bb1eb537-434e-49b5-a476-a6c35aef4804",
                goodsName: "爱森夹心肉糜250g",
                description: "肥瘦搭配，口感细腻",
                isSplit: 0,
                sn: "WOC000008492",
                price: 14.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/fc8fa091-cdd9-492d-9c32-e520922b4f98.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a8b7be82-9cfe-47de-a1b4-7c9baac4df03",
                goodsName: "爱森精肉丝200g",
                description: "肉条精细，新鲜保证",
                isSplit: 0,
                sn: "WOC000008493",
                price: 12.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/735c1908-ab4f-4d69-8119-bc59dac422a3.jpg",
                salableStock: 100,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a7f6d6a1-8f7a-4ef9-b7ed-2da73c82c604",
                goodsName: "中粮家佳康精装冰鲜汤骨750g",
                description: "带骨“小鲜肉”，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000008779",
                price: 26.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/6a1998f2-e2be-4384-bd0f-f1b9ca5a7114.jpg",
                salableStock: 5,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4d7d43d0-ab98-43d1-b770-229b5c8cca41",
                goodsName: "中粮家佳康亚麻籽猪肉寸骨550g",
                description: "猪饲料含有亚麻籽成分",
                isSplit: 0,
                sn: "WOC000009072",
                price: 36.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/fc938e38-aa00-4716-ad20-f49870525e23.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9482a7d9-b233-4bc1-83b7-368029c2fd49",
                goodsName: "中粮家佳康亚麻籽猪腰花150g",
                description: "",
                isSplit: 0,
                sn: "WOC000009073",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/84d69e1f-5397-4468-a607-70c50240ec12.jpg",
                salableStock: 5,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a5ae3345-165e-4ee6-879c-f442214378b7",
                goodsName: "中粮家佳康亚麻籽猪肉梅肉片240g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009074",
                price: 15.9,
                marketPrice: 18.8,
                picUrl:
                  "https://img.wochu.cn/upload/84a776fd-3ea4-438d-afbe-33d350b5c0eb.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "492eade9-a192-457c-8cb9-0ecbe5a26f9a",
                goodsName: "中粮家佳康精装冰鲜梅花肉丝240g",
                description: "优质腿肉，无多脂肪",
                isSplit: 0,
                sn: "WOC000009092",
                price: 10.5,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/661b10a0-7ff6-4088-a86e-79ed590fbbd0.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2c5f6aba-45bd-446f-9c17-9189c0ba668b",
                goodsName: "中粮家佳康精装冰鲜猪肚400g",
                description: "",
                isSplit: 0,
                sn: "WOC000010189",
                price: 38.5,
                marketPrice: 47.0,
                picUrl:
                  "https://img.wochu.cn/upload/086c6914-26cf-4d46-87f3-d2e71c6a4ec8.jpg",
                salableStock: 50,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c44c4ad5-099e-4e75-bd51-6924e4069536",
                goodsName: "膳博士冻猪汤骨（黑猪）400g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009578",
                price: 26.8,
                marketPrice: 26.8,
                picUrl:
                  "https://img.wochu.cn/upload/51401d99-0290-4813-8700-ee84732fa0fc.jpg",
                salableStock: 30,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b9612b83-ab1e-4330-b91d-eba950e07f82",
                goodsName: "膳博士冻猪肉丝（黑猪）250g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009579",
                price: 21.8,
                marketPrice: 21.8,
                picUrl:
                  "https://img.wochu.cn/upload/bf24d27f-406f-4309-8417-a1143f50d6ee.jpg",
                salableStock: 51,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e25fefc3-b4d1-419f-8b45-2354586d8a1d",
                goodsName: "膳博士冻猪里脊肉（黑猪）400g",
                description: "肉质坚实 鲜嫩弹爽",
                isSplit: 0,
                sn: "WOC000009580",
                price: 38.8,
                marketPrice: 38.8,
                picUrl:
                  "https://img.wochu.cn/upload/593021df-73b1-4e9a-b599-7d9d240bb8f2.jpg",
                salableStock: 42,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5ec9444b-5ed0-474b-8b7f-c04efe410b59",
                goodsName: "膳博士冻猪去皮中方肉块（黑猪）400g",
                description: "肉质细嫩，味道鲜美",
                isSplit: 0,
                sn: "WOC000009581",
                price: 23.8,
                marketPrice: 23.8,
                picUrl:
                  "https://img.wochu.cn/upload/e6363f38-015d-4143-947f-0fd2901bc771.jpg",
                salableStock: 3,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "630bc2ce-c6b1-4ef0-818c-7a3056435c8b",
                goodsName: "膳博士冻猪带皮后腿肉块（黑猪）400g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009583",
                price: 26.8,
                marketPrice: 26.8,
                picUrl:
                  "https://img.wochu.cn/upload/372a3d11-aa3a-4213-9be1-c04ee16f0007.jpg",
                salableStock: 30,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e53a867f-a0e0-4507-87a8-fc35cf0ca154",
                goodsName: "膳博士冻猪夹心肉糜（黑猪）400g",
                description: "肉质细嫩，味道鲜美",
                isSplit: 0,
                sn: "WOC000009584",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/2ef72477-6e23-4c6e-b163-f5131de9db7e.jpg",
                salableStock: 21,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2c419b64-1d3b-4284-8b5d-dc4662e032e7",
                goodsName: "膳博士冻猪梅肉片（黑猪）400g",
                description: "每片厚约1cm，可采用西式煎烤法烹饪",
                isSplit: 0,
                sn: "WOC000009585",
                price: 35.8,
                marketPrice: 35.8,
                picUrl:
                  "https://img.wochu.cn/upload/805c4dd4-49ae-40ab-934d-ca82535d9d1b.jpg",
                salableStock: 48,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b045e3e4-2b14-49cc-bbf3-6598f0179a86",
                goodsName: "膳博士冻猪大排片（黑猪）400g",
                description: "肉质坚实 鲜嫩弹爽",
                isSplit: 0,
                sn: "WOC000009586",
                price: 32.8,
                marketPrice: 32.8,
                picUrl:
                  "https://img.wochu.cn/upload/d99299a8-f843-49a2-95a7-a204a60f81ba.jpg",
                salableStock: 39,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8c719b2d-b5e6-4ef2-9bdc-a8f8d950f8c9",
                goodsName: "膳博士冻猪有颈前排粒（黑猪）400g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009582",
                price: 36.8,
                marketPrice: 39.8,
                picUrl:
                  "https://img.wochu.cn/upload/ec7fc4c5-3ba1-43a8-8c43-a8fabdae2dee.jpg",
                salableStock: 57,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3bc9c6d6-6faa-49c5-a4df-f3aaf09a91c6",
                goodsName: "原膳丹麦皇冠天然谷饲猪尾500g",
                description: "Q弹鲜香，切段处理，料理省心",
                isSplit: 0,
                sn: "WOC000010692",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/512e6296-c49c-4540-8589-5b203704b465.jpg",
                salableStock: 240,
                categoryId: 803,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 804,
            name: "牛羊肉",
            displayIndex: 30,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d82f7118-8616-45d4-9590-f0a639b27f3a.jpg",
                type: "checkicon",
                categoryId: 804
              }
            ],
            goods: [
              {
                goodsGuid: "0c361533-ff2e-4fe3-bc94-984fe0ed9f99",
                goodsName: "绿牧印象羔羊肉卷300g",
                description: "无污染自然草原饲养，肉质细嫩",
                isSplit: 0,
                sn: "WOC000009449",
                price: 46.8,
                marketPrice: 49.9,
                picUrl:
                  "https://img.wochu.cn/upload/44bc08f7-57fd-4e79-8860-4670b28edff2.jpg",
                salableStock: 1089,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0c361533-ff2e-4fe3-bc94-984fe0ed9f99",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/29a981fd-8494-4a82-bf42-b3f7b8806e78.png",
                    labelType: 1,
                    createTime: 1555914269
                  }
                ]
              },
              {
                goodsGuid: "272b9a4d-c48b-4b26-bf55-30493636afd4",
                goodsName: "联豪黑椒牛肉丝200g",
                description: "精选牛里脊，秘制酱料腌制，口感滑嫩",
                isSplit: 0,
                sn: "WOC000002489",
                price: 25.8,
                marketPrice: 27.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f0d11e4c-f146-427b-8182-717dfca27189.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "44c45303-ea42-4787-ae00-6b320f4c888f",
                goodsName: "联豪西冷牛排130g",
                description: "经典西冷部位，高档餐厅同款，含牛油丰腴好啃",
                isSplit: 0,
                sn: "WOC000002487",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f058e872-128c-444c-84a2-2b29c32bd8ba.jpg",
                salableStock: 195,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 429,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7b7bc17d-cd2a-4ce0-a9be-cbe48e49526d",
                goodsName: "联豪黑椒牛肉片200g",
                description: "黑椒口味，肉片厚实弹嫩，口感顺滑",
                isSplit: 0,
                sn: "WOC000006443",
                price: 27.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/e7e646d6-1ead-4b30-8491-84a195559532.jpg",
                salableStock: 648,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "7b7bc17d-cd2a-4ce0-a9be-cbe48e49526d",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "161ab0f4-8f17-46ce-b261-c9aff5db8c5a",
                goodsName: "联豪黑椒牛肉粒200g",
                description: "牛里脊切粒，已腌制入味，开袋即烹",
                isSplit: 0,
                sn: "WOC000002488",
                price: 24.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5502696e-e25a-4ce6-b12b-3d1f8e203efa.jpg",
                salableStock: 693,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 7,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c2a963f-11f7-4d08-ad99-38439aa02f0c",
                goodsName: "澳享澳洲牡蛎牛排150g",
                description: "比眼肉牛排更易入味，两面各煎1分钟就开动",
                isSplit: 0,
                sn: "WOC000006438",
                price: 29.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f1b60662-a907-428f-9882-2c0a6f0f1730.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "661ecf88-ef3d-4f0f-aa72-2167f2067fc1",
                goodsName: "元圣牛仔粒200g",
                description: "已经调制过，搭配喜欢的时蔬，清炒3分钟就上桌",
                isSplit: 0,
                sn: "WOC000006580",
                price: 18.8,
                marketPrice: 22.9,
                picUrl:
                  "https://img.wochu.cn/upload/1bb5d2c3-f531-4b2e-a41f-f897b7942bab.jpg",
                salableStock: 369,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14391014-9368-476a-bf7e-2c08cd188179",
                goodsName: "澳享澳洲安格斯谷饲200天日式腹肉牛排180g",
                description: "雪花纹理汁水多，纤薄易熟好烹饪",
                isSplit: 0,
                sn: "WOC000007502",
                price: 48.0,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e6b895f9-b0de-40b0-92bd-e36a23637d51.jpg",
                salableStock: 60,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9471083f-0ee6-4b10-b00f-f9e189aa8e71",
                goodsName: "我厨优选新西兰羔羊排400g",
                description: "新西兰“小鲜肉”，肉嫩膻味小",
                isSplit: 0,
                sn: "WOC000007602",
                price: 29.9,
                marketPrice: 34.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00e75c2d-82c6-452a-87a2-2a6d14d59308.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f8122325-ac2a-4480-8762-0dd48f33587f",
                goodsName: "澳洲谷饲肥牛卷250g",
                description: "没有肥牛卷的火锅是不完整的",
                isSplit: 0,
                sn: "WOC000006375",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f20fb825-8c63-4bb5-9129-9f4f597c3140.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f0f0efea-5aea-445f-815f-b68c5ab45cad",
                goodsName: "我厨优选澳洲原切草饲西冷牛排150g",
                description: "原切原味，丰富大理石雪花",
                isSplit: 0,
                sn: "WOC000007700",
                price: 15.8,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6b18fc38-2f54-4886-b572-4d130735edce.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d0116c93-5fd0-48a0-b19f-f3dfb6d83cc5",
                goodsName: "元圣澳洲谷饲牛尾350g",
                description: "煲汤有奶香，胶质丰富超Q弹",
                isSplit: 0,
                sn: "WOC000007856",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/dea20a7e-9175-4e6b-8f9f-ec222ddc7e8e.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "deb3de03-25f6-45cb-a29a-d6e92de4f44a",
                goodsName: "元圣澳洲谷饲牛腱500g",
                description: "紧实有嚼头，卤、酱、爆炒都美味",
                isSplit: 0,
                sn: "WOC000007857",
                price: 52.8,
                marketPrice: 58.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2b29f10d-0ec6-4033-b5c3-fcdde4564511.jpg",
                salableStock: 255,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2b375e22-619f-4c6a-8bdb-084ff8eb13ff",
                goodsName: "元圣澳洲谷饲牛腱超值团",
                description: "肉筋分布均匀，",
                isSplit: 1,
                sn: "WOC000007966",
                price: 36.9,
                marketPrice: 58.0,
                picUrl:
                  "https://img.wochu.cn/upload/26a40a9f-a00a-47a5-a3eb-e90448e7fd34.jpg",
                salableStock: 255,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eec96a74-29c8-45aa-afe9-dae8e0658a09",
                goodsName: "内蒙古羊蝎子500g",
                description: "完美火锅汤底，肉厚骨髓多",
                isSplit: 0,
                sn: "WOC000007982",
                price: 23.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bbbfa86a-2cb0-46d3-b8fb-ceac32f7a90d.jpg",
                salableStock: 321,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "eec96a74-29c8-45aa-afe9-dae8e0658a09",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4a836058-fdf3-46e5-b580-170d84cd0fdc.png",
                    labelType: 1,
                    createTime: 1555914998
                  }
                ]
              },
              {
                goodsGuid: "3d39e44f-0035-4f60-87e1-5348d3eb84d2",
                goodsName: "元圣羊蝎子两包超值体验团",
                description: "羊脊骨部位精切 肉质香嫩而不腻",
                isSplit: 1,
                sn: "WOC000008003",
                price: 46.9,
                marketPrice: 64.0,
                picUrl:
                  "http://img.wochu.cn/upload/cb058a50-86d0-449f-98da-37b97641be44.jpg",
                salableStock: 160,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "28a2f44a-894f-4ab3-ac82-393b10cef1fc",
                goodsName: "贵州跑山牛鲜冻牛肉丝200g",
                description: "天然草饲，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000008264",
                price: 28.0,
                marketPrice: 28.0,
                picUrl:
                  "https://img.wochu.cn/upload/f7ac2737-98e7-4ad8-b05b-d5ddc1394973.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "24199ba6-1926-4aa0-8e69-a43097742640",
                goodsName: "贵州跑山牛鲜冻牛肉片200g",
                description: "天然草饲，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000008265",
                price: 28.0,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/c09cd314-114c-46c9-afbc-5d98c26ec5a5.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fa00760b-be7f-413c-bc51-e824322ae93c",
                goodsName: "贵州跑山牛鲜冻牛腩400g",
                description: "肥瘦搭配，口感细腻",
                isSplit: 0,
                sn: "WOC000008266",
                price: 33.8,
                marketPrice: 55.0,
                picUrl:
                  "https://img.wochu.cn/upload/423ae727-2830-43b7-9657-b5aaf3dcdbe0.jpg",
                salableStock: 36,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ba6fc0e0-bbc1-42a6-a145-adf312eb6dfc",
                goodsName: "谊升先腱子芯650g",
                description: "筋肉相间，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000008349",
                price: 78.0,
                marketPrice: 89.9,
                picUrl:
                  "https://img.wochu.cn/upload/c737fe5c-56e2-40fa-afe3-e42d011fb719.jpg",
                salableStock: 72,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4fc98f6b-1c65-41d7-8c93-61e5a7958e9e",
                goodsName: "谊升先牛腩块500g",
                description: "柔嫩多汁 奶香浓郁",
                isSplit: 0,
                sn: "WOC000008351",
                price: 39.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/091a8d25-2289-44df-9cbb-5949abd3f9a2.jpg",
                salableStock: 240,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aff1deec-fa28-4f4d-865a-b83dddc7fd2d",
                goodsName: "谊升先S级肥牛卷250g",
                description: "整肉原切，纹理清晰",
                isSplit: 0,
                sn: "WOC000008352",
                price: 29.9,
                marketPrice: 35.8,
                picUrl:
                  "https://img.wochu.cn/upload/c21ebce3-825e-4e6f-9116-f26d455434d7.jpg",
                salableStock: 183,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d29eedbc-740a-4561-bd9e-085d1d57af42",
                goodsName: "谊升先牛肋条400g",
                description: "肉质坚实 鲜嫩弹爽",
                isSplit: 0,
                sn: "WOC000008354",
                price: 39.9,
                marketPrice: 42.8,
                picUrl:
                  "https://img.wochu.cn/upload/320499c1-991d-4f74-b80d-eb4d54d8fd2b.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d084c203-600e-482a-8926-395ed676cb79",
                goodsName: "贵州跑山牛鲜冻牛肉糜200g",
                description: "精选新鲜原料，肉质饱满味佳",
                isSplit: 0,
                sn: "WOC000008512",
                price: 13.9,
                marketPrice: 28.0,
                picUrl:
                  "https://img.wochu.cn/upload/353bc2b4-94f6-415f-9538-d3d98490f5fd.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd71cc3e-a1f1-4ee5-bc02-cf710dec62b9",
                goodsName: "澳洲安格斯眼肉200g",
                description: "高蛋白低脂肪，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000008623",
                price: 59.0,
                marketPrice: 79.0,
                picUrl:
                  "https://img.wochu.cn/upload/65246959-40e4-4648-a5e6-7d051561bb8f.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "52fcc656-0a40-4874-92d0-c4f627fd0d56",
                goodsName: "酣畅澳洲原切小可爱牛排80g(儿童菲力）",
                description: "肉质细嫩，多汁爽口",
                isSplit: 0,
                sn: "WOC000008676",
                price: 24.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/aa1b86b8-b6b4-49ed-843d-34f4675842a0.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "89c6e956-e8b9-4d70-b2e0-3d7f11447cc7",
                goodsName: "酣畅澳洲原切西冷牛排130g",
                description: "整根原切牛排，原始肉香",
                isSplit: 0,
                sn: "WOC000008682",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/eb940b96-528e-478d-bf6c-2babea024886.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "43f3f2de-9051-4b1d-9daf-18d2ba9c948a",
                goodsName: "澳洲草饲原切眼肉牛排150g",
                description: "入口细腻有嚼劲，煎烤奶香浓郁",
                isSplit: 0,
                sn: "WOC000008834",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/c51e83ad-4d1d-4bbf-a87a-802503d1eaa2.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c3fc9c52-e0ba-4f2a-8e6f-1472ff520f05",
                goodsName: "元圣澳洲牛腩块500g",
                description: "胸腹部精切，肉质丰盈奶香",
                isSplit: 0,
                sn: "WOC000008900",
                price: 35.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/44132cf5-978d-4aa0-99ee-e2b4f60aab6a.jpg",
                salableStock: 347,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "71851f6a-ab1a-4107-937e-212024480979",
                goodsName: "澳洲原切谷饲眼肉牛排150g",
                description: "肉质细嫩，就是要勾引你的味觉",
                isSplit: 0,
                sn: "WOC000009008",
                price: 49.0,
                marketPrice: 59.0,
                picUrl:
                  "https://img.wochu.cn/upload/79522290-3d50-4a0e-b3d4-f7b7ad94da88.jpg",
                salableStock: 2,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "885ae08f-d049-41f2-b628-d1a8715a93c3",
                goodsName: "澳洲原切谷饲西冷牛排150g",
                description: "雪花纹理 肉汁饱满 嚼劲十足",
                isSplit: 0,
                sn: "WOC000009009",
                price: 19.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/5efe66b2-e011-4989-b504-ec82e92f1820.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "22ebc604-8664-4e1c-9921-ed522b0369e6",
                goodsName: "澳洲进口谷饲雪花牛排2片装（200*2） ",
                description: "肉质细嫩，多汁爽口",
                isSplit: 0,
                sn: "WOC000009006",
                price: 79.8,
                marketPrice: 79.8,
                picUrl:
                  "https://img.wochu.cn/upload/5d54ca75-a872-4dd3-a5ca-b9fb37da7d16.jpg",
                salableStock: 0,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d939c0ac-94e2-4617-be26-e8768c346c23",
                goodsName: "澳洲原味牛肉汉堡饼100g*2",
                description: "肥瘦比例2:8，色泽均匀，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000009093",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/1514f679-f56a-4b7f-84e6-348debc61716.jpg",
                salableStock: 12,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "369d4541-69e4-47f6-865c-dacb632815f4",
                goodsName: "谊升先谷饲肥牛片1000g",
                description: "原切花纹清晰，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000009385",
                price: 109.0,
                marketPrice: 119.0,
                picUrl:
                  "https://img.wochu.cn/upload/16901b58-645e-4c94-8e7e-2e024d79477d.jpg",
                salableStock: 360,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eef9c49d-19af-49cf-8411-b3daaacbb3f8",
                goodsName: "酣畅澳洲原切谷饲板腱牛排150g",
                description: "原切花纹清晰，肉质鲜嫩",
                isSplit: 0,
                sn: "WOC000009389",
                price: 29.9,
                marketPrice: 36.0,
                picUrl:
                  "https://img.wochu.cn/upload/758548a5-3123-4a68-b8f9-7cd09fcb78ad.jpg",
                salableStock: 18,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4877a87d-c612-4208-b42a-7f7c1c32a610",
                goodsName: "元圣内蒙古羊寸排500g",
                description: "肉质鲜香，细腻多汁",
                isSplit: 0,
                sn: "WOC000009409",
                price: 45.9,
                marketPrice: 69.9,
                picUrl:
                  "https://img.wochu.cn/upload/c3a9885b-d89c-4ac5-84b2-c8a6c8df80ce.jpg",
                salableStock: 261,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cf601f3f-db74-4b1e-80d5-49b8a221a20e",
                goodsName: "元圣羊杂500g",
                description: "精心搭配5种食材，丰富口感，愉悦您的味蕾",
                isSplit: 0,
                sn: "WOC000009410",
                price: 28.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/beb5d368-9068-43ca-9c67-9e1392fdc7ef.jpg",
                salableStock: 129,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6d2649e5-5b1a-4fff-922e-9f184e605410",
                goodsName: "元圣牛杂500g",
                description: "口感多重奏，味美大过瘾",
                isSplit: 0,
                sn: "WOC000009411",
                price: 28.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/fec368ce-a70f-4843-81a1-1cc3b6ff317b.jpg",
                salableStock: 321,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "42ede089-5cf2-4ff6-bbed-a99c8a569053",
                goodsName: "元圣内蒙古单骨法式羊排400g",
                description: "肉质坚实 鲜嫩弹爽",
                isSplit: 0,
                sn: "WOC000009412",
                price: 49.0,
                marketPrice: 69.0,
                picUrl:
                  "https://img.wochu.cn/upload/55b88143-435e-43d3-b482-332d74519563.jpg",
                salableStock: 48,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "36aab34e-82c2-47ae-b7f6-a9cb677fc949",
                goodsName: "绿牧印象带皮羔羊肉块500g",
                description: "肥瘦相间 肉质细腻",
                isSplit: 0,
                sn: "WOC000009450",
                price: 45.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/b40b49f0-34d9-46e8-b1e5-32ce9432551b.jpg",
                salableStock: 237,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c42bedd-26b8-4541-87ad-667344f13f98",
                goodsName: "藏原牧汉500g牛尾段",
                description: "骨肉相间，肥瘦相宜，适合炖汤",
                isSplit: 0,
                sn: "WOC000009647",
                price: 32.9,
                marketPrice: 42.9,
                picUrl:
                  "https://img.wochu.cn/upload/b4e0cd89-c0f2-45af-a084-279f791f8e90.jpg",
                salableStock: 75,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "de39dbba-65ac-46c5-895a-bf16a92f0e3e",
                goodsName: "原膳澳洲黑标原切雪花牛仔骨230g",
                description: "带骨“小鲜肉”，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000010691",
                price: 24.9,
                marketPrice: 34.9,
                picUrl:
                  "https://img.wochu.cn/upload/4afe1cff-6ec3-4c78-9a52-b784be02555d.jpg",
                salableStock: 114,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9bbccce3-32c1-41e9-abb5-6fcaa8f52407",
                goodsName: "星享米其黑安格斯眼肉心牛排(M2)200g",
                description: "谷饲150天施展柔嫩“魔法”，香甜，多汁，为煎烤而生",
                isSplit: 0,
                sn: "WOC000010694",
                price: 58.8,
                marketPrice: 78.8,
                picUrl:
                  "https://img.wochu.cn/upload/d524bf8c-7fae-484c-aa3a-d817857ec956.jpg",
                salableStock: 309,
                categoryId: 804,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 805,
            name: "肉禽制品",
            displayIndex: 29,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aba50474-d514-4d76-8c77-f32f5a49e540.jpg",
                type: "checkicon",
                categoryId: 805
              }
            ],
            goods: [
              {
                goodsGuid: "9645789d-0452-42ac-b39c-577a1d92b9b7",
                goodsName: "酣畅美式黑胡椒鸡胸肉100g",
                description: "减肥好吃两不误，轻食也能很美味",
                isSplit: 0,
                sn: "WOC000008832",
                price: 12.8,
                marketPrice: 13.8,
                picUrl:
                  "https://img.wochu.cn/upload/90496c33-a819-42a5-af60-0b99f1c6a4df.jpg",
                salableStock: 606,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "9645789d-0452-42ac-b39c-577a1d92b9b7",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "a0377a9f-2bce-4da1-a819-c9a00bcce991",
                goodsName: "荷美尔经典德式香肠（速冻生制品）120g",
                description: "香肠肉质细腻丰盈，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000009475",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/596f5e7e-7c38-4327-8db2-99e1d1bc2e25.jpg",
                salableStock: 48,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "904142d6-5059-41e2-98e5-f3f738f83641",
                goodsName: "荷美尔鲜嫩涮涮肠100g",
                description: "无需解冻，涮烫两分钟，美食即可享",
                isSplit: 0,
                sn: "WOC000009477",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/57afa7ca-d0ed-4888-a3f9-f053ff7245ac.jpg",
                salableStock: 69,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4efecb1a-e4f2-4112-8109-2dc0f7e99998",
                goodsName: "荷美尔轻享鸡胸切片120g",
                description: "低脂高蛋白0碳水无防腐剂",
                isSplit: 0,
                sn: "WOC000009472",
                price: 16.8,
                marketPrice: 16.8,
                picUrl:
                  "https://img.wochu.cn/upload/da1aca7a-8b25-4c52-9adf-e9e68d98bdf7.jpg",
                salableStock: 21,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8eb6bc0b-2774-491f-8cbb-899048184a48",
                goodsName: "酣畅奥尔良无骨鸡排240g",
                description: "厚实的鸡排经过腌制，口感鲜嫩，肉汁香甜",
                isSplit: 0,
                sn: "WOC000008833",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/ecadf086-73c8-47d2-a8e3-908b37e655fb.jpg",
                salableStock: 237,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                salableStock: 429,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e01d4727-1a6f-4065-95bc-3352cea14019",
                goodsName: "爱森狮子头300g",
                description: "已调理入味，开袋直接红烧或清蒸,新老包装随机发货",
                isSplit: 0,
                sn: "WOC000001437",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/559807c7-8c63-43f8-a75f-9831e16e7cbd.jpg",
                salableStock: 576,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "51ecf6ce-34da-44ef-a56a-e044f7073730",
                goodsName: "荷美尔Hormel 超值精选培根 150g",
                description: "百年品质，精选高品质食材秘制",
                isSplit: 0,
                sn: "WOC000005261",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/cd9f9428-3e5d-4fc1-b11f-0175f3557058.jpg",
                salableStock: 0,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8bea7039-510d-4617-b25a-94194516bc8c",
                goodsName: "荷美尔Hormel 经典香煎培根 120g",
                description: "百年品质，百搭食材",
                isSplit: 0,
                sn: "WOC000005257",
                price: 12.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/e79cb107-f9e1-4565-a92f-41e0b6e65cdb.jpg",
                salableStock: 807,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4afca651-9e2d-4757-9e56-bfd291880686",
                goodsName: "爱森荠菜猪肉馅500g",
                description: "爱森调味肉馅，安心便捷",
                isSplit: 0,
                sn: "WOC000002064",
                price: 24.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17019dd7-8082-4451-b8bd-02bf16ed03a3.jpg",
                salableStock: 0,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 805,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 805,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7e225889-45e5-4027-8e0f-5d0595565e7f",
                goodsName: "爱森香酥猪排200g",
                description: "新老包装随机发货",
                isSplit: 0,
                sn: "WOC000001438",
                price: 18.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/af12dd44-6cba-4b71-8a8f-94d539b5e59a.jpg",
                salableStock: 339,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9e62f105-5908-4f26-a183-dcfcf166bb77",
                goodsName: "百事盛农牧臻致盐焗鸡750g",
                description: "采用黄麻鸡，个头小，肉质嫩，味甜鲜滑",
                isSplit: 0,
                sn: "WOC000006425",
                price: 59.9,
                marketPrice: 89.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/15f835cb-c9a1-4a8f-b7ae-d2cecfff68ef.jpg",
                salableStock: 219,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb60859c-a1e2-4b9f-b191-6a1fe1ef2f23",
                goodsName: "山林红培根180g",
                description: "肉质鲜嫩有弹性，浓郁肉香",
                isSplit: 0,
                sn: "WOC000008621",
                price: 9.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/713aaccc-17cc-4abb-a67e-46a1feead63b.jpg",
                salableStock: 27,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b7552e63-1b0c-437e-88f6-f08fd6130335",
                goodsName: "山林香辣里脊180g",
                description: "精选里脊，传统工艺，鲜香入味",
                isSplit: 0,
                sn: "WOC000008622",
                price: 8.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/a9a95ab9-7fc4-47bb-a19d-a9e3038ddf06.jpg",
                salableStock: 219,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e7d0cb89-a50c-4a9d-a136-1ccc86d8703d",
                goodsName: "酣畅奥尔良烤翅中500g",
                description: "跨越半个地球，美味触手可及",
                isSplit: 0,
                sn: "WOC000008810",
                price: 32.9,
                marketPrice: 39.0,
                picUrl:
                  "https://img.wochu.cn/upload/9af2f267-cc46-426e-bd5d-7e53a417cf7f.jpg",
                salableStock: 555,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2f62d1aa-594d-4223-b3ee-cec578a168d0",
                goodsName: "中粮家佳康香脆炸猪排200g",
                description: "肉质鲜嫩，香脆可口",
                isSplit: 0,
                sn: "WOC000008869",
                price: 18.8,
                marketPrice: 18.8,
                picUrl:
                  "https://img.wochu.cn/upload/097a7124-769b-4c04-b2e4-a125b4ebbe8c.jpg",
                salableStock: 66,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b621a202-97c9-4fbf-b0b0-6e600944fa83",
                goodsName: "黑胡椒牛柳150g",
                description: "精选材料，新鲜美味，简单易做",
                isSplit: 0,
                sn: "WOC000009076",
                price: 12.8,
                marketPrice: 12.8,
                picUrl:
                  "https://img.wochu.cn/upload/10d078a2-402f-48ce-87b2-c1f56f1bc982.jpg",
                salableStock: 657,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f2a109e3-baea-4ae2-afc1-9ddd89eb27f9",
                goodsName: "荷美尔匠心生熏腹肉培根（冷冻）120g",
                description: "精选猪肉，肉香浓郁，餐桌必食",
                isSplit: 0,
                sn: "WOC000009471",
                price: 15.9,
                marketPrice: 21.8,
                picUrl:
                  "https://img.wochu.cn/upload/a8f2c973-c577-441f-9826-1ae201586035.jpg",
                salableStock: 0,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "40b09bf5-e086-411a-9bc7-7ac62269516d",
                goodsName: "荷美尔经典台式香肠250g",
                description: "皮脆柔嫩 大块肉粒",
                isSplit: 0,
                sn: "WOC000009474",
                price: 19.8,
                marketPrice: 21.0,
                picUrl:
                  "https://img.wochu.cn/upload/b9d44bb0-16bc-4244-ac25-c6add36ac99f.jpg",
                salableStock: 27,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e4d10471-04b6-495b-a191-23875ff171f0",
                goodsName: "荷美尔经典西班牙香肠（速冻生制品）120g",
                description: "肉质细腻丰盈，鲜嫩多汁",
                isSplit: 0,
                sn: "WOC000009476",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/6d8b8f6b-07a7-4a03-8307-6689e2bf4a5a.jpg",
                salableStock: 21,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "36f9f726-bb83-4be7-8fef-f077602d2142",
                goodsName: "荷美尔超值鲜嫩火腿片135g",
                description: "超值家庭装，鲜嫩爽滑多汁",
                isSplit: 0,
                sn: "WOC000009473",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/9cbf88bb-8fd9-4e5b-aff2-50ee385b695e.jpg",
                salableStock: 21,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "54c9ae09-c05e-4025-8f3a-95909347bd29",
                goodsName: "荷美尔Hormel 轻享鸡胸肉（原味）106g",
                description: "低脂高蛋白 健身代餐首选",
                isSplit: 0,
                sn: "WOC000009565",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/c2e4a57d-bf2e-4d8d-bb29-7984e9d59c2b.jpg",
                salableStock: 9,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c6f33be7-a713-4100-90b5-60d40e314738",
                goodsName: "荷美尔Hormel 轻享鸡胸肉（蒜香黄油风味）106g",
                description: "减肥好吃两不误，轻食也能很美味",
                isSplit: 0,
                sn: "WOC000009566",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/1d97a2d5-db80-488a-95af-0455d759ac9a.jpg",
                salableStock: 60,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8c63961b-bae8-44f2-8fcc-118511f37379",
                goodsName: "双汇美式火腿50g*3",
                description: "花样吃法，开袋即食",
                isSplit: 0,
                sn: "WOC000009608",
                price: 15.5,
                marketPrice: 15.5,
                picUrl:
                  "https://img.wochu.cn/upload/faf951fd-a1e0-48e9-8eab-dcdd24642ab7.jpg",
                salableStock: 6,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dad2beb3-3915-4e22-92b7-11879cf2a080",
                goodsName: "双汇美味盐水香肠220g*2支",
                description: "味道浓香，口感柔嫩",
                isSplit: 0,
                sn: "WOC000009610",
                price: 7.5,
                marketPrice: 8.8,
                picUrl:
                  "https://img.wochu.cn/upload/833ec4a2-380a-4c07-9fda-4c8d9708cbdd.jpg",
                salableStock: 63,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "09e14c03-356c-473a-9de7-d8f82662b1ce",
                goodsName: "双汇水晶肴肉(新)240g",
                description: "精选新鲜原料，肉质饱满味佳",
                isSplit: 0,
                sn: "WOC000009611",
                price: 18.5,
                marketPrice: 18.5,
                picUrl:
                  "https://img.wochu.cn/upload/c297e1a1-6528-4991-b04a-5c17a199030d.jpg",
                salableStock: 7,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3ad6b093-5488-4391-a4a2-dbb22506c17c",
                goodsName: "双汇无淀粉烤火腿225g",
                description: "无淀粉肠 肉香浓郁 鲜香不腻",
                isSplit: 0,
                sn: "WOC000009612",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/8e3c2ac4-359c-4615-b8ef-5fcdb2e37f4a.jpg",
                salableStock: 0,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3e5550b6-6c93-4ce6-a3dd-9954742d9ac2",
                goodsName: "双汇王中王（30g）*8",
                description: "经典美味 休闲零食",
                isSplit: 0,
                sn: "WOC000009613",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/53431c79-5e02-42ed-ae43-eba41ea32004.jpg",
                salableStock: 24,
                categoryId: 805,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 806,
            name: "蛋类",
            displayIndex: 28,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/55ef6ed9-95ed-44dc-afec-9a8ca4765488.jpg",
                type: "checkicon",
                categoryId: 806
              }
            ],
            goods: [
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                goodsGuid: "7e797cf2-f5a9-4927-8eb3-6379c94cb779",
                goodsName: "松花皮蛋4枚220g",
                description: "口感鲜滑爽口，酥软溏心，无铅工艺",
                isSplit: 0,
                sn: "WOC000005850",
                price: 11.1,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/25451dd5-67a4-403b-a26b-de77d786bb6e.jpg",
                salableStock: 105,
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c344a3e2-676e-4040-9396-c5f33c7d66aa",
                goodsName: "熟制咸鸭蛋单枚60g",
                description: "香糯流油，儿时的味道",
                isSplit: 0,
                sn: "WOC000005851",
                price: 3.9,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b8764097-fdb3-4719-a4ff-0173064efb52.jpg",
                salableStock: 2358,
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "c344a3e2-676e-4040-9396-c5f33c7d66aa",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "6eb2b084-e83f-4e5f-a69b-90aa7eda0b32",
                goodsName: "梅香皮蛋（8只装）/盒",
                description: "现代无铅工艺，光亮透明。",
                isSplit: 0,
                sn: "WOC000001857",
                price: 23.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c4d7999b-d0f8-4681-b853-6360eb6186c9.jpg",
                salableStock: 12,
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0ea57ba4-d8e3-4cd5-beed-ff7e3d6de21d",
                goodsName: "梅香咸蛋（8只装）/盒",
                description: "蛋黄红沙油，蛋白鲜细嫩",
                isSplit: 0,
                sn: "WOC000001858",
                price: 25.5,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/097bdeb4-8678-4656-8e7a-5aa80858ed93.jpg",
                salableStock: 9,
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b4c4f6d9-151a-449c-a281-8d76c991c07e",
                goodsName: "天然无公害鲜鸭蛋10枚",
                description: "蛋香醇厚  蛋白紧实，有弹性，无腥味",
                isSplit: 0,
                sn: "WOC000006146",
                price: 15.0,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aa5969fb-ae93-4e6f-8ede-07291478ca2d.jpg",
                salableStock: 9,
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 806,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 807,
            name: "整禽类",
            displayIndex: 27,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fd288a32-60e9-423b-863f-6bb58742ea5b.jpg",
                type: "checkicon",
                categoryId: 807
              }
            ],
            goods: [
              {
                goodsGuid: "b9598daa-7119-46ed-8ff3-77595e363c5d",
                goodsName: "大别山老母鸡800克",
                description: "鸡肉鲜而不老，汤汁浓郁可口",
                isSplit: 0,
                sn: "WOC000008906",
                price: 39.9,
                marketPrice: 49.0,
                picUrl:
                  "https://img.wochu.cn/upload/7e5948ab-4608-42d7-9b20-8fde2b0b9730.jpg",
                salableStock: 0,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "586ab3e5-e89b-408c-ab83-f07bb5af8193",
                goodsName: "温氏鲜冻清远鸡950—1050g",
                description:
                  "每一只都可溯源，生产日期标于包装外箱，单只为简易包装，介意者慎入！",
                isSplit: 0,
                sn: "WOC000004932",
                price: 49.9,
                marketPrice: 68.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c60af5a7-d21d-4219-ba9c-59090d7dddf5.jpg",
                salableStock: 0,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9e62f105-5908-4f26-a183-dcfcf166bb77",
                goodsName: "百事盛农牧臻致盐焗鸡750g",
                description: "采用黄麻鸡，个头小，肉质嫩，味甜鲜滑",
                isSplit: 0,
                sn: "WOC000006425",
                price: 59.9,
                marketPrice: 89.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/15f835cb-c9a1-4a8f-b7ae-d2cecfff68ef.jpg",
                salableStock: 219,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d59fd27-3d39-4ce6-aa27-f37f203bf3a6",
                goodsName: "崇明二年半龄老麻鸭900g",
                description: "崇明本地老麻鸭，散养年龄超过900天",
                isSplit: 0,
                sn: "WOC000004337",
                price: 88.0,
                marketPrice: 98.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0a5ff6e1-b510-408a-8225-4d5fedc8b936.jpg",
                salableStock: 93,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4edd9dae-9f97-433d-bcaa-57de2e60ce3a",
                goodsName: "崇明一年半龄老母鸡1000g",
                description: "崇明本地鸡，500天以上林间散养老母鸡",
                isSplit: 0,
                sn: "WOC000005202",
                price: 69.9,
                marketPrice: 79.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1465b4fb-febd-463f-b8e0-4f21a3e8ee53.jpg",
                salableStock: 72,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dd3cad52-05cc-43c5-b3f8-64d8fcc53284",
                goodsName: "崇明麻鸭1100g",
                description: "正宗崇明农家散养麻鸭，桃林自足觅食",
                isSplit: 0,
                sn: "WOC000005203",
                price: 49.0,
                marketPrice: 59.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7efb8f27-86b9-487f-86e6-e23ac2d63772.jpg",
                salableStock: 81,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2b66c7ca-bea1-44fe-a202-79cfa0076ef9",
                goodsName: "崇明乌骨鸡900g",
                description: "正宗崇明农家散养乌骨鸡，连内脏都是黑的，煲汤佳品",
                isSplit: 0,
                sn: "WOC000005204",
                price: 69.0,
                marketPrice: 79.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fd4a78c6-9372-41c4-970c-632b7730708b.jpg",
                salableStock: 69,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e98c5d24-b8fb-4367-bdbd-3b8be100a9e0",
                goodsName: "驼龙山冰鲜有机散养小母鸡800g",
                description:
                  "白切、红烧都好吃，煲汤低脂不怕胖~【一件代发】商品不与其他商品合单，到货时间以快递时间为准哦~",
                isSplit: 0,
                sn: "WOC000007639",
                price: 178.0,
                marketPrice: 228.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/899c60f6-99b9-4acc-bd05-2169e80222d4.jpg",
                salableStock: 999,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 1,
                currentDate: 1556605516,
                deadLineDate: 1553925600,
                goodsLabels: []
              },
              {
                goodsGuid: "9a615483-4bb9-4a39-ac7a-7081c1fbf657",
                goodsName: "驼龙山冰鲜有机散养小公鸡900g",
                description:
                  "喝太湖水长大的小鲜肉，适合红烧~【一件代发】商品不与其他商品合单，到货时间以快递时间为准哦~",
                isSplit: 0,
                sn: "WOC000007640",
                price: 158.0,
                marketPrice: 208.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/417ce78c-8fc4-44d4-8605-9aa65a5e73a5.jpg",
                salableStock: 999,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 1,
                currentDate: 1556605516,
                deadLineDate: 1553925600,
                goodsLabels: []
              },
              {
                goodsGuid: "dcae1af1-342b-4645-a06b-9dc1db5b929c",
                goodsName: "驼龙山冰鲜有机散养老母鸡1200g",
                description:
                  "养足280天，特别适合煲汤~【一件代发】商品不与其他商品合单，到货时间以快递时间为准哦~",
                isSplit: 0,
                sn: "WOC000007641",
                price: 198.0,
                marketPrice: 258.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3926d26b-8def-4d79-b55b-2585d3003649.jpg",
                salableStock: 999,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 1,
                currentDate: 1556605516,
                deadLineDate: 1553925600,
                goodsLabels: []
              },
              {
                goodsGuid: "39d89652-b0f2-4c8e-b191-ed983e3589f1",
                goodsName: "供港白切鸡750g",
                description: "真空包装，开袋即食",
                isSplit: 0,
                sn: "WOC000008231",
                price: 58.0,
                marketPrice: 78.9,
                picUrl:
                  "https://img.wochu.cn/upload/8f2efcf1-d6bc-4310-88a8-9181ac4a2247.jpg",
                salableStock: 87,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bc135944-6bb1-4945-8c0e-7ecf76539286",
                goodsName: "文昌鸡（老母鸡）1000克",
                description: "素以皮薄肉滑，鲜美肥美著称",
                isSplit: 0,
                sn: "WOC000008925",
                price: 99.0,
                marketPrice: 99.0,
                picUrl:
                  "https://img.wochu.cn/upload/6db9c3d4-8967-4027-8b14-0061ba30b93f.jpg",
                salableStock: 0,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "45e3424f-d9ac-4d1d-a844-54bd2a2dbd26",
                goodsName: "童子鸡800克",
                description: "新鲜速冻，口感鲜嫩",
                isSplit: 0,
                sn: "WOC000008905",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/0d7b4f79-084a-4f8e-a9dd-149b199cad16.jpg",
                salableStock: 0,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "65fc5285-38cd-40de-b9e2-16ee32d3c2e4",
                goodsName: "田园公社童子鸡600g",
                description: "细腻鲜美，营养易吸收",
                isSplit: 0,
                sn: "WOC000008872",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/7c614daa-7966-489a-aecf-fe51066e8de3.jpg",
                salableStock: 417,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8d0b3460-29a5-4e77-a066-fcab3f44c5e4",
                goodsName: "田园公社樱桃谷鸭980g",
                description: "嫩鸭肉质鲜美，烹炒更香",
                isSplit: 0,
                sn: "WOC000008904",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/3c7db101-e31f-4d5b-9e4e-1e002ff2a07a.jpg",
                salableStock: 123,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "940b3c7c-6fd3-42c7-b299-5d6a84607813",
                goodsName: "田园公社乳鸽300g",
                description: "肉质柔嫩少腥，煮后鲜香细腻",
                isSplit: 0,
                sn: "WOC000008903",
                price: 36.8,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/539e4aa1-4f39-4850-973a-09f77a10cea1.jpg",
                salableStock: 144,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5185ca36-0436-4df0-87b9-6c1132277550",
                goodsName: "狼山鸡老母鸡（ 鸡龄540天2.8-3斤)1.4kg",
                description: "肉质细嫩，味道鲜美",
                isSplit: 0,
                sn: "WOC000009007",
                price: 188.0,
                marketPrice: 188.0,
                picUrl:
                  "https://img.wochu.cn/upload/395326e4-4b91-4f77-b45a-5df265f405c7.jpg",
                salableStock: 39,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b001d7b1-935a-4ef2-a421-d1948b67aa41",
                goodsName: "田园公社老母鸡1300g",
                description: "肉质鲜嫩，味道鲜美",
                isSplit: 0,
                sn: "WOC000009646",
                price: 49.0,
                marketPrice: 49.0,
                picUrl:
                  "https://img.wochu.cn/upload/254eb019-f66f-4d49-a75b-fde1ceb8abae.jpg",
                salableStock: 81,
                categoryId: 807,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 808,
            name: "分割禽类",
            displayIndex: 26,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/071c7c92-6984-44dc-82e4-5209570bf1bd.jpg",
                type: "checkicon",
                categoryId: 808
              }
            ],
            goods: [
              {
                goodsGuid: "b0ad2392-251e-4ed4-a5e2-d0929347e635",
                goodsName: "开润鸭血435g",
                description:
                  "精选鲜鸭血，煮汤、火锅、粉丝汤，想怎么吃怎么吃（常温3个月，2~8°C储存6个月）",
                isSplit: 0,
                sn: "WOC000005007",
                price: 3.5,
                marketPrice: 3.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7869f2ba-f9e8-474d-8500-35efd03b7ef8.jpg",
                salableStock: 90,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "72d2db15-1788-47a0-9fac-7a1239780cd1",
                goodsName: "山林风酱鸭400g",
                description: "好吃吮指，肉香不柴，开袋即食，也可配米饭配泡饭",
                isSplit: 0,
                sn: "WOC000007433",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e8879108-c5ab-442b-b502-12276759891f.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6c9f9881-8edf-4955-a43f-95a365646686",
                goodsName: "山林风盐水鸭400g",
                description: "开袋即食，炖汤更鲜美",
                isSplit: 0,
                sn: "WOC000007432",
                price: 29.9,
                marketPrice: 35.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5636791f-c2a2-4176-8099-b53f3c6cfef6.jpg",
                salableStock: 183,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "6c9f9881-8edf-4955-a43f-95a365646686",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "eb60fc7e-823e-4986-a5c3-a3a9158152a2",
                goodsName: "华英精致鸭腿两只装",
                description: "生产日期，截至有效期见封口",
                isSplit: 0,
                sn: "WOC000004342",
                price: 18.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b7f690d8-a612-458c-9390-c93d47a406ff.jpg",
                salableStock: 1074,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "44603ef5-6d96-4955-9ed0-551f44805649",
                goodsName: "泰森去皮鸡大胸500g",
                description: "去皮无骨，精瘦鸡大胸，温馨提示：新老包装随机发货",
                isSplit: 0,
                sn: "WOC000002449",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/95dbdb19-204c-4567-a844-cfce6b347f9e.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5e61f26c-fc92-49b7-a8f7-d7b2a4814876",
                goodsName: "泰森鸡翅中500g",
                description: "美国知名品牌，不含激素；新老包装随机发货",
                isSplit: 0,
                sn: "WOC000002446",
                price: 39.9,
                marketPrice: 49.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d156a895-6e91-41fa-90f0-58961e266f7a.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2d7e01cf-be3b-4179-a174-0a985b93ef55",
                goodsName: "泰森鸡琵琶腿500g",
                description: "肉质细腻结实，香味浓郁，适用任何烹饪方式",
                isSplit: 0,
                sn: "WOC000002445",
                price: 19.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7c80ebc9-e02a-48b4-b8e8-76c89d3a48f8.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8145cf0f-fb26-463e-884d-d9267574ccba",
                goodsName: "单冻鸡翅中1000g(±15g)",
                description:
                  "新鲜翅中，肥而不腻。单个重量30—40g  由于该商品为量贩大包装商品，难以避免运输储存中的水分流失，固有可能造成20-30g的重量误差  介者慎拍",
                isSplit: 0,
                sn: "WOC000004489",
                price: 49.9,
                marketPrice: 52.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5b02e2b8-5c18-4c8d-a9e1-e8ee48971eae.jpg",
                salableStock: 183,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "61567fd5-9194-4b7a-858d-b75230be945d",
                goodsName: "泰森鸡凤爪500g",
                description:
                  "美国知名品牌，新鲜鸡肉现切速冻，不含激素；新老包装随机发货",
                isSplit: 0,
                sn: "WOC000002448",
                price: 24.9,
                marketPrice: 29.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0dfe7314-96c8-4a7d-8a10-a4ce07bc7dce.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bc0ec641-737d-4620-be28-c6b315da43c5",
                goodsName: "泰森鸡翅根500g",
                description: "温馨提示：新老包装随机发货",
                isSplit: 0,
                sn: "WOC000002447",
                price: 19.8,
                marketPrice: 22.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00094d8e-d4bf-4f1a-8dcf-7e9a61d5f607.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
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
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "75a9a063-df32-49f1-96dc-61fbc64a2151",
                goodsName: "山林大红凤鹅500g",
                description: "鹅肉熟食，装盘即可上桌，家宴菜肴一秒搞定！",
                isSplit: 0,
                sn: "WOC000007435",
                price: 36.9,
                marketPrice: 68.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/77c29b9a-2a47-4dd7-9527-8629c033baff.jpg",
                salableStock: 27,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5102b27a-4d98-41e0-84dd-5c8b2c1beb08",
                goodsName: "圣农冷冻琵琶腿330g",
                description: "肉质饱满，口感软嫩鲜美",
                isSplit: 0,
                sn: "WOC000009762",
                price: 17.9,
                marketPrice: 22.9,
                picUrl:
                  "https://img.wochu.cn/upload/0a6e903a-cb87-4aff-8259-23e9dc3b4fd7.jpg",
                salableStock: 0,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ac5798c7-26eb-4e7b-b0c0-a193e3e9688f",
                goodsName: "凤祥食品香辣翅中500g",
                description: "外酥里嫩，香味浓郁",
                isSplit: 0,
                sn: "WOC000010690",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://img.wochu.cn/upload/2fef954a-e573-4d0b-8b7c-dee556e5102c.jpg",
                salableStock: 303,
                categoryId: 808,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605516,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "ac5798c7-26eb-4e7b-b0c0-a193e3e9688f",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f019e885-59ab-407c-827b-6000502b6c50.png",
                    labelType: 1,
                    createTime: 1556415400
                  }
                ]
              }
            ]
          },
          {
            id: 810,
            name: "肉类礼盒",
            displayIndex: 24,
            description: "",
            parentId: 8,
            path: "/8/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8795e34c-870d-4b39-a38f-b2165baf3a65.jpg",
                type: "checkicon",
                categoryId: 810
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
