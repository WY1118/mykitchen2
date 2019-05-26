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
import help from "./mine/menu/help.js";
import Login from "./mine/login/login";
import menu from "./mine/menu/menu.js";
import Gbuying from "./mine/Gbuying/Gbuying.js";
import Register from "./mine/register/register.js";
// 跳二级
import Optimization from "./fenlei/reclassify/Optimization.js";
import Dishes from "./fenlei/reclassify/Dishes.js"
import Cleanvegetable from "./fenlei/reclassify/Cleanvegetable.js"
import Children from "./fenlei/reclassify/Children.js"
import Vegetables from "./fenlei/reclassify/Vegetables.js"
import Fruits from "./fenlei/reclassify/Fruits.js"
import Egg from "./fenlei/reclassify/Egg.js"
import Seafood from "./fenlei/reclassify/Seafood.js"
import Point from "./fenlei/reclassify/Point.js"
import Snack from "./fenlei/reclassify/Snack.js"
import Staplefood from "./fenlei/reclassify/Staplefood.js"

import NetWork from "./fenlei/recommnd/NetWork.js"


// import reclassify from "./fenlei/reclassify/index.js";



import menu from "./mine/menu/menu.js";
import Gbuying from "./mine/Gbuying/Gbuying.js";
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
    
    
    help,
    menu,
    Gbuying,
    Login,
    
    Optimization,
    Dishes,
    Cleanvegetable,
    Children,
    Vegetables,
    Fruits,
    Egg,
    Seafood,
    Point,
    Snack,
    Staplefood,
    NetWork,
    Register,
 
    
    
      


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