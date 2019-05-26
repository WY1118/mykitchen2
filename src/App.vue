<template>
  <div id="app">
    <keep-alive exclude="detailGoods">
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="this.$route.meta.tabbarFlag"/>
  </div>
</template>

<script>
import TabBar from "@/common/tabbar";
export default {
  name:"app",
  components: {
    TabBar
  }
}
</script>
<style>
  #app{
    height: 100%;
    background: #fff;
  }
</style>

