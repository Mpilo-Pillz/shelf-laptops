<template>
    <div class="container">
        <h1>Laptops</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
export default Vue.extend({
    name: 'Laptops',
    methods: {
        getAllLaptops() {
          axios.get('http://localhost:3000/api/laptops')
          .then(laptops => console.log(laptops));  
        }
    },
    beforeMount() {
        this.getAllLaptops()
    },
})
</script>

<style scoped>
    h1 {
        color:orange;
        margin: 100px;
        display: block;
    }
</style>

