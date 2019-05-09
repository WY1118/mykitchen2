<template>
  <div class="home">
    <!-- header -->
    <div class="header">
      <div class="search">
          <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" alt="">
          <div>支持首字母搜索</div>
      </div>
      <div class="blank"></div>
    </div>
    <div class="con">
      <!-- wrapperNav -->
      <div class="wrapperNav">
        <ul>
          <li v-for="(item,index) in wrappernav" :key="index" >
            <p @click="fn(index)" :class="{active:i===index}">{{item}}</p>
          </li>
        </ul>
        <div class="zdw"></div>
      </div>
      <!-- wrapper -->
      <div class="wrapper" >
        <keep-alive > 
          <!-- <component  :is="i<1?comName[0]:comName[1]" > -->
          <!-- <component :is="i<1?'Recommend':'Other'" ></component> -->
          <Recommend v-if="i<1"></Recommend>
          <Other v-if="i>=1" :i="i"></Other>
        </keep-alive>
        
      </div>
    </div>
  </div>
</template>

<script>
import Recommend from './component/recommend';
import Other from './component/other';

export default {
  name: 'fenlei',
  data() {
    return {
      wrappernav:["推荐","我厨优选","餐馆名菜","全部净菜","儿童专区","蔬菜","水果","肉禽蛋","水产海鲜","乳饮西点","点心速食","粮油副食"],
      i : 0,        
    }
  },
  methods: {
    fn(v){
      this.i = v;
      // console.log(b)
    }
  },
  components: {
    Recommend,
    Other
    
  },
  
}
</script>

<style scoped lang="scss">
.active{
  color:#6eb042;
  font-size: .32rem;
  border-left: .06rem solid #6eb042;
}
  //  header
  .header{
    width: 100%;
    position: absolute;
  }
  .search{
    width: 7.1rem;
    height: .68rem;
    margin: .10rem .24rem;
    line-height: .62rem;
    border-radius: .12rem;
    padding: 0 .24rem;
    border: .01rem solid #ccc;
    overflow: hidden;
  }
  .search>img{
    width: .4rem;
    height: .4rem;
    float: left;
    margin-top: .14rem;
  }
  .search>div{
    width: 6.12rem;
    height: .62rem;
    padding: 0;
    float: right;
    font-size: .27rem;
    line-height: .68rem;
    color: #ccc;
    border: 0;
  }
  .blank{
    height: 0.22rem;
    background: #f4f5f7
  }
  .con{
    flex:1;
  }
  // wrapperNav
  .wrapperNav{
    flex:1;
    position: absolute;
    width: 1.8rem;
    float: left;
    left: 0;
    color: rgb(165, 165, 165);
    font-size: .28rem;
    top: 1.1rem;
    bottom: 1.08rem;
    overflow: auto;
    background:rgb(252, 252, 252);
  font-weight: 600;
  }
  .wrapperNav>ul li{
    width: 100%;
    height: 1rem;
    padding: .26rem 0;
    line-height: .6rem;
    text-align: center;
    font-size: .28rem;
  }
  .wrapperNav>ul li p{
    height: .6rem;
    // font-weight: bold
  }
  .zdw{
    background:rgb(252, 252, 252);
    height: 11.18rem;
    width: .1rem;
    position: fixed;
    top: 1.1rem;
    left: 1.7rem;
  }

  // wrapper
  .wrapper{
    position: absolute;
    width: 5.7rem;
    float: right;
    right: 0;
    top: 1.08rem;
    bottom: 1.08rem;
    overflow: hidden;
    border-left: .01rem solid #e5e5e5;
    // background: yellow
  }
</style>