<template>
  <div class="under-wrapper">
    <div v-show="!loading" class="custom-container" style="background: transparent;">
      <div style="position: absolute;
                  top:0;
                  left: 50%;
                  -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
                  width: 100%;
                  max-width: 600px;
                  height: 100%;
                  background: linear-gradient(to bottom, transparent 0%, #002017 90%);
                  ">
      </div>
      <div class="empty-tab" style="position:relative;z-index: 100;">
        <div style="width: 100%;height: 80%;border-radius: 30px;overflow: hidden;padding: 0;margin-top: 100px">
            <img style="width: 80%" src="/assets/images/undercons.png" alt="">
        </div>

        <h2 class="coomingsoon-title" style="color: var(--basecolor);">Under Construction</h2>
        <h5 class="mt-3 text-white">We're currently working on something awesome!</h5>

        <router-link :to="{name: 'Main', query: { scr: this.$route.query.scr}}" 
                     class="btn login-btn w-100 mt-3 mb-3" role="button"
                     style="background: var(--basecolor);">
            Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UnderConstructionView',
    data(){
      return{
        loading: false,
        servers: '',
      }
    },
    mounted(){
      const decode = atob(this.$route.query.scr);
      const arrData = decode.split(";");
      this.servers = 'https://' + arrData[0] + '/api/web';

      axios.get( this.servers + '/cart/' + this.$route.query.scr)
      .then((res) => {
          if(res.data.is_submitted) this.$router.push({name: 'Submitted', query:{scr: this.$route.query.scr}});
      })
      
      this.loadAssets()
    },
    methods:{
      loadAssets(){
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/joy-kim');

.coomingsoon-title{
    font-family: 'Joy Kim', sans-serif;
    font-size: 21pt;
}

.under-wrapper{
    height: 100vh;
    background-color: var(--dark);
    background-image: url('../assets/backgrounds/categories.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>