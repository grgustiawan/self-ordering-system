<template>
  <div>
     <section class="section-t-space">
        <div class="d-flex justify-content-center mb-3" v-if="loading">
            <SideBannerLoaderVue />
            <SideBannerLoaderVue />
            <SideBannerLoaderVue />
        </div>

        <div v-if="!loading" class="custom-container">
            <div class="title">
                <h3 class="mt-0">Today Special</h3>
            </div>

            <div class="today-special-wrapper">
              <Carousel :autoplay="2500" :itemsToShow="3" :wrapAround="true" :transition="500">
                  
                  <Slide v-for="side in sideBanner" :key="side.id">
                      <div class="carousel__item">
                          <div class="today-special">
                              <div class="swiper-slide">
                                  <div class="product-box product-box-bg">
                                        <img class="img-fluid" :src="getImgUrl(side.image)" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Slide>
                  
              </Carousel>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import SideBannerLoaderVue from './loader/SideBannerLoader.vue'

export default ({
  name: 'TodaySpecial',
  components: {
    Carousel,
    Slide,
    SideBannerLoaderVue
  },
  data(){
    return {
      sideBanner: [
        {
          id: 11,
          promotion_name: "Tamani Voucher Diskon 100K",
          description: "",
          slug: "tamani_voucher_discount_100k",
          image: "ads-1.jpg",
          banner_type: "side",
          active: 1,
          start_date: "2023-05-01",
          end_date: "2023-12-31",
          restaurant_id: 1,
          created_at: "2023-05-24T04:56:54.000000Z",
          updated_at: "2023-05-24T04:56:54.000000Z"
        },
        {
          id: 12,
          promotion_name: "Tamani New Menu 10% OFF",
          description: "",
          slug: "tamani_new_menu_10%_off",
          image: "ads-2.jpg",
          banner_type: "side",
          active: 1,
          start_date: "2023-05-01",
          end_date: "2023-12-31",
          restaurant_id: 1,
          created_at: "2023-05-24T04:56:54.000000Z",
          updated_at: "2023-05-24T04:56:54.000000Z"
        },
        {
          id: 13,
          promotion_name: "Tamani Maydays Treat 15% OFF For All Drinks",
          description: "",
          slug: "tamani_maydays_treat_15%_off_for_all_drinks",
          image: "ads-3.jpg",
          banner_type: "side",
          active: 1,
          start_date: "2023-05-01",
          end_date: "2023-12-31",
          restaurant_id: 1,
          created_at: "2023-05-24T04:56:54.000000Z",
          updated_at: "2023-05-24T04:56:54.000000Z"
        },
        {
          id: 14,
          promotion_name: "Tamani Disc 20% All Kombucha Menu",
          description: "",
          slug: "tamani_disc_20%_all_kombucha_menu",
          image: "ads-4.jpg",
          banner_type: "side",
          active: 1,
          start_date: "2023-05-01",
          end_date: "2023-12-31",
          restaurant_id: 1,
          created_at: "2023-05-24T04:56:54.000000Z",
          updated_at: "2023-05-24T04:56:54.000000Z"
        },
        {
          id: 15,
          promotion_name: "Tamani Eid Mubarak Buy 5 Get 1 Free",
          description: "",
          slug: "tamani_eid_mubarak_buy_5_get_1_free",
          image: "ads-5.jpg",
          banner_type: "side",
          active: 1,
          start_date: "2023-05-01",
          end_date: "2023-12-31",
          restaurant_id: 1,
          created_at: "2023-05-24T04:56:54.000000Z",
          updated_at: "2023-05-24T04:56:54.000000Z"
        }
      ],
      loading: false
    }
  },
  mounted(){
    this.getTodaySpecial()
  },
  methods:{
    async getTodaySpecial(){
      this.loading = true;
      setTimeout(() => {
          this.loading = false;
      }, 1000);
    },
    getImgUrl(filename){
      return '/assets/images/banner/' + filename;
    }
  }
})
</script>

<style>
.carousel__slide {
  padding: 5px;
  margin-top:1px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.today-special-wrapper{
  margin-top:-20px;
}

.today-special {
  margin-top: 5px;
  margin-bottom: 5px;
}

.today-special .product-box {
  position: relative;
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(var(--black), 0) -3.45%, rgba(var(--black), 0.12) 87.93%);
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
          box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  overflow: visible;
}
[dir=rtl] .today-special .product-box {
  direction: rtl;
}
.today-special .product-box-bg {
  padding: 2px;
  background-color: #603939;
  margin-bottom: 15px;
}
.today-special .product-box-bg a {
  border-radius: 8px;
  margin-bottom: 8px;
}
.today-special .product-box-bg .product-box-detail {
  background-color: transparent !important;
  padding: 0 !important;
}
.today-special .product-box .product-box-img {
  margin-top: -50px;
  display: block;
}
.today-special .product-box .product-box-detail h5 {
  color: rgba(var(--dark-text), 1);
  font-size: 3%;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.today-special .product-box .product-box-detail .timing {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 12px;
  margin-top: 3px;
}
.today-special .product-box .product-box-detail .timing li {
  position: relative;
  font-size: 13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 5px;
  color: rgba(var(--dark-text), 1);
}
.today-special .product-box .product-box-detail .timing li:last-child::after {
  display: none;
}
.today-special .product-box .product-box-detail .timing li .star {
  width: 12px;
  height: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 8px;
  background-color: rgba(var(--success-color), 1);
  border-radius: 100%;
}
.today-special .product-box .product-box-detail .timing li .star i {
  color: rgb(225, 225, 225);
}
.today-special .product-box .product-box-detail .timing li::after {
  content: "";
  position: absolute;
  margin-left: 40px;
  -webkit-transform: translateY(-50%) rotate(90deg);
          transform: translateY(-50%) rotate(90deg);
  top: 50%;
  background-color: rgba(var(--dashed-line), 1);
  width: 30%;
  height: 1px;
}
[dir=rtl] .today-special .product-box .product-box-detail .timing li::after {
  margin-left: unset;
  margin-right: 44px;
}
.today-special .product-box .product-box-detail .bottom-panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 10px;
}
.today-special .product-box .product-box-detail .bottom-panel .price {
  color: rgba(var(--dark-text), 1);
  font-weight: 600;
}
.today-special .product-box .product-box-detail .bottom-panel .cart {
  width: 25px;
  height: 25px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: rgba(var(--theme-color), 0.2);
  border-radius: 100%;
}
.today-special .product-box .product-box-detail .bottom-panel .cart i {
  color: rgba(var(--theme-color), 1);
}
</style>