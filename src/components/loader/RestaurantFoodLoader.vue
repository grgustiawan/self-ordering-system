<template>
    <div style="position: relative;width: 90%;height: 150px;margin: 0 auto;margin-top: 10px;">
      <free-style-shimmer
        :is-loading="true"
        height="140px"
        width="100%"
        border-radius="5px"
        color="#f7f7f7"
        style="box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
      />

      <free-style-shimmer
        :is-loading="true"
        height="90px"
        width="90px"
        border-radius="500px"
        color="#ececec"
        style="position: absolute;
              top: 20px;
              left: 20px;"/>

      <free-style-shimmer
          :is-loading="true"
          height="30px"
          width="30px"
          border-radius="5px"
          color="#ececec"
          style="position: absolute;
                top: 15px;
                left: 70%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);"/>

      <free-style-shimmer
          :is-loading="true"
          height="10px"
          width="170px"
          border-radius="5px"
          color="#ececec"
          style="position: absolute;
                top: 55px;
                left: 140px"/>

      <free-style-shimmer
          :is-loading="true"
          height="10px"
          width="150px"
          border-radius="5px"
          color="#ececec"
          style="position: absolute;
                top: 75px;
                left: 140px;"/>

      <free-style-shimmer
          :is-loading="true"
          height="15px"
          width="100px"
          border-radius="5px"
          color="#ececec"
          style="position: absolute;
                bottom: 20px;
                left: 140px;"/>

      <free-style-shimmer
          :is-loading="true"
          height="40px"
          width="80px"
          border-radius="5px"
          color="#ececec"
          style="position: absolute;
                bottom: 10px;
                right: 0;"/>
  </div>
</template>

<script>
import { FreeStyleShimmer } from 'vue3-shimmer'
export default {
    name: 'RestaurantFoodLoader',
    components: {
      FreeStyleShimmer,
    }
}
</script>

<style>
@media only screen and (max-width: 800px){
  .restaurant-food-loaders {
      position: relative;
      width: 125%;
      height: 140px;
      padding: 15px;
      background-color: #f7f7f7;
      overflow: hidden;
      margin: 0px 5px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
              box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
      margin-top: 20px;
  }
}

@media (min-width: 800px){
  .restaurant-food-loaders {
      position: relative;
      width: 100%;
      height: 140px;
      padding: 15px;
      background-color: #f7f7f7;
      overflow: hidden;
      margin: 0px 5px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
              box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
      margin-top: 20px;
  }
}

.restaurant-food-loaders:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
  animation: gradient-animation_2 1s linear infinite;
}

.restaurant-food-loaders .wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.restaurant-food-loaders .wrapper > div {
  background-color: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
}

.restaurant-food-loaders .button {
  display: inline-block;
  height: 32px;
  width: 75px;
}

@media only screen and (max-width: 800px){
  .restaurant-food-loaders .circle {
      position: absolute;
      top: -5px;
      width: 75px;
      height: 75px;
      right: 1%;
      border-radius: 50%;
  }

  .restaurant-food-loaders .box {
      padding: 0;
      position: absolute;
      top: 80px;
      width: 18%;
      height: 30px;
      right: 10px;
      border-radius: 5px;
  }
}

@media (min-width: 800px){
  .restaurant-food-loaders .circle {
      position: absolute;
      top: -5px;
      width: 75px;
      height: 75px;
      right: 4%;
      border-radius: 50%;
  }

  .restaurant-food-loaders .box {
      padding: 0;
      position: absolute;
      top: 80px;
      width: 15%;
      height: 30px;
      right: 3%;
      border-radius: 5px;
  }
}


.restaurant-food-loaders .line-1 {
  position: absolute;
  top: 11px;
  left: 20%;
  height: 7px;
  width: 35%;
  border-radius: 30px;
}

.restaurant-food-loaders .line-2 {
  position: absolute;
  top: 34px;
  left: 0;
  height: 7px;
  width: 30%;
  border-radius: 30px;
}

.restaurant-food-loaders .line-3 {
  position: absolute;
  top: 57px;
  left: 24%;
  height: 7px;
  width: 28%;
  border-radius: 30px;
}

.restaurant-food-loaders .line-4 {
  position: absolute;
  top: 80px;
  left: 0px;
  height: 7px;
  width: 75%;
  border-radius: 30px;
}

.restaurant-food-loaders .line-5 {
  position: absolute;
  top: 103px;
  left: 0px;
  height: 7px;
  width: 75%;
  border-radius: 30px;
}

@keyframes gradient-animation_2 {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>