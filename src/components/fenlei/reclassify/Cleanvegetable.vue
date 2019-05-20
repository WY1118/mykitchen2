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
      titlename: "全部净菜",
      wrappernav: [
        "海味水产",
        "无肉不欢",
        "精美凉菜",
        "玲珑小炒",
        "田园时蔬",
        "营养汤羹",
        "独家熟制菜",
        "其他熟制菜",
        "冷冻品",
        "经典套餐"
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
            id: 101,
            name: "海味水产",
            displayIndex: 76,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b6314513-6e2b-43a2-b686-bd0355361a6b.jpg",
                type: "checkicon",
                categoryId: 101
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
                salableStock: 999,
                categoryId: 101,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 995,
                categoryId: 101,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9dad5e92-9ce0-454e-9905-747073669077",
                goodsName: "苔条深海鱼",
                description: "",
                isSplit: 0,
                sn: "WOC000008344",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/c00e7932-930f-4f2c-8e53-bb93ecc609c6.jpg",
                salableStock: 18,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "eb45f44e-b19e-44f1-b2ce-20f4b1d3cc11",
                goodsName: "花鲢酸菜鱼",
                description: "肉白如玉，酸辣开胃",
                isSplit: 0,
                sn: "WOC000008345",
                price: 19.9,
                marketPrice: 33.9,
                picUrl:
                  "https://img.wochu.cn/upload/187675cb-4730-424f-b8c8-0abe92641e62.jpg",
                salableStock: 49,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 49,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "3c141502-d14c-4e9e-a1aa-9b47e9032597",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b68d3cd0-cf5a-4e78-a2fa-694fd1339fc6.png",
                    labelType: 1,
                    createTime: 1557899712
                  }
                ]
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
                salableStock: 0,
                categoryId: 101,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3d422fb4-9f46-4fef-95e4-fc65756f94e8",
                goodsName: "西芹百合虾仁",
                description: "",
                isSplit: 0,
                sn: "WOC000333",
                price: 29.9,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7fb309b-cf89-454d-b2b4-c0f66dc1b5bd.jpg",
                salableStock: 999,
                categoryId: 101,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "738f95bf-a8ea-4cec-9a1a-9491166d6f93",
                goodsName: "蛤蜊肉炖豆腐浓汤",
                description:
                  "“天下第一鲜”的蛤蜊肥嫩有嚼劲，搭配嫩滑豆腐炖汤，鲜就一个字！",
                isSplit: 0,
                sn: "WOC000006655",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/769419e5-177d-462a-b5c9-1a99507efa41.jpg",
                salableStock: 20,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                marketPrice: 53.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7480d8b7-4dd2-4615-9124-5966eed184be.jpg",
                salableStock: 498,
                categoryId: 101,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c4f55f47-8ab3-4293-820b-9b329c88da11",
                goodsName: "酱爆芹香鲜鱿卷 ",
                description: "清香袭人，10min速成的Q弹鲜嫩",
                isSplit: 0,
                sn: "WOC000006486",
                price: 19.9,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48839fe7-f20e-42e2-8c84-9e89b59e157f.jpg",
                salableStock: 997,
                categoryId: 101,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 100,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 0,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                  "https://img.wochu.cn/upload/1a133865-c3da-480d-b4c2-7285a1c523b3.jpg",
                salableStock: 0,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1172d829-8533-4878-86a4-de3aad8834c2",
                goodsName: "糟溜鱼片【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008170",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/dc9ec6b7-6c92-45b2-9be8-1cac12333f6f.jpg",
                salableStock: 5,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc241075-9454-4c91-a402-a1550a302566",
                goodsName: "酸菜鱼【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008171",
                price: 32.9,
                marketPrice: 32.9,
                picUrl:
                  "https://img.wochu.cn/upload/0832ee03-10a3-437f-a812-7e31706f76b2.jpg",
                salableStock: 5,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 21,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6a8a405c-6f53-460b-906a-f372b3643968",
                goodsName: "生爆鳝片",
                description: "",
                isSplit: 0,
                sn: "WOC000008411",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/805419a9-4a9a-4faa-86ae-4de2651c2807.jpg",
                salableStock: 12,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c657f8c-e1c8-4937-86fe-fcb7f211fab9",
                goodsName: "老醋海蜇头",
                description: "",
                isSplit: 0,
                sn: "WOC000007950",
                price: 35.0,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/db16bf95-6ea4-4f9f-8192-9d4500e569b1.jpg",
                salableStock: 50,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6a93d858-980e-4f8e-a9da-88de72a1d8a5",
                goodsName: "椒麻纸片鱼（黑鱼）",
                description: "",
                isSplit: 0,
                sn: "WOC000008557",
                price: 29.9,
                marketPrice: 49.0,
                picUrl:
                  "https://img.wochu.cn/upload/9645777a-dc1f-484f-96c1-afa6d02cffc9.jpg",
                salableStock: 48,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "6a93d858-980e-4f8e-a9da-88de72a1d8a5",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a7d55d39-b6d4-4329-8712-268dbd33d88b.png",
                    labelType: 1,
                    createTime: 1557400108
                  }
                ]
              },
              {
                goodsGuid: "705442f6-f35f-4a5e-94d8-17f586b49166",
                goodsName: "椒盐龙头烤",
                description: "九肚鱼已宰杀干净并改切好",
                isSplit: 0,
                sn: "WOC000008616",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/d9acddea-84c0-4ee1-a8b9-5b523bd71999.jpg",
                salableStock: 0,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9b44bb55-5cd2-4c70-bb45-c0f0e9da60d5",
                goodsName: "剁椒鸦片鱼头",
                description: "",
                isSplit: 0,
                sn: "WOC000008845",
                price: 49.9,
                marketPrice: 59.0,
                picUrl:
                  "https://img.wochu.cn/upload/2bdf3325-e467-4907-8074-a0c6442445c6.jpg",
                salableStock: 30,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aa26a7ff-34ba-49b5-8ff8-5763dd1350e3",
                goodsName: "韭香辣炒蛤蜊肉",
                description: "",
                isSplit: 0,
                sn: "WOC000005978",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/12f6818f-c099-4f33-9521-693ee657afe7.jpg",
                salableStock: 50,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b4ef09a1-6bfe-4bd9-ab6c-e5ad56648534",
                goodsName: "面拖鲷鱼",
                description: "",
                isSplit: 0,
                sn: "WOC000009005",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/60e2af73-055f-4657-a384-a8c126036fa6.jpg",
                salableStock: 999,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a8813270-bf31-46c2-bde8-cf69a0c8cb7e",
                goodsName: "韭黄鳝丝",
                description: "",
                isSplit: 0,
                sn: "WOC000009124",
                price: 28.8,
                marketPrice: 32.9,
                picUrl:
                  "https://img.wochu.cn/upload/8a53a1c6-7369-4a8f-839e-8d89ae4b2eca.jpg",
                salableStock: 5,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c6d3ea0-219c-4fb7-9c3f-418936ce60d2",
                goodsName: "蒜蓉蒸九肚鱼",
                description: "",
                isSplit: 0,
                sn: "WOC000009125",
                price: 25.5,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/1105dae2-0b34-4b91-86de-4ad2281091a1.jpg",
                salableStock: 0,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "532f348d-73cc-4358-86ac-a7b5e3a77e74",
                goodsName: "孜然鱿鱼筒",
                description: "",
                isSplit: 0,
                sn: "WOC000009266",
                price: 35.5,
                marketPrice: 42.0,
                picUrl:
                  "https://img.wochu.cn/upload/5adc7a02-06ab-4ee5-8601-acb0720e08e1.jpg",
                salableStock: 999,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "a0f1abe1-ff3a-46fd-8444-98dccc59d4e4",
                goodsName: "网红花甲",
                description: "",
                isSplit: 0,
                sn: "WOC000009270",
                price: 22.9,
                marketPrice: 28.0,
                picUrl:
                  "https://img.wochu.cn/upload/c92a30e9-2177-46fb-a6a4-38b1625f0fb8.jpg",
                salableStock: 50,
                categoryId: 101,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 105,
            name: "无肉不欢",
            displayIndex: 75,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4ee5db4d-d462-4033-b754-e6b42e486c36.jpg",
                type: "checkicon",
                categoryId: 105
              }
            ],
            goods: [
              {
                goodsGuid: "e4668bb6-6676-48a8-90ae-00eabc866d9b",
                goodsName: "美极时蔬炒牛蛙",
                description: "超人气！新鲜活杀牛蛙块，极致细腻嫩滑，爽呆呆",
                isSplit: 0,
                sn: "WOC000004361",
                price: 22.9,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d7310503-602c-44ab-baa3-b5cf0b6728b3.jpg",
                salableStock: 46,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "e4668bb6-6676-48a8-90ae-00eabc866d9b",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8d5287fd-3d97-4d1a-a293-a4a6f1723dcf.png",
                    labelType: 1,
                    createTime: 1557400241
                  }
                ]
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 195,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 30,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
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
                salableStock: 27,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 28,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
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
                salableStock: 200,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7a5bf763-1128-4947-a544-8cae730789c4",
                goodsName: "干锅千页豆腐",
                description: '"比肉还好吃的下饭菜！Q弹爽嫩，外焦里嫩 "',
                isSplit: 0,
                sn: "WOC000007019",
                price: 16.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c9cc0203-8f92-4181-aa6b-2ba6824ed4e0.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "7a5bf763-1128-4947-a544-8cae730789c4",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cd242ea1-09a7-48b8-b63f-ff7711987ef6.png",
                    labelType: 1,
                    createTime: 1557400164
                  }
                ]
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "60bd82a7-be6c-4c02-b1fa-3776933b0235",
                goodsName: "鲜笋酱烧牛腩",
                description: "",
                isSplit: 0,
                sn: "WOC000007820",
                price: 45.9,
                marketPrice: 55.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c22d9a26-f004-4b1f-b486-afa703303848.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fae7222c-425b-4e55-80da-345d2879e8b0",
                goodsName: "三杯鸡",
                description: "",
                isSplit: 0,
                sn: "WOC000007917",
                price: 26.9,
                marketPrice: 26.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3244b042-9884-4bb1-9b83-1fefcef4237a.jpg",
                salableStock: 100,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3cb1bc58-9a2f-4e54-b4d8-2dc8dc761d6d",
                goodsName: "蒜香鸡翅中",
                description: "",
                isSplit: 0,
                sn: "WOC000007992",
                price: 19.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/de9c96d9-2c38-4091-b74e-c1fa6aa2dbae.jpg",
                salableStock: 1229,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "177ebde2-fe01-437a-8af9-cc9ba6425105",
                goodsName: "青椒爆肥肠",
                description: "口感筋道有嚼劲，越嚼越香，下饭下酒神器！",
                isSplit: 0,
                sn: "WOC000004970",
                price: 37.5,
                marketPrice: 45.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/23576ee1-c000-4e16-abfd-3509e069f021.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "138a42d6-84d2-4101-86fb-91485385c44c",
                goodsName: "土豆西红柿炖牛腩",
                description: "大块牛腩肉，绝对吃过瘾，味美汤浓，趁热喝！",
                isSplit: 0,
                sn: "WOC000284",
                price: 39.9,
                marketPrice: 45.8,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6fbccfe9-4a43-4071-b326-bc6c5d658660.jpg",
                salableStock: 499,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 19,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 0,
                categoryId: 105,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 141,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 46,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 100,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b63e2151-a57b-4c52-9304-bf15a9cfefb4",
                goodsName: "泰式咖喱鸡",
                description: "【5分钟做菜】吃完嫩滑鸡肉，咖喱汁拌饭超完美",
                isSplit: 0,
                sn: "WOC000004786",
                price: 46.9,
                marketPrice: 46.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a4780785-096b-4a8b-bb86-db4d001e2268.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 500,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                  "https://img.wochu.cn/upload/c6124aa9-4268-4ac8-8301-12c365d2b99f.jpg",
                salableStock: 41,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 49,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 47,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                  "https://img.wochu.cn/upload/3a9319a3-e03b-4a07-bfac-988aae38dfd7.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 100,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 996,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 19,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 100,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "918c34f0-4019-4bf6-a4d5-0f3e554e20b4",
                goodsName: "韭黄肉丝炒蛋",
                description: "韭黄香，鸡蛋嫩，家常必备小菜一碟",
                isSplit: 0,
                sn: "WOC000007463",
                price: 15.9,
                marketPrice: 15.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/6b20013b-aee3-44ba-a0b3-86d71e9ebb21.jpg",
                salableStock: 994,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
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
                salableStock: 0,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d7015eef-672d-4566-aebc-e7b7df8cfa1f",
                goodsName: "红烧牛腩萝卜煲",
                description: "牛腩与萝卜的绝配，10min超快出锅",
                isSplit: 0,
                sn: "WOC000007515",
                price: 32.9,
                marketPrice: 32.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2f87b1bf-2eed-4e83-92d6-ca5002ca10de.jpg",
                salableStock: 500,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c542edfe-4485-4ec9-ba6c-199cfa9a844c",
                goodsName: "招牌黑椒牛仔骨",
                description: "",
                isSplit: 0,
                sn: "WOC000007571",
                price: 34.9,
                marketPrice: 55.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c0878e56-ad1a-4966-84f1-ad9ea1e0ca5f.jpg",
                salableStock: 100,
                categoryId: 105,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "c542edfe-4485-4ec9-ba6c-199cfa9a844c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a7d55d39-b6d4-4329-8712-268dbd33d88b.png",
                    labelType: 1,
                    createTime: 1557400108
                  }
                ]
              },
              {
                goodsGuid: "803222e9-b4bb-433f-bbbf-a75e03626910",
                goodsName: "老上海糟香鸡",
                description: "【5分钟做菜】“赞得不得了，很嫩”乃评论原话",
                isSplit: 0,
                sn: "WOC000007851",
                price: 18.8,
                marketPrice: 29.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/335519d6-4928-469a-a279-39322e5b0faf.jpg",
                salableStock: 24,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                  "https://img.wochu.cn/upload/aed7b76b-b7f2-4ce0-b7fa-5b1320a4a13b.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b319dc3f-e686-4c43-87f8-7e760e675799",
                goodsName: "宫保鸡丁",
                description:
                  "传统名菜，入口鲜辣，鸡肉的鲜嫩配合花生的香脆，味道鲜美",
                isSplit: 0,
                sn: "WOC000001068",
                price: 25.5,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/4154d055-7a7d-417f-9196-bdc2bb3c653e.jpg",
                salableStock: 30,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c041df03-5c6f-4caa-8330-d01610a13627",
                goodsName: "贵州干花菜牛仔粒",
                description: "",
                isSplit: 0,
                sn: "WOC000008036",
                price: 15.9,
                marketPrice: 42.0,
                picUrl:
                  "https://img.wochu.cn/upload/dd30fcbb-c88f-47cf-86cd-2d9588b86417.jpg",
                salableStock: 0,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "aa334ec0-2d5c-4fe9-ab83-1924206dace2",
                goodsName: "牛肉粉丝砂锅",
                description: "",
                isSplit: 0,
                sn: "WOC000008183",
                price: 35.9,
                marketPrice: 35.9,
                picUrl:
                  "https://img.wochu.cn/upload/d6fa1fda-4cfb-4c3e-803a-2125f1b8d4f9.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f191ffde-263a-4c81-be3c-1ecdd53d28aa",
                goodsName: "糖醋里脊【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008164",
                price: 24.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/5191f5ad-b11f-4e69-b6d0-b1b0ec60e001.jpg",
                salableStock: 4,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "523d1a7c-e8c2-4b4e-baaf-6fb017d1cfc5",
                goodsName: "阿婆板栗烧鸡【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008165",
                price: 24.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/615be893-4852-49db-8932-89fef4e87892.jpg",
                salableStock: 5,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cf8abfe5-4c21-4ad8-ac7a-17a4ebd11f12",
                goodsName: "香煎大排配色拉",
                description: "",
                isSplit: 0,
                sn: "WOC000008494",
                price: 14.9,
                marketPrice: 18.9,
                picUrl:
                  "https://img.wochu.cn/upload/1a64dd72-9ee8-457d-abbb-0207ce8f7562.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cffb0796-6aba-4e7f-9486-7bbf7dd5a92e",
                goodsName: "韭菜炒爽脆黄喉",
                description: "",
                isSplit: 0,
                sn: "WOC000008559",
                price: 12.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/b88273bd-69cf-4c3a-8fde-d83b02c37c3b.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fed29921-441c-4994-a71e-8466ea759176",
                goodsName: "苔条鸡丁",
                description: "",
                isSplit: 0,
                sn: "WOC000008619",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/7974ad2f-3fde-4378-add9-35ee5e4c0704.jpg",
                salableStock: 30,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "95737282-d937-4df2-aa18-2d8b9df337e6",
                goodsName: "烟熏鸭脯肉炒蒜苔",
                description: "",
                isSplit: 0,
                sn: "WOC000008846",
                price: 23.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/c2b528b5-a0cb-4860-9d77-ab2698e588c8.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "246cd64d-9aa8-4ed6-adff-e352ad0a815f",
                goodsName: "葱烧大排",
                description: "",
                isSplit: 0,
                sn: "WOC000008915",
                price: 23.9,
                marketPrice: 23.9,
                picUrl:
                  "https://img.wochu.cn/upload/501c99c5-ec24-4f68-8957-46f169049ea3.jpg",
                salableStock: 49,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c5d35201-b8d8-45af-bb59-98deef788326",
                goodsName: "糖醋藕荚",
                description: "",
                isSplit: 0,
                sn: "WOC000008916",
                price: 15.5,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/d405cad5-0f60-47bf-9ec6-783424e9cbbf.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b8ff67f5-5c45-421c-9373-226b5917c15f",
                goodsName: "酱爆腰花",
                description: "",
                isSplit: 0,
                sn: "WOC000009000",
                price: 39.9,
                marketPrice: 48.0,
                picUrl:
                  "https://img.wochu.cn/upload/37074df5-bd71-4896-a139-b3f238c70f30.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c4bfa317-8de2-4029-832d-b8702f8dbe11",
                goodsName: "草原全牛杂",
                description: "",
                isSplit: 0,
                sn: "WOC000009123",
                price: 35.8,
                marketPrice: 42.0,
                picUrl:
                  "https://img.wochu.cn/upload/f8946f19-ed74-4737-be16-4a6b1e9f6fdc.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "71472113-0ab5-4233-904e-b0d27ad11519",
                goodsName: "肉末粉丝煲",
                description: "",
                isSplit: 0,
                sn: "WOC000009267",
                price: 15.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/e4c1a734-0ce6-49c3-9471-a8217f03a39c.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "243b296b-1023-4c92-8e57-42c523f2b583",
                goodsName: "玉米排骨煲",
                description: "",
                isSplit: 0,
                sn: "WOC000009269",
                price: 31.9,
                marketPrice: 38.0,
                picUrl:
                  "https://img.wochu.cn/upload/42d6dc5b-dd4f-42dc-bc51-f8a2606da701.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ef99da60-91f1-42ce-9db9-0a6f87b910d6",
                goodsName: "酱爆上品牛肉粒",
                description: "",
                isSplit: 0,
                sn: "WOC000009562",
                price: 49.5,
                marketPrice: 59.0,
                picUrl:
                  "https://img.wochu.cn/upload/38e2746f-de66-450f-9e33-ef0d94e768eb.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "dacdc9e6-cf8a-4196-b922-7daaf683e428",
                goodsName: "青蒜爆羊肚",
                description: "",
                isSplit: 0,
                sn: "WOC000009444",
                price: 39.9,
                marketPrice: 58.0,
                picUrl:
                  "https://img.wochu.cn/upload/53f7a027-17dc-4047-ada5-92452e484a5b.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "2e0716bd-a061-4e5b-abf5-15afce860eca",
                goodsName: "羊肉萝卜煲",
                description: "",
                isSplit: 0,
                sn: "WOC000009564",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/922efbc3-0e00-4063-ba65-986bdd0f932e.jpg",
                salableStock: 50,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "93b15560-8012-476c-9466-57c89ff73e04",
                goodsName: "杏鲍菇爆炒肥牛",
                description: "菇计您很牛",
                isSplit: 0,
                sn: "WOC000010087",
                price: 26.9,
                marketPrice: 36.9,
                picUrl:
                  "https://img.wochu.cn/upload/1d319751-a45d-4a93-a5eb-4951c7b79fc8.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "93b15560-8012-476c-9466-57c89ff73e04",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5105ecc9-40fb-4ba6-9101-b715dca251c1.png",
                    labelType: 1,
                    createTime: 1557891759
                  }
                ]
              },
              {
                goodsGuid: "aa89ae41-60a7-4eb6-ab31-b255e526b98e",
                goodsName: "港式叉烧",
                description: "甜蜜蜜",
                isSplit: 0,
                sn: "WOC000009569",
                price: 26.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/0b2d5553-0923-4763-bf84-62125ede0447.jpg",
                salableStock: 18,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d2709057-4f5e-4328-b6c2-e37123ec99cb",
                goodsName: "沙茶牛肉片",
                description: "",
                isSplit: 0,
                sn: "WOC000010474",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/556bcceb-6294-48b9-bcb0-7c086e19e931.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e93a485c-318d-4b0c-94ee-38fe8be47a57",
                goodsName: "五花肉焖扁豆",
                description: "",
                isSplit: 0,
                sn: "WOC000010476",
                price: 19.9,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/59fd8db4-61cf-4fd9-a2f6-36482000bafc.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ae6b0406-5205-4aa9-8ca5-e4ed578b65d7",
                goodsName: "青蒜辣里脊",
                description: "",
                isSplit: 0,
                sn: "WOC000010477",
                price: 21.9,
                marketPrice: 31.9,
                picUrl:
                  "https://img.wochu.cn/upload/baedac8d-726f-4e67-b37e-237dea71104e.jpg",
                salableStock: 20,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "ae6b0406-5205-4aa9-8ca5-e4ed578b65d7",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5105ecc9-40fb-4ba6-9101-b715dca251c1.png",
                    labelType: 1,
                    createTime: 1557891759
                  }
                ]
              },
              {
                goodsGuid: "b1aefb0f-4b17-4b42-a6dc-843e0f8a7056",
                goodsName: "蒜香牛仔骨",
                description: "",
                isSplit: 0,
                sn: "WOC000010479",
                price: 36.9,
                marketPrice: 55.0,
                picUrl:
                  "https://img.wochu.cn/upload/bdce9f12-960b-4fbb-aeec-b5f8f942cf0f.jpg",
                salableStock: 999,
                categoryId: 105,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "b1aefb0f-4b17-4b42-a6dc-843e0f8a7056",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7ac6d518-5da7-414e-be7e-6e04f2d60d20.png",
                    labelType: 1,
                    createTime: 1557891812
                  }
                ]
              }
            ]
          },
          {
            id: 102,
            name: "精美凉菜",
            displayIndex: 74,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/78562553-4c65-4412-9a57-f22088ba039c.jpg",
                type: "checkicon",
                categoryId: 102
              }
            ],
            goods: [
              {
                goodsGuid: "7ce9a62e-9d06-4094-838b-d1fdb9b256ab",
                goodsName: "酸辣蕨根粉（3人份）",
                description: "四川名小吃！滑嫩爽口，微辣鲜香~~",
                isSplit: 0,
                sn: "WOC000004282",
                price: 16.9,
                marketPrice: 24.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/17e27a45-2db7-43a2-ac76-f171ff865b81.jpg",
                salableStock: 30,
                categoryId: 102,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 998,
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e4d6aa02-0a0c-4fb5-9d47-dbbd458025cb",
                goodsName: "麻酱油麦菜",
                description: "醇香脆爽，极简生食美味",
                isSplit: 0,
                sn: "WOC000004215",
                price: 11.5,
                marketPrice: 15.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/399fa52d-b5c5-48d2-86cc-e93921a22154.jpg",
                salableStock: 998,
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "6ea10642-1841-4f81-aa50-0f3ea4dc3df5",
                goodsName: "凉拌绣球菌",
                description: "",
                isSplit: 0,
                sn: "WOC000008409",
                price: 23.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/1532b6e8-6561-41e1-b542-1fb0f232d5bc.jpg",
                salableStock: 999,
                categoryId: 102,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3c657f8c-e1c8-4937-86fe-fcb7f211fab9",
                goodsName: "老醋海蜇头",
                description: "",
                isSplit: 0,
                sn: "WOC000007950",
                price: 35.0,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/db16bf95-6ea4-4f9f-8192-9d4500e569b1.jpg",
                salableStock: 50,
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bfe8e440-1975-41bd-afaa-0cf3ef015927",
                goodsName: "莴笋炝金针菇",
                description: "",
                isSplit: 0,
                sn: "WOC000008558",
                price: 14.9,
                marketPrice: 18.0,
                picUrl:
                  "https://img.wochu.cn/upload/b4c44f5e-8f1d-4faa-b1c3-0e8ae841fbb6.jpg",
                salableStock: 998,
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9dab399e-8cc3-41db-a28c-21bde1db1f8a",
                goodsName: "麻酱冰草",
                description: "兼具颜值与美味，餐厅菜的臻品享受",
                isSplit: 0,
                sn: "WOC000005503",
                price: 23.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/98c64b10-f852-41e6-9c80-a03cb42b8891.jpg",
                salableStock: 50,
                categoryId: 102,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "060411cd-acfa-4194-83d3-bf17d3cddb74",
                goodsName: "鸡丝拌黄瓜",
                description: "",
                isSplit: 0,
                sn: "WOC000008919",
                price: 12.9,
                marketPrice: 15.0,
                picUrl:
                  "https://img.wochu.cn/upload/de5a4e57-cc18-4aa6-8192-dbde97ef0e1d.jpg",
                salableStock: 998,
                categoryId: 102,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 103,
            name: "玲珑小炒",
            displayIndex: 73,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70cf027c-f564-46dd-8fe0-a344924069ef.jpg",
                type: "checkicon",
                categoryId: 103
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
                salableStock: 993,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "761495a0-dfed-4938-92a2-2045a506d552",
                goodsName: "幸福家庭小炒",
                description: "5种食材炒一起，荤素搭配全家喜",
                isSplit: 0,
                sn: "WOC000007568",
                price: 14.9,
                marketPrice: 18.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/86100141-8903-4e4c-82a8-cef05ae518a4.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e7d4e5c8-baa1-437e-9efd-37e3ab904230",
                goodsName: "三种蘑菇",
                description: "",
                isSplit: 0,
                sn: "WOC000008215",
                price: 18.8,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/80b378af-63c2-42b8-9e5a-7d85294434f2.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0b08254c-8fe3-48cd-8896-8e840efc5763",
                goodsName: "荷兰豆炒鸡胸肉",
                description: "",
                isSplit: 0,
                sn: "WOC000003563",
                price: 19.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8a241960-4541-4317-b1ea-08751273107b.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0d8e7c88-69d7-4780-bdd7-7271508c9cd1",
                goodsName: "黑椒鸡丁",
                description: "最美式风味中餐",
                isSplit: 0,
                sn: "WOC000001067",
                price: 14.9,
                marketPrice: 18.0,
                picUrl:
                  "https://img.wochu.cn/upload/b500f853-75f4-4a4b-9493-ab478c5b4cb7.jpg",
                salableStock: 30,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4d87c7e2-b704-4e7e-bddb-2271a0d04197",
                goodsName: "肉末银芽炒韭菜",
                description: "满满维生素C、纤维素，减脂党毫无压力",
                isSplit: 0,
                sn: "WOC000001283",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8113d0ad-2fe7-4f5b-9de0-2e39f79f4d3b.jpg",
                salableStock: 49,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c1096626-b7b0-40d3-a692-4067ec9eb333",
                goodsName: "蒜苔炒肉丝",
                description: "蒜香扑鼻，脆嫩多汁，肉都成配角了",
                isSplit: 0,
                sn: "WOC000403",
                price: 22.9,
                marketPrice: 28.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/837aefa7-a18a-43a3-8aa4-1bdd2dab1db8.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5878d035-d788-4b4d-8118-5b0508384ff0",
                goodsName: "肉末豆角下饭菜",
                description: "米饭完美伴侣，拌面也好吃，可根据个人口味调节辣度",
                isSplit: 0,
                sn: "WOC000003924",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a40eb82e-d8dd-4b3c-beb3-3888cce10707.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5d1abcf9-cfa2-42a1-9a8f-09e34a27fc33",
                goodsName: "什锦山药虾仁",
                description: "好看得不像实力派！爽脆弹嫩，还有点甜",
                isSplit: 0,
                sn: "WOC000004038",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/67667de7-dfb0-4f86-a8b9-5f4ba6331b3c.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "fb637fec-fc2b-4742-9ed9-43632173ce0b",
                goodsName: "家常烧日本豆腐",
                description: "香辣爽滑，入口即化。",
                isSplit: 0,
                sn: "WOC000004039",
                price: 25.0,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a4bf3527-08f0-49af-b9a9-81b7ada678e2.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e3aeef11-d8e0-4d4a-a325-5cfb99a89695",
                goodsName: "烂糊肉丝",
                description: "",
                isSplit: 0,
                sn: "WOC000003616",
                price: 18.9,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/25f072b4-5857-4004-8602-3fc253052c62.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "92f21a4e-01f9-45f4-a5eb-1f14f9c2b50b",
                goodsName: "手撕包菜小炒肉",
                description: "",
                isSplit: 0,
                sn: "WOC000406",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/eab30bc7-fd7e-4aac-9fff-a3e8a9593f89.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "69d17121-07e1-4d01-8c9d-2d7363812937",
                goodsName: "飘香多彩海带丝",
                description: "爽口滑脆，肠胃清道夫，强怼富贵病",
                isSplit: 0,
                sn: "WOC000006480",
                price: 12.9,
                marketPrice: 15.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/52befdd7-49e6-4abb-b41d-ee9ed50ac1cc.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c03a8e4f-a4ed-49a2-b023-b6ed19c1f0e8",
                goodsName: "鸡丝酸菜烩毛豆",
                description: "喝粥下酒绝配！咸香开胃，一粒豆都不放过",
                isSplit: 0,
                sn: "WOC000006533",
                price: 14.5,
                marketPrice: 18.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/64785d9c-c1ba-4318-b94c-3a91a21da88b.jpg",
                salableStock: 49,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0db03aff-6cd2-4bc2-8844-c8216ad8c582",
                goodsName: "美极西芹炒什锦",
                description: "人气小炒！特配鲜味汁，脆嫩爽口，有点鲜",
                isSplit: 0,
                sn: "WOC000006802",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/392774f5-2537-4497-b310-bd2ef452f729.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "146b5c56-268f-4f11-be4c-af8adb52ea54",
                goodsName: "外婆小炒",
                description: "不简单！一筷子能夹5种食材，就像外婆满满的爱",
                isSplit: 0,
                sn: "WOC000006803",
                price: 11.9,
                marketPrice: 11.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ae2f83f0-790c-4c57-bcd7-4581f667fb69.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 48,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 996,
                categoryId: 103,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 49,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "7b86e860-899c-4544-8515-92e7c2509de5",
                goodsName: "手捏菜家烧油豆腐",
                description: "超下饭杭帮菜，青菜这样吃没苦味",
                isSplit: 0,
                sn: "WOC000007220",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/80bcb968-ce2f-491e-bc29-53bbdfb3053b.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e59ad0c1-55cb-4198-ad8f-696a439cb2cf",
                goodsName: "青椒炒肉丝",
                description: "川菜经典，肉丝嫩而入味，青椒脆不泛生",
                isSplit: 0,
                sn: "WOC000007267",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3b6b52fb-3439-485c-a461-2e2cf037be18.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9586fcd8-5216-4788-89fd-b7cac57cccd1",
                goodsName: "青柠炒脆藕",
                description: "",
                isSplit: 0,
                sn: "WOC000008278",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/5a6faa23-f57f-4a96-8557-c9134677c4e2.jpg",
                salableStock: 0,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c5d3f9e4-d30a-46b3-b14b-0b9fcb4d4387",
                goodsName: "凉瓜烧排骨",
                description: "",
                isSplit: 0,
                sn: "WOC000008496",
                price: 24.9,
                marketPrice: 24.9,
                picUrl:
                  "https://img.wochu.cn/upload/7f82465c-def6-4780-8eeb-4aefc6e0644e.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "d3250529-f257-47b6-a04c-a0d537f418d3",
                goodsName: "黄瓜钱炒鸡胗",
                description: "",
                isSplit: 0,
                sn: "WOC000008499",
                price: 12.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/5dcdbc24-0cb8-4cc7-9820-9a5383124633.jpg",
                salableStock: 100,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "c556757a-6aca-4933-a951-ca1f86b12680",
                goodsName: "山楂苦瓜片",
                description: "",
                isSplit: 0,
                sn: "WOC000008620",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://img.wochu.cn/upload/2ab2ccec-bf6e-4ef6-b119-7462bb7bcc2b.jpg",
                salableStock: 20,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "95aa7708-c66d-45e1-8e7f-d5fedf6211eb",
                goodsName: "山楂炒山药片",
                description: "",
                isSplit: 0,
                sn: "WOC000008847",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/0eb7dd9a-b329-419e-b690-a66829130321.jpg",
                salableStock: 10,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9709c174-dda8-4e10-a79a-3b361b37aa37",
                goodsName: "三杯茄子",
                description: "",
                isSplit: 0,
                sn: "WOC000008848",
                price: 13.9,
                marketPrice: 16.0,
                picUrl:
                  "https://img.wochu.cn/upload/49e10dff-e232-42de-be9a-dc605e1e6ea4.jpg",
                salableStock: 100,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4302bb7b-a24f-4ca1-9592-fa97c0a46b27",
                goodsName: "茶树菇肉丝炒香干",
                description: "",
                isSplit: 0,
                sn: "WOC000009002",
                price: 16.9,
                marketPrice: 16.9,
                picUrl:
                  "https://img.wochu.cn/upload/2e7c746a-18e2-4cc8-833a-5767f935f9f8.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc626102-ecdc-4549-8f04-3297fdcadc8e",
                goodsName: "秋葵鸡胸肉",
                description: "",
                isSplit: 0,
                sn: "WOC000009003",
                price: 14.5,
                marketPrice: 18.0,
                picUrl:
                  "https://img.wochu.cn/upload/a9f86248-12c6-4132-9f9b-08c93894413e.jpg",
                salableStock: 100,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "ffe576b8-cb69-4670-b611-46e490cffaee",
                goodsName: "脆藕炒五花肉",
                description: "",
                isSplit: 0,
                sn: "WOC000009122",
                price: 18.9,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/86ebfaa2-a9e6-4682-a7a4-2897b3f26b43.jpg",
                salableStock: 997,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9d010f15-186a-4918-85f8-50745b316890",
                goodsName: "锅巴肉片",
                description: "",
                isSplit: 0,
                sn: "WOC000009268",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/c6ff29ea-1321-4739-a81e-3b26a84f4be6.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e47db448-c218-4caa-ad5e-d2e8d53b2d01",
                goodsName: "小炒纸片笋",
                description: "",
                isSplit: 0,
                sn: "WOC000009445",
                price: 22.5,
                marketPrice: 28.0,
                picUrl:
                  "https://img.wochu.cn/upload/dd277780-5e88-4722-8770-fd5427f7a4ab.jpg",
                salableStock: 10,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e332097f-ace0-47d8-a327-2be05a28152e",
                goodsName: "甜豆炒香肠",
                description: "",
                isSplit: 0,
                sn: "WOC000009446",
                price: 25.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/4d140e31-cb4b-4790-b3f3-ccdda12061bf.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "da9c611e-8cb1-4c5e-a63f-8a2f4ba40c79",
                goodsName: "鹿茸菇素鲍鱼",
                description: "佛系少女",
                isSplit: 0,
                sn: "WOC000010088",
                price: 16.9,
                marketPrice: 22.8,
                picUrl:
                  "https://img.wochu.cn/upload/93d29a16-752d-4a65-89e3-beded886c8b2.jpg",
                salableStock: 50,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "da9c611e-8cb1-4c5e-a63f-8a2f4ba40c79",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7ac6d518-5da7-414e-be7e-6e04f2d60d20.png",
                    labelType: 1,
                    createTime: 1557891812
                  }
                ]
              },
              {
                goodsGuid: "241ecf2e-da4d-432b-82b1-8f4d9a40b451",
                goodsName: "干锅孜然土豆片",
                description: "土豆孜然情",
                isSplit: 0,
                sn: "WOC000010092",
                price: 12.9,
                marketPrice: 25.8,
                picUrl:
                  "https://img.wochu.cn/upload/2e1f0773-ba8b-4efb-9344-a2896cc92c02.jpg",
                salableStock: 997,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "241ecf2e-da4d-432b-82b1-8f4d9a40b451",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b53e8015-805d-4415-b25d-8ae3f922d350.png",
                    labelType: 1,
                    createTime: 1557891845
                  }
                ]
              },
              {
                goodsGuid: "b7f21489-31c1-4bbe-82d7-b2f4d39973e4",
                goodsName: "猪肚韭菜花",
                description: "",
                isSplit: 0,
                sn: "WOC000010478",
                price: 38.0,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/85f82abe-4db1-4538-a34e-9f0614996cc0.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "feed462f-7935-403f-bdfe-a3a0ae95f1cc",
                goodsName: "素烩",
                description: "",
                isSplit: 0,
                sn: "WOC000010480",
                price: 15.9,
                marketPrice: 18.0,
                picUrl:
                  "https://img.wochu.cn/upload/5eceef78-b9bd-42fa-aec1-9779d6eecd40.jpg",
                salableStock: 999,
                categoryId: 103,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 104,
            name: "田园时蔬",
            displayIndex: 72,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/77d0cc4e-a452-4bfb-a513-401b262bf54a.jpg",
                type: "checkicon",
                categoryId: 104
              }
            ],
            goods: [
              {
                goodsGuid: "42683bde-0a65-4e69-b9ff-8e7162aeb131",
                goodsName: "秋葵腰果烩山药",
                description: "",
                isSplit: 0,
                sn: "WOC000004938",
                price: 29.0,
                marketPrice: 35.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8182211f-95a2-4f81-b242-09bad8fb9dce.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 28,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4dace00b-5205-43f7-a891-7604d019e809",
                goodsName: "海米上海青",
                description: "高钙与高VC的鲜美交融",
                isSplit: 0,
                sn: "WOC000004569",
                price: 9.9,
                marketPrice: 9.99,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bfc1e403-74e7-490a-b8fd-701d57c38c73.jpg",
                salableStock: 996,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "55ccfcbf-c42f-4205-9dc4-7363a868b344",
                goodsName: "蒜蓉西兰花",
                description: "烹饪5分钟，营养100分",
                isSplit: 0,
                sn: "WOC000002283",
                price: 15.5,
                marketPrice: 19.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1df165bd-2089-4cdc-83a2-5594c2bc8288.jpg",
                salableStock: 50,
                categoryId: 104,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "332c0d24-0c60-48fb-ac56-0699db894368",
                goodsName: "西芹腰果",
                description: "",
                isSplit: 0,
                sn: "WOC000001391",
                price: 14.9,
                marketPrice: 18.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/80843267-bb13-44f0-8673-6fac467323c6.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "61dad10e-cd18-441b-93cb-c54e6dc53d5d",
                goodsName: "醋溜白菜",
                description: "5分钟的酸辣开胃菜",
                isSplit: 0,
                sn: "WOC000427",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/20f50f7e-c383-4f57-a240-5c3474053b5c.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "5e2b4bf4-333f-4193-acab-ed30016005f5",
                goodsName: "芥兰甜豆胡萝卜",
                description: "",
                isSplit: 0,
                sn: "WOC000001382",
                price: 20.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4aec148f-8952-4c3e-88d2-560d1caf1289.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc440593-b16c-487a-94af-2edf80709463",
                goodsName: "西芹百合",
                description: "简单调料，轻松快炒，味道清香，促进食欲开胃可口。",
                isSplit: 0,
                sn: "WOC000375",
                price: 19.9,
                marketPrice: 25.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/062b45bf-1646-4c48-9d06-a2828042901f.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "0917835a-4842-4b14-9d57-89a9e53370ff",
                goodsName: "香菇菜心",
                description: "",
                isSplit: 0,
                sn: "WOC000443",
                price: 9.9,
                marketPrice: 12.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/37105216-c0a5-4dea-b0dd-fd4bc8314159.jpg",
                salableStock: 997,
                categoryId: 104,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "79393053-1ec5-4edd-818b-f962ff3d09b4",
                goodsName: "蒜香豆豉油麦菜",
                description: "蔬菜简单炒，爽口清新，5分钟搞定酒店菜。",
                isSplit: 0,
                sn: "WOC000006264",
                price: 9.9,
                marketPrice: 9.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/963443f3-f910-4c12-aa83-ebb715a6a86d.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 100,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "60802eb5-2d72-4af1-8eef-a2a433107d79",
                goodsName: "奇味炝锅秋葵",
                description: "感觉身体被掏空？来份秋葵吧",
                isSplit: 0,
                sn: "WOC000007222",
                price: 17.9,
                marketPrice: 22.0,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1fff2216-74bb-4141-b188-e544c3b1c28e.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "e934bb27-7881-4877-a2dd-663d5912dfb7",
                goodsName: "双菇炒双花",
                description: "不加味精就很鲜的纯素菜",
                isSplit: 0,
                sn: "WOC000007269",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/549aa11a-98f8-4293-92c4-125330ace00b.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 104,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "162632c6-f328-4cda-b61b-9836773ff111",
                goodsName: "素食主义",
                description: "",
                isSplit: 0,
                sn: "WOC000008498",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/e4523f40-5f71-4fbe-8ffe-492e846d3fd5.jpg",
                salableStock: 997,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "9877f333-349d-4f3f-b8b9-0d92b8778a77",
                goodsName: "沙茶焗球生菜",
                description: "",
                isSplit: 0,
                sn: "WOC000008850",
                price: 11.9,
                marketPrice: 11.9,
                picUrl:
                  "https://img.wochu.cn/upload/c4d52d60-fee5-45f7-99a4-edd3113a1117.jpg",
                salableStock: 198,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "3a398e19-44d4-48c3-ae9c-bb046ff96b8f",
                goodsName: "鲜芦笋炒白蘑菇",
                description: "",
                isSplit: 0,
                sn: "WOC000008849",
                price: 26.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/9da94cf6-052c-49fa-86ea-861765a8753d.jpg",
                salableStock: 998,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1e207b9f-3cd2-476a-b899-6a19cc9ab1c7",
                goodsName: "丝瓜烩毛豆",
                description: "",
                isSplit: 0,
                sn: "WOC000008917",
                price: 13.9,
                marketPrice: 13.9,
                picUrl:
                  "https://img.wochu.cn/upload/8437a977-b492-47aa-97f2-88742ec4fda6.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4924cb63-6641-4784-a696-8bddc7c07955",
                goodsName: "玉子豆腐金针菇",
                description: "",
                isSplit: 0,
                sn: "WOC000009001",
                price: 18.8,
                marketPrice: 23.0,
                picUrl:
                  "https://img.wochu.cn/upload/a783b463-bdfb-4049-9b10-d6a203780550.jpg",
                salableStock: 999,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f727fed4-91d2-477b-ab1f-92c80c900e95",
                goodsName: "酸菜烩乌冬面",
                description: "",
                isSplit: 0,
                sn: "WOC000009126",
                price: 12.9,
                marketPrice: 12.9,
                picUrl:
                  "https://img.wochu.cn/upload/4d050b1e-2e85-4c9c-aae5-2f7f02c58b46.jpg",
                salableStock: 0,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "8165659f-a455-4790-87bc-eb12bd991d53",
                goodsName: "菠菜虫草花",
                description: "",
                isSplit: 0,
                sn: "WOC000009271",
                price: 9.9,
                marketPrice: 25.0,
                picUrl:
                  "https://img.wochu.cn/upload/a9857202-60be-4004-8a46-a535dfe6b5c7.jpg",
                salableStock: 12,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "8165659f-a455-4790-87bc-eb12bd991d53",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2a8eac7a-9562-4ed3-b236-b346fb482998.png",
                    labelType: 1,
                    createTime: 1557905138
                  }
                ]
              },
              {
                goodsGuid: "784acc8a-dc10-4d4e-9b2c-2a0ba34f22b8",
                goodsName: "糖醋楚乡藕条",
                description: "",
                isSplit: 0,
                sn: "WOC000009563",
                price: 16.9,
                marketPrice: 19.9,
                picUrl:
                  "https://img.wochu.cn/upload/df19b3a9-9e38-4a16-99f8-97fdfc387167.jpg",
                salableStock: 12,
                categoryId: 104,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 106,
            name: "营养汤羹",
            displayIndex: 71,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c1dfcece-ae0d-40a5-8838-9cd4f69899a4.jpg",
                type: "checkicon",
                categoryId: 106
              }
            ],
            goods: [
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
                salableStock: 998,
                categoryId: 106,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
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
                categoryId: 106,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "797b064c-a9b9-4b6b-8c26-3d86391a5676",
                goodsName: "浓香麦仁筒骨汤",
                description: "加入小麦仁的浓浓筒骨汤",
                isSplit: 0,
                sn: "WOC000007881",
                price: 39.9,
                marketPrice: 45.0,
                picUrl:
                  "https://img.wochu.cn/upload/78d628e2-648d-4bff-8224-895532618291.jpg",
                salableStock: 30,
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "b3524957-03f5-4357-9534-fafa39a344fe",
                goodsName: "荠菜鱼片",
                description: "",
                isSplit: 0,
                sn: "WOC000008186",
                price: 29.9,
                marketPrice: 35.0,
                picUrl:
                  "https://img.wochu.cn/upload/f863f042-b4a7-482a-97ad-2be024fb5a45.jpg",
                salableStock: 10,
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "bd9abca8-4c2b-421d-a7bb-50447a34c92d",
                goodsName: "西湖莼菜银鱼羹",
                description: "",
                isSplit: 0,
                sn: "WOC000008343",
                price: 22.9,
                marketPrice: 24.9,
                picUrl:
                  "https://img.wochu.cn/upload/02b92d4c-4ce1-4e43-b22e-1f12bb3d9406.jpg",
                salableStock: 20,
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 90,
                categoryId: 106,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "4c071cf9-54d2-43df-b882-2b5334304385",
                goodsName: "素罗宋汤",
                description: "【5分钟做菜】酸中带甜、甜中飘香，乐歪歪",
                isSplit: 0,
                sn: "WOC000655",
                price: 14.9,
                marketPrice: 18.8,
                picUrl:
                  "https://img.wochu.cn/upload/8a0b2e0e-2472-4c52-94c8-6bf69655a0e7.jpg",
                salableStock: 998,
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: [1],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: [2],
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 106,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 501,
            name: "独家熟制菜",
            displayIndex: 58,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/fe3602d9-35b5-47d1-be90-0cc5fd869781.jpg",
                type: "checkicon",
                categoryId: 501
              }
            ],
            goods: [
              {
                goodsGuid: "cb31b987-9c1f-4398-bc76-196ff7c9129c",
                goodsName: "红焖猪脚",
                description: "10min叮一下，满满胶原蛋白就是你的了",
                isSplit: 0,
                sn: "WOC000004863",
                price: 27.9,
                marketPrice: 27.9,
                picUrl:
                  "https://img.wochu.cn/upload/e7b91f26-dda4-43f5-b8ef-e849fe600350.jpg",
                salableStock: 1873,
                categoryId: 501,
                goodsAttributeImg: [1, 2],
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: [
                  {
                    goodsGuid: "cb31b987-9c1f-4398-bc76-196ff7c9129c",
                    labelName: "",
                    labelUrl:
                      "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5641393d-b806-4d66-aa22-1232c4623d7d.png",
                    labelType: 1,
                    createTime: 1557828836
                  }
                ]
              },
              {
                goodsGuid: "a4a427a8-14e1-43b0-865a-a4de48bb410c",
                goodsName: "红烧小圆蹄450g",
                description: "走在乡间的小路上",
                isSplit: 0,
                sn: "WOC000009663",
                price: 24.9,
                marketPrice: 34.9,
                picUrl:
                  "https://img.wochu.cn/upload/b2ecc42d-cee6-4666-9259-2d6bd1531d21.jpg",
                salableStock: 147,
                categoryId: 501,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 502,
            name: "其他熟制菜",
            displayIndex: 57,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f64943aa-b557-41b4-8cce-58a3953205af.jpg",
                type: "checkicon",
                categoryId: 502
              }
            ],
            goods: [
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
                salableStock: 516,
                categoryId: 502,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1267,
            name: "冷冻菜",
            displayIndex: 56,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://img.wochu.cn/upload/8a1dc5ad-f6d9-4673-9914-a5b1546e9566.jpg",
                type: "checkicon",
                categoryId: 1267
              }
            ],
            goods: [
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
                salableStock: 6,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "f191ffde-263a-4c81-be3c-1ecdd53d28aa",
                goodsName: "糖醋里脊【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008164",
                price: 24.9,
                marketPrice: 26.9,
                picUrl:
                  "https://img.wochu.cn/upload/5191f5ad-b11f-4e69-b6d0-b1b0ec60e001.jpg",
                salableStock: 4,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "523d1a7c-e8c2-4b4e-baaf-6fb017d1cfc5",
                goodsName: "阿婆板栗烧鸡【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008165",
                price: 24.9,
                marketPrice: 29.9,
                picUrl:
                  "https://img.wochu.cn/upload/615be893-4852-49db-8932-89fef4e87892.jpg",
                salableStock: 5,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "1172d829-8533-4878-86a4-de3aad8834c2",
                goodsName: "糟溜鱼片【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008170",
                price: 25.9,
                marketPrice: 25.9,
                picUrl:
                  "https://img.wochu.cn/upload/dc9ec6b7-6c92-45b2-9be8-1cac12333f6f.jpg",
                salableStock: 5,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              },
              {
                goodsGuid: "cc241075-9454-4c91-a402-a1550a302566",
                goodsName: "酸菜鱼【冷冻】",
                description: "",
                isSplit: 0,
                sn: "WOC000008171",
                price: 32.9,
                marketPrice: 32.9,
                picUrl:
                  "https://img.wochu.cn/upload/0832ee03-10a3-437f-a812-7e31706f76b2.jpg",
                salableStock: 5,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
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
                salableStock: 6,
                categoryId: 1267,
                goodsAttributeImg: null,
                preSale: 0,
                currentDate: 1557913657,
                deadLineDate: null,
                goodsLabels: []
              }
            ]
          },
          {
            id: 1250,
            name: "经典套餐",
            displayIndex: 0,
            description: "",
            parentId: 1,
            path: "/1/",
            iconList: [
              {
                url:
                  "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/39d84991-b12a-429a-b45c-36268d6cacfa.jpg",
                type: "checkicon",
                categoryId: 1250
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
