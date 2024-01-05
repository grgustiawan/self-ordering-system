<template>
  <div>
        <!-- banner start -->
        <div class="offer-banner-wrapper">
            <div class="offer-banner-body">
                <h1 class="offer-banner-text">Today Offers</h1>
            </div>
        </div>
        <!-- banner end -->

        <!-- offers banner section start -->
        <MainOfferSlider />
        <!-- offers banner section start -->

        <!-- big deal section start -->
        <TodaySpecialSlider />
        <Divider />

        <FoodComboSlider />
        <Divider />
        <!-- big deal section end -->

        <!-- Restaurants section start -->
        <ExplorePromotion />

        <!-- panel-space start -->
        <section class="panel-space"></section>
        <!-- panel-space end -->

        <Navbar />

  </div>
</template>

<script>
import Navbar from '../components/NavbarV2.vue'
import MainOfferSlider from '../components/MainOfferSlider.vue';
import ExplorePromotion from '../components/ExplorePromotion.vue';
import FoodComboSlider from '@/components/FoodComboSlider.vue';
import TodaySpecialSlider from '@/components/TodaySpecialSlider.vue';
import Divider from '@/components/Divider.vue';
export default {
    name: 'OffersView',
    components: {
    Navbar,
    MainOfferSlider,
    ExplorePromotion,
    FoodComboSlider,
    TodaySpecialSlider,
    Divider
}
}
</script>

<style>
.offer-banner-wrapper{
  position: relative;
  top:0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  max-width: 600px;
  width: 100vw;
  height: 300px;
}

.offer-banner-body{
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #3b273e;
  background-image: url('@/assets/backgrounds/promotion-background.jpg');
  background-size: 100% 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  --mask:
    radial-gradient(10.00px at 50% calc(100% - 10.00px),#000 99%,#0000 101%) calc(50% - 20px) 0/40px 100%,
    radial-gradient(10.00px at 50% calc(100% + 0.00px),#0000 99%,#000 101%) 50% calc(100% - 10px)/40px 100% repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
} 

.offer-banner-text{
  width: 30%;
  position: fixed;
  bottom: 100px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  color: #736d55;
  font-size: 35pt;
  font-family: 'walkway_semiboldregular';
}
</style>