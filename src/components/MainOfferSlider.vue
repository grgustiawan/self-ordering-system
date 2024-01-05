<template>
  <div>
    <section class="pt-2">
        <div class="swiper offer-slide">
        <div class="swiper-wrapper text-center">
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide class="main-offer-slider" v-for="slide in 1" :key="slide">
              <div class="carousel__item">
                  <div class="ads-wrapper">
                    <div class="ads-body" style="background-color: #f5f1e5;">
                      <div class="ribbon"><span>Today Offer</span></div>
                      <h3 class="main-title">Fast Food</h3>
                      <h2 class="secondary-title">Combo</h2>

                      <div class="desc-title">
                          <h2 class="main-desc">55% <span class="second-desc">OFF</span></h2>
                          <h4 class="third-desc">Deal Off The Day</h4>
                      </div>

                      <img class="ads-image" src="/assets/images/product/burger.png" alt="">

                      <a href="" class="ads-button">
                        <svg style="margin-top: 5px;" width="84px" height="64px" viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#603939" offset="0%"> </stop> <stop stop-color="#603939" offset="100%"> </stop> </linearGradient> </defs> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-211.000000, -1910.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero"> <g id="4" transform="translate(50.000000, 1871.000000)"> <path d="M187.812138,39.5802109 L198.325224,50.0042713 L198.41312,50.0858421 C198.764883,50.4346574 198.96954,50.8946897 199,51.4382227 L198.998248,51.6209428 C198.97273,52.0514917 198.80819,52.4628128 198.48394,52.8313977 L198.36126,52.9580208 L187.812138,63.4197891 C187.031988,64.1934036 185.770571,64.1934036 184.990421,63.4197891 C184.205605,62.6415481 184.205605,61.3762573 184.990358,60.5980789 L192.274264,53.3739093 L162.99947,53.3746291 C161.897068,53.3746291 161,52.4850764 161,51.3835318 C161,50.2819872 161.897068,49.3924345 162.999445,49.3924345 L192.039203,49.3917152 L184.990421,42.4019837 C184.205605,41.6237427 184.205605,40.3584519 184.990421,39.5802109 C185.770571,38.8065964 187.031988,38.8065964 187.812138,39.5802109 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
                      </a>
                    </div>
                  </div>
              </div>
            </Slide>
            <Slide class="main-offer-slider" v-for="slide in 1" :key="slide">
              <div class="carousel__item">
                  <div class="ads-wrapper">
                    <div class="ads-body" style="background-color: #f5f1e5;">
                      <div class="ribbon"><span>Today Offer</span></div>
                      <h3 class="main-title">Pizza Mania</h3>
                      <h2 class="secondary-title">Combo</h2>

                      <div class="desc-title">
                          <h2 class="main-desc">35% <span class="second-desc">OFF</span></h2>
                          <h4 class="third-desc">Deal Off The Day</h4>
                      </div>

                      <img class="ads-image" src="/assets/images/product/pizaa.png" alt="">

                      <a href="" class="ads-button">
                        <svg style="margin-top: 5px;" width="84px" height="64px" viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#603939" offset="0%"> </stop> <stop stop-color="#603939" offset="100%"> </stop> </linearGradient> </defs> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-211.000000, -1910.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero"> <g id="4" transform="translate(50.000000, 1871.000000)"> <path d="M187.812138,39.5802109 L198.325224,50.0042713 L198.41312,50.0858421 C198.764883,50.4346574 198.96954,50.8946897 199,51.4382227 L198.998248,51.6209428 C198.97273,52.0514917 198.80819,52.4628128 198.48394,52.8313977 L198.36126,52.9580208 L187.812138,63.4197891 C187.031988,64.1934036 185.770571,64.1934036 184.990421,63.4197891 C184.205605,62.6415481 184.205605,61.3762573 184.990358,60.5980789 L192.274264,53.3739093 L162.99947,53.3746291 C161.897068,53.3746291 161,52.4850764 161,51.3835318 C161,50.2819872 161.897068,49.3924345 162.999445,49.3924345 L192.039203,49.3917152 L184.990421,42.4019837 C184.205605,41.6237427 184.205605,40.3584519 184.990421,39.5802109 C185.770571,38.8065964 187.031988,38.8065964 187.812138,39.5802109 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
                      </a>
                    </div>
                  </div>
              </div>
            </Slide>
            
            <Slide class="main-offer-slider" v-for="slide in 1" :key="slide">
              <div class="carousel__item">
                <div class="swiper-slide">
                  <img class="img-fluid offer-banner" src="/assets/images/banner/banner4.png" alt="banner4" />
                </div>
              </div>
            </Slide>
            <Slide class="main-offer-slider" v-for="slide in 1" :key="slide">
              <div class="carousel__item">
                <div class="swiper-slide">
                  <img class="img-fluid offer-banner" src="/assets/images/banner/banner5.png" alt="banner4" />
                </div>
              </div>
            </Slide>
            <Slide class="main-offer-slider" v-for="slide in 1" :key="slide">
              <div class="carousel__item">
                <div class="swiper-slide">
                  <img class="img-fluid offer-banner" src="/assets/images/banner/banner6.png" alt="banner4" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'MainOfferSlider',
    components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
    },
  }),
}
</script>

<style>
.main-offer-slider{
  margin-top: 10px;
}

.ads-wrapper{
  position: relative;
  top: 30px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 210px;
  height: 350px;
}
.ads-body {
  width: 200px; height: 300px;
  position: relative;
  border: 2.5px solid #603939;
  background-image: url('@/assets/backgrounds/food-doodle.png');
  background-size: 100%;
  object-fit: fill;
  border-radius: 10px;
}

.main-title{
  position: fixed;
  letter-spacing: 1.5px;
  top: 10px;
  left: 10px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: normal;
  color: #ef4932;
}

.secondary-title{
  position: fixed;
  letter-spacing: 4px;
  top: 24px;
  left: 10px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
  color: #3c283f;
}

.desc-title{
  position: fixed;
  top: 80px;
  left: 10px;
}

.main-desc{
  margin-left: -33px;
  color: #ed2242;
}

.second-desc{
  font-size: 11pt;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #3d263e;
}

.third-desc{
  margin-left:5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #3d263e;
}

.ads-image{
  position: fixed;
  top: 120px;
  right: 10px;
  width: 150px;
}

.ads-button{
  position: fixed;
  top: 260px;
  left: 10px;
  width: 70px;
  height: 30px;
  background-color: #bdbdbd81;
  border-radius: 20px;
}

.ads-button:hover{
  background-color: #919191dd;
}

.ribbon {
  position: absolute;
  right: -7px; top: -7px;
  z-index: 2;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}

.ribbon span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#f5835e 0%, #f5835e 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;
}

.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid #d6582e;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #d6582e;
}

.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #d6582e;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #d6582e;
}
</style>