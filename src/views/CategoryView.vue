<template>
  <div>
    <div style="position: fixed;
                top: 0;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                width: 100%; 
                height: 100vh;
                object-fit: cover;
                overflow: hidden;">
       <img style="height: 100%; 
                   object-fit: cover;
                   overflow: hidden;" src="../assets/backgrounds/categories.jpg" alt="">
    </div>
    <!-- header start -->
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Main', query: {scr: this.$route.query.scr}}">
            <i class="ri-arrow-left-s-line" style="color: var(--white)"></i>
          </router-link>
          <h2 style="color: var(--white)">Food Categories</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- food section start -->
    <section class="categories section-lg-b-space">
      <div class="custom-container categorypage-wrapper">
        <div class="row gy-5 ratio_square">
          
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>
          <div v-if="loading" class="col-4">
              <CategoryPageLoaderVue />
          </div>

          <div class="col-4" v-for="ctg in category" :key="ctg.id">
            <router-link :to="{name: 'CategoryDetail', query: {id: ctg.id, scr: this.$route.query.scr}}">
              <div class="food-categories food" style="background: var(--overlay);">
                <img class="img-fluid categories-img" :src="getImageCategory(ctg.image)" alt="pizza" />
              </div>
              <div>
                <h6 v-text="ctg.name"
                    style="position: relative;
                           font-weight: bolder;
                           color: var(--white);
                           z-index: 10;">
                </h6>
              </div>
            </router-link>
          </div>
        
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import CategoryPageLoaderVue from '@/components/loader/CategoryPageLoader.vue'

export default {
    namae: 'CategoryView',
    components:{
      CategoryPageLoaderVue
    },
    data(){
      return {
        category: [],
        loading: false,
        servers: '',
      }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        this.loading = true;
        this.getValidate();
        axios.get( this.servers + '/cart/' + this.$route.query.scr)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', query: {scr: this.$route.query.scr}});
        });
        this.getCategories()
    },
    methods: {
      async getValidate(){
          try {await axios.get(this.servers + '/home/' + this.$route.query.scr);} 
          catch(e){this.$router.push('/')}
      },
      async getCategories(){
        this.loading = true
        try {
          let { data } = await axios.get(this.servers + '/categories/' + this.$route.query.scr)
          this.category = data.categories;
          this.loading = false
        }catch(e){console.log(e.response.data)}
      },
      getImageCategory(filename){
        let name = String(filename).replace("JPG", "png");
        return '/assets/images/product/tamani/' + name;
      }
    }
}
</script>

<style>
.categorypage-wrapper{
  height: 100vh; 
  overflow: hidden;
}

.food-categories{
  border: 2.5px solid var(--border);
  background-color: var(--overlay);
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>