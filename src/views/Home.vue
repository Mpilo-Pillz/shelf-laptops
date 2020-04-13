<template>
<div>

    <app-jumbotron />
    
    <!-- <div class="header-image parallax ">
        <div class="header-info">
            <h2 class="header-title">LOOKING TO GET A LAPTOP</h2>
            <div class="header-text">
                Click the below button to search and find the best bargain for a laptop
            </div>
            <router-link to="/laptops">
            <button class="roll-button">Browse Laptops</button>
            </router-link>
        </div>
        <div class="main-content">
            <div class="container">
                <div class="row">
                   <div class="content-area col-md-9">
                       </div> 
                </div>
                </div> 
        </div>

    </div> -->
    
    
    <!-- <div class="about-video">
            <h2 class="about-heading">Search Laptop Model</h2>
              <input class="form-control" type="text" placeholder="Search">
        </div> -->
</div>  
  
</template>


<script>
import appJumbotron from '../../src/components/Shared/Jumbotron'
export default {
  name: 'Home',
   components: {
       appJumbotron
   },
  methods: {
      goToLaptops: () => {
        //   this.$router.push('laptops')
        console.log("learn more")
      }
  },
   
}
</script>

<style scoped>

.jumbo--text {
    color: #ffffff;
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}
.jumbotron {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 520px;
}

.jumbotron__bg-img {
   background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.7))), url("../assets/sl-cover.jpg");  
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("../assets/sl-cover.jpg");
}

.white-space {
    height: 100px;
    width: 100%;
    background-color: #ffffff;
}

.more-about {
    width: 40%;
}

.about-video {
    width:40%;
}

.section-about {
    display: flex;
    justify-content: space-between;
    padding: 50px;
}

.about-heading {
    padding-bottom: 20px;
}

.about-heading__border {
    border-bottom: 2px solid #333333;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

.hero-text-box {
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>