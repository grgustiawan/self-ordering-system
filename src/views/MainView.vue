<template>
    <div>
        <!-- side bar start -->
        <SidebarVue :user_id="branch.member_id" />

        <!-- header start -->
        <header class="section-t-space">
            <div class="custom-container">
            <div class="header">
                <div class="head-content">
                <!-- <button class="sidebar-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
                    <i class="ri-menu-line"></i>
                </button> -->
                <div>
                    <img style="width: 60px;margin-top: -5px;" src="/assets/images/logo/tamani.png" alt="">
                </div>
                <div class="header-location">
                    <h2>{{ ucFirst(branch.company) }}</h2>
                </div>
                </div>
                <ShoppingCartVue />
            </div>
            </div>
        </header>
        <!-- header end -->

        <Searchbar />
        <HeaderSliderVue />
        <CategorySlider />
        <!-- <PopularItemSliderVue /> -->
        <!-- <TodaySpecialSlider /> -->
        <Divider />
        <FoodSliderVue @loading="onLoading" />
        <!-- <FoodComboSlider /> -->
        <!-- <VoucherSelect /> -->
        <!-- <NewComing /> -->
        <!-- <ExplorePromotion /> -->
        <Footer v-if="!loading" />
        <NavbarV2 />
    </div>
</template>

<script>
import axios from 'axios';
import HeaderSliderVue from '@/components/HeaderSlider.vue';
import NavbarV2 from '@/components/NavbarV2.vue';
import SidebarVue from '@/components/Sidebar.vue'; 
import Searchbar from '@/components/Searchbar.vue';
import Divider from '@/components/Divider.vue';
// import TodaySpecialSlider from '@/components/TodaySpecialSlider.vue';
// import VoucherSelect from '@/components/VoucherSelect.vue';
// import ExplorePromotion from '@/components/ExplorePromotion.vue';
import Footer from '@/components/Footer.vue';
// import NewComing from '@/components/NewComing.vue';
import FoodSliderVue from '@/components/FoodSlider.vue';
// import FoodComboSlider from '@/components/FoodComboSlider.vue';
import CategorySlider from '@/components/CategorySlider.vue';
import ShoppingCartVue from '@/components/ShoppingCart.vue';
// import PopularItemSliderVue from '@/components/PopularItemSlider.vue';

export default ({
    name: 'MainView',
    components: {
        NavbarV2,
        SidebarVue,
        HeaderSliderVue,
        Searchbar,
        Divider,
        // TodaySpecialSlider,
        // VoucherSelect,
        // ExplorePromotion,
        Footer,
        // NewComing,
        FoodSliderVue,
        // FoodComboSlider,
        CategorySlider,
        ShoppingCartVue,
        // PopularItemSliderVu,
    },
    data(){
        return {
            decodedToken: null,
            decodedResult: [],
            menu: [],
            branch: [],
            servers: '',
            loading: true,
        }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        this.initialize()
        this.getBranch()
    },
    methods: {
        async initialize(){
            try {
                await axios.get(this.servers + '/cart/' + this.$route.query.scr)
                .then((res) => {
                    if(res.data.is_submitted) this.$router.push({name: 'Submitted', query: {scr: this.$route.query.scr}});
                })
            } catch(error){
                window.location.href = "/"
            }
        },
        async getBranch(){
            try { 
                await axios.get(this.servers + '/home/' + this.$route.query.scr)
                .then((res) => {
                    this.branch = res.data;
                })
            } catch(error){
                console.log(error)
            }
        },
        async getCart(){
            await axios.get(this.servers + '/cart/' + this.$route.query.scr)
            .then((res) => {
                if(res.message === 'Cart Empty'){
                    this.$router.push({name: 'CartEmpty', query:{scr: this.$route.query.scr}})
                } else {
                    this.cart = res.data.data
                    this.$router.push({name: 'Branch', query:{scr: this.$route.query.scr}})
                }
            }).catch((err) => {throw(err)});
        },
        ucFirst(value){
            const name = String(value).toLowerCase().replace("tamani", "");
            const arrName = name.split(" ");
            for (let i = 0; i < arrName.length; i++) {
                arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1);
            }
            const result = arrName.join(" ");
            return result;
        },
        onLoading(value){
            this.loading = value
        }
    }
})
</script>

<style>
.mt-60{
    margin-top: 60px;
}
.header .head-content .sidebar-button {
  width: 34px;
  height: 34px;
  color: white;
  padding: 10px;
  background-color: var(--basecolor);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 18px;
  border: none;
  border-radius: 5px;
}

.header .head-content .sidebar-button:active {
  background-color: #8abfb0;
  border-radius: 5px;
}

.header .head-content .sidebar-button i {
  font-size: 20px;
}
</style>