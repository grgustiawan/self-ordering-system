<template>
  <div>
    <div class="modal fade location-modal" id="location" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="d-flex align-items-center">
            <div class="modal-title">
                <i class="ri-arrow-down-s-line"></i>
                <h2 class="fw-semibold">Select a Location</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            </div>
            <section class="search-section pt-0">
            <div class="custom-container">
                <form class="auth-form search-head" target="_blank">
                <div class="form-group">
                    <div class="form-input w-100">
                    <input type="text" class="form-control search" placeholder="Search for area, street name.." />
                    <i class="ri-search-line search-icon"></i>
                    </div>
                </div>
                </form>
            </div>
            </section>
            <div class="custom-container">
            <a href="landing.html" class="current-location">
                <div class="current-address">
                <i class="ri-focus-3-line focus"></i>
                <div>
                    <h4>Use current-location</h4>
                    <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                </div>
                </div>

                <i class="ri-arrow-right-s-line arrow"></i>
            </a>
            <h3 class="mt-3 fw-medium dark-text">Recent Location</h3>

            <a href="landing.html" class="recent-location">
                <div class="loation-icon text-center">
                <i class="ri-map-pin-line dark-text"></i>
                </div>

                <div class="recant-address">
                <h3>Bayshore</h3>
                <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                </div>
            </a>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LocationVue'
}
</script>

<style>

</style>