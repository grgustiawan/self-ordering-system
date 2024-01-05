<template>
    <div class="slide-container swiper">
        <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
                <router-link :to="{ name: 'main' }" class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                            <img class="img-fluid categories-img" src="assets/images/product/pizaa.png" alt="pizza" />
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <h3 class="name">Name</h3>
                    </div>
                </router-link>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SwipperVue'
}
</script>

<style>

</style>