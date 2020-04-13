<template>
<div>
    
    <div class="header-image parallax ">
        <div class="header-info">
            <h2 class="header-title">LOOKING TO GET A LAPTOP</h2>
            <div class="header-text">
                Click the below button to search and find the best bargain for a laptop
            </div>
            <router-link to="/laptops">
            <button class="roll-button">Browse Laptops</button>
            </router-link>
        </div>
        

    </div>
    

</div>  
  
</template>


<script>
export default {
  name: 'appJumbotron',
  methods: {
      goToLaptops: () => {
        //   this.$router.push('laptops')
        console.log("learn more")
      }
  },
  components: {
       
   },  
}
</script>

<style scoped>

</style>