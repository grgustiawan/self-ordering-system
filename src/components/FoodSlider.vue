<template>
  <div>
     <section class="section-t-space">
        <div class="d-flex justify-content-center mb-3" v-if="loading">
              <CardLoaderVue />
              <CardLoaderVue />
              <CardLoaderVue v-if="isDesktop" />
        </div>

        <div class="food-video-container" v-if="video" @click="dissableVideo">
          <video autoplay muted loop class="food-video">
            <source src="/assets/images/video/caesar_salad.mp4" type="video/mp4" />
          </video>
        </div>

        <div v-if="!loading" class="custom-container">
            <div class="title">
            <h3 class="mt-0" v-show="!recomended.is_reserv">Recomended For You</h3>
            <h3 class="mt-0" v-show="recomended.is_reserv">{{ recomended.reserv_name }} Reservation</h3>
                <!-- <router-link :to="{name: 'Recomended', query:{scr: this.$route.query.scr}}" style="color: #8abfb0;font-weight: bold;">See All</router-link> -->
            </div>

            <div class="combo-wrapper">
              <Splide :options="{ 
                                  rewind: true, 
                                  perPage: perPages, 
                                  pagination: false,
                                  type: 'loop', 
                                  drag: 'free',
                                  arrows: false
                                }" aria-label="My Favorite Images">
                  <SplideSlide v-for="rcm in recomended.food" :key="rcm.id">
                    <div class="foodslider-sold" v-show="rcm.quantity == 0">
                        <h1 class="text-white">Item Sold Out</h1>
                    </div>

                    <router-link :to="{name: 'Food', query:{id: rcm.id, scr: this.$route.query.scr}}" class="card" :class="{'mobile-width' : perPages == 2}">
                        <router-link :to="{name: 'Food', query:{id: rcm.id, scr: this.$route.query.scr}}" class="card-img">
                            <img :src="getImageUrl(rcm.image)" alt="">
                        </router-link>
                        
                        <div class="card-info">
                          <span class="text-title">{{ rcm.name }}</span>
                          <p class="text-body">
                              {{ rcm.category }}
                          </p>
                        </div>
                        <div class="card-footer">
                          <span class="text-footer">Rp. {{ formatPrice(rcm.price) }}</span>
                          <div class="card-button">
                            <lord-icon
                                src="https://cdn.lordicon.com/cllunfud.json"
                                trigger="hover"
                                colors="outline:#603939,primary:#e86830,secondary:#e8e230"
                                style="width:28px;height:28px">
                            </lord-icon>
                          </div>
                        </div>
                    </router-link>
                    
                    <!-- <svg id="play" @click="showVideo"  viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                        <g fill="none">
                            <g  transform="translate(2.000000, 2.000000)" stroke-width="4">
                                <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id="lineOne" stroke="#A5CB43"></path>
                                <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id="triangle" stroke="#A3CD3A"></path>
                                <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id="lineTwo" stroke="#A5CB43"></path>
                            </g>
                        </g>
                    </svg> -->

                  </SplideSlide>
              </Splide>
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
      recomended: [],
      loading: false,
      video: false,
      servers: '',
      screensize: 0,
      perPages: 3,
      isDesktop: false,
    }
  },
  mounted(){
    this.loading = true;
    const decode = atob(this.$route.query.scr);
    const arrData = decode.split(";");
    this.servers = 'https://' + arrData[0] + '/api/web';
    this.getFoodCombo()
  },
  created(){
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      if(window.screen.width > 768) this.isDesktop = true
  },
  methods: {
      handleResize() {
          this.screensize = window.innerWidth;
          if(this.screensize < 767) this.perPages = 2;
          else this.perPages = 3;
      },
      async getFoodCombo(){
        this.loading = true;
        try {
          let { data } = await axios.get(this.servers + '/menus/' + this.$route.query.scr);
          this.recomended = data;
          this.loading = false;
          this.$emit("loading", false);
        } catch (e) { 
          this.loading = true;
        }
      },
      getImageUrl(filename){
          let name = String(filename).replace("JPG", "png");
          return '/assets/images/food/tamani/' + name;
      },
      formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      showVideo(){
        this.video = true;
      },
      dissableVideo(){
        this.video = false;
      }
  },
})
</script>

<style lang="scss">
svg#play {
  position: relative;
  width:30px;
  height: 30px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display:block;
  cursor: pointer;
  transform-origin: 50% 50%;
}

svg#play #triangle {
  fill:rgba(22,22,22,0);
  transition:500ms;
  transform-origin: 50% 50%;
}
svg#play:hover #triangle {
  fill:#A3CD3A;
  transform-origin: 50% 50%;
}

 svg #lineOne, svg #lineTwo {
  transform-origin: 50% 50%;
  transition: 1s;
} 

 svg:hover #lineOne {
  transform: rotate(260deg);
   -webkit-transform: rotate(260deg);
