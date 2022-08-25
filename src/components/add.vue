<template>
    <div>
    <Header/>
        <h1>Hello {{name}} please add restaurant</h1>
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
            <button @click="addResto" type="button">Add New restaurant</button>
        </div>
     
     </form>
    </div>
</template>

<script>
import Header from './header.vue';
import axios from 'axios'
    export default {
    name: "Add",
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
    methods :{
       async addResto(){
            console.warn(this.restaurants);
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurants.name,
                address:this.restaurants.address,
                contact:this.restaurants.contact

            });
            if(result.status==201){
                this.$router.push({name:'Home'});
            }
            console.warn("results",result)
        }

    },

    mounted() {
        let user = localStorage.getItem("user-info");
        this.name= JSON.parse(user).name
    },
    components: { Header }
}
</script>

<style >
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
button{
    background-color:#1a73e8;
    color: #ddd;
    border-radius: 5px  
}

</style>