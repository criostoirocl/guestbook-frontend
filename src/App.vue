<template>
  <div id="app">
    <div>
      {{ myEnv }} - {{ apiUrl }} - 2
    </div>
    <HelloWorld msg="Welcome to Your Vue.js Appff 30"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
    myEnv(){
      return process.env.VUE_APP_MY_ENV
    },
    apiUrl(){
      return process.env.VUE_APP_VITE_API_URL
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
