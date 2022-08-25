<template>
    <div>
    <Header/>
        <h1>Hello {{name}} Please Update restaurant</h1>
    </div>
</template>

<script>
import Header from './header.vue';
    export default {
    name: "Update",
      data(){
        return{
            name:'',
        }
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        this.name= JSON.parse(user).name
    },
    components: { Header }
}
</script>

<style scoped>

</style>