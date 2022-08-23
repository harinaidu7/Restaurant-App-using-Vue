<template>
    <div>
        <form>
            <div class="logo-box">
               <img src="../assets/slogo.png" class="logo" />
               <h1>Sign Up</h1>
            </div>

            <div>
               <input type="text" placeholder="Email id"/>
            </div>

            <div>
               <input type="text" placeholder="Phone no"/>
            </div>

            <div>
               <input type="text" placeholder="Password" />
            </div>

           <div>
               <button>Sign Up</button>
           </div>
        </form>
            
    </div>
</template>

<script>
    export default {
        name:'login'
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