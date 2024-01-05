<template>
    <div class="banner-loaders">
      <div class="wrapper">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="line-4"></div>
          <div class="line-5"></div>
          <div class="line-6"></div>
          <div class="line-7"></div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'BannerLoaderVue'
  }
  </script>
  
  <style>
  .banner-loaders {
    position: relative;
    width: 90%;
    height: 200px;
    padding: 15px;
    background-color: #f7f7f7;
    overflow: hidden;
    margin: 0px 5px;
    margin-top:20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
            box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
  }
  
  .banner-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .banner-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .banner-loaders .wrapper > div {
    background-color: #ececec;
    background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
    background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
    border-radius: 30px;
  }
  
  .banner-loaders .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  }
  
  .banner-loaders .line-1 {
    position: absolute;
    top: 11px;
    left: 0px;
    height: 10px;
    width: 100px;
  }
  
  .banner-loaders .line-2 {
    position: absolute;
    top: 34px;
    left: 0px;
    height: 10px;
    width: 150px;
  }
  
  .banner-loaders .line-3 {
    position: absolute;
    top: 57px;
    left: 0px;
    height: 10px;
    width: 100%;
  }

  .banner-loaders .line-4 {
    position: absolute;
    top: 80px;
    left: 0px;
    height: 10px;
    width: 100%;
  }

  .banner-loaders .line-5 {
    position: absolute;
    top: 103px;
    left: 0px;
    height: 10px;
    width: 100%;
  }

  .banner-loaders .line-6 {
    position: absolute;
    top: 126px;
    left: 0px;
    height: 10px;
    width: 100%;
  }
  
  .banner-loaders .line-7 {
    position: absolute;
    top: 149px;
    left: 0px;
    height: 10px;
    width: 92%;
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