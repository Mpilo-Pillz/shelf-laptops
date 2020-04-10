<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="brand">Brand</label>
          <input
                  type="text"
                  id="brand"
                  v-model="Laptop.brand">
        </div>
        <div class="input">
          <label for="model">Model</label>
          <input
                  type="text"
                  id="model"
                  v-model="Laptop.model">
        </div>
        <div class="input">
          <label for="ram">Ram</label>
          <input
                  type="text"
                  id="ram"
                  v-model="Laptop.ram">
        </div>
        <div class="input">
          <label for="processor">Processor</label>
          <input
                  type="text"
                  id="processor"
                  v-model="Laptop.processor">
        </div>

        <div class="input">
          <label for="storage">Storage</label>
          <input
                  type="text"
                  id="storage"
                  v-model="Laptop.storage">
        </div>

        <div class="input">
          <label for="condition">Condition</label>
          <input
                  type="text"
                  id="condition"
                  v-model="Laptop.condition">
        </div>

        <div class="input">
          <label for="misc">misc</label>
          <input
                  type="text"
                  id="misc"
                  v-model="Laptop.misc">
        </div>

        <div class="input">
          <label for="quantity">quantity</label>
          <input
                  type="text"
                  id="quantity"
                  v-model="Laptop.quantity">
        </div>

        <div class="input">
          <label for="price">Price</label>
          <input
                  type="text"
                  id="price"
                  v-model="Laptop.price">
        </div>

        <div class="input">
          <label for="image">Image</label>
          <input
                  type="text"
                  id="image"
                  v-model="Laptop.image">
        </div>
        
        
    
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
  export default Vue.extend({
      name: 'AddLaptop',
    data () {
      return {
          Laptop: {
         brand: '',
        model: '',
        ram: '',
        processor: '',
        storage: '',
        condition: '',
        misc: '',
        quantity: '',
        price: '',
        image: ''
      }
      }
    },
    methods: {
      onAddHobby () {
        const laptop = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(laptop)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const laptop = {
           brand: this.Laptop.brand,
        model: this.Laptop.model,
        ram: this.Laptop.ram,
        processor: this.Laptop.processor,
        storage: this.Laptop.storage,
        condition: this.Laptop.condition,
        misc: this.Laptop.misc,
        quantity: this.Laptop.quantity,
        price: this.Laptop.price,
        image: this.Laptop.image
        }
        console.log('new lap-->', laptop)
        axios.post('http://localhost:3000/api/laptops',  laptop )
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
      }
    }
  })
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 150px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    background-color: rgb(150, 144, 142);
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>