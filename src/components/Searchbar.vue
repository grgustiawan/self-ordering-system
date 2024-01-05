<template>
    <div>
        <div class="searchbar">
            <div class="searchbar-wrapper">
                <div class="searchbar-left">
                    <div class="search-icon-wrapper">
                        <span class="search-icon searchbar-icon">
                          <lord-icon
                              src="https://cdn.lordicon.com/osbjlbsb.json"
                              trigger="hover"
                              colors="outline:#603939,secondary:#b26836,secondary2:#d1f3fa,quaternary:#ffffff"
                              style="width:32px;height:32px;margin-left: -10px;margin-top:2px">
                          </lord-icon>
                        </span>
                    </div>
                </div>

                <div class="searchbar-center">
                    <div class="searchbar-input-spacer"></div>

                    <input type="text" class="searchbar-input" 
                                       maxlength="2048" 
                                       name="searchfood" 
                                       autocapitalize="off" 
                                       autocomplete="off" 
                                       title="Search" 
                                       v-on:keyup="searchFood"
                                       :placeholder="label" v-model="speechToText">

                    <ul class="wave-menu" v-if="isListening">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                </div>

                <div class="searchbar-right" :class="{'searchbar-right-active' : isListening}">
                    <button class="button-speech" :class="{'button-speech-active' : isListening}" @click="listen()" :disabled="isListening">
                        <svg class="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#ffffff" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                            </path>
                            <path fill="#d5d5d5" d="m11 18.08h2v3.92h-2z"></path>
                            <path fill="#ffffff" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                            </path>
                            <path fill="#d5d5d5" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="search-result" v-if="speechToText && isResult">
          <div v-for="result in foodResult" :key="result.id">
            <router-link :to="{name: 'Food', query:{id: result.id, scr: this.$route.query.scr}}">
              <div class="result-item">
                  <div class="d-flex flex-column justify-content-between">
                    <img class="result-img" :src="getImageResult(result.image)">
                    <span class="result-name">{{ result.name }}</span>
                  </div>
              </div>
            </router-link>
          </div>
          <div class="result-not-found" v-if="speechToText && noResult">
              <div class="d-flex flex-column justify-content-center" v-if="noResult">
                <span class="result-name-not-found">{{ noResult }}</span>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SearchBar',
    props: {
      deleteNote: {
        type: Function,
        required: true
      },
      removeAllNotes: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        speechToText: null,
        isListening: false,
        recognition: null,
        label: 'Search Food...',
        loading: false,
        isResult: false,
        noResult: null,
        foodResult: [],
        servers: '',
      };
    },
    mounted() {
      const decode = atob(this.$route.query.scr);
      const arrData = decode.split(";");
      this.servers = 'https://' + arrData[0] + '/api/web';
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.recognition = new SpeechRecognition;
      this.recognition.lang = "id";
      this.recognition.onresult = this.record;
      this.recognition.onend = this.stpListen;
    },
    methods: {
        getImageResult(filename){
          let name = String(filename).replace("JPG", "png");
          return '/assets/images/food/tamani/' + name;
        },
        async searchFood() {
          if(this.speechToText === null || this.speechToText === ""){
            this.isResult = null;
            this.foodResult = [];
            this.noResult = null;
          } else {
            this.noResult = null;
            this.loading = true;
            try {
              let { data } = await axios.get(this.servers + '/search/' + this.speechToText + '/' + this.$route.query.scr);
              this.foodResult = data;
              if(this.foodResult.length === 0){
                this.noResult = 'No result found';
              } 

              this.isResult = true;
              console.log(this.foodResult);
              this.loading = false;
            } catch(e){console.log(e)}
          }
        },
        listen() {
          this.isListening = true;
          this.label = '';
          this.speechToText = null;
          var audio = new Audio('/assets/start.mp3');
          audio.play();
          this.recognition.start();
        },
        stpListen(){
          this.isListening = false;
          this.label = 'Search Food...';
          this.isResult = false;
          this.noResult = null;
          this.foodResult = [];
        },
        record(event) {
          this.noResult = null;
          this.isResult = false;
          this.foodResult = [];
          this.isListening = false;
          this.speechToText = event.results[0][0].transcript;

          const parseRegex = /(?<id>(\d*))\s(?=nolu).*(?<command>(sil))$/giu;
          const voiceMatch = parseRegex.exec(this.speechToText);

          const allNoteRemoveRegex = /tüm notları sil/giu;
          const allNotesRemoveMatch = allNoteRemoveRegex.test(this.speechToText);

          setTimeout(() => {
            if (voiceMatch && voiceMatch.groups.id && voiceMatch.groups.command) {
              this.deleteNote(voiceMatch.groups.id);
            } else if (allNotesRemoveMatch) {
              this.removeAllNotes();
            } 
            
            this.searchFood(); 
          }, 1000);
        }
    }
}
</script>

