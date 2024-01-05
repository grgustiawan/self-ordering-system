<template>
    <div class="pay-popup-loaders">
      <div class="wrapper">
          <div class="box"></div>
          <div class="line-1"></div>
          <div class="line-2"></div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'PayPopUpLoader'
  }
  </script>
  
  <style>
  .pay-popup-loaders {
    position: fixed;
    width: 94%;
    height: 200px;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    z-index: 80;
    max-width: 600px;
    background-color: #f7f7f7f7;
    -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
            box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
    border-radius: 20px 20px 0px 0px;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 40px;
  }
  
  .pay-popup-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .pay-popup-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .pay-popup-loaders .wrapper > div {
    background-color: #ececec;
    background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  }
  
  .pay-popup-loaders .buttons {
    display: inline-block;
    height: 32px;
    width: 75px;
  }

  .pay-popup-loaders .box {
    position: absolute;
    top: -20px;
    right: 0;
    width: 105px;
    height: 35px;
    border-radius: 10px;
  }
  
  .pay-popup-loaders .line-1 {
    position: absolute;
    top: -11px;
    left: 0;
    height: 7px;
    width: 50px;
    border-radius: 30px;
  }
  
  .pay-popup-loaders .line-2 {
    position: absolute;
    top: 14px;
    left: 0;
    height: 7px;
    width: 100px;
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