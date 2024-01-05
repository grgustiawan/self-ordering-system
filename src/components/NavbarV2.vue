<template>
  <div class="foodpage-wrapper">
    <div class="shdw-nav-wrapper">    
        <div class="long-nav"></div>
        <div class="mid-nav"></div>
    </div>

    <nav class="bottom-nav">
        <router-link class="item-wrapper" :to="{name: 'Store', query:{scr: this.$route.query.scr}}">
            <div class="item">
                <div class="content" :class="{'item-active' : $route.name === 'Store'}">
                    <img v-if="!isStore" class="nav-icon" src="/assets/images/svg/location.svg" alt="store">
                    <img v-if="isStore" class="nav-icon" src="/assets/images/svg/location-fill.svg" alt="store">
                    
                    <span class="nav-text-left">Store</span>
                </div>		
            </div>
        </router-link>

        <router-link class="item-wrapper" :to="{name: 'Offer', query:{scr: this.$route.query.scr}}">
            <div class="item" :class="{'item-active' : $route.name === 'Offer'}">		
                <div class="content">
                    <img v-if="!isOffer" class="nav-icon" src="/assets/images/svg/coupon.svg" alt="offer">
                    <img v-if="isOffer" class="nav-icon" src="/assets/images/svg/coupon-fill.svg" alt="offer">
                    
                    <span class="nav-text-left">Offer</span>
                </div>
            </div>
        </router-link>

        <div class="mid-bg-nav"></div>
        <router-link class="item-wrapper" :to="{name: 'Main', query:{scr: this.$route.query.scr}}" :class="{'item-wrapper-active' : $route.name==='Main'}">
            <div class="item" style="z-index: 80;margin-left: 10px">
                <div class="content" :class="{'item-active' : $route.name === 'Main'}">
                    <div>
                        <img v-if="!isMain" class="md-nav-icon" src="/assets/images/svg/steak.svg" alt="steak">
                        <img v-if="isMain" class="md-nav-icon" src="/assets/images/svg/steak-fill.svg" alt="steak">
                    </div>
                    
                    <span class="nav-text-mid">Menu</span>
                </div>		
            </div>
        </router-link>

        <router-link class="item-wrapper" :to="{name: 'Notification', query:{scr: this.$route.query.scr}}">
            <div class="item">
                <div class="content">
                    <div>
                        <img v-if="!isNews" class="rg-nav-icon" src="/assets/images/svg/news.svg" alt="news">
                        <img v-if="isNews" class="rg-nav-icon" src="/assets/images/svg/news-fill.svg" alt="news">
                    </div>

                    <span class="nav-text-right">News</span>
                </div>		
            </div>
        </router-link>
        
        <router-link class="item-wrapper" :to="{name: 'Profile', query:{scr: this.$route.query.scr}}">
            <div class="item" :class="{active: $route.name==='Profile'}">
                <div class="content">
                    <div>
                        <img v-if="!isNews" class="rg-nav-icon" src="/assets/images/svg/settings.svg" alt="settings">
                        <img v-if="isNews" class="rg-nav-icon" src="/assets/images/svg/settings-fill.svg" alt="settings">
                    </div>

                    <span class="nav-text-right">Settings</span>
                </div>		
            </div>
        </router-link>
    </nav> 
  </div>
</template>

<script>
export default {
    name: 'NavbarV2',
    data(){
        return {
            isMain: false,
            isStore: false,
            isOffer: false,
            isNews: false,
            isSettings: false,
        }
    },
    mounted() {
        if(this.$route.name === 'Main'){
            this.isMain = true;
            this.isStore = false;
            this.isOffer = false;
            this.isNews = false;
            this.isSettings = false;
        } else if(this.$route.name === 'Store'){
            this.isMain = false;
            this.isStore = true;
            this.isOffer = false;
            this.isNews = false;
            this.isSettings = false;
        } else if(this.$route.name === 'Offer'){
            this.isMain = false;
            this.isStore = false;
            this.isOffer = true;
            this.isNews = false;
            this.isSettings = false;
        } else if(this.$route.name === 'News'){
            this.isMain = false;
            this.isStore = false;
            this.isOffer = false;
            this.isNews = true;
            this.isSettings = false;
        } else if(this.$route.name === 'Profile'){
            this.isMain = false;
            this.isStore = false;
            this.isOffer = false;
            this.isNews = false;
            this.isSettings = true;
        }
    }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/discreet');

.bottom-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 50%;
  z-index: 1000;
  will-change: transform;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display: flex;
  height: 80px;
  max-width: 600px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
  background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
  padding: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.bottom-nav .item-wrapper{
    flex-grow: 1;
    text-align: center;
    font-size: 8pt;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;
}

.bottom-nav .item-wrapper .item {
    color: var(--white);
}
.bottom-nav .item-wrapper .item-active {
    color: rgb(255, 130, 0);
}
.bottom-nav .item-wrapper .item .content {
  display: flex;
  flex-direction: column;
}
.bottom-nav .item-wrapper .item .content i {
  font-size: 25pt;
}

.shdw-nav-wrapper{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 50%;
    z-index: 900;
    will-change: transform;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    display: flex;
    height: 80px;
}

.long-nav{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 50%;
    will-change: transform;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    display: flex;
    height: 80px;
    max-width: 600px;
    background-color: #ffffff;
    padding: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    -webkit-box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.3);
          box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.3);
}

.mid-nav{
    position: absolute;
    top: -22px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 85px;
    height: 85px;
    z-index: 990;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;    
    background: linear-gradient(180deg, #414449 1.31%, #4a4a4a 101.06%);
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
}

.mid-bg-nav{
    position: absolute;
    top: -10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #b7b7b7;
}

.item{
    z-index: 80;
}

.nav-icon{
    position: relative;
    top: 0;
    left: 1.5vw;
    width: 32px;
}

.rg-nav-icon{
    position: relative;
    top: 0;
    right: 0.2vw;
    width: 32px;
}

.md-nav-icon{
    position: fixed;
    top: -7px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 59px;
}

.nav-text-mid{
    margin-top: 55px;
    margin-left: 0px;
    font-family: 'Discreet', sans-serif;
    font-weight: bold;
    font-size: 12pt;
}

.nav-text-left{
    margin-top: 7px;
    margin-left: 0px;
    font-family: 'Discreet', sans-serif;
    font-weight: bold;
    font-size: 12pt;
}

.nav-text-right{
    margin-top: 6px;
    margin-left: 0px;
    font-family: 'Discreet', sans-serif;
    font-weight: bold;
    font-size: 12pt;
}
</style>