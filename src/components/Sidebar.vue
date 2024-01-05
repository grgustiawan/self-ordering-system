<template>
  <div>
    <div class="offcanvas 
                sidebar-offcanvas 
                offcanvas-start" 
        tabindex="-1" id="offcanvasLeft" style="background: var(--white);">
        <div class="offcanvas-header">
          <img class="img-fluid profile-pic" src="/assets/images/icons/profile.png" alt="profile" />
          
          <h3 v-show="user_id !== ''" >Hello, Galih Raka</h3>
          <h3 v-show="user_id === ''" >Customer</h3>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <div class="sidebar-content">
            <ul class="link-section">
            <li>
                <div class="pages">
                <h3>Night Mode</h3>
                <div class="switch-btn">
                    <label class="switch">
                        <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                        <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                        <input type="checkbox" class="input" ref="darkCheckbox" @click="modeToggle">
                        <span class="slider"></span>
                    </label>
                </div>
                </div>
            </li>

            <li v-show="user_id !== ''">
                <a href="setting.html" class="pages">
                <h3>Setting</h3>
                <i class="ri-arrow-drop-right-line"></i>
                </a>
            </li>

            <li v-show="user_id !== ''">
                <a href="#" class="pages">
                <h3>Privacy Policy</h3>
                <i class="ri-arrow-drop-right-line"></i>
                </a>
            </li>

            <li v-show="user_id !== ''">
                <a href="login.html" class="pages">
                <h3>Logout</h3>
                <i class="ri-arrow-drop-right-line"></i>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: ['user_id'],
    data(){
      return {
        darkMode: false,
      }
    },  
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    },
    methods: {
        dark() {
            document.querySelector('body').classList.add('dark')
            this.darkMode = true
            this.$emit('dark')
        },

        light() {
            document.querySelector('body').classList.remove('dark')
            this.darkMode = false
            this.$emit('light')
        },

        modeToggle() {
          if (this.$refs.darkCheckbox.checked) {
            this.dark()
          } else {
            this.light()
          }
        },        
    }
}
</script>

<style>
.sidebar-offcanvas{
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  opacity: 1;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  margin-top: -25px;
  font-size: 10px;
  position: relative;
  height: 2.3em;
  width: 5.5em;
  border: 0px solid transparent;
  border-radius: 10em;
  background-color: rgb(232, 232, 232);
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  margin-top: -4px;
  margin-left: -2px;
  transform: translate(0.3em, 0.25em);
  position: absolute;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.75em #99bd16;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 1em white;
  transform: translate(3.65em, 0.25em);
}

.sun-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: #ffbb52;
}

.sun-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 1;
  transform: translate(2em, 2em) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(2em, 2em) rotate(-15deg);
}

.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.2em;
  height: 1.3em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}


.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 2px;
  bottom: 0;
  background-color: #042d4b;
  transition: .3s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  top: -1px;
  border-radius: 50px;
  left: -1px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
  transition: .3s;
}

.moon svg {
  fill: #ffffff;
  position: absolute;
  top: 1px;
  left: 32px;
  z-index: 1;
  width: 19px;
  height: 19px;
}

.sun svg {
  position: absolute;
  top: 1px;
  left: 3px;
  z-index: 1;
  width: 19px;
  height: 19px;
}

/* .switch:hover */.sun svg {
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
 
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* .switch:hover */.moon svg {
  animation: tilt 5s linear infinite;
}

@keyframes tilt {
 
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.input:checked + .slider {
  background-color: #73C0FC;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #73C0FC;
}

.input:checked + .slider:before {
  transform: translateX(30px);
}
</style>