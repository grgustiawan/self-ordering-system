<template>
    <div>
        <section class="banner-section section-t-space header-margin">
            <div class="d-flex justify-content-center mb-3" v-if="loading">
                <BannerLoader />
            </div>

            <div v-if="!loading" class="custom-container">
                <div class="swiper banner1">
                    <div class="swiper-wrapper">
                        <Carousel :autoplay="4000" :wrap-around="true">
                            <Slide v-for="slide in banner" :key="slide.id">
                                <div class="swiper-slide">
                                    <!-- <router-link :to="{name: 'Promotion', params: {id: slide.id, token: this.$route.params.token}}"> -->
                                        <img class="img-fluid banner-img" :src="getImageUrl(slide.image)" alt="banner1" />
                                    <!-- </router-link> -->
                                </div>
                            </Slide>

                            <template #addons>
                                <Pagination />
                            </template>
                        </Carousel>

                    <div class="swiper-pagination"></div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import BannerLoader from '@/components/loader/BannerLoader.vue';

export default ({
  name: 'HeaderSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    BannerLoader
  },
  data(){
    return {
        banner: [
            {
                id: 1,
                promotion_name: "Christmas Hampers",
                description: "",
                slug: "christmas_hampers",
                image: "banner1.jpg",
                banner_type: "header",
                active: 1,
                start_date: "2023-12-01",
                end_date: "2024-01-01",
                restaurant_id: 1,
                created_at: "2023-05-24T04:56:54.000000Z",
                updated_at: "2023-05-24T04:56:54.000000Z"
            }
        ],
        loading: false,
    }
  },
  mounted() {
    this.getHeaderSlider()
  },
  methods: {
    async getHeaderSlider(){
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    getImageUrl(filename){
        return '/assets/images/banner/' + filename;
    }
  }
})
</script>

<style>
.header-margin{
    margin-top: -20px
}

.header-wrapper {
  direction: ltr;
}

.banner-img{
    width: 90%;
    height: auto;
}
</style>