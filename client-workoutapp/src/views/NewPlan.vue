<template>
  <div class="newPage">
    <Navbar />
    <NewWorkout />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewWorkout from "../components/NewWorkout";

export default {
  name: "NewPlan",
  components: {
    Navbar,
    Footer,
    NewWorkout,
  },
};
</script>

<style></style>
