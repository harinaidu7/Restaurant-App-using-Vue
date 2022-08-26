<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="logo-box">
               <img src="../assets/slogo.png" class="logo" />
               <h1>Sign Up</h1>
            </div>

            <div>
                <input type="text" v-model="name" placeholder="Enter name"/>
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
               <button v-on:click="signUp">Sign Up</button>
           </div>
           <p>
                <router-link to="/login">Login</router-link>  
           </p>
        </form>
            
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      phoneNo: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.name == "" || this.email == "" || this.phoneNo == "" || this.password == "") {
        this.emptyFields = true;
        console.log("Please provide all details");
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          phoneNo: this.phoneNo,
          password: this.password,
        });
        // console.table(result.data)
        console.warn(result);

        if (result.status == 201) {
          this.$router.push({ name: "Home" });
          localStorage.setItem("user-info", JSON.stringify(result.data));
          alert("Sign Up Done");
        }
      }
    },
    handleSubmit() {
      console.log("form submitted");
    },
  },
  mounted() {
    let user = localStorage.getItem("Users-Info");
    if (user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
body {
  background-color: rgba(197, 192, 192, 0.474);
}
.logo {
  width: 100px;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
input,
button {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  min-width: 350px;
  margin-bottom: 15px;
}
.logo-box {
  text-align: center;
  color: black;
}
button {
  background-color: #1a73e8;
  color: #ddd;
  border-radius: 5px;
}
</style>