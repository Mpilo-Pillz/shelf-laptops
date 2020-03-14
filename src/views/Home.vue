<template>
<div>
    <!-- <div class="white-space">

    </div> -->
    
    <div class="jumbotron jumbotron__bg-img">
      <div class="jumbo--text">
          <div class="hero-text-box">
            <h1>Need a Laptop <br> At a bargain price</h1>
            <a class="btn btn-full" href="#">Search For Laptops </a>
            <a class="btn btn-ghost" href="#">Show me more </a>
        </div>
      </div>
      
    </div>
    
    <section class="section-about">
        <div class="more-about">
               <h2 class="about-heading about-heading__border"> About Us </h2> 
           <article>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
            
            <br><br>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            <br><br>
            <router-link to="/about">...More about Us</router-link>
            </article>
        </div>
        <div class="about-video">
            <h2 class="about-heading">Search Laptop Model</h2>
              <input class="form-control" type="text" placeholder="Search">
        </div>

    </section>
</div>    
</template>

<script>
export default {
  name: 'Home',
  components: {
       
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