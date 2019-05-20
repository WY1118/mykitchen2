<template>
  <div class="login">
    <div class="top">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif" alt>
    </div>
    <div class="tab">
      <ul>
        <li
          v-on:click="selectA=true;selectB=false;"
          :class="{active:selectA}"
        >短信登录</li>
        <li
          v-on:click="selectA=false;selectB=true;"
          v-bind:class="{active:selectB}"
        >密码登录</li>
      </ul>
    </div>
    <div class="phone_login" v-if="selectA">
      <div class="lo">
        <input type="text" placeholder="输入手机号" class="phone">
        <input type="text" placeholder="输入验证码" class="phone1">
        <div>获取验证码</div>
      </div>
      <div class="but">登录</div>
      <div class="msg-footer">
        <p class="msg-noLogin">
          查看
          <a
            href="http://wmall.wochu.cn/h5/setUp/serviceProtocol.html"
            style="color: rgb(195, 221, 179); text-decoration: underline;"
          >《我厨服务协议及隐私政策》</a>
        </p>
        <p class="msg-register">免费注册</p>
      </div>
    </div>
    <div class="pass_login" v-else-if="selectB">
      <div class="lo">
        <input type="text" placeholder="输入手机号" class="phone">
        <input type="text" placeholder="输入密码" class="phone1">
      </div>
      <div class="but">登录</div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="cha" @click="goBack()">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  comments: {},
  data() {
    return {
      selectA: true,
      selectB: false,
     
    };
  },
  methods: {
    goBack:function(){
      this.$router.back()
    }
  }
};
</script>
<style scoped>
.top img{
  display: block;
  width: 100%;
  height: 8;
}
.login {
  background: #fff;
  height: 13.37rem;
}
.tab {
  background: #fff;
  height: 0.96rem;
  padding: 0 1.4rem;
}
.tab ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 0.96rem;
  font-size: 0.3rem;
}
.phone {
  width: 90%;
  height: 1.1rem;
  font-size: 0.36rem;
  color: #132d01;
  font-weight: 300;
  border: none;
  border-bottom: 1px solid #132d01;
  margin-left: 0.3rem;
}
.phone1 {
  width: 90%;
  height: 1.1rem;
  font-size: 0.36rem;
  color: #132d01;
  font-weight: 300;
  border: none;
  margin-left: 0.3rem;
}
.lo div {
  position: absolute;
  top: 10.2rem;
  right: 0;
  width: 1.54rem;
  height: 0.6rem;
  background: #eee;
  font-size: 0.26rem;
  color: #ccc;
  text-align: center;
  border-radius: 0.12rem;
  outline: 0;
  line-height: 0.6rem;
}
.but {
  display: inline-block;
  width: 6.4rem;
  height: 1rem;
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
  background: #6eb042;
  margin-left: 0.6rem;
  outline: 0;
}
.msg-footer {
  height: 1.25rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.3rem;
  color: #6cb13f;
}
/* .phone_login{
  /* display: none */

/* .pass_login{
  display: none
} */
.forget {
  color: #668528;
  font-size: 0.3rem;
  margin-left: 6rem;
  margin-top: 0.7rem;
}
.active{
  border-bottom: .04rem solid #6eb242;
    color: #6eb242;
}
.cha{
  position: absolute;
  top:0.3rem;
  right: 0.2rem;
}
</style>
