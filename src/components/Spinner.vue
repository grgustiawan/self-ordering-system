<template>
    <div class="spinner-container" name="spinner" id="spinner">
        <div class="loader">
            <h1 class="theme-color" 
                style="position:absolute;
                    margin-top:50%;
                    margin-left:13%;
                    font-size:20pt;
                    font-weight:bold"
                    >
                    TAMANI
            </h1>
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerVue'
}
</script>

<style>
.spinner-container{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:10000;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinprops{
  margin:5px;
  width:20px;
  height:20px;
}

.loader {
  position: absolute;
  top: calc(50% - 64px);
  left: calc(50% - 64px);
  width: 128px;
  height: 128px;
  border-radius: 50%;
  perspective: 800px;
  background-color: #FFFFFF;
  }

  .inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;  
  }

  .inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid rgb(154,188,22);
  }

  .inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid rgb(154,188,22);
  }

  .inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid rgb(154,188,22);
  }

  @keyframes rotate-one {
  0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
  }

  @keyframes rotate-two {
  0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
  }

  @keyframes rotate-three {
  0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
  }

  .transition-body{
      animation: transitionIn 0.9s;
  }

  @keyframes transitionIn {
    from{
      opacity: 0;
      transform: rotateX(-10deg);
    }

    to {
      opacity: 1;
      transform: rotateX(0);
    }
  }
</style>