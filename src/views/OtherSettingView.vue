<template>
  <div>
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
            <router-link :to="{name: 'Profile'}"> 
                <i class="ri-arrow-left-s-line"></i> 
            </router-link>
          <h2>Other-Setting</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- notification section start -->
    <section class="section-b-space">
      <div class="custom-container">
        <div class="accordion option-accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Select Language</button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="form-check">
                  <label class="form-check-label" for="radio1">English</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio1" value="option1" checked />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="radio2">Spanish</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio2" value="option2" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="radio3">France</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio3" value="option3" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="radio4">Portuguese</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio4" value="option4" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="radio5">Russian</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio5" value="option5" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="radio6">Chinese</label>
                  <input class="form-check-input" type="radio" name="exampleRadios" id="radio6" value="option6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion option-accordion mt-3" id="accordionExample1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Change Currency</button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body currency">
                <ul class="currency-listing">
                  <li>US Dollar</li>
                  <li>INR</li>
                  <li>Euro</li>
                  <li>Pound</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'OtherSettingView'
}
</script>

<style>

</style>