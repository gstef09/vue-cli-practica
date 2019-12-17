<template class="container">
  <div id="app">
    <router-link to="/">Hello</router-link>
    <router-link to="/About">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import NewComponent from "./components/NewComponent.vue"
// import Example1 from "./components/Example1.vue"
// import Animation from './components/Animation.vue'

export default {
  name: "app",
  components: {
    // Example1,
    // NewComponent,
    // Animation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
