<template>
    <div>
       <section class="section-t-space">
          <div class="d-flex justify-content-center mb-3" v-if="loading">
                <CardLoaderVue />
                <CardLoaderVue />
                <CardLoaderVue />
          </div>
  
          <div v-if="!loading" class="custom-container">
              <div class="title">
                  <h3 class="mt-0">Popular Items</h3>
              </div>
  
              <div class="">
                <Splide :options="{ rewind: true, 
                                    perPage: 1, 
                                    pagination: false,
                                    type: 'loop', 
                                    snap: 'center',
                                    arrows: false}" aria-label="My Favorite Images">
                    <SplideSlide v-for="ppl in popular" :key="ppl.id">
                            <div class="popular-item-wrapper">
                                <div class="popular-item-content">
                                    <img class="popular-item-veges" src="/assets/images/banner/veges.png" alt="">
                                    <img class="popular-item-bg" src="/assets/images/banner/popular-item-bg.jpg" alt="">
                                    
                                    <h1 class="popular-item-title">{{ ppl.name }}</h1>
                                    <img class="popular-item-img" :src="getPopularItemImg(ppl.image)" alt="">
                                    <h1 class="popular-item-price">{{ String(ppl.price).slice(0, -3) + 'K' }}</h1>

                                    <div class="popular-item-rating">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/surjmvno.json"
                                            trigger="morph"
                                            colors="primary:#faefd1,secondary:#e8b730"
                                            style="width:40px;height:40px">
                                        </lord-icon>

                                        <h1 class="popular-item-ratingtext">{{ ppl.stars }}</h1>
                                        <span class="popular-item-reviewtext">({{ String(ppl.reviews).slice(0, -3) + 'K' }} reviews)</span>
                                    </div>
                                    <div class="popular-item-btn-wrapper">
                                        <a href="" class="popular-item-btn">
                                            Add To Cart
                                        </a>
                                        <a href="" class="popular-item-reviews">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/mdgrhyca.json"
                                                trigger="morph"
                                                colors="primary:#ffffff,secondary:#e8e230"
                                                style="width:50px;height:50px">
                                            </lord-icon>
                                        </a>
                                        <a href="" class="popular-item-like">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/rjzlnunf.json"
                                                trigger="hover"
                                                colors="primary:#ffffff,secondary:#ee66aa"
                                                stroke="90"
                                                style="width:50px;height:50px;">
                                            </lord-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </SplideSlide>
                </Splide>
              </div>
            
          </div>
      </section>
    </div>
  </template>
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css';
  import '@splidejs/vue-splide/css/core';
  import CardLoaderVue from './loader/CardLoader.vue';
  
  export default ({
    name: 'FoodSlider',
    components: {
      Splide,
      SplideSlide,
      CardLoaderVue
    },
    data(){
      return {
        popular: [
            {id: 1, name: 'Cheese Mania Burger', price: 80000, image: 'burger-ads.png', reviews: 3800, stars: 4.6},
            {id: 2, name: 'Double Cheese Burst', price: 120000, image: 'pizza-ads.png', reviews: 1800, stars: 4.8},
            {id: 3, name: 'Wagyu Steak All Day', price: 240000, image: 'wagyu-ads.png', reviews: 2200, stars: 4.7},
        ],
        loading: false,
      }
    },
    methods: {
        getPopularItemImg(filename){
            return '/assets/images/banner/' + filename;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
  })
  </script>

<style>
@import url('https://fonts.cdnfonts.com/css/youthome');
@import url('https://fonts.cdnfonts.com/css/television');
@import url('https://fonts.cdnfonts.com/css/sf-action-man');

.popular-item-wrapper{
    width: 100%;
    height: 500px;
}

.popular-item-content{
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 330px;
    height: 330px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
    background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
    border-radius: 60px;
    margin-bottom: 50px;
    overflow: hidden;
}

.popular-item-bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 60px;
    opacity: 0.2;
}

.popular-item-veges{
    position: absolute;
    top: -80px;
    right: -50px;
    width: 230px;
    z-index: 1;
    object-fit: cover;
    transform: rotate(90deg);
}

.popular-item-title{
    position: absolute;
    top: 50px;
    left: 20px;
    width: 350px;
    font-size: 32pt;
    font-family: 'Youthome', sans-serif;                                                
    font-weight: lighter;
    color: #fff;
    text-align: left;
    z-index: 10;
}

.popular-item-price{
    position: absolute;
    bottom: 200px;
    left: 30px;
    font-size: 45pt;
    font-family: 'TeleVision', sans-serif;
    font-weight: lighter;
    color: #e42525;
}

.popular-item-rating{
    position: absolute;
    bottom: 100px;
    left: 0px;
    margin-left: 0px;
    width: 200px;
    display: flex;
    justify-content: center;
}

.popular-item-ratingtext{
    color: #fff;
    font-family: 'SF Action Man', sans-serif;
    font-size: 18pt;
    margin-top: 6px;
}

.popular-item-reviewtext{
    color: #fff;
    font-family: 'SF Action Man', sans-serif;
    font-size: 12pt;
    font-weight: lighter;
    margin-top: 10px;
    margin-left: 10px;
}

.popular-item-img{
    position: absolute;
    top: 95px;
    right: -20px;
    width: 100px;
    transition: .3s ease;
    z-index: 20;
}

.popular-item-img:hover{
    transform: scale(115%) translateY(-25px);
}

.popular-item-btn-wrapper{
    position: fixed;
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 90%;
    display: flex;
    justify-content: space-around;
    padding: 0;
}

.popular-item-btn{
    width: 300px;
    height: 65px;
    border-radius: 50px;
    background-color: rgb(255, 255, 255);
    z-index: 20;
    margin: 0;
    padding-top: 12px;
    align-items: center;
    text-align: center;
    font-size: 21pt;
    font-family: 'TeleVision', sans-serif;
    color: #575757;
}

.popular-item-like{
    width: 65px;
    height: 65px;
    border-radius: 100%;
    background-color: #ffffff33;
    margin: 0;
    padding: 7px;
}

.popular-item-reviews{
    width: 65px;
    height: 65px;
    border-radius: 100%;
    background-color: #ffffff33;
    margin: 0;
    padding: 7px;
}

@media (min-width: 768px){
    .popular-item-content{
        width: 90%;
        height: 480px;
    }   

    .popular-item-img{
        position: absolute;
        top: 95px;
        right: -20px;
        width: 300px;
        transition: .3s ease;
        z-index: 20;
    }
}

/* hover */
.popular-item-btn:hover{
    background-color: rgba(107, 107, 107, 0.668);
    color: #ffffff;
}

.popular-item-like:hover{
    background-color: #ffffff98;
}

.popular-item-reviews:hover{
    background-color: #ffffff98;
}

</style>