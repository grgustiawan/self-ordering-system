<template>
    <div>
       <section class="section-t-space">
          <div class="d-flex justify-content-center mb-3" v-if="loading">
              <CategoryLoader />
          </div>

          <div v-if="!loading" class="custom-container">
            <div class="title">
                <h3 class="mt-0">Food Categories</h3>
                <router-link :to="{name: 'Category', query: { scr: this.$route.query.scr}}" style="color: var(--basecolor);font-weight: bold;">See All</router-link>
            </div>

                <div class="category-bg">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        <Splide :options="{ rewind: true, 
                                            perPage: 5,
                                            type: 'loop', 
                                            drag: 'free',
                                            arrows: false,
                                            width: '100%',
                                            pagination: false,
                                            }" aria-label="Category Slider">
                            <SplideSlide v-for="ctg in category" :key="ctg.id">
                                <div class="category-products mx-1">
                                    <div class="swiper-slide"> 
                                        <div class="product-box product-box-bg"> 
                                            <router-link :to="{name: 'CategoryDetail', query: { id: ctg.id, scr: this.$route.query.scr}}" class="product-box-img">
                                                <img class="img-fluid food-props" :src="getImageUrl(ctg.image)" alt="p1" />
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                        </div>
                    </div>
                </div>

          </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css';
  import '@splidejs/vue-splide/css/core';
  import CategoryLoader from './loader/CategoryLoader.vue';
  
  export default ({
    name: 'CategorySlider',
    components: {
      Splide,
      SplideSlide,
      CategoryLoader
    },
    data(){
      return {
        category: [],
        loading: false,
        servers: '',
      }
    },
    beforeMount(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        this.getCategory()
    },
    methods: {
      async getCategory(){
          this.loading = true;
          try {
            let { data } = await axios.get(this.servers + '/categories/' + this.$route.query.scr);
            this.category = data.categories
            this.loading = false;
          } catch(e){console.log(e)}
        },
        getImageUrl(filename){
            let name = filename.replace("JPG", "png");
            return '/assets/images/product/tamani/' + name;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
  })
  </script>
  
  <style>
  .category-bg{
    /* background-image: linear-gradient(113deg,#c2f4ae,#55e6c9 50%,#a0efb6 85%,#a0efb6, #6fe9c1); */
    /* background-image: linear-gradient(113deg,#fe8310,#fe8310 50%,#c76000 85%,#c76000, #c76000); */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
    background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
    position: relative;
    background-position: center;
    margin-bottom: 5px;
    padding: 0 5px;
    border-radius:20px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin-bottom: 15px;
   }

  .food-props {
    margin-top: 30px
  }
  
  .food-slider{
    margin-bottom: 8px;
  }
  
  .category-products {
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .category-products .product-box {
    position: relative;
    border: 1px solid var(--gray);
    /* border-image-source: linear-gradient(180deg, rgba(var(--black), 0) -3.45%, rgba(var(--black), 0.12) 87.93%); */
    box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 10px;
    overflow: visible;
  }
  [dir=rtl] .category-products .product-box {
    direction: rtl;
  }
  
  .category-products .product-box-bg {
    margin-top:15px;
    background-color: var(--white);
  }

  .category-products .product-box-bg a {
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .category-products .product-box-bg .product-box-detail {
    background-color: transparent !important;
    padding: 0 !important;
  }

  .category-products .product-box .product-box-img {
    margin-top: -30px;
    margin-bottom: 0px;
    display: block;
  }

  .category-products .product-box .product-box-detail h5 {
    color: rgba(var(--dark-text), 1);
    font-size: 3%;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .category-products .product-box .product-box-detail .timing li {
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
  </style>