<template>
  <div>  
    <router-view/>
  </div>
</template>

<script >
// import SignUp from "./components/login.vue";
// import Home from "./components/home.vue";
  export default{
    name:'App',
    // components: { SignUp, Home }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  margin: 0;
  padding: 0px;
  background-color: rgba(197, 192, 192, 0.474)
}


</style>
