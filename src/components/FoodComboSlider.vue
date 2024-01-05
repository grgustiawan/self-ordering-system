<template>
  <div>
     <section class="section-t-space">
        <div class="d-flex justify-content-center mb-3" v-if="loading">
              <CardLoaderVue />
              <CardLoaderVue />
              <CardLoaderVue />
        </div>

        <div class="food-video-container" v-if="video" @click="video = false">
          <video autoplay muted loop class="food-video">
            <source src="/assets/images/video/caesar_salad.mp4" type="video/mp4" />
          </video>
        </div>

        <div v-if="!loading" class="custom-container">
            <div class="title">
                <h3 class="mt-0">Special Combo</h3>
                <a href="" style="color: #8abfb0;font-weight: bold;">See All</a>
            </div>

            <div class="combo-wrapper">
              <Splide :options="{ rewind: true, 
                                  perPage: perPages, 
                                  pagination: false,
                                  type: 'loop', 
                                  snap: 'center',
                                  arrows: false}" aria-label="My Favorite Images">
                  <SplideSlide v-for="rcm in recomended.slice(7, 12)" :key="rcm.id">
                    <div class="comboslider-sold" v-show="rcm.quantity == 0">
                        <h1 class="text-white">Item Sold Out</h1>
                    </div>
                    <router-link :to="{name: 'Food', query: {id: rcm.id, scr: this.$route.query.scr}}" class="card" :class="{'mobile-width' : perPages == 2}">
                        <router-link :to="{name: 'Food', query: {id: rcm.id, scr: this.$route.query.scr}}"  class="card-img">
                              <img :src="getImageUrl(rcm.image)" alt="">
                        </router-link>
                        
                        <div class="card-info">
                          <p class="text-title">{{ rcm.name }}</p>
                          <p class="text-body">
                              <svg fill="#000000" width="28px" height="28px" style="margin-top:-5px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.90625 1.96875C7.863281 1.976563 7.820313 1.988281 7.78125 2C7.316406 2.105469 6.988281 2.523438 7 3L7 12L16 12C16.359375 12.003906 16.695313 11.816406 16.878906 11.503906C17.058594 11.191406 17.058594 10.808594 16.878906 10.496094C16.695313 10.183594 16.359375 9.996094 16 10L10.3125 10C14.101563 6.292969 19.277344 4 25 4C36.609375 4 46 13.390625 46 25C46 36.609375 36.609375 46 25 46C13.390625 46 4 36.609375 4 25C4 21.527344 4.855469 18.257813 6.34375 15.375L4.5625 14.46875C2.929688 17.625 2 21.207031 2 25C2 37.691406 12.308594 48 25 48C37.691406 48 48 37.691406 48 25C48 12.308594 37.691406 2 25 2C18.773438 2 13.140625 4.503906 9 8.53125L9 3C9.011719 2.710938 8.894531 2.433594 8.6875 2.238281C8.476563 2.039063 8.191406 1.941406 7.90625 1.96875 Z M 25 5C24.449219 5 24 5.449219 24 6C24 6.550781 24.449219 7 25 7C25.550781 7 26 6.550781 26 6C26 5.449219 25.550781 5 25 5 Z M 34.34375 7.5625C34.058594 7.601563 33.78125 7.761719 33.625 8.03125C33.347656 8.507813 33.523438 9.128906 34 9.40625C34.476563 9.683594 35.097656 9.507813 35.375 9.03125C35.652344 8.554688 35.476563 7.964844 35 7.6875C34.878906 7.617188 34.753906 7.578125 34.625 7.5625C34.527344 7.550781 34.4375 7.550781 34.34375 7.5625 Z M 41.34375 14.5C41.214844 14.515625 41.058594 14.554688 40.9375 14.625C40.460938 14.902344 40.316406 15.523438 40.59375 16C40.871094 16.476563 41.460938 16.652344 41.9375 16.375C42.414063 16.097656 42.589844 15.476563 42.3125 15C42.105469 14.640625 41.730469 14.453125 41.34375 14.5 Z M 17 18.53125C14.054688 18.53125 12.34375 20.882813 12.34375 24.875C12.34375 26.3125 12.582031 27.492188 13.0625 28.4375C13.828125 30.011719 15.191406 30.90625 16.9375 30.90625C19.433594 30.90625 21.1875 29.179688 21.1875 26.78125C21.1875 24.503906 19.578125 22.84375 17.34375 22.84375C15.949219 22.84375 14.820313 23.492188 14.25 24.625L14.09375 24.625C14.132813 21.792969 15.1875 20.15625 17 20.15625C18.070313 20.15625 18.894531 20.753906 19.1875 21.71875L21.03125 21.71875C20.671875 19.792969 19.082031 18.53125 17 18.53125 Z M 27.6875 18.53125C24.953125 18.53125 23.3125 20.824219 23.3125 24.71875C23.3125 28.636719 24.9375 30.875 27.6875 30.875C30.429688 30.875 32 28.628906 32 24.71875C32 20.816406 30.40625 18.53125 27.6875 18.53125 Z M 27.6875 20.15625C29.269531 20.15625 30.15625 21.765625 30.15625 24.71875C30.15625 27.707031 29.289063 29.28125 27.6875 29.28125C26.085938 29.28125 25.15625 27.699219 25.15625 24.71875C25.15625 21.773438 26.105469 20.15625 27.6875 20.15625 Z M 36.59375 23.5625C35.03125 23.5625 33.9375 24.433594 33.9375 25.65625C33.9375 26.683594 34.53125 27.25 35.84375 27.5625L37.0625 27.84375C37.753906 28.007813 38.0625 28.273438 38.0625 28.6875C38.0625 29.238281 37.476563 29.625 36.625 29.625C35.800781 29.625 35.265625 29.3125 35.09375 28.78125L33.75 28.78125C33.871094 30.007813 34.949219 30.75 36.59375 30.75C38.246094 30.75 39.4375 29.863281 39.4375 28.5625C39.4375 27.546875 38.8125 26.992188 37.5 26.6875L36.375 26.40625C35.625 26.234375 35.28125 25.976563 35.28125 25.5625C35.28125 25.023438 35.832031 24.65625 36.59375 24.65625C37.367188 24.65625 37.871094 24.992188 38 25.5L39.3125 25.5C39.179688 24.28125 38.148438 23.5625 36.59375 23.5625 Z M 6 24C5.449219 24 5 24.449219 5 25C5 25.550781 5.449219 26 6 26C6.550781 26 7 25.550781 7 25C7 24.449219 6.550781 24 6 24 Z M 44 24C43.449219 24 43 24.449219 43 25C43 25.550781 43.449219 26 44 26C44.550781 26 45 25.550781 45 25C45 24.449219 44.550781 24 44 24 Z M 16.9375 24.40625C18.382813 24.40625 19.375 25.414063 19.375 26.84375C19.375 28.230469 18.308594 29.28125 16.90625 29.28125C15.503906 29.28125 14.4375 28.214844 14.4375 26.8125C14.4375 25.417969 15.5 24.40625 16.9375 24.40625 Z M 8.4375 33.5C8.308594 33.515625 8.152344 33.554688 8.03125 33.625C7.554688 33.902344 7.410156 34.523438 7.6875 35C7.964844 35.476563 8.554688 35.652344 9.03125 35.375C9.507813 35.097656 9.683594 34.476563 9.40625 34C9.199219 33.640625 8.824219 33.453125 8.4375 33.5 Z M 41.28125 33.5C41.003906 33.550781 40.75 33.730469 40.59375 34C40.316406 34.476563 40.492188 35.097656 40.96875 35.375C41.445313 35.652344 42.035156 35.476563 42.3125 35C42.589844 34.523438 42.445313 33.902344 41.96875 33.625C41.847656 33.554688 41.691406 33.515625 41.5625 33.5C41.464844 33.488281 41.375 33.484375 41.28125 33.5 Z M 15.34375 40.46875C15.058594 40.519531 14.78125 40.699219 14.625 40.96875C14.347656 41.445313 14.523438 42.035156 15 42.3125C15.476563 42.589844 16.097656 42.445313 16.375 41.96875C16.652344 41.492188 16.476563 40.871094 16 40.59375C15.878906 40.523438 15.753906 40.484375 15.625 40.46875C15.527344 40.457031 15.4375 40.453125 15.34375 40.46875 Z M 34.375 40.46875C34.246094 40.484375 34.121094 40.523438 34 40.59375C33.523438 40.871094 33.347656 41.492188 33.625 41.96875C33.902344 42.445313 34.523438 42.589844 35 42.3125C35.476563 42.035156 35.652344 41.445313 35.375 40.96875C35.167969 40.609375 34.761719 40.421875 34.375 40.46875 Z M 25 43C24.449219 43 24 43.449219 24 44C24 44.550781 24.449219 45 25 45C25.550781 45 26 44.550781 26 44C26 43.449219 25.550781 43 25 43Z"></path></g></svg>
                              30 min | 
                              0 sold
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

                    <svg id="play" @click="video = true"  viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
                      <g fill="none">
                          <g  transform="translate(2.000000, 2.000000)" stroke-width="4">
                              <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id="lineOne" stroke="#A5CB43"></path>
                              <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id="triangle" stroke="#A3CD3A"></path>
                              <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id="lineTwo" stroke="#A5CB43"></path>
                          </g>
                      </g>
                  </svg>
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
  name: 'FoodComboSlider',
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
.comboslider-sold{
  position: absolute;
  background-color: #00000076;
  background-size: cover;
  width: 90%;
  height: 100%;
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
    .comboslider-sold{
      top: 10px;
      width: 148px;
      left: 5px;
      height: 80%;
    }
}
</style>