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
      titlename: "点心速食",
      wrappernav: [
        "中式点心",
        "方便菜",
        "火锅类"
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
            id: 1005,
            name: "中式点心",
            displayIndex: 10,
            description: "",
            parentId: 5,
            path: "/5/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1f3a57b3-9aff-47eb-9d75-e2ecc8b2bf64.jpg",
                type: "checkicon",
                categoryId: 1005
              }
            ],
            goods: [
              {
                goodsGuid: "0768c66a-4775-41b0-9524-026503b18086",
                goodsName: "咸蛋黄夹心年糕200g",
                description: "韩国有心年糕",
                isSplit: 0,
                sn: "WOC000006144",
                price: 19.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/91dc6b78-a4f5-4861-a265-45144c905f39.jpg",
                salableStock: 366,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0768c66a-4775-41b0-9524-026503b18086",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "5486e4ee-5efa-45a6-9d46-737d4a12267c",
                goodsName: "安井 红糖发糕 700g（活动）",
                description: "保质期至6/25，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009685",
                price: 18.8,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/2e291afd-ff7d-425d-b3a5-1d888e54c3d8.jpg",
                salableStock: 174,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "5486e4ee-5efa-45a6-9d46-737d4a12267c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "2f2374ea-80d5-4c8b-a386-33774e6c60e9",
                goodsName: "伊田乌冬面200g",
                description: "忒筋道，解馋管饱，炒、汤、拌咋吃都不够",
                isSplit: 0,
                sn: "WOC000003815",
                price: 6.9,
                marketPrice: 3.9,
                picUrl:
                  "https://img.wochu.cn/upload/db8d6ca5-6a2c-40f2-b633-748991dd46b4.jpg",
                salableStock: 1545,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2f2374ea-80d5-4c8b-a386-33774e6c60e9",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "dee6b52f-3151-4660-85ee-d31299fbc4d2",
                goodsName: "正大 荠菜猪肉蒸饺 460g（活动）",
                description: "保质期至6/15，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009701",
                price: 24.9,
                marketPrice: 25.8,
                picUrl:
                  "https://img.wochu.cn/upload/ae7822f6-f166-48ef-9b85-1d6c02361aff.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "dee6b52f-3151-4660-85ee-d31299fbc4d2",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "80ef439b-e0f1-4b28-8c36-5ce319daf7fc",
                goodsName: "正大 芹菜猪肉蒸饺 460g（活动）",
                description: "保质期至6/25，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009700",
                price: 24.9,
                marketPrice: 25.8,
                picUrl:
                  "https://img.wochu.cn/upload/e89f5540-c795-442f-b99e-8fc715c63a14.jpg",
                salableStock: 57,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2feb102c-6530-4d2c-8664-d1798f0b0ebc",
                goodsName: "凡凡屋生拉面120g",
                description: "湿面条，煮熟快，比一般挂面更筋斗",
                isSplit: 0,
                sn: "WOC000007363",
                price: 5.9,
                marketPrice: 5.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/261d4a1b-0fea-4cfc-ae08-c419bcf94f0f.jpg",
                salableStock: 906,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "2feb102c-6530-4d2c-8664-d1798f0b0ebc",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "db4f607d-7d9a-456d-bcca-af5957e66f1b",
                goodsName: "五芳斋紫糯八宝饭200g",
                description: "血糯米八宝饭，营养爆棚",
                isSplit: 0,
                sn: "WOC000007796",
                price: 6.9,
                marketPrice: 10.9,
                picUrl:
                  "https://img.wochu.cn/upload/26d464d5-a018-4319-86f2-848775b9b276.jpg",
                salableStock: 57,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "43e80964-1eb5-4e59-a1f7-acd2f2fda16b",
                goodsName: "三全韭菜鸡蛋素水饺450g",
                description: "",
                isSplit: 0,
                sn: "WOC000008375",
                price: 12.8,
                marketPrice: 18.9,
                picUrl:
                  "https://img.wochu.cn/upload/12d31572-7e5a-4d5f-9711-e6a05ca1e70e.jpg",
                salableStock: 264,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5c9654c9-6b55-40c2-8854-584f4a6a45f1",
                goodsName: "正大玉米蔬菜猪肉蒸饺115g",
                description: "可蒸可煎，面皮超薄，加热后透亮有光泽",
                isSplit: 0,
                sn: "WOC000007373",
                price: 14.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7af19eda-93fb-4244-8360-b3be2629b816.jpg",
                salableStock: 633,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "5c9654c9-6b55-40c2-8854-584f4a6a45f1",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "384d11cd-41f1-419b-aecb-cf54e8ae6c21",
                goodsName: "五芳斋紫糯八宝饭双福组合",
                description: "",
                isSplit: 1,
                sn: "WOC000009609",
                price: 16.9,
                marketPrice: 21.8,
                picUrl:
                  "https://img.wochu.cn/upload/4e5eaa7d-9522-4789-8cdd-230b4c773ae6.jpg",
                salableStock: 28,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b20529ad-bd56-48ee-bfe2-cd0a4aed3e1d",
                goodsName: "传统手作大花卷200g*1只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009620",
                price: 4.9,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/8054a15e-e8b7-4d3b-9e5c-f19db37c73e9.jpg",
                salableStock: 87,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "144ac556-7e41-413a-8858-82685176d5f8",
                goodsName: "真真老老蛋黄肉松青团60g*4个/包",
                description: "",
                isSplit: 0,
                sn: "WOC000010185",
                price: 14.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/047ec114-26b0-4ffe-b252-1b9470c8266d.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d44326a9-43c8-4ee6-a6ec-848b96d3b4fa",
                goodsName: "安井 酒酿小圆子 250g（活动）",
                description: "",
                isSplit: 0,
                sn: "WOC000009688",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/a40fc922-ad97-4bec-ae35-17bfde4b9bc6.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1bfed5ca-50a8-4acf-a77c-3e26dd6e70c4",
                goodsName: "安井 牛奶馒头 240g（活动）",
                description: "",
                isSplit: 0,
                sn: "WOC000009677",
                price: 7.9,
                marketPrice: 7.9,
                picUrl:
                  "https://img.wochu.cn/upload/e851b2f3-7115-491c-a0af-9d0b86c2d98d.jpg",
                salableStock: 42,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a0345724-3038-4cac-843d-ec0e31f684d7",
                goodsName: "五芳斋糯香八宝饭200g",
                description: "八宝食材，香糯口感",
                isSplit: 0,
                sn: "WOC000004848",
                price: 9.9,
                marketPrice: 10.9,
                picUrl:
                  "https://img.wochu.cn/upload/16af82e2-6a89-4502-ac1d-344ef91abf80.jpg",
                salableStock: 135,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "66204870-1bbd-4895-bac8-6c22514b2386",
                goodsName: "正大菌菇三鲜蒸饺115g",
                description: "水晶饺子，做成锅贴，底部焦香更好吃",
                isSplit: 0,
                sn: "WOC000007374",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5e395281-7c5c-4e59-b081-165c932a11b2.jpg",
                salableStock: 357,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "94562c5a-ccaa-46a2-b297-3cdf6c7d96e6",
                goodsName: "三全素馅春卷216g",
                description: "好食材 自然好美味",
                isSplit: 0,
                sn: "WOC000005561",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bd81b5e9-81b5-4a31-9388-40e6ab8e5f2e.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a58e941b-71c9-4166-a525-7a37d1448b6f",
                goodsName: "二分钱米兰虾饼300g",
                description: "北极甜虾仁+N种蔬菜，酥脆香！",
                isSplit: 0,
                sn: "WOC000007375",
                price: 10.9,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2edd7c1d-e2a3-4da3-a2cf-15c6ad45b94a.jpg",
                salableStock: 33,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f545b70d-68af-4523-8ca1-ad87ab61b028",
                goodsName: "桂冠香糯小圆子250g",
                description: "品牌速食，香甜软糯不黏牙。",
                isSplit: 0,
                sn: "WOC000000460",
                price: 5.5,
                marketPrice: 7.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aa67e2d6-0a8c-4945-b271-95b977ce7aca.jpg",
                salableStock: 21,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a26e1ae9-08ea-4d34-a8c8-f4aa2509a2e0",
                goodsName: "桂冠芝麻汤圆200g",
                description: "二十年老品牌，芝麻馅香浓。",
                isSplit: 0,
                sn: "WOC000001968",
                price: 8.8,
                marketPrice: 10.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/30732633-11d3-4c44-8d60-3cd01ba9d5c6.jpg",
                salableStock: 63,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "626e80a7-2263-4a70-95c7-8790fbc6d690",
                goodsName: "凡凡屋乌冬面200g",
                description: "炒、拌、涮火锅都好吃，Q弹有如现制",
                isSplit: 0,
                sn: "WOC000007361",
                price: 3.9,
                marketPrice: 8.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ae0381e1-cda3-4c72-8495-76488f903bd2.jpg",
                salableStock: 498,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b25a79df-06c7-45e0-a05c-2254bc86fdd8",
                goodsName: "三全原味南瓜饼300g",
                description: "",
                isSplit: 0,
                sn: "WOC000008380",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/05dda1cf-cce2-484e-bab2-69011957e464.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ca52bbed-d82c-4a41-a464-928f5961d6c4",
                goodsName: "民仁堂鲜肉小馄饨110g",
                description: "早点3分钟搞定！面皮薄透，肉馅丰厚，配调料",
                isSplit: 0,
                sn: "WOC000007356",
                price: 7.8,
                marketPrice: 7.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/46417c3e-47a7-46e2-afdb-4c1289261acb.jpg",
                salableStock: 537,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b8ca4391-cdf4-48eb-8ae5-189461f65836",
                goodsName: "南翔小笼包 180g",
                description: "100年历史的上海名小吃，面皮半透明，一咬一包汤",
                isSplit: 0,
                sn: "WOC000000969",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/be055ee6-fe08-4ad5-9b15-2ad29499b588.jpg",
                salableStock: 714,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fcf53a37-41b3-48d8-ba9c-f8b8f417a2a3",
                goodsName: "纯正新西兰甜青豆200g",
                description: "鲜脆甜，小炒必备配菜",
                isSplit: 0,
                sn: "WOC000007798",
                price: 6.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/522ab420-ad3a-43cc-98f8-66984b6b9584.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "df70ef34-77ef-4915-82d8-7ee55ff06f46",
                goodsName: "三全葱香手抓饼320g",
                description: "",
                isSplit: 0,
                sn: "WOC000005553",
                price: 9.9,
                marketPrice: 19.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/22fef789-1bae-4ac5-931e-79bf255bd853.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cd7bb099-9c54-4ef1-9c09-9de9e14792ac",
                goodsName: "三全豆沙春卷216g",
                description: "",
                isSplit: 0,
                sn: "WOC000005560",
                price: 13.8,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/391948dd-7a1a-4a6f-890d-0a6e6cac92d3.jpg",
                salableStock: 39,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "28f08e14-53a4-4aa2-b80d-f058d4a80566",
                goodsName: "功德林素鲍鱼210g",
                description: "和真鲍鱼相似度90%以上！解冻切片蘸酱油就能吃",
                isSplit: 0,
                sn: "WOC000007005",
                price: 12.8,
                marketPrice: 12.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5892b0b9-854e-4c51-b78b-3b758d8cb205.jpg",
                salableStock: 844,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2dde1be9-932a-472d-924d-59fcf321a1e6",
                goodsName: "利口福爽滑云吞240g",
                description: "",
                isSplit: 0,
                sn: "WOC000008373",
                price: 12.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/0438a82b-887d-4073-972c-e9efba71349f.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e4456259-9374-4b4b-9152-a0585020251c",
                goodsName: "三全原味手抓饼320g",
                description: "",
                isSplit: 0,
                sn: "WOC000005554",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/53285cce-e6c7-46dd-8f35-ba1e2345d11d.jpg",
                salableStock: 51,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e18ee25c-e9d2-4a10-9b50-9677dbe94e33",
                goodsName: "清美银耳红枣羹330g",
                description: "",
                isSplit: 0,
                sn: "WOC000005354",
                price: 2.9,
                marketPrice: 3.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/931e9c08-4280-42f9-ac23-e8b377d7a526.jpg",
                salableStock: 12,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "efd75e96-d833-4c8c-a455-306269c575cc",
                goodsName: "避风塘虾饺150g",
                description: "经典品牌，港式餐厅招牌美食。",
                isSplit: 0,
                sn: "WOC000001483",
                price: 22.9,
                marketPrice: 28.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/487a5a56-6360-46ec-9ceb-068598cb237d.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1c1c9c6a-7df8-4282-9dcf-18dc1ea27fd5",
                goodsName: "桂冠包馅小圆子250g",
                description: "品牌速食，香糯不黏牙，芝麻馅香浓。",
                isSplit: 0,
                sn: "WOC000000464",
                price: 7.9,
                marketPrice: 9.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/610fd8a3-979f-44b4-8a90-3abd00ce6981.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6c97df59-64bc-4f6e-8b7b-b75fbfdc3986",
                goodsName: "龙凤经典黑芝麻汤圆200g",
                description: "",
                isSplit: 0,
                sn: "WOC000003175",
                price: 8.6,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/22375ebb-3ee3-4cdc-8720-5f7e21d5c43c.jpg",
                salableStock: 4,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e1f0584f-8394-4651-ba30-bdf322b22024",
                goodsName: "南翔鲜领香菇肉丁烧卖480g",
                description: "8只装，老上海味道，蒸锅上汽蒸6分钟即食",
                isSplit: 0,
                sn: "WOC000004518",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/41fc4092-a9f1-4d83-8239-f358320d6639.jpg",
                salableStock: 195,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b91b40b3-0661-443b-b1b6-b3f4c819e532",
                goodsName: "杏花楼酒酿360G",
                description: "酒香浓郁，糯米含量≥30%",
                isSplit: 0,
                sn: "WOC000003818",
                price: 4.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6e96bafd-0a50-43fb-a402-cc6a49d2c897.jpg",
                salableStock: 90,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "57b2b4ca-c784-4460-b961-1ac7386bba8f",
                goodsName: "清美火锅年糕360g",
                description: "上海著名品牌，传统工艺制作。",
                isSplit: 0,
                sn: "WOC000003588",
                price: 2.0,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ffc6b47-4881-4f04-80b2-0ba5b6e5ab72.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d4b47057-f561-4bc3-b244-228d1148f613",
                goodsName: "原味芝士年糕500g",
                description: "芝士夹心，香软可口，韩式风味",
                isSplit: 0,
                sn: "WOC000004883",
                price: 24.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6508cf1b-ed53-43fe-bc07-c1be280ad750.jpg",
                salableStock: 390,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "45f08988-1f1b-47d6-898d-f1eba0892012",
                goodsName: "峰仔白糖桂花糕300g",
                description: "食材甄选，手工传承，柔软蓬松，酸甜适中",
                isSplit: 0,
                sn: "WOC000007006",
                price: 9.9,
                marketPrice: 13.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bbd5a0d2-cf14-4443-a871-f2189cd516c0.jpg",
                salableStock: 390,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c98ca4af-ddcc-4aad-8869-02ced8f4f669",
                goodsName: "富茂素鲍鱼210g",
                description: "鲍鱼的口感，白菜的价格",
                isSplit: 0,
                sn: "WOC000001486",
                price: 9.9,
                marketPrice: 16.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/39528e7f-fde9-4e09-b806-90718d321367.jpg",
                salableStock: 546,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                salableStock: 84,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "257eaed4-90f4-45d0-89b3-bbc361164163",
                goodsName: "喜多方饺子皮250g",
                description: "一袋含30张皮，3人份，适合包水饺蒸饺煎饺",
                isSplit: 0,
                sn: "WOC000007364",
                price: 3.9,
                marketPrice: 6.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e2c93e60-ee6e-40d5-bf62-f7f78ae51671.jpg",
                salableStock: 75,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0142ea8b-3e9d-4833-93ea-819a7f1eecab",
                goodsName: "喜多方馄饨皮250g",
                description: "一袋含30张皮，3人份，适合包上海大馄饨",
                isSplit: 0,
                sn: "WOC000007365",
                price: 3.9,
                marketPrice: 6.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3fd79dcd-a8fe-45b7-bea4-f7f7bf3ea166.jpg",
                salableStock: 156,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bd702198-683b-4303-8681-8f2dcdfc8693",
                goodsName: "民仁堂蟹黄小馄饨110g",
                description: "20只装一顿量，快手早餐就选它",
                isSplit: 0,
                sn: "WOC000007494",
                price: 9.9,
                marketPrice: 14.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/003c5459-632f-41cf-8d7f-6eae18d46e71.jpg",
                salableStock: 99,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7ab1b7cc-42ef-4154-bf59-571a0a5c5666",
                goodsName: "正大菌菇三鲜蒸饺115g四包劲爆团",
                description: "",
                isSplit: 1,
                sn: "WOC000007657",
                price: 19.9,
                marketPrice: 39.6,
                picUrl:
                  "https://img.wochu.cn/upload/f572f6e5-58d2-4679-999f-bbd155ae1246.jpg",
                salableStock: 89,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "76d9b998-3731-4b33-a382-63af2ccf407d",
                goodsName: "正大菌菇三鲜蒸饺460g",
                description: "65%超大馅量的水晶饺子",
                isSplit: 0,
                sn: "WOC000007793",
                price: 19.9,
                marketPrice: 25.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/42584c83-6924-4a63-9a7d-ac621190cda2.jpg",
                salableStock: 114,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7b0ef839-4c89-409d-9cad-6600a7623ba6",
                goodsName: "九洲丰园有机蔬菜泥馒头320g",
                description: "五彩缤纷小馒头，宝宝爱吃",
                isSplit: 0,
                sn: "WOC000007794",
                price: 13.8,
                marketPrice: 17.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c82cb29d-2d6a-4046-820b-d0a2b035a850.jpg",
                salableStock: 192,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8ea6b3ab-7623-4b07-bb11-e907347784b0",
                goodsName: "五芳斋血糯米八宝饭5包劲爆团",
                description: "",
                isSplit: 1,
                sn: "WOC000008002",
                price: 19.9,
                marketPrice: 54.5,
                picUrl:
                  "https://img.wochu.cn/upload/4f262d98-4f08-4bad-9b71-a86df782ae60.jpg",
                salableStock: 11,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c05de77-23fc-4dac-84b0-ce5d6a7bcb52",
                goodsName: "三全儿童虾仁玉米馄饨210g",
                description: "",
                isSplit: 0,
                sn: "WOC000008378",
                price: 22.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/d52853f7-983d-4c75-897b-38dc684dff62.jpg",
                salableStock: 3,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b3053d39-3394-46b7-9362-583d5c5ad012",
                goodsName: "利口福流沙凤凰包337.5g",
                description: "",
                isSplit: 0,
                sn: "WOC000008371",
                price: 12.8,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/1d8369ba-d506-42d7-bac1-588ec063e73d.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5d6e3a90-c09d-4c39-a5cd-ab5e29da4ed3",
                goodsName: "利口福香菇灌汤包300g",
                description: "",
                isSplit: 0,
                sn: "WOC000008372",
                price: 10.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/d9c52010-299c-42af-825f-d35b9f6a8f9f.jpg",
                salableStock: 18,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cddd101c-f912-4904-bb07-c4fd00b14157",
                goodsName: "民仁堂荠菜小馄饨110g",
                description: "早点4分钟搞定！面皮薄透，馅清香，配调料",
                isSplit: 0,
                sn: "WOC000007357",
                price: 7.8,
                marketPrice: 7.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/46fad0b3-d613-4618-9d79-f61661ea9bfb.jpg",
                salableStock: 378,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "68a8abaa-e332-4e79-b9f1-6cc77c1c46a8",
                goodsName: "避风塘豉汁凤爪250g",
                description: "",
                isSplit: 0,
                sn: "WOC000008838",
                price: 23.9,
                marketPrice: 28.8,
                picUrl:
                  "https://img.wochu.cn/upload/6912c78e-3f23-4c6d-86f0-3f030db1a462.jpg",
                salableStock: 21,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a542fd49-7485-4678-9c04-da92fff28a6f",
                goodsName: "避风塘鲜虾小笼包200g",
                description: "",
                isSplit: 0,
                sn: "WOC000008839",
                price: 18.8,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/ce8a24cd-b5d4-4942-a37f-6cc8950b57d4.jpg",
                salableStock: 21,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c20eebad-25c6-4586-9285-f0903dd53769",
                goodsName: "避风塘干炒牛河280g",
                description: "",
                isSplit: 0,
                sn: "WOC000008840",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/6123f378-f86c-44f8-afac-8032cb2e3915.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0441b2a0-6785-4875-a84c-0f5795ef15e3",
                goodsName: "避风塘虾仁玉米烧卖150g",
                description: "",
                isSplit: 0,
                sn: "WOC000008842",
                price: 19.9,
                marketPrice: 22.9,
                picUrl:
                  "https://img.wochu.cn/upload/14815c6d-b0be-4386-ab76-608416f70917.jpg",
                salableStock: 4,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cf4ee11b-a587-4dec-b168-ad72085a27b1",
                goodsName: "避风塘叉烧包 350g",
                description: "",
                isSplit: 0,
                sn: "WOC000008843",
                price: 19.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/0152bb46-989a-4c76-87b5-5441d5674840.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d1e421e-c64e-4888-8f48-536f23be8573",
                goodsName: "避风塘奶黄包350g",
                description: "",
                isSplit: 0,
                sn: "WOC000008844",
                price: 14.8,
                marketPrice: 16.8,
                picUrl:
                  "https://img.wochu.cn/upload/883c553c-9d91-4a96-933e-7a1ad6c9a9fc.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7521285e-3494-4dc8-a3f2-dcfac8f594e8",
                goodsName: "峰仔红糖发糕400g",
                description: "",
                isSplit: 0,
                sn: "WOC000008898",
                price: 8.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/683342e3-b2e7-4b68-9299-ba33a077fc35.jpg",
                salableStock: 111,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5aa2bb39-a952-4191-adb1-f9348e5dce68",
                goodsName: "沙茶猪肉肠粉218g",
                description: "",
                isSplit: 0,
                sn: "WOC000008899",
                price: 8.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/021f4ab2-816d-452a-8372-7ed2113b14b7.jpg",
                salableStock: 213,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a231946-06ca-47cc-880e-aa642c17b74a",
                goodsName: "五亭鲜肉包300g",
                description: "",
                isSplit: 0,
                sn: "WOC000009369",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://img.wochu.cn/upload/d4b0fde0-2aff-468e-974f-407247a09a6c.jpg",
                salableStock: 75,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "061bcbf5-7b70-4869-902a-b0cb24d30c6e",
                goodsName: "五亭萝卜丝包300g",
                description: "",
                isSplit: 0,
                sn: "WOC000009370",
                price: 14.8,
                marketPrice: 14.8,
                picUrl:
                  "https://img.wochu.cn/upload/56c23e08-47e2-4468-84ae-0953f56e7357.jpg",
                salableStock: 102,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "41129d19-d9cd-4674-8cf3-026021213ec0",
                goodsName: "五亭红豆流沙包300g",
                description: "",
                isSplit: 0,
                sn: "WOC000009371",
                price: 14.8,
                marketPrice: 14.8,
                picUrl:
                  "https://img.wochu.cn/upload/6aa73954-9a3e-4e84-a7f0-f3c09683d3c6.jpg",
                salableStock: 153,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fe5a9e81-f027-4e02-9271-2943d9e9f0fa",
                goodsName: "龙凤经典红豆汤圆200g",
                description: "",
                isSplit: 0,
                sn: "WOC000009384",
                price: 8.6,
                marketPrice: 8.9,
                picUrl:
                  "https://img.wochu.cn/upload/55b71f5d-cd5c-40aa-b932-cc3223916fd3.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ebb50fc1-d82c-4405-83bf-cdd0b70169f4",
                goodsName: "利口福流沙凤凰汤圆200g",
                description: "",
                isSplit: 0,
                sn: "WOC000009470",
                price: 10.5,
                marketPrice: 10.5,
                picUrl:
                  "https://img.wochu.cn/upload/48cf6179-072f-4cf5-8c93-e7cd4e81b6d1.jpg",
                salableStock: 81,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a732852b-ebab-47b7-82b7-b4c60a783570",
                goodsName: "手作重油大菜包135g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009614",
                price: 6.9,
                marketPrice: 6.9,
                picUrl:
                  "https://img.wochu.cn/upload/eb7201de-cf7c-40c4-b8e7-225d757bcc79.jpg",
                salableStock: 234,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "caf09b70-45f5-49ac-82e2-48d050652814",
                goodsName: "手作鲜肉大包135g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009615",
                price: 7.9,
                marketPrice: 7.9,
                picUrl:
                  "https://img.wochu.cn/upload/e57da210-73a8-4a32-9a2f-5f7ec3013988.jpg",
                salableStock: 42,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b2286b8d-0a6f-4730-b2d5-78822ed8000a",
                goodsName: "手作梅干菜大包135g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009616",
                price: 7.9,
                marketPrice: 7.9,
                picUrl:
                  "https://img.wochu.cn/upload/032de816-111b-46d9-b89b-b690fbb8359b.jpg",
                salableStock: 240,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "656a742e-fc7f-4099-861d-16e73808b9bc",
                goodsName: "手作咸蛋黄流沙包75g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009617",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/64c4ddaa-0a2c-40ed-8c96-05dd58968d49.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e3a4281d-fce6-4121-b06a-29fb858f0108",
                goodsName: "传统手作大馒头250g*1只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009618",
                price: 3.9,
                marketPrice: 4.9,
                picUrl:
                  "https://img.wochu.cn/upload/2a6bf884-02e5-4913-96a3-4afdbb13151a.jpg",
                salableStock: 93,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "29328874-0fa9-4034-b34c-ae49e3f1f128",
                goodsName: "手作红糖馒头85g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009619",
                price: 8.8,
                marketPrice: 8.8,
                picUrl:
                  "https://img.wochu.cn/upload/1843339e-c700-4d77-9da2-b8f8c9f8bbec.jpg",
                salableStock: 99,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8ccb3ec0-3a67-48f5-9d84-2a7280d43dfe",
                goodsName: "手作白米糕55g*6只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009624",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/b158e446-5460-4e7e-8e06-cff4f2dc5695.jpg",
                salableStock: 96,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14ca2b8c-4293-41dc-99f8-30d60bb4e4b3",
                goodsName: "手作红糖米糕55g*6只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009625",
                price: 10.9,
                marketPrice: 10.9,
                picUrl:
                  "https://img.wochu.cn/upload/548f169b-6ecf-46f5-bd67-50e55ee2f92f.jpg",
                salableStock: 99,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "14ca2b8c-4293-41dc-99f8-30d60bb4e4b3",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a9f7d12f-eaea-4653-832c-cc5dac0267de.png",
                    labelType: 1,
                    createTime: 1555912611
                  }
                ]
              },
              {
                goodsGuid: "2e8a59e0-0bf9-4679-9ccf-b0d2b7894711",
                goodsName: "手作桂花酒酿米糕90g*2只/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000009626",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/e191735f-59cb-42a1-89e9-2fd2ec51b3df.jpg",
                salableStock: 240,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c0d4cc42-95ec-49fd-917e-ef7dae6df61f",
                goodsName: "手作黑洋沙芝麻汤团50g*6只/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000009627",
                price: 14.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/35862745-5f49-480e-b55c-3e810e3a9fcb.jpg",
                salableStock: 48,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "c0d4cc42-95ec-49fd-917e-ef7dae6df61f",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a9f7d12f-eaea-4653-832c-cc5dac0267de.png",
                    labelType: 1,
                    createTime: 1555912611
                  }
                ]
              },
              {
                goodsGuid: "c6abbea8-c682-4dd7-9f0f-1ddba7d5fedb",
                goodsName: "手作鲜肉汤团50g*6只/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000009628",
                price: 14.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/19dcf7c1-1710-4ed7-bd67-2b80a29a016f.jpg",
                salableStock: 48,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "c6abbea8-c682-4dd7-9f0f-1ddba7d5fedb",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a9f7d12f-eaea-4653-832c-cc5dac0267de.png",
                    labelType: 1,
                    createTime: 1555912611
                  }
                ]
              },
              {
                goodsGuid: "b61e9b6a-6f96-468c-a762-80ed6a1f2571",
                goodsName: "安井 香菇水饺 500g（活动）",
                description: "",
                isSplit: 0,
                sn: "WOC000009692",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/70fb8fa8-2bdf-4da1-a400-af27034be92e.jpg",
                salableStock: 87,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "95e73225-a17d-4126-8a62-dc084d68fff8",
                goodsName: "速冻易盒家宴墨鱼水饺240g",
                description: "",
                isSplit: 0,
                sn: "WOC000009530",
                price: 32.9,
                marketPrice: 35.9,
                picUrl:
                  "https://img.wochu.cn/upload/f4d103a3-1aaf-41fd-bb3a-11c70d326a6c.jpg",
                salableStock: 6,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a6fc7718-4367-4613-9ae2-761bbf42f25e",
                goodsName: "微波易盒家宴鲅鱼水饺280g",
                description: "",
                isSplit: 0,
                sn: "WOC000009531",
                price: 22.9,
                marketPrice: 24.9,
                picUrl:
                  "https://img.wochu.cn/upload/05590be0-850e-4ac5-8aae-6a41fa6589cb.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a0605f10-a89f-4d11-aa32-1c7943ba9092",
                goodsName: "微波易盒家宴藤椒风味巴沙鱼水饺280g",
                description: "",
                isSplit: 0,
                sn: "WOC000009532",
                price: 23.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/81f93065-2eab-42a8-86c0-41c73dc7e74f.jpg",
                salableStock: 36,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9c2b92ef-8876-4322-b379-c5f81df4a3d8",
                goodsName: "微波易盒家宴墨鱼水饺280g",
                description: "",
                isSplit: 0,
                sn: "WOC000009533",
                price: 33.9,
                marketPrice: 35.9,
                picUrl:
                  "https://img.wochu.cn/upload/856f0733-4985-47d0-9fbf-30ad08006fa4.jpg",
                salableStock: 30,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "21754382-f762-434c-8e0a-12f97450a42d",
                goodsName: "乔家栅豆沙青团(4粒）240g",
                description: "",
                isSplit: 0,
                sn: "WOC000010187",
                price: 9.9,
                marketPrice: 14.9,
                picUrl:
                  "https://img.wochu.cn/upload/0f36de3b-4bb0-40b2-a820-222e3c77a465.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4ab916dd-4019-4c8d-9e89-2924f92fd7a5",
                goodsName: "大娘荠菜鲜笋猪肉饺700g",
                description: "",
                isSplit: 0,
                sn: "WOC000010234",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/9f574b3a-0b77-47a4-9c22-1470bf3cacdd.jpg",
                salableStock: 624,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "87f2a68e-5b5d-4567-9a2c-60ef443941cb",
                goodsName: "大娘香菇猪肉饺720g",
                description: "",
                isSplit: 0,
                sn: "WOC000010235",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/6236d5b6-15ce-4bc1-a64c-245184eb6bec.jpg",
                salableStock: 306,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d3e50189-3ce3-4a85-9bb1-5825c50129a8",
                goodsName: "大娘大白菜猪肉饺800g",
                description: "",
                isSplit: 0,
                sn: "WOC000010236",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/437c9187-c662-4735-9959-c9b845785dae.jpg",
                salableStock: 300,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dab7686f-ff7f-48f7-a3ed-de97f692768e",
                goodsName: "小南国煮好面葱油拌面（1人份）165克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010241",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/d49239ca-e0b5-4fb1-9259-d2cfc998b3b8.jpg",
                salableStock: 94,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "11ec290e-2073-414d-9ad7-5ed6348f1a10",
                goodsName: "小南国煮好面阳春面（1人份）178克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010242",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/8fa9424b-b6a3-4414-a9e1-f134b415cdd2.jpg",
                salableStock: 264,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "485adaf9-d569-4699-bf6f-7d133f802880",
                goodsName: "安井 南瓜饼（豆沙） 360g（活动）",
                description: "保质期至6/20，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009674",
                price: 7.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/2fa4585c-8681-48fd-b7e2-f54467665629.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3737919b-fbee-40ed-9496-825bf1ea5a3a",
                goodsName: "安井 紫薯包 800g（活动）",
                description: "保质期至6/25，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009679",
                price: 12.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/720d3f2d-14f3-4dc2-bc50-17f0351ea0ae.jpg",
                salableStock: 33,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "baa6b206-5787-4264-bc82-442eb100e8e1",
                goodsName: "安井 奶黄包 360g（活动）",
                description: "保质期至7/3，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009676",
                price: 6.5,
                marketPrice: 9.8,
                picUrl:
                  "https://img.wochu.cn/upload/3dc7d652-9658-4869-a354-e1e02bcccf84.jpg",
                salableStock: 108,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "400dfdd4-6a68-4c84-bc9c-f3b0f23539f9",
                goodsName: "正大 糯米猪肉烧卖 600g（活动）",
                description: "保质期至6/20，介意者慎拍",
                isSplit: 0,
                sn: "WOC000009702",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/3400ed38-6bd2-4590-8c50-db77387f1656.jpg",
                salableStock: 21,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "13d4a9d8-1cb2-428c-af06-19b0e57b7fab",
                goodsName: "丸松真鳕鱼饺子240g",
                description: "皮薄馅多 醇香鲜美",
                isSplit: 0,
                sn: "WOC000010687",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/43eb9935-3df0-4a20-8c1e-54ac1b86be8b.jpg",
                salableStock: 30,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9204ad1f-c077-4f9b-9fb6-c0369f14bcb1",
                goodsName: "丸松虾仁饺子240g",
                description: "出口品质 简单方便 精选新鲜食材",
                isSplit: 0,
                sn: "WOC000010688",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/d1572b67-463a-40a0-b052-81e6340da355.jpg",
                salableStock: 54,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "de746b91-dc60-4361-afbf-12404a536d39",
                goodsName: "小南国黑芝麻汤圆260g/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010252",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/53c80716-97eb-4cf5-97e1-8793172f1df0.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2de06c88-bc1d-42d3-a0ee-8d237fd86a6e",
                goodsName: "小南国肉汁小笼包300克/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010251",
                price: 23.0,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/87482398-3a6a-4697-9842-6c34beeb1ccd.jpg",
                salableStock: 0,
                categoryId: 1005,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1008,
            name: "方便菜",
            displayIndex: 8,
            description: "",
            parentId: 5,
            path: "/5/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0c68b992-c66e-4a71-b67b-765473a6598e.jpg",
                type: "checkicon",
                categoryId: 1008
              }
            ],
            goods: [
              {
                goodsGuid: "28f08e14-53a4-4aa2-b80d-f058d4a80566",
                goodsName: "功德林素鲍鱼210g",
                description: "和真鲍鱼相似度90%以上！解冻切片蘸酱油就能吃",
                isSplit: 0,
                sn: "WOC000007005",
                price: 12.8,
                marketPrice: 12.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5892b0b9-854e-4c51-b78b-3b758d8cb205.jpg",
                salableStock: 844,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4d1e95ce-318a-478a-94bb-fd3f21f29597",
                goodsName: "山林切片红肠80g",
                description: "唇齿留香，海派熟食经典代表",
                isSplit: 0,
                sn: "WOC000007867",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3cdcf838-d43d-4b7e-9891-6f4affc90583.jpg",
                salableStock: 510,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c98ca4af-ddcc-4aad-8869-02ced8f4f669",
                goodsName: "富茂素鲍鱼210g",
                description: "鲍鱼的口感，白菜的价格",
                isSplit: 0,
                sn: "WOC000001486",
                price: 9.9,
                marketPrice: 16.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/39528e7f-fde9-4e09-b806-90718d321367.jpg",
                salableStock: 546,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0a76935d-647a-4b32-8353-bddf47a05a18",
                goodsName: "纯正美国粟米粒200g",
                description: "甜嫩水果玉米，炒饭拌色拉首选",
                isSplit: 0,
                sn: "WOC000007797",
                price: 9.9,
                marketPrice: 12.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8fdf25be-b7fb-4552-8c1e-7669bc501f76.jpg",
                salableStock: 0,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "890a1e2c-5789-4677-a34d-30f0360f36eb",
                goodsName: "五亭扬州狮子头（马蹄）240g",
                description: "",
                isSplit: 0,
                sn: "WOC000009372",
                price: 39.0,
                marketPrice: 39.0,
                picUrl:
                  "https://img.wochu.cn/upload/e7ea83b7-e23c-4068-9aca-7aaab8ec86fd.jpg",
                salableStock: 54,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "51ba8e2b-9e77-4b2c-b016-a0e938ab3c69",
                goodsName: "五亭扬州狮子头（蟹黄）240g",
                description: "",
                isSplit: 0,
                sn: "WOC000009373",
                price: 39.0,
                marketPrice: 39.0,
                picUrl:
                  "https://img.wochu.cn/upload/c064d96d-0731-4b4d-98ba-e0d61b2c8108.jpg",
                salableStock: 147,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "df96947b-375a-4cd9-9a6a-860ac096a033",
                goodsName: "“珍蒸好”贡米辽参200g*2罐（礼盒装）",
                description: "",
                isSplit: 0,
                sn: "WOC000009603",
                price: 128.0,
                marketPrice: 198.0,
                picUrl:
                  "https://img.wochu.cn/upload/99c53776-8bd9-47da-b7f1-acd982717790.jpg",
                salableStock: 9,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a33cdbb6-cf7d-4750-8951-91e5e9b19969",
                goodsName: "“珍蒸好”佛跳墙200g*2罐（礼盒装）",
                description: "",
                isSplit: 0,
                sn: "WOC000009604",
                price: 128.0,
                marketPrice: 168.0,
                picUrl:
                  "https://img.wochu.cn/upload/17dea82b-a6c7-4565-b56c-b8a667100e7e.jpg",
                salableStock: 3,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c76c450a-3faf-47a7-8e7f-9d82f86638d1",
                goodsName: "“珍蒸好”紫螺鲍200g*2罐（礼盒装）",
                description: "",
                isSplit: 0,
                sn: "WOC000009605",
                price: 128.0,
                marketPrice: 188.0,
                picUrl:
                  "https://img.wochu.cn/upload/49437703-1911-4eff-bb50-dfbf22234e88.jpg",
                salableStock: 9,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0ff23a63-497e-44bf-8801-150c216738b8",
                goodsName: "易盒家宴酱香鸡爪煲1020g",
                description: "",
                isSplit: 0,
                sn: "WOC000009536",
                price: 59.8,
                marketPrice: 79.8,
                picUrl:
                  "https://img.wochu.cn/upload/553ce3cc-d2b1-4d1f-9f8f-37b235290f10.jpg",
                salableStock: 12,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6a3037a8-f85e-4c0c-9169-c25ca3f89456",
                goodsName: "小南国煮好面葱油拌面330克/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010237",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/36956cde-e9ee-4d9b-afb3-7062b819e37b.jpg",
                salableStock: 105,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "09afa29b-312f-48b6-a7ff-c394c7d4a09e",
                goodsName: "小南国煮好面重庆小面370克/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010238",
                price: 23.8,
                marketPrice: 23.8,
                picUrl:
                  "https://img.wochu.cn/upload/0966a9b3-d17b-4ad6-a4a4-e3d58a9d8c75.jpg",
                salableStock: 84,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ed4432e9-9bf9-42db-8784-df1220aa5d7d",
                goodsName: "小南国煮好面担担面414克/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010239",
                price: 23.8,
                marketPrice: 23.8,
                picUrl:
                  "https://img.wochu.cn/upload/b646a89e-b966-4f28-b3bb-fc0b65b25558.jpg",
                salableStock: 42,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e2b631ca-63b7-4e0b-8c23-9f1a4a3a9778",
                goodsName: "小南国煮好面阳春面356克/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010240",
                price: 19.8,
                marketPrice: 19.8,
                picUrl:
                  "https://img.wochu.cn/upload/076930c0-25ef-4ad5-8cf9-29250a9f4837.jpg",
                salableStock: 123,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "34782157-3100-4cbe-8008-3f537d9b6c73",
                goodsName: "小南国四鲜烤麸180克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010243",
                price: 19.0,
                marketPrice: 19.0,
                picUrl:
                  "https://img.wochu.cn/upload/9c7e4f45-fa0c-4a96-92d9-8b7b915f16bd.jpg",
                salableStock: 45,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5c7c8b51-6ba6-40a0-8205-5460ff64f1cf",
                goodsName: "厨厨喵咪海派拌面（麻酱）410g",
                description: "",
                isSplit: 0,
                sn: "WOC000010215",
                price: 19.9,
                marketPrice: 24.9,
                picUrl:
                  "https://img.wochu.cn/upload/27be8ee6-d5c7-4b03-a7ec-5dd4abad49ff.jpg",
                salableStock: 72,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e9c40778-4338-4767-bbe9-3b54552272d9",
                goodsName: "厨厨喵咪海派拌面（葱油）单人份158g",
                description: "",
                isSplit: 0,
                sn: "WOC000010216",
                price: 9.9,
                marketPrice: 14.9,
                picUrl:
                  "https://img.wochu.cn/upload/0e7cb6ad-c5c1-478a-b650-89cfae3b1eb2.jpg",
                salableStock: 81,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f8d47250-d82e-4a96-b246-2c078c73f74d",
                goodsName: "厨厨喵咪豚骨浓汤叉烧拉面204.5g",
                description: "",
                isSplit: 0,
                sn: "WOC000010217",
                price: 14.9,
                marketPrice: 23.9,
                picUrl:
                  "https://img.wochu.cn/upload/7519a225-5938-42ec-b82b-626046b1523e.jpg",
                salableStock: 69,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "73a56c9d-964d-45f9-b3c0-71d65c72e694",
                goodsName: "厨厨喵咪地狱麻辣叉烧拉面241.5g",
                description: "微辣哦，其实并不是很辣~",
                isSplit: 0,
                sn: "WOC000010218",
                price: 14.9,
                marketPrice: 23.9,
                picUrl:
                  "https://img.wochu.cn/upload/fad33215-0f4a-420a-a738-110baf6dabb5.jpg",
                salableStock: 75,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a57b221a-6a9c-49bf-87b0-5accaf36142c",
                goodsName: "小南国红烧狮子头380g/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010247",
                price: 39.0,
                marketPrice: 39.0,
                picUrl:
                  "https://img.wochu.cn/upload/36f56708-bbe5-4404-abf4-55853668be5a.jpg",
                salableStock: 0,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3242741f-391f-40a7-83d9-0c8ee273e4cd",
                goodsName: "小南国糖醋小排200克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010244",
                price: 39.0,
                marketPrice: 39.0,
                picUrl:
                  "https://img.wochu.cn/upload/0c10726a-b903-4f7d-b834-eec0856d70af.jpg",
                salableStock: 0,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0af0fbeb-3f56-4281-ac8e-10df8644d6ff",
                goodsName: "小南国香辣笋炖牛腩520克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010248",
                price: 58.0,
                marketPrice: 58.0,
                picUrl:
                  "https://img.wochu.cn/upload/a0651651-0bfe-4fb0-8e4f-80a8ac0a95ac.jpg",
                salableStock: 0,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "67193a17-00f4-4f0d-8d52-d6f71e47914e",
                goodsName: "小南国油淋鸡180g/盒",
                description: "",
                isSplit: 0,
                sn: "WOC000010249",
                price: 32.0,
                marketPrice: 32.0,
                picUrl:
                  "https://img.wochu.cn/upload/fb7fd371-cd03-499e-a9a3-8daeedf94547.jpg",
                salableStock: 27,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3807a227-9a51-428e-a8e3-a5981e439ee1",
                goodsName: "小南国油焖笋140克/袋",
                description: "",
                isSplit: 0,
                sn: "WOC000010245",
                price: 19.0,
                marketPrice: 19.0,
                picUrl:
                  "https://img.wochu.cn/upload/6b8c1b0a-aa69-4468-b551-84282dc526e5.jpg",
                salableStock: 0,
                categoryId: 1008,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1009,
            name: "火锅类",
            displayIndex: 7,
            description: "",
            parentId: 5,
            path: "/5/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d058854a-4b2c-4dab-a042-d4e21fae74b8.jpg",
                type: "checkicon",
                categoryId: 1009
              }
            ],
            goods: [
              {
                goodsGuid: "0768c66a-4775-41b0-9524-026503b18086",
                goodsName: "咸蛋黄夹心年糕200g",
                description: "韩国有心年糕",
                isSplit: 0,
                sn: "WOC000006144",
                price: 19.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/91dc6b78-a4f5-4861-a265-45144c905f39.jpg",
                salableStock: 366,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "0768c66a-4775-41b0-9524-026503b18086",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6be46d9d-00f7-42cf-b4d1-c4eaf68d5826.png",
                    labelType: 1,
                    createTime: 1556176997
                  }
                ]
              },
              {
                goodsGuid: "394db64e-166c-4280-b2e8-3af999a59f14",
                goodsName: "桂冠鱼豆腐100g",
                description: "品牌速食，韧性十足，口感丰富。",
                isSplit: 0,
                sn: "WOC000002513",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b31355ad-d3b6-4a81-84c1-2e01aa0a5e6b.jpg",
                salableStock: 276,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "306515ff-fd18-44e4-84e4-5077134d9d84",
                goodsName: "梅林午餐肉罐头340g",
                description: "",
                isSplit: 0,
                sn: "WOC000007854",
                price: 13.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e66cb04d-1fe6-483e-875b-d57f75d133ee.jpg",
                salableStock: 96,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "14a06221-d94a-492d-aa41-12583263d340",
                goodsName: "桂冠包心贡丸110g",
                description: "品牌速食，外皮弹力十足，内陷鲜美无比。",
                isSplit: 0,
                sn: "WOC000002337",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/47332b08-c1f4-4849-99ca-eb83fb68fc41.jpg",
                salableStock: 0,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7b5b7a84-f650-4b5e-bb6a-aba0cc440c77",
                goodsName: "桂冠蛋饺130g",
                description: "品牌蛋饺，新鲜鸡蛋摊煎蛋皮，猪前腿精肉为陷。",
                isSplit: 0,
                sn: "WOC000000504",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e2a10bd4-be13-4d0f-96b4-31a3aae65bea.jpg",
                salableStock: 0,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "68e2631f-ab75-4a01-924a-f4211a57964c",
                goodsName: "桂冠贡丸110g",
                description: "品牌速食，弹性十足，味道鲜美。",
                isSplit: 0,
                sn: "WOC000002335",
                price: 12.9,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/616b74be-3b87-4a59-85be-34bfe317357f.jpg",
                salableStock: 132,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1d888d85-036d-469e-ad18-170ca9ea86c4",
                goodsName: "桂冠火锅香肠120g",
                description: "二十年老品牌，弹韧劲道。",
                isSplit: 0,
                sn: "WOC000001061",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/68aa53b1-2306-4683-b514-a8a7cebfd724.jpg",
                salableStock: 0,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b66936c6-f1a8-4d8e-ab7a-ef11a9dc0c65",
                goodsName: "桂冠蟹味棒108g",
                description: "品牌速食，涮火锅必备。",
                isSplit: 0,
                sn: "WOC000002515",
                price: 12.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/87bfb58d-598e-45e7-87b1-380cb4c5efee.jpg",
                salableStock: 144,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0de4e1f9-f859-4cc3-9ccf-4874a4418ede",
                goodsName: "桂冠鱼丸110g",
                description: "选用深海鱼糜，肉质细嫩。火锅拍档，无需解冻。",
                isSplit: 0,
                sn: "WOC000004811",
                price: 9.9,
                marketPrice: 11.5,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/868d936b-71f0-4908-8d75-588c1996488e.jpg",
                salableStock: 63,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f981b083-eb12-4852-b03b-f2fea539c62c",
                goodsName: "桂冠鱼子蛋120g",
                description: "品牌速食，海鲜风味，弹性十足。",
                isSplit: 0,
                sn: "WOC000002514",
                price: 12.9,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48cfdaf3-32ac-47de-a6ee-d27dd7ab087c.jpg",
                salableStock: 36,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bb4dd234-7620-44b2-9309-e5bfe7a76a42",
                goodsName: "桂冠虾味球100g",
                description: "",
                isSplit: 0,
                sn: "WOC000002512",
                price: 12.9,
                marketPrice: 15.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c921b73c-c4d7-493f-b250-7d3304d8d905.jpg",
                salableStock: 54,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "03023907-c0f8-45b5-b33e-06258748f930",
                goodsName: "桂冠台湾风味香肠108g",
                description: "",
                isSplit: 0,
                sn: "WOC000007750",
                price: 12.8,
                marketPrice: 14.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/83b367e8-6168-4c21-9484-4e14c373fc22.jpg",
                salableStock: 96,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f5f40732-7933-44da-afef-ec8a74ae3ba7",
                goodsName: "桂冠香菇贡丸340g",
                description: "",
                isSplit: 0,
                sn: "WOC000000489",
                price: 29.9,
                marketPrice: 39.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/877bdb3b-0e3f-4df6-a9df-4d608fe2e30b.jpg",
                salableStock: 15,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "57b2b4ca-c784-4460-b961-1ac7386bba8f",
                goodsName: "清美火锅年糕360g",
                description: "上海著名品牌，传统工艺制作。",
                isSplit: 0,
                sn: "WOC000003588",
                price: 2.0,
                marketPrice: 4.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ffc6b47-4881-4f04-80b2-0ba5b6e5ab72.jpg",
                salableStock: 0,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d4b47057-f561-4bc3-b244-228d1148f613",
                goodsName: "原味芝士年糕500g",
                description: "芝士夹心，香软可口，韩式风味",
                isSplit: 0,
                sn: "WOC000004883",
                price: 24.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6508cf1b-ed53-43fe-bc07-c1be280ad750.jpg",
                salableStock: 390,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "29797714-de0e-4f27-8136-582274a08bc8",
                goodsName: "桂冠贡丸 340g",
                description: "",
                isSplit: 0,
                sn: "WOC000009404",
                price: 31.8,
                marketPrice: 31.8,
                picUrl:
                  "https://img.wochu.cn/upload/5f673d60-9f95-47cc-b60a-cb760535af3e.jpg",
                salableStock: 27,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e296014e-88f4-40bc-8dbd-17e4fc6d84a8",
                goodsName: "安井 包心鱼豆腐 2.5kg（活动）",
                description: "",
                isSplit: 0,
                sn: "WOC000009694",
                price: 49.9,
                marketPrice: 59.9,
                picUrl:
                  "https://img.wochu.cn/upload/4aadd67b-1c82-476e-8478-5bd8b3cc6e8a.jpg",
                salableStock: 24,
                categoryId: 1009,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1556605442,
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
