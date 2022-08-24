<template>
    <div>
       <Header/>
       <h1>This is home page</h1> 
    </div>
    
</template>

<script>
import Header from './header.vue';
    export default {
    name: "Home",
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    },
    components: { Header }
}
</script>

<style scoped>

</style>