<template>
  <div class="WorkoutPlans">
    <!-- Title -->
    <div class="pa-6 teal--text text--darken-2 text-h5">
      Workout Plans
      <v-btn
        to="/plans/newplan"
        elevation="5"
        class="teal darken-2 float-right"
        outlined
      >
        New Workout
      </v-btn>
    </div>
    <v-divider dark></v-divider>
  </div>
</template>

<script>
export default {
  name: "WorkoutPlans",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style></style>
