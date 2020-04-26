<template>
<div>
    
    
    <app-jumbotron />
        <h1 class="heading--style">About Us</h1>
    <section class="section__about--grid">
        
        <div class="grid-item1"> 
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem Ipsum has been <br />
            the industry's standard dummy text ever since the <br />
            1500s, when an unknown printer took a galley of <br />
            type and scrambled it to make a type specimen <br />
            book. It has survived not only five centuries, but <br />
            also the leap into electronic typesetting, remaining <br />
            essentially unchanged. It was popularised in the <br />
            1960s with the release of Letraset sheets <br />
            containing Lorem Ipsum passages, and more <br />
            recently with desktop publishing software like <br />
            Aldus PageMaker including versions of Lorem Ipsum. <br />
        </div>
        <div class="grid-item2">
            <img width="400" height="400" src="https://picsum.photos/seed/picsum/200/300" alt="">
        </div>
        <div class="grid-item1">
            <img width="400" height="400" src="https://picsum.photos/200/300?grayscale" alt="">
        </div>
        
        <div class="grid-item2"> 
            It is a long established fact that a reader will be <br />
            distracted by the readable content of a page when <br />
            looking at its layout. The point of using Lorem <br />
            Ipsum is that it has a more-or-less normal <br />
            distribution of letters, as opposed to using <br />
            'Content here, content here', making it look like <br />
            readable English. Many desktop publishing <br />
            packages and web page editors now use Lorem <br />
            Ipsum as their default model text, and a search for <br />
            'lorem ipsum' will uncover many web sites still in <br />
            their infancy. Various versions have evolved over <br />
            the years, sometimes by accident, sometimes on <br />
            purpose (injected humour and the like). <br />
        </div>

            
            
    </section>
</div>    
</template>

<script>
import appJumbotron from '../../src/components/Shared/Jumbotron'
export default {
  name: 'About',
  components: {
      appJumbotron
  }  
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


.section__about--grid {
    display: grid;
    row-gap: 50px;
    column-gap: 50px;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto;
}

.grid-item1 {
    grid-column: 1 / 2;
}

.grid-item2 {
    grid-column: 2 / 2;
}

.heading--style {
    text-align: center;
    margin: 0.2rem;
    color: orange;
    font-size: 2rem;
    margin: 1.5rem 1.5rem 2.5rem 1.5rem;
    padding: 1.5rem;
    
    border-bottom: solid 2px orange;
}


</style>