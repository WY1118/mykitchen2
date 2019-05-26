<template>
  <div class="login">
    <div class="top">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif" alt>
    </div>
    <div class="tab">
      <ul>
        <li v-on:click="selectA=true;selectB=false;" :class="{active:selectA}">密码登录</li>
        <li v-on:click="selectA=false;selectB=true;" v-bind:class="{active:selectB}">手机登录</li>
      </ul>
    </div>
    <div class="phone_login" v-if="selectA">
      <div class="lo">
        <input type="text" placeholder="输入用户名" class="phone" v-model="userIn.user">
        <input type="password" placeholder="输入密码" class="phone1" v-model="userIn.pass">
        <!-- <div>获取验证码</div> -->
        <span class="err1">{{userErr}}</span>
        <span class="err2">{{passErr}}</span>
      </div>
      <div class="but"  @click="login()">登录</div>
      <div class="msg-footer">
        <p class="msg-noLogin">
          查看
          <a
            href="http://wmall.wochu.cn/h5/setUp/serviceProtocol.html"
            style="color: rgb(195, 221, 179); text-decoration: underline;"
          >《我厨服务协议及隐私政策》</a>
        </p>
        <router-link to="register" tag="p" class="msg-register">免费注册</router-link>
        <router-view></router-view>
      </div>
    </div>
    <div class="pass_login" v-else-if="selectB">
      <div class="lo">
        <input type="text" placeholder="输入手机号" class="phone" v-model="userIn.user">
        <input type="password" placeholder="输入密码" class="phone1" v-model="userIn.pass" >
        <span class="err1">{{userErr}}</span>
        <span class="err2">{{passErr}}</span>
      </div>
      <div class="but"  @click="login()">登录</div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="cha" @click="goBack()">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" alt>
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
      isShow: false,
      Info: localStorage.getItem("userArr"),
      userErr: "",
      passErr: "",
      userIn: {
        user: "",
        pass: ""
      }
    };
  },
  methods: {
    goBack: function() {
      this.$router.back();
    },
    login() {
      //  console.log(JSON.parse(this.Info));
       var obj = JSON.parse(this.Info);

       console.log(obj)
      //  var userArr = localStorage.getItem("user");
      //  console.log(JSON.parse(userArr))
      this.userErr = "";
      this.passErr = "";
      // var obj = JSON.parse(this.Info);
      // console.log(localStorage.getItem("userArr"));

       if (!this.userIn.user) {
        this.userErr = "用户名不能为空";
       }
      var testList = obj.find(item => {
        return this.userIn.user === item.username;
         console.log(testList.item)
      });
      if (!testList) this.userErr = "用户名不存在";
      
      // if (!this.userIn.pass) {
      //   this.passErr = "密码不正确";
      // }
      if (!this.userIn.pass) {
        this.passErr = "密码不能为空";
      }
      
      var testpass = obj.find(item => {
        return (
          this.userIn.pass === item.password &&
          this.userIn.user === item.username
        );
      });
      if (!testpass) this.passErr = "密码不正确";
      
      if (this.userErr || this.passErr) 
     
        return a = 1;
      // userInfo = JSON.stringify(testpass);
      // localStorage.setItem("userInfo", userInfo);
      this.$router.push({ name: "shouye" });
    }
  },
  created() {
    // let use = JSON.parse(localStorage.getItem("user"));
    // //  console.log(userArr)
    // let obj = {}
    // use.forEach(item=>{
    //   obj[item.name] = item.pass;
    //   console.log('obj',JSON.stringify(obj,null,1))
    // })
  }
};
</script>
<style scoped>
.err1 {
  position: absolute;
  top: 9.5rem;
  right: 0.8rem;
  color: red;
}
.err2 {
  position: absolute;
  top: 10.8rem;
  right: 0.8rem;
  color: red;
}
.top img {
  display: block;
  width: 100%;
  height: 8rem;
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
  outline: none;
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
  outline: none;
  border-bottom: 1px solid #132d01;
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
  margin-top: 0.3rem;
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
.msg-footer a {
  margin-left: 0.4rem
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
  margin-top: 0.5rem;
}
.active {
  border-bottom: 0.04rem solid #6eb242;
  color: #6eb242;
}
.cha {
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
}
</style>
