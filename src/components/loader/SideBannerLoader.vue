<template>
    <div class="side-loaders">
      <div style="width: 100%;padding: 0;">
        <img style="width: 70%;object-fit: contain;" src="/assets/images/svg/image.svg" alt="dots" />
      </div>
    </div>
</template>
  
  <script>
  export default {
      name: 'SideBannerLoader'
  }
  </script>
  
  <style>
  .side-loaders {
    position: relative;
    width: 30%;
    height: 130px;
    margin-bottom: 10px;
    padding: 15px;
    background-color: #f7f7f7;
    overflow: hidden;
    margin: 0px 5px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
  }
  
  .side-loaders:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1s linear infinite;
  }
  
  .side-loaders .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .side-loaders .wrapper > div {
    background-color: #cacaca;
  }
  
  .side-loaders .circle {
    position: absolute;
    top: -10px;
    width: 65px;
    height: 65px;
    left: 15px;
    border-radius: 50%;
  }
  
  .side-loaders .button {
    display: inline-block;
    height: 32px;
    width: 75px;
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