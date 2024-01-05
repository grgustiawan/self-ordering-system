<template>
  <div style="position: relative;width: 150px;height: 225px;margin: 0 15px;margin-top: 40px;">
    <free-style-shimmer
      :is-loading="true"
      :height="height"
      :width="width"
      border-radius="5px"
      color="#f7f7f7"
      style="box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
    />    

    <free-style-shimmer
      :is-loading="true"
      height="80px"
      width="130px"
      border-radius="5px"
      color="#ececec"
      style="position: absolute;
            top: 10px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);"
    />

    <free-style-shimmer
      :is-loading="true"
      height="8px"
      width="130px"
      border-radius="50px"
      color="#ececec"
      style="position: absolute;
            top: 110px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);"
    />

    <free-style-shimmer
      :is-loading="true"
      height="8px"
      width="100px"
      border-radius="50px"
      color="#ececec"
      style="position: absolute;
            top: 125px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);"
    />

    <free-style-shimmer
      :is-loading="true"
      height="8px"
      width="130px"
      border-radius="50px"
      color="#ececec"
      style="position: absolute;
            top: 160px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);"
    />

    <free-style-shimmer
      :is-loading="true"
      height="8px"
      width="80px"
      border-radius="50px"
      color="#ececec"
      style="position: absolute;
            bottom: 25px;
            left: 10px;"
    />

    <free-style-shimmer
      :is-loading="true"
      height="30px"
      width="30px"
      border-radius="500px"
      color="#bdbdbd"
      style="position: absolute;
            bottom: 15px;
            right: 15px;"
    />
  </div>
</template>

<script>
import { FreeStyleShimmer } from 'vue3-shimmer'
export default {
    name: 'CardLoaderVue',
    components: {
      FreeStyleShimmer,
    },
    data(){
      return {
        width: '',
        height: '',
      }
    },
    created(){
      if(window.screen.width < 768) {
        this.width = '150px' 
        this.height = '225px'
      } else {
        this.width = '170px'
        this.height = '290px'
      }
    }
}
</script>

<style>

</style>