<template>
    <div class="restaurant-details-loaders">
      <div class="wrapper">
          <div class="circle"></div>
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>          
      </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'RestaurantDetailLoader'
  }
  </script>
  
  <style>
  @media only screen and (max-width: 767px){
    .restaurant-details-loaders {
        position: relative;
        width: 125%;
        height: 110px;
        padding: 15px;
        background-color: #f7f7f7;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
                box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
        margin-top: -90px;
        z-index: 1;
    }
  }

  @media (min-width: 768px) {
    .restaurant-details-loaders {
        position: relative;
        width: 98%;
        height: 115px;
        padding: 15px;
        background-color: #f7f7f7;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
                box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
        margin-top: -195px;
    }
  }
  
  .restaurant-details-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .restaurant-details-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .restaurant-details-loaders .wrapper > div {
    background-color: #ececec;
    background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
    border-radius: 30px;
  }
  
  .restaurant-details-loaders .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  }

  .restaurant-details-loaders .circle {
    position: absolute;
    margin-top:20px;
    width: 70px;
    height: 70px;
    margin-left: 20px;
    border-radius: 50%;
  }
  
  .restaurant-details-loaders .line-1 {
    position: absolute;
    top: 11px;
    left: 25%;
    height: 10px;
    width: 100px;
  }
  
  .restaurant-details-loaders .line-2 {
    position: absolute;
    top: 34px;
    left: 25%;
    height: 10px;
    width: 70px;
  }
  
  .restaurant-details-loaders .line-3 {
    position: absolute;
    top: 75px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    width: 70%;
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