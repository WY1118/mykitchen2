<template>
  <div class="main-list">
    <div class="header">
      <div class="ac-back">
        <a href="#/shouye">
          <img src="http://wmall.wochu.cn/h5/img/ac-back.png">
        </a>
      </div>
    </div>
    <ul>
      <li>
        <a href="details.html?packageId=240">
          <img src="https://img.wochu.cn/upload/6937d3c9-2050-4d63-9256-11e4d7985fb8.jpg">
          <div class="package-info">
            <div class="package-name">女神专属套餐（18选3）</div>
            <div class="package-price">套餐价: 39.9元</div>
          </div>
          <p class="package-desc">精挑适合女士吃的净菜，给你最好的宠爱</p>
        </a>
      </li>
      <li>
        <a href="details.html?packageId=241">
          <img src="https://img.wochu.cn/upload/6dc1cd5b-fa48-407c-9fd3-b27a93ab4906.jpg">
          <div class="package-info">
            <div class="package-name">春日美食套餐（18选3）</div>
            <div class="package-price">套餐价: 49.9元</div>
          </div>
          <p class="package-desc">精选春天适合吃的净菜，和家人共享春日美食</p>
        </a>
      </li>
      <li>
        <a href="details.html?packageId=229">
          <img src="https://img.wochu.cn/upload/4e0861e8-84f6-4385-b700-6b66284e0c68.jpg">
          <div class="package-info">
            <div class="package-name">年度好评净菜大盘点（24选4）</div>
            <div class="package-price">套餐价: 49.9元</div>
          </div>
          <p class="package-desc">甄选年度好评净菜，超高回购，吃了还想吃第二次</p>
        </a>
      </li>
      <li>
        <a href="details.html?packageId=221">
          <img src="https://img.wochu.cn/upload/9f3c8396-27ac-43d5-8035-c718f998d308.jpg">
          <div class="package-info">
            <div class="package-name">工作日快手菜3菜套餐（18选3）</div>
            <div class="package-price">套餐价: 29.9元</div>
          </div>
          <p class="package-desc">帮助都市上班族解决做饭时买菜、洗菜、切配的麻烦，让用户每天省下2小时陪伴家人</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header img {
    height: .84rem;
    width: .84rem;
}
.main-list {
    padding: .2rem 0;
    background: #fff;
    color: #666;
    font-size: 62.5%;
}
.header {
    width: 100%;
    padding: .58rem .1rem 0;
    z-index: 3;
    position: fixed;
}
.ac-back {
    float: left;
}
.header a {
    width: 100%;
    height: 100%;
}


.main-list ul li {
    width: 100%;
    padding: 0 .24rem .4rem;
}
.package-info {
    width: 100%;
    font-size: .36rem;
    line-height: .6rem;
    padding: 0 .1rem;
}
.package-name,.package-price {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.36rem;
}

.package-name {
    width: 56%;
    color: #1a1a1a;
    float: left;
    text-align: left;
}
.package-price {
    width: 44%;
    color: red;
    float: right;
    text-align: right;
    /* font-weight: 600; */
}
.package-desc {
    font-size: .26rem;
    color: #4c4c4c;
    line-height: .3rem;
    padding: 0 .1rem;
}
img{
    width: 100%;
}
</style>
