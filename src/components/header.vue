<template>
    <div>
    <div class="nav">
           
            <a href="#">Home</a>
            <a href="#">Add Restaurant </a>
            <a href="#">Update restaurant </a>
            <a href="#">Logout</a>
            
    </div>
    </div>
</template>

<script>
    export default {
        
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