<template>
  <div>
    <div class="top">
      <div class="tit">
        <div class="title">
          <span class="fl"></span>
          <!-- <p>{{data[0].name}}</p> -->
          <p>我厨精选</p>
          <span class="fr"></span>
        </div>
      </div>
      <ul>
        <router-link tag="li" v-for="(item,index) in this.arr" :key="index" :to="'/netWork'">
          <a href="javascript:;">
            <img :src="'http://39.106.67.233:100/'+item.smallGoodsTypePic" alt>
            <p>{{item.smallGoodsTypeName}}</p>
          </a>
        </router-link >
      </ul>
    </div>

    <div class="fgx"></div>

    <div class="top">
      <div class="tit">
        <div class="title">
          <span class="fl"></span>
          <p>品牌专区</p>
          <span class="fr"></span>
        </div>
      </div>
      <ul>
        <router-link tag="li" v-for="(item,index) in this.arr2" :key="index" :to="'/netWork'">
          <a href="javascript:;">
            <img :src="'http://39.106.67.233:100/'+item.smallGoodsTypePic" alt>
            <p>{{item.smallGoodsTypeName}}</p>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr:[],
      arr2:[]
    };
  },
  created() {
    this.recOne()
    this.recTwo()
  },
  methods: {
    recOne(){
      axios.get("http://39.106.67.233:100/getSmallGoodsTypeList",{
        params:{
          obj:{
            whereObj:{
              goodsTypeName:"推荐",
              orderBy: 0
            },
            sortObj:{
              addTime:1
            }
          }
        }
      }).then((data)=>{
        this.arr=data.data.smallGoodsTypeList
      })
    },
    recTwo(){
      axios.get("http://39.106.67.233:100/getSmallGoodsTypeList",{
        params:{
          obj:{
            whereObj:{
              goodsTypeName:"推荐",
              orderBy: 1
            },
            sortObj:{
              addTime:1
            }
          }
        }
      }).then((data)=>{
        this.arr2=data.data.smallGoodsTypeList
      })
    }
  },
};
</script>

<style scoped lang="scss">
.tit{
  background: #fff
}
.title {
  width: 2.52rem;
  height: 0.9rem;
  // margin: -.31rem 0px 0px;
  background: #fff;
  margin: 0 auto;
}
.title > p {
  color: #011e00;
  font-size: 0.28rem;
  font-weight: bold;
  width: 1.22rem;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  text-align: center;
}
.tit {
  width: 5.69rem;
  height: 0.9rem;
}
.fl {
  display: block;
  width: 0.5rem;
  height: 0.47rem;
  border-bottom: 2px solid #ccc;
  float: left;
  margin-right: 0.1rem;
}
.fr {
  display: block;
  width: 0.5rem;
  height: 0.47rem;
  border-bottom: 2px solid #ccc;
  float: left;
  margin-left: 0.1rem;
}
.top > ul {
  background: #fff;
  padding: 0.2rem 0.02rem 0 0.22rem;
  width: 5.69rem;
  height: 4.6rem;
}
.top > ul > li {
  width: 1.58rem;
  height: 2.2rem;
  margin: 0 0.22rem 0 0;
  float: left;
}
.top > ul > li > a {
  display: inline-block;
  width: 1.29rem;
  height: 2.18rem;
  margin-left: 0.15rem;
}
.top > ul > li > a > img {
  width: 1rem;
  height: 1rem;
  margin-left: 0.15rem;
  margin-top: 0.2rem;
}
.top > ul > li > a > p {
  display: block;
  width: 1rem;
  height: 0.86rem;
  color: #a5a5a5;
  font-size: 0.24rem;
  margin: 0 0 0 0.29rem;
  padding: 0.2rem 0 0;
  text-align: center;
  font-weight: bold;
}
.fgx {
  width: 5.69rem;
  height: 0.22rem;
  background: #f4f5f7;
}
</style>
