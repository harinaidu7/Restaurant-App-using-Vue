<template>
    <div>
        <form>
            <div class="logo-box">
               <img src="../assets/slogo.png" class="logo" />
               <h1>Sign Up</h1>
            </div>

            <div>
               <input type="text" v-model="email" placeholder="Enter Email"/>
            </div>

            <div>
               <input type="number" v-model="phoneNo" placeholder="Enter Phone No"/>
            </div>

            <div>
               <input type="password" v-model="password" placeholder="Enter Password" />
            </div>

           <div>
               <button @click="signUp">Sign Up</button>
           </div>
        </form>
            
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'login',

        data(){
            return{
                email :'',
                phoneNo :'',
                password :''

            }
        },
        methods:{
            async signUp(){
                let result = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    phoneNo:this.phoneNo,
                    password:this.password 
                });

                if(result.status==201){
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name :'Home'})
                }
            }
        }
     
    }
</script>

<style >
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