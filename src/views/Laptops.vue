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
        </div>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  name: "Laptops",
  methods: {
    getAllLaptops() {
      axios
        .get("http://localhost:3000/api/laptops")
        .then(laptops => {
          console.log(laptops);
          this.allLaptops = laptops.data.laptops;
        })
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      allLaptops: []
    };
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
