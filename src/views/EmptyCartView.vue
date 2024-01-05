<template>
  <div class="under-wrapper">
    <div class="page-overlay"></div>
    <div class="custom-container" style="background: transparent;position:relative;z-index: 100;">
      <div class="empty-tab">
        <div style="width: 100%;height: 80%;border-radius: 30px;overflow: hidden;padding: 0;margin-top: 100px">
            <lottie-player src="https://lottie.host/daf40c8d-d7a7-41b1-a2d3-fd2b8f7c836f/i24ZABPmOR.json" 
                              background="transparent" speed="1" style="width: 100%" loop autoplay>
            </lottie-player>
        </div>

        <h2 class="coomingsoon-title" style="color: var(--basecolor);">Your Cart is Empty!!</h2>
        <h5 class="mt-3" style="color: var(--basecolor);">Looks like you haven’t added anything to your cart yet</h5>

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
import axios from 'axios'
export default {
    name: 'EmptyCartView',
    data(){
      return {
        loading: true,
        servers: '',
      }
    },
    mounted(){
      const decode = atob(this.$route.query.scr);
      const arrData = decode.split(";");
      this.servers = 'https://' + arrData[0] + '/api/web';

      axios.get( this.servers + '/cart/' + this.$route.query.scr)
      .then((res) => {
          if(res.data.is_submitted) this.$router.push({name: 'Submitted', query: {scr: this.$route.query.scr}});
      });

      this.loadAssets()
    },
    methods:{
      loadAssets(){
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    }
}
</script>

<style>

</style>