<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <img class="logo" alt="Web Workers logo" src="./assets/web-workers.png" />
    <HelloWorld msg="Simple implementation of web workers in VueJS" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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

.logo {
  width: 15vh;
}
</style>
