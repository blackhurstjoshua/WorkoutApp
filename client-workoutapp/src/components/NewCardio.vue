<template>
  <div style="height: 100%">
    <div class="pa-6 teal--text text--darken-2 text-h5 d-inline-flex">
      New Cardio Plan
    </div>
    <v-btn class="mr-5 mt-5 float-right" outlined large color="teal lighten-2">
      Save
    </v-btn>
    <v-divider dark></v-divider>

    <v-container>
      <v-text-field
        color="teal lighten-2"
        label="Plan Name"
        outlined
        dark
        v-model="plan.name"
      >
      </v-text-field>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NewCardio",
  components: {},
  data: () => ({
    plan: {
      name: "",
      exercises: [],
    },
    exercise: {
      id: null,
      title: "",
      duration: "",
      intensity: "",
      distance: "",
    },
    count: 1,
    dialog: false,
    error: "",
    alert: false,
  }),
};
</script>

<style></style>
