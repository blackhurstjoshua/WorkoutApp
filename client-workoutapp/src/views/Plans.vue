<template>
  <div class="new page">
    <Navbar/>
    <WorkoutPlans/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import WorkoutPlans from "../components/WorkoutPlans"
import Footer from "../components/Footer"

export default {
  name: "Plan",
  components: {
    Navbar,
    WorkoutPlans,
    Footer
  }
}
</script>

<style>

</style>