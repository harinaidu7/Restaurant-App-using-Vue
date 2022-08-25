<template>
    <div>
       <Header/>
       <h1>Hello {{name}} this is home page </h1>

       <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>ADDRESS</th>
                <th>CONTACT</th>
            </tr>

            <tr v-for="item in restaurants " :key="item.id" >
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.contact}}</td>
            </tr>
       </table> 
    </div>
    
</template>

<script>
import axios from 'axios';
import Header from './header.vue'

    export default {
    name: "Home",
    data(){
        return{
            name:'',
            restaurants : []
        }
    },

   async mounted() {
        let user = localStorage.getItem("user-info");
        this.name= JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
        let result = await axios.get("http://localhost:3000/restaurants") 
        console.table(result.data)
        this.restaurants=result.data
    },
    components: { Header }
    }
</script>

<style scoped>
table,td,th {
  border: 1px solid black;
  border-collapse: collapse;
  border-color: white;
  margin-left:auto;
  margin-right:auto  
}
td,th{
    width:160px;
    height:40px;
    background-color: #96D4D4;
}
th{
    background-color:#34a1b7c4 
}

</style>