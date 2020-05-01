<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="brand">Brand</label>
          <input type="text" id="brand" v-model="Laptop.brand" />
        </div>
        <div class="input">
          <label for="model">Model</label>
          <input type="text" id="model" v-model="Laptop.model" />
        </div>
        <div class="input">
          <label for="ram">Ram</label>
          <input type="text" id="ram" v-model="Laptop.ram" />
        </div>
        <div class="input">
          <label for="processor">Processor</label>
          <input type="text" id="processor" v-model="Laptop.processor" />
        </div>

        <div class="input">
          <label for="storage">Storage</label>
          <input type="text" id="storage" v-model="Laptop.storage" />
        </div>

        <div class="input">
          <label for="condition">Condition</label>
          <input type="text" id="condition" v-model="Laptop.condition" />
        </div>

        <div class="input">
          <label for="misc">misc</label>
          <input type="text" id="misc" v-model="Laptop.misc" />
        </div>

        <div class="input">
          <label for="quantity">quantity</label>
          <input type="text" id="quantity" v-model="Laptop.quantity" />
        </div>

        <div class="input">
          <label for="price">Price</label>
          <input type="text" id="price" v-model="Laptop.price" />
        </div>

        <div class="input">
          <label for="image">Image</label>
          <input type="text" id="image" v-model="Laptop.image" />
          <!-- <button type="button">Upload image</button> -->
          <input type="file" name="" id="" @change="onImagePicked($event)">
        </div>

        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      <class class="image-preview" v-if="imagePreview !== '' && imagePreview !== null">
        <img :src="imagePreview" alt="">
      </class>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  name: "AddLaptop",
  props: ['imagePreview'],
  data() {
    return {
      Laptop: {
        brand: "",
        model: "",
        ram: "",
        processor: "",
        storage: "",
        condition: "",
        misc: "",
        quantity: "",
        price: "",
        image: ""
      }
    };
  },
  methods: {
    onAddHobby() {
      const laptop = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.hobbyInputs.push(laptop);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onImagePicked(event) {
      const file = event.target.files[0];
      console.log('file-->',file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      
    },
    onSubmit() {
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
      };
      console.log("new lap-->", laptop);
      axios
        .post("http://localhost:3000/api/laptops", laptop)
        .then(res => console.log(res.data))
        .catch(error => console.log(error));

        this.resetForm();
    },

    resetForm() {
      this.Laptop.brand = '';
        this.Laptop.model = '';
        this.Laptop.ram = '';
        this.Laptop.processor = '';
        this.Laptop.storage = '';
        this.Laptop.condition = '';
        this.Laptop.misc = '';
        this.Laptop.quantity = '';
        this.Laptop.price = '';
        this.Laptop.image = '';
    }
  }
});
</script>

<style scoped>
.signup-form {
  width: 500px;
  margin: 150px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  box-shadow: 0 3rem 6rem 1rem rgba(0, 0, 0, 0.25);
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 1.3rem;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  background: orange;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid orange;
  color: #ffffff;
  background-color: orange;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
}

.submit button:hover,
.submit button:active {
  background-color: #ffffff;
  color: orange;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.image-preview {
  height: 5rem;
  margin: 1rem 0;
}

.image-preview img {
  height: 100%;
}

</style>