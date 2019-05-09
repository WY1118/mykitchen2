<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="this.$route.meta.tabbarflag"/>
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

