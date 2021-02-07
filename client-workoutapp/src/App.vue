<template>
  <v-app :style="{ backgroundColor: '#000814'}">
    <router-view></router-view>
    <appFooter/>
  </v-app>
</template>

<script>
import appFooter from "./components/Footer"

export default {
  name: "App",
  components: {
    appFooter
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>
