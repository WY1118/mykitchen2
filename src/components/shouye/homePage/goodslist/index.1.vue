<template>
  <!-- 本周新菜      goods-list 8  **-->
  <div class="goods-list">
    <div v-for="(val,i) in goods" :key="i">
      <div v-for="(item,key) in val[0].items" :key="key">
        <div class="goods-list1">
          <div class="imglink">
            <img :src="item.imgUrl" alt>
          </div>
          <!-- 本周新菜list  goods-list 9  -->
        </div>
        <div class="goods-list2">
          <div class="goods-list-con">
            <ul>
              <router-link v-for="(item,key) in val[1].items" :key="key" tag="li" :to="'/goodsinfo?goodsId='+item.source">
                <a href="">
                  <img :src="item.imgUrl" lazy="loaded">
                </a>
                <div class="goods-name ellipsis">
                  <span></span>
                  {{item.goodsName}}
                </div>
                <div class="price-cart">
                  <div class="price-ctl">
                    <div class="market-price">
                      <div>￥{{item.marketPrice}}</div>
                    </div>
                    <div class="price">￥{{item.price}}</div>
                  </div>
                  <div class="addCart">
                    <img src="img/add.png" alt>
                  </div>
                </div>
              </router-link>
              <router-view></router-view>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "goodslist",
  components: {},

  data() {
    return {
      goods: [
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/993194b7-4912-45f6-86c9-00f5206122c3.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=438",
              pos: 1,
              goodsName: "",
              posDes: "每日新菜馆"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndexDes: "每日新菜馆",
          sortIndex: 12
        },
        {
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/b2ecc42d-cee6-4666-9259-2d6bd1531d21.jpg",
              type: "2",
              source: "a4a427a8-14e1-43b0-865a-a4de48bb410c",
              pos: 1,
              goodsName: "红烧小圆蹄450g",
              posDes: "红烧小圆蹄450g",
              description: "走在乡间的小路上",
              price: 29.9,
              unit: "450g",
              marketPrice: 32.8,
              preSale: 0,
              labels: [],
              stock: 456,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/1d319751-a45d-4a93-a5eb-4951c7b79fc8.jpg",
              type: "2",
              source: "93b15560-8012-476c-9466-57c89ff73e04",
              pos: 3,
              goodsName: "杏鲍菇爆炒肥牛",
              posDes: "杏鲍菇爆炒肥牛",
              description: "菇计您很牛",
              price: 26.9,
              unit: "340g",
              marketPrice: 28.9,
              preSale: 0,
              labels: [],
              stock: 4,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/93d29a16-752d-4a65-89e3-beded886c8b2.jpg",
              type: "2",
              source: "da9c611e-8cb1-4c5e-a63f-8a2f4ba40c79",
              pos: 4,
              goodsName: "鹿茸菇素鲍鱼",
              posDes: "鹿茸菇素鲍鱼",
              description: "佛系少女",
              price: 19.9,
              unit: "415g",
              marketPrice: 22.8,
              preSale: 0,
              labels: [],
              stock: 4,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/2e1f0773-ba8b-4efb-9344-a2896cc92c02.jpg",
              type: "2",
              source: "241ecf2e-da4d-432b-82b1-8f4d9a40b451",
              pos: 6,
              goodsName: "干锅孜然土豆片",
              posDes: "干锅孜然土豆片",
              description: "土豆孜然情",
              price: 12.9,
              unit: "483g",
              marketPrice: 16.9,
              preSale: 0,
              labels: [],
              stock: 10,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/c4d52d60-fee5-45f7-99a4-edd3113a1117.jpg",
              type: "2",
              source: "9877f333-349d-4f3f-b8b9-0d92b8778a77",
              pos: 7,
              goodsName: "沙茶焗球生菜",
              posDes: "沙茶焗球生菜",
              description: "",
              price: 11.9,
              unit: "265g",
              marketPrice: 11.9,
              preSale: 0,
              labels: [],
              stock: 2,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/a9857202-60be-4004-8a46-a535dfe6b5c7.jpg",
              type: "2",
              source: "8165659f-a455-4790-87bc-eb12bd991d53",
              pos: 8,
              goodsName: "菠菜虫草花",
              posDes: "菠菜虫草花",
              description: "",
              price: 19.9,
              unit: "330g",
              marketPrice: 25.0,
              preSale: 0,
              labels: [],
              stock: 9,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndexDes: "每日新菜馆",
          sortIndex: 13,
          goodsCount: 6
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/acd2b14f-2561-47ef-b674-59c3fdf9abdf.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=304",
              pos: 1,
              goodsName: "",
              posDes: "我厨优选"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndexDes: "我厨优选",
          sortIndex: 14
        },
        {
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/df034fb7-4206-40b9-8be6-7cb7cd5250ca.jpg",
              type: "2",
              source: "eba26bfb-7101-44fc-8b10-b5096ab6fb46",
              pos: 1,
              goodsName: "我厨优选猪瘦肉片500g",
              posDes: "我厨优选猪瘦肉片500g",
              description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
              price: 17.5,
              unit: "500g",
              marketPrice: 29.9,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "eba26bfb-7101-44fc-8b10-b5096ab6fb46",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d41699b-bb3c-4eca-8ea4-63497237e15b.png",
                  labelType: 1,
                  createTime: 1555914850
                }
              ],
              stock: 7,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7abadbe3-46c1-47fa-96d4-28c228889c40.jpg",
              type: "2",
              source: "c439261d-5412-4f0a-89c0-bb1a563252ca",
              pos: 2,
              goodsName: "我厨优选猪大排400g",
              posDes: "我厨优选猪大排400g",
              description: "肉质厚实，细嫩Q弹",
              price: 15.9,
              unit: "400g",
              marketPrice: 27.9,
              preSale: 0,
              labels: [],
              stock: 21,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b634e2a5-05f4-43b3-a00e-68fe1e6e67ad.jpg",
              type: "2",
              source: "669f19bf-f208-4f64-ad27-48203637446f",
              pos: 3,
              goodsName: "我厨优选猪里脊肉400g",
              posDes: "我厨优选猪里脊肉400g",
              description: "精瘦无骨，经典食材，糖醋小炒都好吃",
              price: 16.9,
              unit: "400g",
              marketPrice: 25.9,
              preSale: 0,
              labels: [],
              stock: 16,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/86c3cdd5-c06e-410b-9e11-070693aaeb2c.jpg",
              type: "2",
              source: "dbf4c991-0502-4568-b0e0-2ea6354d092c",
              pos: 4,
              goodsName: "我厨优选小排400g",
              posDes: "我厨优选小排400g",
              description: "不腥不臊，厨艺小白也能做出鲜滋味",
              price: 14.9,
              unit: "400g",
              marketPrice: 24.9,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "dbf4c991-0502-4568-b0e0-2ea6354d092c",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/62a796ec-e949-43cc-995e-d4ecd9059ef9.png",
                  labelType: 1,
                  createTime: 1555914811
                }
              ],
              stock: 147,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70e3f463-bfbd-4e0f-9a78-5a1919b9b841.jpg",
              type: "2",
              source: "251b3e38-0a89-45c5-8dbf-35eab1327257",
              pos: 5,
              goodsName: "我厨优选新鲜牛后腿肉500g",
              posDes: "我厨优选新鲜牛后腿肉500g",
              description: "草饲纯瘦肉，炒、酱、炖皆美味",
              price: 42.9,
              unit: "500g",
              marketPrice: 43.9,
              preSale: 0,
              labels: [],
              stock: 8,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9b0e72c4-6f65-4af1-9d99-d48d2451b679.jpg",
              type: "2",
              source: "e20d734f-7c97-44e4-b20b-4bafba0a2a5a",
              pos: 6,
              goodsName: "我厨优选猪五花肉片400g",
              posDes: "我厨优选猪五花肉片400g",
              description: "瘦肉多肥肉少，又香又嫩根本停不下",
              price: 16.9,
              unit: "400g",
              marketPrice: 23.9,
              preSale: 0,
              labels: [],
              stock: 17,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndexDes: "我厨优选",
          sortIndex: 15
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/17d4acb2-570f-48f6-acf4-9f5b047646d7.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=414",
              pos: 1,
              goodsName: "",
              posDes: "四时菜蔬"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 16,
          sortIndexDes: "四时菜蔬"
        },
        {
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/9973b5ee-8068-4b7d-8ce8-d838668667a0.jpg",
              type: "2",
              source: "9e9c2e6b-63e9-4729-9344-c6a4692646f5",
              pos: 1,
              goodsName: "清美内酯豆腐400g",
              posDes: "清美内酯豆腐400g",
              description: "质地更加细嫩，特别适合做豆腐煲！",
              price: 1.9,
              unit: "400g",
              marketPrice: 3.9,
              preSale: 0,
              labels: [],
              stock: 33,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/8a495371-c855-4844-a02b-441e66b5e698.jpg",
              type: "2",
              source: "40b956e7-daeb-4f22-bc0b-65d6962a0ef8",
              pos: 2,
              goodsName: "鲜香菇150g",
              posDes: "鲜香菇150g",
              description: "新鲜采摘，洗净即烹",
              price: 5.9,
              unit: "150g",
              marketPrice: 6.9,
              preSale: 0,
              labels: [],
              stock: 7,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0324178e-b55a-48d7-ad93-e5ca21d94664.jpg",
              type: "2",
              source: "bde5301b-2ae8-46f6-848f-ac114cdcef55",
              pos: 3,
              goodsName: "杏鲍菇（200g）",
              posDes: "杏鲍菇（200g）",
              description: "肉质肥厚脆嫩，淡淡杏仁香",
              price: 3.9,
              unit: "200g",
              marketPrice: 4.9,
              preSale: 0,
              labels: [],
              stock: 21,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2d78ed05-c88f-4061-890b-170a1cf4e609.jpg",
              type: "2",
              source: "06a12cfe-910b-4f7e-a902-48bc6afddb22",
              pos: 4,
              goodsName: "清美厚百页170g",
              posDes: "清美厚百页170g",
              description: "上海老牌子，品质有保障",
              price: 3.9,
              unit: "170g",
              marketPrice: 4.5,
              preSale: 0,
              labels: [],
              stock: 13,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/844e010d-97ca-4aa8-a4ed-5759f54b5ef6.jpg",
              type: "2",
              source: "bfd1c448-6243-4c92-bb0b-05ece1f36e98",
              pos: 5,
              goodsName: "清美特浓豆浆395ml",
              posDes: "清美特浓豆浆395ml",
              description: "清美豆浆，早餐必入！",
              price: 1.5,
              unit: "395ml",
              marketPrice: 1.9,
              preSale: 0,
              labels: [],
              stock: 22,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/4cb89fcc-4b6d-4caa-8234-a135e0367ea9.jpg",
              type: "2",
              source: "a95d9156-d381-4bf5-bdd9-ce933c8e9fb4",
              pos: 6,
              goodsName: "优选西红柿（650g以上）",
              posDes: "优选西红柿（650g以上）",
              description: "诱人的红，美味不加价",
              price: 10.9,
              unit: "650g",
              marketPrice: 16.9,
              preSale: 0,
              labels: [],
              stock: 30,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 17,
          sortIndexDes: "四时菜蔬"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/645c32d8-2843-4299-958e-0f837c2cbc47.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=441",
              pos: 1,
              goodsName: "",
              posDes: "新鲜水果"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 18,
          sortIndexDes: "新鲜水果"
        },
        {
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/9fd088e9-ef2b-44c8-a650-1a0f272c773f.jpg",
              type: "2",
              source: "8317aa1a-680e-40a6-8ff0-6c4fbb7d7a8d",
              pos: 1,
              goodsName: "精选小台农芒果400g",
              posDes: "精选小台农芒果400g",
              description: "",
              price: 12.9,
              unit: "400g",
              marketPrice: 19.9,
              preSale: 0,
              labels: [],
              stock: 10,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/a47725f7-4bbe-4e81-b49b-58852214f853.jpg",
              type: "2",
              source: "4ad64a53-7a44-4db1-ac83-917d4fe888fd",
              pos: 3,
              goodsName: "新西兰佳沛金奇异果6粒/盒",
              posDes: "新西兰佳沛金奇异果6粒/盒",
              description:
                "新西兰产季的猕猴桃已经转到意大利产区，同为佳沛品牌公司出品，请用户放心食用。",
              price: 69.9,
              unit: "6粒",
              marketPrice: 69.9,
              preSale: 0,
              labels: [],
              stock: 5,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c5914681-97a2-4795-ae0d-dc4de0516a44.jpg",
              type: "2",
              source: "a60d605c-6216-4477-877a-9647810ccfbc",
              pos: 4,
              goodsName: "越南红心火龙果2粒装(小果350g以上)",
              posDes: "越南红心火龙果2粒装(小果350g以上)",
              description: "玫瑰色鲜红果肉，比白心火龙果更甜",
              price: 19.9,
              unit: "2粒",
              marketPrice: 26.9,
              preSale: 0,
              labels: [],
              stock: 7,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/f8a10ec2-a724-4df6-98ef-97404f04ce9d.jpg",
              type: "2",
              source: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
              pos: 5,
              goodsName: "菲律宾进口菠萝1粒装(单果1000g以上)",
              posDes: "菲律宾进口菠萝1粒装(单果1000g以上)",
              description: "",
              price: 13.9,
              unit: "1粒",
              marketPrice: 23.9,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "a96b1f39-9ee2-43b8-ab14-7ab74f51cf14",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7323e461-6e1a-4e9c-b7e0-aa560f337f12.png",
                  labelType: 1,
                  createTime: 1556075681
                }
              ],
              stock: 4,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e7233f5e-a3bf-45df-8e40-e9fce2927100.jpg",
              type: "2",
              source: "2e088fba-a6c0-4e0c-94e3-365ec1cf858f",
              pos: 7,
              goodsName: "千禧圣女果500g",
              posDes: "千禧圣女果500g",
              description: "果型圆滑，皮薄肉嫩，汁水丰沛，酸甜适口",
              price: 12.9,
              unit: "500g",
              marketPrice: 15.9,
              preSale: 0,
              labels: [],
              stock: 5,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/925f1c1f-1a46-4900-8f3c-6e449c9ae386.jpg",
              type: "2",
              source: "96f0856d-c10e-45c0-a2e6-bcaf970428f0",
              pos: 8,
              goodsName: "比利时青啤梨4粒装",
              posDes: "比利时青啤梨4粒装",
              description: "",
              price: 25.9,
              unit: "4粒",
              marketPrice: 25.9,
              preSale: 0,
              labels: [],
              stock: 2,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 19,
          sortIndexDes: "新鲜水果"
        }],
        [{
          items: [
            {
              imgUrl:
                "http://img.wochu.cn/upload/9cd4fcad-a57f-48a9-94fd-487fef4f8421.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=161",
              pos: 1,
              goodsName: "",
              posDes: "过瘾肉类"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 20,
          sortIndexDes: "过瘾肉类"
        },
        {
          items: [
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/70ac8612-9502-4d3b-a57a-baf32333868c.jpg",
              type: "2",
              source: "0da48115-b473-4e6f-af33-8370ede6230b",
              pos: 1,
              goodsName: "爱森精肉片400g",
              posDes: "爱森精肉片400g",
              description: "若36小时内未食用此商品，请放入冰箱冷冻保存",
              price: 22.9,
              unit: "400g",
              marketPrice: 29.9,
              preSale: 0,
              labels: [],
              stock: 11,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/2fef954a-e573-4d0b-8b7c-dee556e5102c.jpg",
              type: "2",
              source: "ac5798c7-26eb-4e7b-b0c0-a193e3e9688f",
              pos: 2,
              goodsName: "凤祥食品香辣翅中500g",
              posDes: "凤祥食品香辣翅中500g",
              description: "外酥里嫩，香味浓郁",
              price: 11.9,
              unit: "500g",
              marketPrice: 15.9,
              preSale: 0,
              labels: [],
              stock: 318,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a031ad2d-6b30-42ac-a34a-507d1af5f6f8.jpg",
              type: "2",
              source: "5877c3a8-b344-4843-b83b-6c6c243665b3",
              pos: 3,
              goodsName: "爱森蹄膀530g",
              posDes: "爱森蹄膀530g",
              description: "满满胶原蛋白，连面膜钱都省了！红烧后连皮都好吃",
              price: 19.9,
              unit: "530g",
              marketPrice: 28.9,
              preSale: 0,
              labels: [],
              stock: 12,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/4afe1cff-6ec3-4c78-9a52-b784be02555d.jpg",
              type: "2",
              source: "de39dbba-65ac-46c5-895a-bf16a92f0e3e",
              pos: 4,
              goodsName: "原膳澳洲黑标原切雪花牛仔骨230g",
              posDes: "原膳澳洲黑标原切雪花牛仔骨230g",
              description: "带骨“小鲜肉”，鲜嫩多汁",
              price: 24.8,
              unit: "230g",
              marketPrice: 32.5,
              preSale: 0,
              labels: [],
              stock: 120,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/d524bf8c-7fae-484c-aa3a-d817857ec956.jpg",
              type: "2",
              source: "9bbccce3-32c1-41e9-abb5-6fcaa8f52407",
              pos: 5,
              goodsName: "星享米其黑安格斯眼肉心牛排(M2)200g",
              posDes: "星享米其黑安格斯眼肉心牛排(M2)200g",
              description: "",
              price: 59.0,
              unit: "200g",
              marketPrice: 78.8,
              preSale: 0,
              labels: [],
              stock: 318,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/512e6296-c49c-4540-8589-5b203704b465.jpg",
              type: "2",
              source: "3bc9c6d6-6faa-49c5-a4df-f3aaf09a91c6",
              pos: 6,
              goodsName: "原膳丹麦皇冠天然谷饲猪尾500g",
              posDes: "原膳丹麦皇冠天然谷饲猪尾500g",
              description: "Q弹鲜香，切段处理，料理省心",
              price: 39.9,
              unit: "500g",
              marketPrice: 49.9,
              preSale: 0,
              labels: [],
              stock: 243,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 21,
          sortIndexDes: "过瘾肉类"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/6b9bb40f-f5fe-4bfb-bb7b-1f19ed96214e.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=172",
              pos: 1,
              goodsName: "",
              posDes: "禽蛋"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 22,
          sortIndexDes: "禽蛋"
        },
        {
          items: [
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/335519d6-4928-469a-a279-39322e5b0faf.jpg",
              type: "2",
              source: "803222e9-b4bb-433f-bbbf-a75e03626910",
              pos: 1,
              goodsName: "老上海糟香鸡",
              posDes: "老上海糟香鸡",
              description: "【5分钟做菜】“赞得不得了，很嫩”乃评论原话",
              price: 18.8,
              unit: "500g",
              marketPrice: 29.9,
              preSale: 0,
              labels: [],
              stock: 51,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/395326e4-4b91-4f77-b45a-5df265f405c7.jpg",
              type: "2",
              source: "5185ca36-0436-4df0-87b9-6c1132277550",
              pos: 2,
              goodsName: "狼山鸡老母鸡（ 鸡龄540天2.8-3斤)1.4kg",
              posDes: "狼山鸡老母鸡（ 鸡龄540天2.8-3斤)1.4kg",
              description: "",
              price: 188.0,
              unit: "1.4kg",
              marketPrice: 188.0,
              preSale: 0,
              labels: [],
              stock: 43,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7efb8f27-86b9-487f-86e6-e23ac2d63772.jpg",
              type: "2",
              source: "dd3cad52-05cc-43c5-b3f8-64d8fcc53284",
              pos: 5,
              goodsName: "崇明麻鸭1100g",
              posDes: "崇明麻鸭1100g",
              description: "正宗崇明农家散养麻鸭，桃林自足觅食",
              price: 49.0,
              unit: "1100g",
              marketPrice: 59.9,
              preSale: 0,
              labels: [],
              stock: 51,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/48324153-ee99-4cda-aab1-d0342ecaacbd.jpg",
              type: "2",
              source: "5f7a0420-4ce8-44d4-a112-ca1306d9e1ff",
              pos: 6,
              goodsName: "徐鸿飞无添加营养鸡蛋10枚425g",
              posDes: "徐鸿飞无添加营养鸡蛋10枚425g",
              description: "",
              price: 19.9,
              unit: "425g",
              marketPrice: 29.9,
              preSale: 0,
              labels: [],
              stock: 78,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1465b4fb-febd-463f-b8e0-4f21a3e8ee53.jpg",
              type: "2",
              source: "4edd9dae-9f97-433d-bcaa-57de2e60ce3a",
              pos: 7,
              goodsName: "崇明一年半龄老母鸡1000g",
              posDes: "崇明一年半龄老母鸡1000g",
              description: "崇明本地鸡，500天以上林间散养老母鸡",
              price: 69.9,
              unit: "1000g",
              marketPrice: 79.9,
              preSale: 0,
              labels: [],
              stock: 42,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/15f835cb-c9a1-4a8f-b7ae-d2cecfff68ef.jpg",
              type: "2",
              source: "9e62f105-5908-4f26-a183-dcfcf166bb77",
              pos: 8,
              goodsName: "百事盛农牧臻致盐焗鸡750g",
              posDes: "百事盛农牧臻致盐焗鸡750g",
              description: "",
              price: 59.9,
              unit: "750g",
              marketPrice: 89.9,
              preSale: 0,
              labels: [],
              stock: 252,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 23,
          sortIndexDes: "禽蛋"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/36c6089e-6c1f-4cf2-8ac9-12362fbb6358.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=165",
              pos: 1,
              goodsName: "",
              posDes: "水中鲜物"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 24,
          sortIndexDes: "水中鲜物"
        },
        {
          items: [
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/357ff77e-0a73-470e-9cfd-8d0fddbdd3ef.jpg",
              type: "2",
              source: "fb500770-7b73-4abf-a5a5-f288a8ab1e2c",
              pos: 2,
              goodsName: "舟山冷鲜黄立鲳（金鲳）一条装250g以上",
              posDes: "舟山冷鲜黄立鲳（金鲳）一条装250g以上",
              description: "去腮净膛，刺少肉嫩，清蒸8分钟，大菜就上桌",
              price: 19.9,
              unit: "250g",
              marketPrice: 36.9,
              preSale: 0,
              labels: [],
              stock: 76,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1250eced-962a-49be-8f81-c740766db1b1.jpg",
              type: "2",
              source: "4372a0f0-9ebe-4d22-9c97-f15015215959",
              pos: 3,
              goodsName: "冰鲜深海放养黄鱼200-300g",
              posDes: "冰鲜深海放养黄鱼200-300g",
              description: "自然野生“小鲜肉”，冰鲜非冷冻，净膛后净含量140g以上",
              price: 19.9,
              unit: "200-300g",
              marketPrice: 35.9,
              preSale: 0,
              labels: [],
              stock: 66,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/1af43016-92ac-4557-9a96-555c1c019e31.jpg",
              type: "2",
              source: "39aaa4b3-4f96-4b8c-bce0-6771cce8d706",
              pos: 5,
              goodsName: "烧烤青花鱼80—100g一条",
              posDes: "烧烤青花鱼80—100g一条",
              description: "",
              price: 19.9,
              unit: "80—100g",
              marketPrice: 22.8,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "39aaa4b3-4f96-4b8c-bce0-6771cce8d706",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/bc3ecd38-79ab-4648-8f74-a7d454b08e5e.png",
                  labelType: 1,
                  createTime: 1555587191
                }
              ],
              stock: 681,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/381dca0e-f255-427f-9595-4d5334f82097.jpg",
              type: "2",
              source: "c3cd940b-e60f-4cf7-b4ce-bb3f91ec684d",
              pos: 6,
              goodsName: "新鲜活杀昂刺鱼两条装240g",
              posDes: "新鲜活杀昂刺鱼两条装240g",
              description:
                "个头小巧鱼刺少，炖汤红烧味道好，宰杀后净含量为宰杀前的85%",
              price: 29.9,
              unit: "240g",
              marketPrice: 36.9,
              preSale: 0,
              labels: [],
              stock: 8,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/733eab61-a2c4-4f4e-9180-9ef43678993a.jpg",
              type: "2",
              source: "72096f6e-a482-409e-a916-60d5fa7849d4",
              pos: 7,
              goodsName: "免浆河虾仁200g",
              posDes: "免浆河虾仁200g",
              description:
                "去壳去肠，不用上浆，嫩如现剥，毛重200g，虾仁净重185g",
              price: 39.9,
              unit: "200g",
              marketPrice: 45.8,
              preSale: 0,
              labels: [],
              stock: 1119,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a38d7206-d2f3-4c2d-a10d-a06a690e5c2e.jpg",
              type: "2",
              source: "5af9cfe7-fb31-41ba-915c-5d2cf2f73a00",
              pos: 11,
              goodsName: "花蛤500g",
              posDes: "花蛤500g",
              description: "",
              price: 9.9,
              unit: "500g",
              marketPrice: 16.9,
              preSale: 0,
              labels: [],
              stock: 342,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 25,
          sortIndexDes: "水中鲜物"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/15ea2e5a-e733-409f-a375-e6e3d7a4ed7a.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=119",
              pos: 1,
              goodsName: "",
              posDes: "乳饮西点"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 26,
          sortIndexDes: "乳饮西点"
        },
        {
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/b325ee1d-1e96-4fa8-adfc-fbe9c46bbd58.jpg",
              type: "2",
              source: "9f288ccf-4ee0-4701-9f98-16f8646f5db2",
              pos: 1,
              goodsName: "贝花子大麦若叶青汁豆奶180ml*16包",
              posDes: "贝花子大麦若叶青汁豆奶180ml*16包",
              description: "新近网红,你一定会喝完最后一滴",
              price: 39.9,
              unit: "1箱",
              marketPrice: 56.9,
              preSale: 0,
              labels: [],
              stock: 6,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/4d786e2a-f778-4e95-a174-a45914f28ad8.jpg",
              type: "2",
              source: "decfa79f-afb1-4d39-b030-9d3e9c451291",
              pos: 5,
              goodsName: "蒙牛纯牛奶1L装",
              posDes: "蒙牛纯牛奶1L装",
              description: "",
              price: 10.9,
              unit: "1L",
              marketPrice: 12.9,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "decfa79f-afb1-4d39-b030-9d3e9c451291",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/00ae65fd-9d82-416e-8bee-52f9b1b914f5.png",
                  labelType: 1,
                  createTime: 1556076765
                }
              ],
              stock: 33,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/90580859-13d0-4c10-bd19-c3bb4f642105.jpg",
              type: "2",
              source: "a4387044-79b9-4568-920e-9733fffc5d4c",
              pos: 6,
              goodsName: "新疆网红酸奶牛奶天润低温浓缩 冰淇淋化了180g*12/箱",
              posDes: "新疆网红酸奶牛奶天润低温浓缩 冰淇淋化了180g*12/箱",
              description: "",
              price: 58.0,
              unit: "1箱",
              marketPrice: 78.9,
              preSale: 0,
              labels: [],
              stock: 60,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/243c1858-e54f-49d5-9fb0-5b222fef08a4.jpg",
              type: "2",
              source: "6568ed99-aec0-4b5b-bad7-04bc942b6882",
              pos: 7,
              goodsName: "百威啤酒330ml",
              posDes: "百威啤酒330ml",
              description: "",
              price: 4.9,
              unit: "330ML",
              marketPrice: 6.5,
              preSale: 0,
              labels: [],
              stock: 120,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/73e40d4f-b1f1-4597-8ba3-540d140a9e9a.jpg",
              type: "2",
              source: "62a87c67-8583-403c-9b9f-c8ba45362fb0",
              pos: 9,
              goodsName: "光明莫斯利安钻石包原味酸牛奶200g*12盒/提",
              posDes: "光明莫斯利安钻石包原味酸牛奶200g*12盒/提",
              description: "人人都知道的酸奶，无限回购",
              price: 58.8,
              unit: "12盒",
              marketPrice: 69.9,
              preSale: 0,
              labels: [],
              stock: 45,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b9355369-5e32-41f1-8da9-55940f4a5916.jpg",
              type: "2",
              source: "2712ff34-bd9c-4d72-ada7-e24a39022d7d",
              pos: 10,
              goodsName: "蒙牛纯甄酸牛奶200g12瓶装",
              posDes: "蒙牛纯甄酸牛奶200g12瓶装",
              description: "好酸奶  不添加",
              price: 55.9,
              unit: "2400g",
              marketPrice: 66.0,
              preSale: 0,
              labels: [],
              stock: 63,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 27,
          sortIndexDes: "乳饮西点"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/3965e816-2d1f-4f85-95fa-476d6a27c253.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=291",
              pos: 1,
              goodsName: "",
              posDes: "点心速食"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 28,
          sortIndexDes: "点心速食"
        },
        {
          items: [
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/aa67e2d6-0a8c-4945-b271-95b977ce7aca.jpg",
              type: "2",
              source: "f545b70d-68af-4523-8ca1-ad87ab61b028",
              pos: 2,
              goodsName: "桂冠香糯小圆子250g",
              posDes: "桂冠香糯小圆子250g",
              description: "品牌速食，香甜软糯不黏牙。",
              price: 5.5,
              unit: "250g",
              marketPrice: 7.9,
              preSale: 0,
              labels: [],
              stock: 45,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/be055ee6-fe08-4ad5-9b15-2ad29499b588.jpg",
              type: "2",
              source: "b8ca4391-cdf4-48eb-8ae5-189461f65836",
              pos: 3,
              goodsName: "南翔小笼包 180g",
              posDes: "南翔小笼包 180g",
              description: "100年历史的上海名小吃，面皮半透明，一咬一包汤",
              price: 9.9,
              unit: "10只",
              marketPrice: 9.9,
              preSale: 0,
              labels: [],
              stock: 751,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/ae7822f6-f166-48ef-9b85-1d6c02361aff.jpg",
              type: "2",
              source: "dee6b52f-3151-4660-85ee-d31299fbc4d2",
              pos: 4,
              goodsName: "正大 荠菜猪肉蒸饺 460g（活动）",
              posDes: "正大 荠菜猪肉蒸饺 460g（活动）",
              description: "保质期至6/15，介意者慎拍",
              price: 24.9,
              unit: "460g",
              marketPrice: 25.8,
              preSale: 0,
              labels: [
                {
                  goodsGuid: "dee6b52f-3151-4660-85ee-d31299fbc4d2",
                  labelName: "",
                  labelUrl:
                    "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d5908cf5-85fe-49a6-924d-bbf8f3d3e6e3.png",
                  labelType: 1,
                  createTime: 1555645131
                }
              ],
              stock: 147,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/12d31572-7e5a-4d5f-9711-e6a05ca1e70e.jpg",
              type: "2",
              source: "43e80964-1eb5-4e59-a1f7-acd2f2fda16b",
              pos: 5,
              goodsName: "三全韭菜鸡蛋素水饺450g",
              posDes: "三全韭菜鸡蛋素水饺450g",
              description: "",
              price: 12.8,
              unit: "450g袋/袋",
              marketPrice: 18.9,
              preSale: 0,
              labels: [],
              stock: 276,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/30732633-11d3-4c44-8d60-3cd01ba9d5c6.jpg",
              type: "2",
              source: "a26e1ae9-08ea-4d34-a8c8-f4aa2509a2e0",
              pos: 6,
              goodsName: "桂冠芝麻汤圆200g",
              posDes: "桂冠芝麻汤圆200g",
              description: "二十年老品牌，芝麻馅香浓。",
              price: 8.8,
              unit: "200g",
              marketPrice: 10.9,
              preSale: 0,
              labels: [],
              stock: 78,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/2dfe9618-9fc6-4fe1-afde-7828b6180d56.jpg",
              type: "2",
              source: "3ecfc0af-c7c7-4704-b8bc-a8e676795d97",
              pos: 8,
              goodsName: "红糖馒头850g",
              posDes: "红糖馒头850g",
              description: "甜而不腻，古早的味道。",
              price: 15.9,
              unit: "10只",
              marketPrice: 16.9,
              preSale: 0,
              labels: [],
              stock: 156,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 29,
          sortIndexDes: "点心速食"
        }],
        [{
          items: [
            {
              imgUrl:
                "https://img.wochu.cn/upload/3fd97d50-18b6-4572-8c5b-8b95a6c2f646.jpg",
              type: "1",
              source:
                "https://wmall.wochu.cn/h5/activityTemplate/html/activityPagew.html?activityId=120",
              pos: 1,
              goodsName: "",
              posDes: "粮油副食"
            }
          ],
          templateType: "4",
          onlyNewCustomer: 0,
          sortIndex: 30,
          sortIndexDes: "粮油副食"
        },
        {
          items: [
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/a0b34b02-6779-4433-85dd-2e1056914dc8.jpg",
              type: "2",
              source: "0558fee7-83d0-42f3-a9a0-f49780b79161",
              pos: 1,
              goodsName: "粮管家乳玉香大米2500g",
              posDes: "粮管家乳玉香大米2500g",
              description:
                "生米似乳似玉，淡淡清香；米饭香糯可口，晶莹润泽；真空包装",
              price: 25.9,
              unit: "2500g",
              marketPrice: 29.9,
              preSale: 0,
              labels: [],
              stock: 225,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/4636a91e-7a32-4552-beed-3e889defed02.jpg",
              type: "2",
              source: "c97f5d48-8b3e-4cec-acff-a4c5bda9de19",
              pos: 5,
              goodsName: "咪你口袋小黄米400g",
              posDes: "咪你口袋小黄米400g",
              description: "",
              price: 11.8,
              unit: "400g",
              marketPrice: 13.8,
              preSale: 0,
              labels: [],
              stock: 37,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/60cb9711-9ef6-48da-a350-4cc5acca02d7.jpg",
              type: "2",
              source: "edc143fa-cf67-41e8-8bbe-e720527666b3",
              pos: 6,
              goodsName: "粮管家五常稻花香5000g",
              posDes: "粮管家五常稻花香5000g",
              description: "真空包装",
              price: 69.9,
              unit: "5kg",
              marketPrice: 85.9,
              preSale: 0,
              labels: [],
              stock: 57,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d40936a-3ac2-450d-8936-08a969187ad4.jpg",
              type: "2",
              source: "61516915-3265-4e05-aba2-3e999bd5775f",
              pos: 7,
              goodsName: "玉棠白砂糖1kg",
              posDes: "玉棠白砂糖1.05kg",
              description: "",
              price: 13.8,
              unit: "1kg",
              marketPrice: 15.8,
              preSale: 0,
              labels: [],
              stock: 522,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://img.wochu.cn/upload/32218d4a-ae96-47bd-9b5b-6931b065a197.jpg",
              type: "2",
              source: "ee6e00a3-80aa-4280-b70c-4cbfb861d4cf",
              pos: 8,
              goodsName: "光明谷锦葵花籽油5L",
              posDes: "光明谷锦葵花籽油5L",
              description: "非转基因葵花籽油,新包装发货",
              price: 59.0,
              unit: "5L",
              marketPrice: 79.0,
              preSale: 0,
              labels: [],
              stock: 21,
              offShelve: 0,
              onSale: 1
            },
            {
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c6b51268-2ceb-4c04-80a5-85740fe93a7c.jpg",
              type: "2",
              source: "355eacfa-bf96-4417-ad82-a0986b51faa1",
              pos: 9,
              goodsName: "六月鲜特级酱油500ml",
              posDes: "六月鲜特级酱油500ml",
              description: "",
              price: 12.8,
              unit: "500ML",
              marketPrice: 14.9,
              preSale: 0,
              labels: [],
              stock: 9,
              offShelve: 0,
              onSale: 1
            }
          ],
          templateType: "7",
          onlyNewCustomer: 0,
          sortIndex: 31,
          sortIndexDes: "粮油副食"
        }]
      ],
      arr:[
        []
      ]
    };
  },
    created() {
    this.swiperInit()
  },
  computed: {
      ...Vuex.mapState({
      goods:state=>state.shouye.homegoods
    })
  },
  methods: {
     ...Vuex.mapActions({
      getGoods:"shouye/gethomeGoods"
    }),
  },
  mounted() {
  }
};
</script>
<style>
/* 限时特惠 imglink1/imglink12 /  goods-list 4/5  */
.goods-list .imglink img {
  width: 7.5rem;
  height: 3.04rem;
  margin-bottom: 0.08rem;
}

