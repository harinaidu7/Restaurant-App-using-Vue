<template>
    <div>
    <div class="nav">
           
            <router-link to="/">Home</router-link>
            <router-link to="add">Add Restaurant </router-link>
            <router-link to="update">Update restaurant </router-link>
            <a @click="logout" href="#">Logout</a>
            
    </div>
            <h2 v-show="bye">Bye!!!!!</h2>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return{
                bye:false
            }
        },

        methods:{
            logout(){
                localStorage.clear();
                this.bye= true 
                setTimeout(() => {
                    this.$router.push('Login')
                    
                }, 3000);

            },
           
        }
        
    }
</script>

<style>
body{
    margin: 0;
}


.nav{

    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333; 
    display: flex;
    justify-content: center;
}
.nav a{
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Montserrat', sans-serif;
    justify-content: flex-end
}
a:hover{
    color: rgb(15, 208, 76);
    
}
::-webkit-scrollbar {
  display: none;
}



</style>