<style>
@media only screen and (max-width: 768px){
  .search-result{
    width: 90%;
    height: 200px;
    position: absolute;
    z-index: 400;
    top: 118px;
    left: 5%;
    margin: 0 auto;
    overflow: scroll;
  }

  .search-result::-webkit-scrollbar {
    width: 6px;
  }

  .search-result::-webkit-scrollbar-thumb {
    background: rgb(255, 106, 0);  
    border-radius: 30px;
  }

  .search-result::-webkit-scrollbar-thumb:hover {
    background: #91c326;  
  }

  .result-item{
    position: relative;
    top:0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 100%;
    height: 45px;
    background-color: rgba(54, 54, 54, 0.7);
    border: 0.5px solid #d0d1d2;
    padding: 5px 0;
  }

  .result-not-found{
    width: 100%;
    height: 25px;
    background-color: rgba(54, 54, 54, 0.7);
    border: 0.5px solid #d0d1d2;
    padding: 5px 0;
    text-align: center;
  }

  .result-name-not-found{
    font-size: 12pt;
    font-weight: bold;
    color: #ffffff;
    margin-top:-5px;
  }

  .result-img{
    display: flex;
    width: 45px;
    height: 45px;
    margin-top: -5px;
    margin-left: 10px;
  }

  .result-name{
    display: flex;
    margin-top:-35px;
    margin-left: 60px;
    font-size: 12pt;
    font-weight: bold;
    color: #ffffff;
  }

  .result-footer{
    width: 100%;
    height: 25px;
    background-color: rgba(154, 154, 154, 1);
    border: 1px solid #d0d1d2;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .footer-txt{
    font-size: 12pt;
    font-weight: 600;
    color: #7e7e7e;
  }
}

@media (min-width: 769px){
  .search-result{
    width: 58%;
    height: 250px;
    position: absolute;
    z-index: 400;
    top: 118px;
    left: 0;
    margin: 0 21%;
    overflow: scroll;
  }
  
  .search-result::-webkit-scrollbar {
    width: 6px;
    opacity: 0;
  }

  .search-result::-webkit-scrollbar-thumb {
    background: rgba(255, 106, 0, 0);  
    border-radius: 30px;
    opacity: 0;
  }

  .search-result::-webkit-scrollbar-thumb:hover {
    background: #91c326;  
    opacity: 0;
  }

  .result-item{
    position: relative;
    top:0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    max-width: 550px;
    width: 100%;
    height: 45px;
    background-color: rgba(54, 54, 54, 0.7);
    border: 0.5px solid #d0d1d2;
    padding: 5px 0;
  }
  

  .result-item:hover{
    position: relative;
    top:0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    max-width: 550px;
    width: 100%;
    height: 45px;
    background-color: rgb(255, 171, 82);
    border: 1px solid #d0d1d2;
    padding: 5px 0;
  }

  .result-not-found{
    position: relative;
    top:0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    max-width: 550px;
    width: 100%;
    height: 25px;
    background-color: rgba(54, 54, 54, 0.7);
    border: 0.5px solid #d0d1d2;
    padding: 5px 0;
    text-align: center;
  }

  .result-name-not-found{
    font-size: 12pt;
    font-weight: bold;
    color: #ffffff;
    margin-top:-5px;
  }

  .result-img{
    display: flex;
    width: 45px;
    height: 45px;
    margin-top: -5px;
    margin-left: 10px;
  }

  .result-name{
    display: flex;
    margin-top:-35px;
    margin-left: 60px;
    font-size: 12pt;
    font-weight: bold;
    color: #ffffff;
  }

  .result-footer{
    width: 100%;
    height: 25px;
    background-color: rgb(204, 204, 204);
    border: 1px solid #d0d1d2;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .footer-txt{
    font-size: 12pt;
    font-weight: 600;
    color: rgb(154, 188, 22);
  }

  .footer-txt:hover{
    font-size: 12pt;
    font-weight: 600;
    color: rgb(88, 146, 0);
  }
}

