<template>
    <form class="search-form">
        <label for="search">
            <input required="" autocomplete="off" placeholder="Search food.." id="search" type="text">
            <div class="icon">
                <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
                <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
            </div>
            <button type="reset" class="close-btn">
                <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                </svg>
            </button>
        </label>
    </form>
</template>

<script>
export default {
    name: 'RestaurantSearchBar'
}
</script>

<style>
@media only screen and (max-width: 767px) {
  .search-form {
    --input-bg: #FFf;
    --padding: 1.5em;
    --rotate: 80deg;
    --gap: 2em;
    --icon-change-color: #15A986;
    --height: 40px;
    position: fixed;
    top: 0;
    left:50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 60%;
    padding-inline-end: 1em;
    background: rgba(255,255,255, 0.9);
    margin-top: 10px;
    margin-left: 20%;
    border-radius: 30px;
    z-index: 200;
  }
}

@media (min-width: 767px){
  .search-form {
    --input-bg: #FFf;
    --padding: 1.5em;
    --rotate: 80deg;
    --gap: 2em;
    --icon-change-color: #15A986;
    --height: 40px;
    position: fixed;
    top: 10px;
    left:50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    max-width: 400px;
    width: 60%;
    padding-inline-end: 1em;
    background: #fff9f4c5;
    margin-top: 10px;
    border-radius: 30px;
    border: 2.5px solid #603939;
    z-index: 200;
  }
}

.search-form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.search-form input {
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}
/* style for both icons -- search,close */
.search-form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
}
/* search icon */
.search-form .icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.search-form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.search-form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.search-form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.search-form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate))
}

.search-form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.search-form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.search-form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}
</style>