<template>
  <div>
    <div class="top">
      <div class="tit">
        <div class="title">
          <span class="fl"></span>
          <p>{{data[0].name}}</p>
          <span class="fr"></span>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in data[0].children" :key="index">
          <a href="javascript:;">
            <img :src="item.imgUrl" alt>
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="fgx"></div>
    <div class="top">
      <div class="tit">
        <div class="title">
          <span class="fl"></span>
          <p>{{data[1].name}}</p>
          <span class="fr"></span>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in data[1].children" :key="index">
          <a href="javascript:;">
            <img :src="item.imgUrl" alt>
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasError: false,
      errorCode: "200",
      statusCode: "200",
      errorMessage: "",
      data: [
        {
          id: 1,
          name: "我厨精选",
          imgUrl: null,
          url: null,
          urlType: null,
          isShowTotal: null,
          sortIndex: 1,
          parentId: null,
          children: [
            {
              id: 3,
              name: "全网抄底",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/7d78dba5-d085-48e4-a5f7-d60afae06ac4.jpg",
              url:
                "http://wmall.wochu.cn/h5/activityTemplate/html/activityPage.html?activityId=469",
              urlType: "1",
              isShowTotal: null,
              sortIndex: 1,
              parentId: 1,
              children: []
            },
            {
              id: 4,
              name: "时令蔬果专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/cbaac631-3737-4629-b7ad-ddb5141c10b9.jpg",
              url: "时令蔬果专区",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 2,
              parentId: 1,
              children: []
            },
            {
              id: 5,
              name: "限时特惠",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3639cb36-2c9e-4c6c-b63f-010c31420325.jpg",
              url: "本周特惠专区",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 3,
              parentId: 1,
              children: []
            },
            {
              id: 6,
              name: "新鲜乳品",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/4b7934db-f9df-41b8-a569-05ee3f3266a3.jpg",
              url: "新鲜乳品",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 4,
              parentId: 1,
              children: []
            },
            {
              id: 7,
              name: "生猛海鲜",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/ec6cf8f8-ea6a-4e8c-8f53-8ab6a9e4175b.jpg",
              url: "生猛海鲜专区",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 5,
              parentId: 1,
              children: []
            },
            {
              id: 8,
              name: "冷鲜肉禽",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/571d2d10-65b1-4f21-899a-59b44266f8f7.jpg",
              url:
                "http://wmall.wochu.cn/h5/activityTemplate/html/activityPage.html?activityId=30",
              urlType: "1",
              isShowTotal: null,
              sortIndex: 6,
              parentId: 1,
              children: []
            }
          ]
        },
        {
          id: 2,
          name: "品牌专区",
          imgUrl: null,
          url: null,
          urlType: null,
          isShowTotal: null,
          sortIndex: 2,
          parentId: null,
          children: [
            {
              id: 9,
              name: "泰森专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/5c4c3b77-6da2-41d6-883f-29242f035ed2.jpg",
              url: "品牌专区-泰森",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 1,
              parentId: 2,
              children: []
            },
            {
              id: 10,
              name: "卡士专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/9382aa24-d547-4592-ae43-c8373ef294f4.jpg",
              url: "品牌--卡士",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 2,
              parentId: 2,
              children: []
            },
            {
              id: 11,
              name: "清美专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/d45c4ad5-7111-4f53-93b4-bcda9e6d2c69.jpg",
              url: "品牌-清美",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 3,
              parentId: 2,
              children: []
            },
            {
              id: 12,
              name: "中粮专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/0517d593-6cb4-41e5-aac5-1659286f31a5.jpg",
              url: "品牌专区-中粮",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 4,
              parentId: 2,
              children: []
            },
            {
              id: 13,
              name: "光明专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/90c1e3f6-6a8e-4f71-8168-07456d026c5f.jpg",
              url: "光明牛奶",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 5,
              parentId: 2,
              children: []
            },
            {
              id: 14,
              name: "明治专区",
              imgUrl:
                "https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/3828b672-34a7-4a78-a022-fdf396259add.jpg",
              url: "品牌专区-明治",
              urlType: "3",
              isShowTotal: "1",
              sortIndex: 6,
              parentId: 2,
              children: []
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.title {
  width: 2.52rem;
  height: 0.9rem;
  // margin: -.31rem 0px 0px;
  // background: skyblue;
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
