<template>
    <div class="restaurant-voucher-loaders">
      <div class="wrapper">
          <div class="circle"></div>
          <div class="line-1"></div>
          <div class="line-2"></div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'RestaurantVoucherLoader'
  }
  </script>
  
  <style>
  @media only screen and (max-width: 800px){
    .restaurant-voucher-loaders {
        position: relative;
        width: 125%;
        height: 65px;
        padding: 15px;
        background-color: #f7f7f7;
        overflow: hidden;
        margin: 0px 5px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
                box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
        z-index: 1;
    }
  }

  @media (min-width: 800px) {
    .restaurant-voucher-loaders {
        position: relative;
        width: 98%;
        height: 65px;
        padding: 15px;
        background-color: #f7f7f7;
        overflow: hidden;
        margin: 0px 5px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
                box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
    }
  }
  
  .restaurant-voucher-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .restaurant-voucher-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .restaurant-voucher-loaders .wrapper > div {
    background-color: #ececec;
    background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
    border-radius: 30px;
  }
  
  .restaurant-voucher-loaders .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  }

  .restaurant-voucher-loaders .circle {
    position: absolute;
    top: 0;
    width: 35px;
    height: 35px;
    left: 0px;
    border-radius: 50%;
  }
  
  .restaurant-voucher-loaders .line-1 {
    position: absolute;
    top: 4px;
    left: 20%;
    height: 7px;
    width: 140px;
  }
  
  .restaurant-voucher-loaders .line-2 {
    position: absolute;
    top: 23px;
    left: 20%;
    height: 7px;
    width: 70px;
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