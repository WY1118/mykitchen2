<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
<<<<<<< HEAD
    </keep-alive> 
    <TabBar v-if="this.$route.meta.tabbarFlag"/>
=======
    </keep-alive>
    <TabBar v-if="this.$route.meta.tabbarflag"/>
>>>>>>> szj2
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
  }
</style>

