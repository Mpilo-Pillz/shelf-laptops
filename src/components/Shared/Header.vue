<template>
    <header class="main-header">
        <div>
            <button @click="toggleBurgerMenu" class="toggle-button">
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
            </button>
            <router-link to="/" class="main-header__brand">
                <img class="site-logo" src="../../assets/shelf-laptops-logo.png" alt="Shelf Laptops">
            </router-link>
        </div>

        <!-- <div class="nav-logo__right">
        <a href="/" class="nav-item__margin">
        <img class="site-logo" alt="Shelf Laptops logo" src="../../assets/shelf-laptops-logo.png">
        </a>
        </div> -->

        <nav class="main-nav">
            <ul class="main-nav__items">
                 
                    <router-link to="/" tag="li" active-class="main-nav__item--cta" exact> 
                    <span class="main-nav__item"><a>Home</a></span>
                    </router-link>
                
                
                    <router-link to="/about" tag="li" active-class="main-nav__item--cta">
                    <span class="main-nav__item"><a>About</a></span>
                    </router-link>
                
                    <router-link to="/laptops" tag="li" active-class="main-nav__item--cta">
                    <span class="main-nav__item"><a>Laptops</a></span> 
                    </router-link>

                     <router-link to="/add-laptop" tag="li" active-class="main-nav__item--cta">
                    <span class="main-nav__item"><a>Add Laptop</a></span> 
                    </router-link>
                
            </ul>
        </nav>
   <nav class="mobile-nav" :class="{open: isOpen}">
        <ul class="mobile-nav__items" >

            <router-link to="/" tag="li" active-class="mobile-nav__item--cta" exact> 
                   <span class="mobile-nav__item"><a>Home</a></span>
            </router-link>
            
            <router-link to="/about" tag="li" active-class="mobile-nav__item--cta">
                <span class="mobile-nav__item"><a>About</a></span> 
            </router-link>
            
            <router-link to="/laptops" tag="li" active-class="mobile-nav__item--cta">
                <span class="mobile-nav__item"><a>Laptops</a></span> 
            </router-link>

            <router-link to="/add-laptop" tag="li" active-class="mobile-nav__item--cta">
                <span class="mobile-nav__item"><a>Add Laptop</a></span> 
            </router-link>
        </ul>
    </nav>
    </header>
</template>

<script>
export default {
    name: 'appHeader',
    data () {
        return {
            isOpen: true
        }
    },
    methods: {
        toggleBurgerMenu: function () {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>
    .open {
        display: inline-block;
    }


.text__font--black {
    color: #000000;
}

</style>