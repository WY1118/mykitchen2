<template>
  <div>
    <header>
      <img src="http://wmall.wochu.cn/h5/personal/css/images/back.gif" @click="goBack()" alt>

      <p>帮助中心</p>
      <div></div>
    </header>
    <section class="help_list">
      <li>
        
          <p>售前问题</p> 
          <span>
            <img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png" alt>
          </span>
        
      </li>
      <li>
        
         <p>订单问题</p> 
          <span>
            <img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png" alt>
          </span>
       
      </li>
      <li>
        
         <p>配送问题</p> 
          <span>
            <img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png" alt>
          </span>
        
      </li>
      <li>
        
        <p>售后问题</p>  
          <span>
            <img src="http://wmall.wochu.cn/h5/personal/css/images/button_next@3x.png" alt>
          </span>
       
      </li>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack: function() {
      this.$router.back();
    }
  }
};
</script>
<style scope>
body{
  background: #fff
}
header {
  height: 1.1rem;
  border-bottom: 1px solid #55ba42;
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3rem
}
header p{
  font-size: 0.4rem;
  color: #686868;
}
section{
  position: relative;
  top: 1.1rem
}
section li{
      border-bottom: 1px solid #999;
      height: 1rem;
      background: #fff;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 0.4rem;
      padding-left: 0.3rem;
      font-size: 0.35rem;
      color: #000
}

/* header a {
    position: absolute;
    left: 1rem;
    top: 1.5rem;
    width: 1.3rem;
    display: block;
    z-index: 1;
}
a {
    text-decoration: none;
    color: #686868;
    font-size: 1.4rem;
    text-shadow: none !important;
}
header p {
    text-align: center;
    font-size: 0.4rem;
    color: #686868;
    position: absolute;
    left: 0;
    top: 0;
    height: 5rem;
    line-height: 5rem;} */
</style>