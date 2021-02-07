<template>
  <div class="home" height="100%">
    <Navigation/>
    <HomePage/>
  </div>
</template>

<script>
import Navigation from "../components/Navbar"
import HomePage from "../components/HomePage"

export default {
  name: "Home",
  components: {
    Navigation,
    HomePage
  }
};
</script>
