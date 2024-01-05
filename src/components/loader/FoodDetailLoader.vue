<template>
    <div class="food-details-loaders">
      <div class="wrapper">
          <div class="line-1"></div>
          <div class="line-2"></div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'BannerLoaderVue'
  }
  </script>
  
  <style>
  .food-details-loaders {
    position: relative;
    width: 90%;
    height: 50px;
    padding: 15px;
    background-color: #f7f7f7;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
            box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);     
  }
  
  .food-details-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .food-details-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .food-details-loaders .wrapper > div {
    background-color: #ececec;
    background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
    border-radius: 30px;
  }
  
  .food-details-loaders .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  }

  .food-details-loaders .circle {
    position: absolute;
    top: 7px;
    width: 35px;
    height: 35px;
    left: 0px;
    border-radius: 50%;
  }
  
  .food-details-loaders .line-1 {
    position: absolute;
    top: 11px;
    left: 15%;
    height: 7px;
    width: 70%;
  }
  
  .food-details-loaders .line-2 {
    position: absolute;
    top: 34px;
    left: 15%;
    height: 7px;
    width: 50%;
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