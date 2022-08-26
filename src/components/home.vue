<template>
    <div>
       <Header/>
       <h1>Hello {{name}} this is home page </h1>

       <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>CONTACT</th>
                <th>ACTIONS</th>
            </tr>

            <tr v-for="item in restaurants " :key="item.id" >
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.contact}}</td>
                <td id="btr">
                <router-link :to="'/update/' + item.id"><i id="update-logo" class='far fa-edit' ></i></router-link>
                
                 <button v-on:click="deleteResto(item.id)" id="delButton">X</button>
                </td>
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

    methods:{
        async deleteResto(id){
             let result = await axios.delete("http://localhost:3000/restaurants/"+id)
             if(result.status==200){
                  this.loadData()
             } 
        },
        async loadData(){
              let user =  localStorage.getItem("user-info");
              this.name= JSON.parse(user).name
              if (!user) {
              this.$router.push({ name: "SignUp" });
               }
              let result = await axios.get("http://localhost:3000/restaurants") 
              console.table(result.data)
              this.restaurants=result.data

        }
    },

     mounted() {
        this.loadData()

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
.action{
    padding: 5px;
    font-size: 15px
}
#update-logo{

font-size:25px;
color:rgb(11, 11, 11);
}

#delButton{
    background-color: rgba(230, 52, 20, 0.798);
    box-sizing: border-box;
    border: 1px solid rgb(0, 0, 0);
    /* border-bottom: 1px solid #ddd; */
    color: rgb(0, 0, 0);
    width: 30px;
    border-radius: 5px;
}



</style>