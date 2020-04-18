<template>
  <div class="container">
    <h1>Laptops</h1>
    <div class="cards-container">
      <figure v-for="(laptop, laptopIndex) in allLaptops" :key="laptopIndex" class="card">
          <div class="card__hero">
              <img :src="laptop.image" :alt="laptop.model" class="card__img">
          </div>
        <h2 class="card__name">
          {{ laptop.brand }} {{laptop.model}}
        </h2>
        <p class="card__detail">{{laptop.ram}}, {{laptop.processor}}, {{laptop.storage}}</p>
        <p class="card__detail">{{laptop.condition}}, {{laptop.misc}}. {{laptop.quantity}} left</p>
        <div class="card__footer">
          <p class="card__price">R{{laptop.price}}</p>
          <a href="/laptops" class="card__link">Read More...</a>
          <button @click="deleteLaptop(laptop._id) in laptop">Delete</button>
          <button @click="editLaptop(laptop._id) in laptop">Edit</button>
        </div>
        
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import $router from "vue-router";
import AddLaptop from "./AddLaptop.vue";
import axios from "axios";
export default Vue.extend({
  name: "Laptops",
  data() {
    return {
      allLaptops: []
    };
  },
  methods: {
    getAllLaptops() {
      axios
        .get("http://localhost:3000/api/laptops")
        .then(laptops => {
          console.log(laptops);
          this.allLaptops = laptops.data.laptops;
        })
        .catch(error => console.log(error));
    },
    deleteLaptop(id: string) {
      axios.delete(`http://localhost:3000/api/laptops/${id}`)
      .then(response => {
        const updatedLaptops = this.allLaptops.filter(laptop => laptop['_id'] !== id);
        this.allLaptops = updatedLaptops;
        console.log(response);
      }).catch(error => console.log(error));
    },
    editLaptop(id: string) {
      axios
        .get(`http://localhost:3000/api/laptops/${id}`)
        .then(laptops => {
          console.log(laptops);
          this.allLaptops = laptops.data.laptops;
        })
        .catch(error => console.log(error));
      this.$router.push({ name: 'AddLaptop', params: { id } })
    }
  },
  created() {
    this.getAllLaptops();
  }
});
</script>

<style scoped>
h1 {
  color: orange;
  margin: 100px;
  display: block;
}
</style>
