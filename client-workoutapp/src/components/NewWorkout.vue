<template>
  <div>
    <!-- Title -->
    <div class="pa-6 teal--text text--darken-2 text-h5">
      Choose a style
    </div>
    <v-divider dark></v-divider>
    <v-container fluid>
      <v-row>
        <v-col align="center" cols="6">
          <v-btn
            height="75px"
            width="100%"
            large
            class="red lighten-2"
            to="/plans/newplan/lift"
          >
            <v-icon x-large>mdi-weight-lifter</v-icon>
          </v-btn>
        </v-col>
        <v-col align="center" cols="6">
          <v-btn
            height="75px"
            width="100%"
            large
            class="purple lighten-2"
            to="/plans/newplan/cardio"
          >
            <v-icon x-large>mdi-bike-fast</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" cols="6">
          <v-btn height="75px" width="100%" large class="green lighten-2">
            <v-icon x-large>mdi-hiking</v-icon>
          </v-btn>
        </v-col>
        <v-col align="center" cols="6">
          <v-btn height="75px" width="100%" large class="yellow lighten-2">
            <v-icon x-large>mdi-yoga</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NewWorkout",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style></style>
