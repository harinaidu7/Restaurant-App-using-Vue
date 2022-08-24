<template>
    <div>
         <form @submit.prevent="handleSubmit">
            <div class="logo-box">
               <img src="../assets/slogo.png" class="logo" />
               <h1>Login</h1>
            </div>

            <div>
               <input type="text" v-model="email" placeholder="Enter Email"/>
            </div>

            <div>
               <input type="password" v-model="password" placeholder="Enter Password" />
            </div>

           <div>
               <button v-on:click="login">Login</button>
           </div>
           <p>
                <router-link to="/sign-up">Sign Up</router-link>  
           </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Login',
          data()
        {
            return{
                email :'',
                phoneNo :'',
                password :''

            }
        },
        methods:{
            async login(){
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                  if(result.status == 200 && result.data.length >0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                    this.$router.push({name :'Home'})
                    alert("Login Done");
                }
                console.warn(result);
            },
            handleSubmit(){
                console.log('form submitted')
            },
          
        },
        mounted() {
            let user =localStorage.getItem('user-info');
            if(user){
              this.$router.push({name :'Home'})  
            }
        }
    };
</script>

<style scoped>
p{
    text-align: center
}
</style>