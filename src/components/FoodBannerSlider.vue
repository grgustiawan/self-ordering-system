<template>
    <div class="food-banner">
        <section class="banner-section section-t-space header-margin">
            <div class="custom-container">
                <div class="swiper banner1">
                    <div class="swiper-wrapper">
                        <Carousel :autoplay="2000" :wrap-around="true">
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                    <img class="img-fluid banner-img" src="/assets/images/food/additional/mexican-pizza-adt-1.jpg" alt="banner1" />
                                </div>
                            </Slide>

                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                    <div class="home-banner2">
                                    <img class="img-fluid banner-img" src="/assets/images/food/additional/mexican-pizza-adt-2.jpg" alt="banner2" />
                                    </div>
                                </div>
                            </Slide>

                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                    <img class="img-fluid banner-img" src="/assets/images/food/additional/mexican-pizza-adt-3.jpg" alt="banner3" />
                                </div>
                            </Slide>

                            <template #addons>
                                <Pagination />
                            </template>
                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default ({
  name: 'FoodBannerSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})
</script>

<style>
.food-banner{
    display: block;
    margin-top: -11%;
    width: 100%;
    z-index: 1;
    padding: 0 8px;
    justify-content: center;
    align-content: center;
}

.header-margin{
    margin-top: -20px
}

</style>