<template>
  <v-footer absolute dark padless>
    <v-col
      class="text-center"
      cols="12"
    >
    <v-card flat tile>
      <v-card-text class="teal--text text-darken-2">
        Thanks for using my app
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="teal--text text-darken-2">
        {{ new Date().getFullYear() }} — <strong>Joshua Blackhurst</strong>
      </v-card-text>
    </v-card>
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>