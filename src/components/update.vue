<template>
    <div>
    <Header/>
        <h1>Hello {{name}} Please Update restaurant</h1>
         <form>
        <div>
            <input type="text" placeholder="Enter Restaurent Name" v-model="restaurants.name" name="name" />
        </div>
        <div>
            <input type="text" placeholder="Enter Restaurent Address" v-model="restaurants.address" name="address" />
        </div>
        <div>
            <input type="number" placeholder="Enter Phone no" v-model="restaurants.contact" name="contact" />
        </div>
        <div>
            <button @click="updateResto" type="button">Update New restaurant</button>
        </div>
     </form>
    </div>
</template>

<script>
import Header from './header.vue';
import axios from 'axios';
    export default {
    name: "Update",
      data(){
        return{
            name:'',
            restaurants :{
                name:'',
                address:'',
                contact:''

            }  
        }
    },
    methods:{
            async updateResto(){
            console.warn(this.restaurants);
            const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name:this.restaurants.name,
                address:this.restaurants.address,
                contact:this.restaurants.contact

            });
            if(result.status==200){
                this.$router.push({name:'Home'});
            }
            }
    },

   async mounted() {
        let user = localStorage.getItem("user-info");
        this.name= JSON.parse(user).name

        const result= await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id) 
        this.restaurants=result.data

        // console.warn(this.$route.params.id)
    },
    
    components: { Header }
}
</script>

<style scoped>
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