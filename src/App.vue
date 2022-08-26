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
  padding: 0px
}
body{
    background-color: rgba(197, 192, 192, 0.474)
}
.logo{
    width: 100px;
    
}
form{
    max-width: 420px;
    margin: 30px auto;
    background:white;
    text-align: left;
    padding:40px;
    border-radius: 10px
}
input,button{
    display: block;
    padding: 10px 6px;
    width:100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color:#555;
    min-width: 350px;
    margin-bottom: 15px
}
.logo-box{
   text-align: center;
   color: black 
   
}
button{
    background-color:#1a73e8;
    color: #ddd;
    border-radius: 5px  
}

</style>
