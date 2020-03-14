<template>
    <header class="header-style header__flex">
        <div class="nav-logo__right">
        <a href="/" class="nav-item__margin">
        <img class="site-logo" alt="Shelf Laptops logo" src="../../assets/shelf-laptops-logo.png">
        </a>
        </div>
    <div class="nav-logo__left">
        <router-link class="nav-item__margin text__font--black" to="/">Home</router-link>
        <router-link class="nav-item__margin text__font--black" to="/about">About</router-link>
        <router-link class="nav-item__margin text__font--black" to="/">Laptops</router-link>
    </div>
    </header>
</template>

<script>
export default {
    name: 'appHeader'
}
</script>

<style scoped>

/* a {
    color: #000000;
} */
.site-logo {
    max-height: 80px;
    background-size: cover;
}

.text__font--black {
    color: #000000;
}

</style>