-moz-transform: rotate(260deg);
-o-transform: rotate(260deg);
   transform-origin: 50% 50%;
} 

 svg:hover #lineTwo {
  transform: rotate(-450deg);
   transform-origin: 50% 50%;
} 
</style>

<style>
@import url('https://fonts.cdnfonts.com/css/keskiyon-lumisade');

.food-video{
  position: relative;
  margin-top: 10%;
  max-width: 600px;
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid var(--gray);
  transition: all 3s ease;
}

.food-video:focus::before{
  transform: translateY(-100%);
}

.foodslider-sold {
    position: absolute;
    background-color: #00000076;
    background-size: cover;
    width: 90%;
    height: 225px;
    top: 20px;
    left: 10px;
    margin-left: 30px;
    height: 290px;
    border-radius: 5px;
    margin: 10px 1%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
}

@media (max-width: 767px){
    .foodslider-sold{
      top: 10px;
      width: 148px;
      left: 5px;
      height: 229px;
    }
}

.glightbox_video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  }

.outer_circle {
  stroke-width: 3;
  stroke-dasharray: 410; 
   stroke-dashoffset: 0;
  stroke-linecap: square;
  transition: all .4s ease-out;
}

.glightbox_video:hover .outer_circle {
stroke-dashoffset:410;
  transition: stroke .7s .4s ease-out, stroke-dashoffset .4s ease-out
}

.glightbox_video:hover 
.inner-circle {
  fill: #BF2428;
  transition:fill .4s .3s ease-out;
  
}

.glightbox_video:hover
.play{
    fill: white;
  transition:fill .4s .3s ease-out;
}

.food-video-container{
  position: fixed;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  max-width: 600px;
  width: 100%;
  height: 100%;
  background-color: #000000bc;
  z-index: 500;
}

.combo-wrapper{
   position:static;
   top: 0;
   max-width: 480px;
   width: 90vw;
   height: 300px;
   margin-bottom: 30px;
   padding: 0;
}

.card {
 width: 110px;
 height: 255px;
 padding: .3em;
 position: relative;
 box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
 border: 2.5px solid var(--dark);
 background-color: var(--white);
 margin: 5px 5px;
 margin-top: 20px;
 transition: .3s ease;
}

.card-img {
  background-image: url('@/assets/backgrounds/wood-tray.png');
  filter: drop-shadow(5px 5px 2px #00000079);
  background-size: 120% 120%;
  background-position: center;
  object-fit: cover;
  height: 100px;
  width: 100%;
  border-radius: .5rem;
  transition: .3s ease;
  padding: 0;
}

.card-img img {
  margin-top: 8px;
  width: 90px;
}

/*Text*/
.text-title {
 position: absolute;
 width: 100%;
 top: 95px;
 left: 50%;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%); 
 font-family: 'Keskiyon Lumisade', sans-serif;                                                
 font-weight: normal;
 font-size: 10pt;
 color: #000000;
 margin: 0;
 color: var(--dark);
}

.text-footer {
 font-weight: 600;
 font-size: 0.9em;
 color: #ad2300
}

.text-body {
 position: absolute;
 width: 100%;
 bottom: 50px;
 left: 50%;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
 font-size: 9pt;
 margin: 0;
 margin-bottom: 5px;
 display: flex;
 flex-direction: column;
}

@media(min-width: 768px){
  .combo-wrapper{
    max-width: 560px;
    height: 330px;
  }

  .card{
    width: 170px;
    height: 290px;
    padding: .8em;
    margin: 5px 10px;
    margin-top: 30px;
  }

  .card-img{
    height: 200px;
    background-size: 120% 200px;
  }

  .card-img img{
    margin-top: 0px;
    width: 150px;
  }

  .text-title{
    position: absolute;
    width: 100%;
    top: 170px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%); 
  }
}

.card-info {
  padding-top: 2%;
}

svg {
 width: 20px;
 height: 20px;
}

.card-footer {
 position: absolute;
 left:0;
 bottom: 0;
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding: 10px 0;
 border-top: 2.5px solid var(--dark);
 background-color: var(--white);
 border-radius: 15px;
}

/*Button*/
.card-button {
 border: 1px solid #252525;
 display: flex;
 padding: 0;
 cursor: pointer;
 border-radius: 50px;
 margin: 0 5px;
 transition: .3s ease-in-out;
}

/*Hover*/
.card:hover{
  transform: scale(103%);
}

.card-img:hover {
 transform: translateY(-25%);
}

.card-button:hover {
 border: 1px solid #f5835e;
 background-color: #f5835e;
}
/*  */

.food-props {
  margin-top: 30px
}

.mobile-width{
  width: 150px;
  height: 230px;
}
</style>