.searchbar {
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  z-index: 3;
  height: 44px;
  background: white;
  box-shadow: none;
  border-radius: 5px;
  margin: 0 auto;
  width: auto;
  max-width: 90%;
  margin-top: 20px;
  border: 2px solid var(--dark);
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.searchbar:hover {
  box-shadow: 0 1px 6px rgb(32 33 36 / 12%);
  border-color: rgba(223,225,229,0);
  border: 2px solid var(--dark);
}

.searchbar-wrapper {
  flex: 1;
  display: flex;
  padding: 5px 8px 0 14px;
}

.searchbar-left {
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  align-items: center;
  padding-right: 13px;
  margin-top: -5px;
}

.search-icon-wrapper {
  margin: auto;
}

.search-icon {
  margin-top: 0px;
  color: #9aa0a6;
  height: 20px;
  line-height: 20px;
  width: 20px;
}

.searchbar-icon {
  display: inline-block;
  fill: currentColor;
  height: 24px;
  line-height: 24px;
  position: relative;
  width: 24px;
}

.searchbar-center {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.searchbar-input-spacer {
  color: transparent;
  flex: 100%;
  white-space: pre;
  height: 34px;
  font-size: 16px;
}

.searchbar-input {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .87);
  word-wrap: break-word;
  outline: none;
  display: flex;
  flex: 100%;
  margin-top: -37px;
  height: 34px;
  font-size: 16px;
  max-width: 100%;
  width: 100%;
}

.searchbar-right {
  display: flex;
  flex: 0 0 auto;
  margin-right: -8px;
  margin-top: -5px;
  align-items: stretch;
  flex-direction: row;
  background-color: #f1ddc8;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.searchbar-right-active{
  background-color: #c0a285;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.button-speech {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 80%;
  height: 80%;
  border-radius: 100%;
  margin: 2px auto;
  margin-top: 4px;
  background: linear-gradient(30deg, #fe8310 40%, rgb(255, 38, 0) 80%);
  transition: all 0.3s ease-in-out 0s;
  opacity: 0.8;
  align-items: center;
  border: 0;
}

.button-speech-active {
  transform: scale(1.2);
  background: #a81f00;
  box-shadow: rgba(104, 203, 203, 0.318) 0px 0px 0px 0px;
  animation: 1s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running blinking;
  z-index: 200;
}

@keyframes blinking {
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0);
  }
}

.searchbar-clear-icon {
  margin-right: 12px
}

.voice-search {
  flex: 1 0 auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 2.8em;
}

.wave-menu {
  border-radius: 50px;
  width: 150px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: ease 0.2s;
  position: relative;
  margin: 20% auto;
  margin-top: -33px;
}

.wave-menu li {
  list-style: none;
  height: 28px;
  width:2px;
  border-radius: 10px;
  background: var(--dark);
  margin: 0 6px;
  padding: 0;
  animation-name: wave1;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition: ease 0.2s;
}

.wave-menu li:nth-child(2) {
  animation-name: wave2;
  animation-delay: 0.2s;
}

.wave-menu li:nth-child(3) {
  animation-name: wave3;
  animation-delay: 0.23s;
  animation-duration: 0.4s;
}

.wave-menu li:nth-child(4) {
  animation-name: wave4;
  animation-delay: 0.1s;
  animation-duration: 0.3s;
}

.wave-menu li:nth-child(5) {
  animation-delay: 0.5s;
}

.wave-menu li:nth-child(6) {
  animation-name: wave2;
  animation-duration: 0.5s;
}

.wave-menu li:nth-child(8) {
  animation-name: wave4;
  animation-delay: 0.4s;
  animation-duration: 0.25s;
}

.wave-menu li:nth-child(9) {
  animation-name: wave3;
  animation-delay: 0.15s;
}

@keyframes wave1 {
  from {
    transform: scaleY(1);
  }

  to {
    transform: scaleY(0.5);
  }
}

@keyframes wave2 {
  from {
    transform: scaleY(0.3);
  }

  to {
    transform: scaleY(0.6);
  }
}

@keyframes wave3 {
  from {
    transform: scaleY(0.6);
  }

  to {
    transform: scaleY(0.8);
  }
}

@keyframes wave4 {
  from {
    transform: scaleY(0.2);
  }

  to {
    transform: scaleY(0.5);
  }
}
</style>