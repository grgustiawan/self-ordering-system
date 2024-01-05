<template>
  <div v-show="!loading" class="foodpage-wrapper loginform-wrapper">
    <div class="page-overlay">
    </div>
    <div class="form loginform" style="position: absolute;z-index: 100;top: 250px">
        <p class="heading">LOGIN</p>
        <input placeholder="Username" class="input" type="text">
        <input placeholder="Password" class="input" type="password">

        <div class="d-flex justify-content-between col-12">
            <button @click="$router.go(-1)" class="btn"><i class="ri-arrow-left-s-line"></i></button>
            <button class="btn col-lg-8">Submit</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForbiddenView',
  data(){
    return {
      loading: true,
    }
  },
  mounted(){
    this.loadAssets();
  },
  methods: {
    loadAssets(){
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>

<style>
.loginform-wrapper{
    height: 100vh;
    background-color: #fffaf6;
    background-image: url('../assets//backgrounds/categories.jpg');
    background-size: cover;
}
.form {
  position: relative;
  width: 300px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 3em;
  padding-left: 2.8em;
  padding-right: 2.8em;
  padding-bottom: 2.1em;
  border: 2px dashed var(--white);
  border-radius: 15px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
  background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: .4s ease-in-out;
}

@media (max-width: 767px) {
    .loginform-wrapper{
        width: 100vw;
    }
}

::placeholder {
  color: var(--dark);
  text-align: center;
}

.loginform .heading {
  padding-left: 0.8em;
  font-size: 21pt;
  color: var(--white);
  background-color: transparent;
  letter-spacing: .5em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  text-shadow: inset -1px -1px 1px var(--border);
}

.loginform .input {
  outline: none;
  padding: 0.5em;
  border: 1px solid var(--border);
  color: var(--dark);
  width: 14em;
  height: 3em;
  border-radius: 10px;
  background-color: var(--white);
  text-align: center;
}

.loginform .btn {
  align-self: center;
  margin-top: 2em;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: var(--basecolor);
  font-weight: bold;
  letter-spacing: 0.1em;
  transition: .4s ease-in-out opacity,.1s ease-in-out active;
  padding: 1em;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}

.loginform .btn:hover {
  opacity: 0.8;
}

.loginform .btn:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: none;
}
</style>