.goods-list .imglink {
  background: #f8f8f8;
}
/* <!-- 本周新菜list  goods-list 9  --> */
.goods-list .goods-list-con {
  height: 7.68rem;
  padding: 0 0.2rem 0.2rem 0.28rem;
}
.goods-list .goods-list-con ul li {
  width: 2.26rem;
  height: 3.46rem;
  margin-top: 0.28rem;
  margin-right: 0.08rem;
  float: left;
}
a {
  text-decoration: none;
  color: #000;
  display: inline-block;
}
.goods-list .goods-list-con ul li a img {
  width: 2.26rem;
  height: 2.26rem;
}
.goods-list .goods-list-con ul li .goods-name {
  width: 100%;
  height: 0.58rem;
  font-size: 0.26rem;
  line-height: 0.25rem;
  padding-top: 0.08rem;
  color: #333;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list .goods-list-con ul li .goods-name span {
  color: #6eb042;
  font-size: 0.26rem;
  height: 0.32rem;
  font-weight: 700;
  vertical-align: baseline;
}
.goods-list .goods-list-con ul li .price-cart {
  height: 0.64rem;
  margin-top: 0.08rem;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl {
  height: 0.64rem;
  width: 1.6rem;
  float: left;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl .market-price {
  height: 0.24rem;
  font-size: 0.24rem;
  color: #999;
  text-decoration: line-through;
  line-height: 0.24rem;
  height: auto;
}
.goods-list .goods-list-con ul li .price-cart .price-ctl .price {
  height: 0.3rem;
  font-size: 0.3rem;
  color: #f96d16;
  line-height: 0.3rem;
  margin-top: 0.1rem;
}
.goods-list .goods-list-con ul li .price-cart .addCart {
  width: 0.66rem;
  height: 0.54rem;
  line-height: 0.54rem;
  float: right;
  text-align: center;
}
.goods-list .goods-list-con ul li .price-cart .addCart img {
  width: 0.48rem !important;
  height: 0.48rem !important;
  float: left;
}
</style>