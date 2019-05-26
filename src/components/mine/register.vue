<template>
  <div>
    <!-- <div id="successful">
      <h3 style="text-align: center;margin-top: 80px;margin-bottom: 40px;">注册成功</h3>
      <button id="btn" @click="close()">取消</button>
      <button @click="log()" id="btn">登录</button>
    </div> -->
    <div class="ban">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif" alt>
    </div>
    <div class="free">免费注册</div>
    <div class="lo">
      <input type="text" placeholder="输入用户名" class="phone" v-model="userInfo.user" @blur="phone()">
      <span class="err1" id="err1">{{err.err1}}</span>
      <input
        type="password"
        placeholder="密码"
        class="phone1"
        v-model="userInfo.passWord"
        @blur="pass()"
      >
      <span class="err2">{{err.err2}}</span>
    </div>
    <div class="cha" @click="goBack()">
      <img src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" alt>
    </div>
    <div class="but" @click="flag()">注册</div>
    <div class="checkbox">
      <input type="checkbox" v-model="userInfo.checkbox">阅读并接受
      <a href="http://wmall.wochu.cn/h5/setUp/serviceProtocol.html?agree">《我厨服务协议及隐私政策》</a>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack: function() {
      this.$router.back();
    },
    phone() {
      this.err.err1 = "";
      this.isReturn = true;
      var a = /^[a-z]+$/;
      if (!this.userInfo.user) this.err.err1 = "用户名不能为空";
      else if (!a.test(this.userInfo.user)) {
        this.isReturn = true;
        this.err.err1 = "由小写字母组成";
      } else {
        this.err.err1 = "√";
      }
    },
    pass() {
      this.err.err2 = "";
      this.isReturn = true;
      var pass = /[a-zA-Z]\w[z0-9]/;
      if (!this.userInfo.passWord) {
        this.isReturn = true;
        this.err.err2 = "密码不能为空";
      } else if (!pass.test(this.userInfo.passWord)) {
        this.isReturn = true;
        this.err.err2 = "由字母、数字组成，以字母开头";
      } else {
        this.err.err2 = "√";
      }
    },

    flag() {
     
      this.err.err1 = "";
      this.err.err2 = "";
      this.isReturn = false;
      var  a= /^[a-z]+$/;
      if (!this.userInfo.user) {
        this.err.err1 = "用户名不能为空";
        this.isReturn = true;
      } else if (!a.test(this.userInfo.user)){
        this.isReturn = true;
        this.err.err1 = "由小写字母组成";
      }
      if (window.localStorage.userArr) {
        var array = JSON.parse(window.localStorage.userArr);
      } else {
        array = [];
      }
      for (var i = 0; i < array.length; i++) {
         console.log(array);
        if (this.userInfo.user == array[i].username) {
          alert("该账号已存在");
          return;
        }
      }
      var pass = /[a-zA-Z]\w[z0-9]/;
      if (!this.userInfo.passWord) {
        this.isReturn = true;
        this.err.err2 = "密码不能为空";
      } else if (!pass.test(this.userInfo.passWord)) {
        this.isReturn = true;
        this.err.err2 = "密码格式不正确";
      }
      if (this.userInfo.checkbox != true) {
        this.btn = false;
        alert("是否同意该协议");
        this.isReturn = true;
        return;
      }
      if (this.err.err1 || this.err.err2)
       return;
      //  var box = document.getElementById('successful');
      //  box.style.display = "block";
       var obj = {
         username:this.userInfo.user,
         password:this.userInfo.passWord
       };
       array.push(obj);
       window.localStorage.userArr = JSON.stringify(array);
       localStorage.setItem("userArr",window.localStorage.userArr);
       alert("注册成功");
         this.$router.push({ name: "login" });
    },
  
  },

  data() {
    return {
      userArr: [],
      isReturn: false,
      btn: false,
      userInfo: {
        user: "",
        passWord: "",
        checkbox: false,
        keyWord: "user"
      },
      //   userArr:[],
      err: {
        err1: "",
        err2: ""
      }
    };
  }
};
</script>
<style scoped>
.ban img {
  display: block;
  width: 100%;
  height: 8rem;
}
.free {
  font-size: 0.32rem;
  text-align: center;
  width: 1.5rem;
  height: 0.5rem;
  margin-top: 0.1rem;
  line-height: 0.5rem;
  border-bottom: 0.04rem solid #6eb242;
  color: #6eb242;
  margin-left: 40%;
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
  outline: none;
  margin-left: 0.3rem;
  border-bottom: 1px solid #132d01;
}
.cha {
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
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
  margin-top: 0.5rem;
}
.checkbox {
  font-size: 0.3rem;
  margin-left: 10%;
  margin-top: 0.2rem;
}
.checkbox input {
  width: 0.2rem;
  height: 0.2rem;
}
.err1 {
  position: absolute;
  top: 9.3rem;
  left: 5rem;
  color: red;
  font-size: 0.25rem;
}
.err2 {
  position: absolute;
  top: 10.2rem;
  left: 5rem;
  color: red;
  font-size: 0.25rem;
}
</style>
