<template>
  <div class="buying">
    <div class="top">
      
        <img src="http://wmall.wochu.cn/h5/tg/img/goback.png" @click="goBack()" alt>
     
      <span>我的团购</span>
      <div></div>
    </div>
    <div class="second">
    <div class="banner">
      <img src="http://wmall.wochu.cn/h5/tg/img/myGroup-banner.png" alt>
    </div>
    <div class="load">
      <ul>
        <router-link
          tag="li"
          v-for="(item,index) in load"
          @click="addClass(index)"
          :class="{load_active:index==current}"
          to=" "
          :key="index"
          > {{item.tit}}
        </router-link>
      </ul>
    </div>
    <div class="shop_list" v-for="(item,index) in shop_list" :key="index">
        <img :src="item.img" alt="">
        <div class="tit1">
            <span>{{item.s}}</span>
            <div class="tg">
               <img :src="item.tg1" alt="">
                <span>{{item.tg2}}</span>
            </div>
            <div class="invite">
                <h3>{{item.h3}}</h3>
                <h4>{{item.h4}}</h4>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gbuying",
  methods: {},
  components: {},
  methods:{
    goBack:function(){
      this.$router.back()
    }
  },
  data() {
    return {
        current:0,
      load: [
        {
          tit: "进行中"
        },
        {
          tit: "已下单"
        },
        {
          tit: "已失效"
        }
      ],
      shop_list:[
          {
              img:"http://hmall.wochu.cn/hotsale/2019-05-07/img/zhiroujiao (5).jpg",
              s:"大娘荠菜鲜笋猪肉饺700g*2劲爆团",
              tg1:"http://wmall.wochu.cn/h5/tg/img/nmicon.png",
              tg2:"匿名用户的团 还差2人 1/3",
              h3:"￥39.9",
              h4:"邀请好友"

              
          },
                {
              img:"http://hmall.wochu.cn/hotsale/2019-05-07/img/zhiroujiao (5).jpg",
              s:"大娘荠菜鲜笋猪肉饺700g*2劲爆团",
              tg1:"http://wmall.wochu.cn/h5/tg/img/nmicon.png",
              tg2:"匿名用户的团 还差2人 1/3",
              h3:"￥39.9",
              h4:"邀请好友"

              
          },
                {
              img:"http://hmall.wochu.cn/hotsale/2019-05-07/img/zhiroujiao (5).jpg",
              s:"大娘荠菜鲜笋猪肉饺700g*2劲爆团",
              tg1:"http://wmall.wochu.cn/h5/tg/img/nmicon.png",
              tg2:"匿名用户的团 还差2人 1/3",
              h3:"￥39.9",
              h4:"邀请好友"

              
          },
                {
              img:"http://hmall.wochu.cn/hotsale/2019-05-07/img/zhiroujiao (5).jpg",
              s:"大娘荠菜鲜笋猪肉饺700g*2劲爆团",
              tg1:"http://wmall.wochu.cn/h5/tg/img/nmicon.png",
              tg2:"匿名用户的团 还差2人 1/3",
              h3:"￥39.9",
              h4:"邀请好友"

              
          }

      ]
    };
  }
};
</script>
<style scoped>
.buying{
    display: flex;
    flex-direction: column
}
.second{
    flex: 1;
    overflow: auto
}

.top {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  background-color: #fff;
  height: 0.88rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.36rem;
  color: #333;
  padding-left: 0.3rem
}
.top span {
  margin-left: -0.6rem;
  font-weight: 300;
}
.banner {
  height: 6rem;
}
.banner img {
  height: 80%;
  width: 100%;
}
.load{
    height: 0.8rem;
    width: 100%;
    background: #fff;
    margin-top: -1.2rem;
   
}
.load ul{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.load ul li{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem
}
.lad_active{
    border-bottom: 1px solid #e17a2e;
    color: #e17a2e;
}
.shop_list{
    height: 2.5rem;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem 
}
.shop_list img{
    width: 35%;
    height: 90%;
    margin-top: 0.1rem
}

.tit1 span{
    display: block;
    font-size: 0.3rem;
    width: 95%;
    color: #000;
    padding-top: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.tg img{
    width: 30%;
    height: 30%;
}
.tg{
    display: flex
}
.tg span{
    margin-top: 0.2rem
}
.invite{
    display: flex;
    justify-content: space-between
}
.invite h3{
    color: #e17a2e;
    font-size: 0.4rem
}
.invite h4{
    display: block;
    background: #f96d16;
    color: #fff;
    font-size: .36rem;
    width: 2rem;
    height: 0.6rem;
    line-height: .6rem;
    text-align: center;
    border-radius: .35rem;
    margin-left: .12rem;
}



</style>