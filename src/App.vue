<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --animate-delay: 0.5s;
}

@media only screen and (max-width: 900px){  
  .page {
    position: absolute;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s ease-out;
}
</style>
