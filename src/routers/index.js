import Vue from 'vue'
import Router from 'vue-router'
import shouye from "./shouye/index.js";
import fenlei from "./fenlei/index.js";
import shopcar from "./shopcar/index.js";
import mine from "./mine/index.js";
import goodsinfo from "./shouye/goodsInfo/index.js";

import buyone from "./shouye/nav/buyone.js";
import cleanvegetables from "./shouye/nav/cleanvegetables.js";
import newproduct from "./shouye/nav/newproduct.js";
import onegroup from "./shouye/nav/onegroup.js";
import redpacket from "./shouye/nav/redpacket.js";
import reduce20 from "./shouye/nav/reduce20.js";
import returnmoney from "./shouye/nav/returnmoney.js";
import setmeal from "./shouye/nav/setmeal.js";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/shouye"
    },
    shouye,
    fenlei,
    shopcar,
    mine,
    goodsinfo,
    // nav
    buyone,
    cleanvegetables,
    newproduct,
    onegroup,
    redpacket,
    reduce20,
    returnmoney,
    setmeal,
    {
      path:"**",
      redirect:"/shouye"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
