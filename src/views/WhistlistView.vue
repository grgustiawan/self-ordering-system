<template>
  <div>
    <!-- header start -->
    <header class="section-t-space">
        <div class="custom-container">
        <div class="header-panel">
            <router-link :to="{name: 'Profile'}">
                <i class="ri-arrow-left-s-line"></i>
            </router-link>
            <h2>My Wishlist</h2>
        </div>
        </div>
    </header>
    <!-- header end -->

    <!-- wishlist start -->
    <section class="section-t-space section-b-space">
        <div class="custom-container">
        <div class="row gy-4">
            <div class="col-12">
            <div class="vertical-product-box">
                <div class="vertical-box-img">
                <a href="details.html">
                    <img class="img-fluid img" src="assets/images/product/vp3.png" alt="vp5" />
                </a>
                <div class="like-icon">
                    <i class="ri-heart-3-line outline-icon"></i>
                    <i class="ri-heart-3-fill fill-icon"></i>
                    <div class="effect-group">
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    </div>
                </div>
                </div>
                <div class="vertical-box-details">
                <div class="vertical-box-head">
                    <div class="restaurant">
                    <a href="details.html">
                        <h5>AWS - USA</h5>
                    </a>
                    <h6>
                        <span class="award"><i class="ri-award-fill"></i></span> Best Seller
                    </h6>
                    </div>
                    <h6 class="food-items">Classic bacon & eggs, sausage...</h6>

                    <h6 class="rating-star">
                    <span class="star"><i class="ri-star-s-fill"></i></span> 4.0 (20k+ Reviews)
                    </h6>
                </div>
                <div class="location-distance">
                    <div class="location">
                    <h6 class="place">New York</h6>
                    <h6 class="pt-2 pb-2"><span class="theme-color">$3 </span> for one</h6>
                    </div>
                    <div class="distance">
                    <ul>
                        <li><i class="ri-map-pin-fill theme-color"></i> 2.5 km</li>
                        <li><i class="ri-time-fill theme-color"></i> 35 min</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col-12">
            <div class="vertical-product-box">
                <div class="vertical-box-img">
                <a href="details.html">
                    <img class="img-fluid img" src="assets/images/product/vp4.png" alt="vp5" />
                </a>
                <div class="like-icon">
                    <i class="ri-heart-3-line outline-icon"></i>
                    <i class="ri-heart-3-fill fill-icon"></i>
                    <div class="effect-group">
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    </div>
                </div>
                </div>

                <div class="vertical-box-details">
                <div class="vertical-box-head">
                    <div class="restaurant">
                    <a href="details.html">
                        <h5>Cactus Club Cafe</h5>
                    </a>
                    </div>
                    <h6 class="food-items">Spicy ahi roll, prawn crunch..</h6>

                    <h6 class="rating-star">
                    <span class="star"><i class="ri-star-s-fill"></i></span> 5.0 (300k+ Reviews)
                    </h6>
                </div>
                <div class="location-distance">
                    <div class="location">
                    <h6 class="place">Victoria</h6>
                    <h6 class="pt-2 pb-2"><span class="theme-color">$6</span> for one</h6>
                    </div>
                    <div class="distance">
                    <ul>
                        <li><i class="ri-map-pin-fill theme-color"></i> 2.6 km</li>
                        <li><i class="ri-time-fill theme-color"></i> 20 min</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col-12">
            <div class="vertical-product-box">
                <div class="vertical-box-img">
                <a href="details.html">
                    <img class="img-fluid img" src="assets/images/product/vp5.png" alt="vp5" />
                </a>
                <div class="like-icon">
                    <i class="ri-heart-3-line outline-icon"></i>
                    <i class="ri-heart-3-fill fill-icon"></i>
                    <div class="effect-group">
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    </div>
                </div>
                <div class="offers">
                    <h6>upto $20</h6>
                    <h2>50% OFF</h2>
                </div>
                </div>
                <div class="vertical-box-details">
                <div class="vertical-box-head">
                    <div class="restaurant">
                    <a href="details.html">
                        <h5>Moxies Cafe</h5>
                    </a>
                    <h6>
                        <span class="award"><i class="ri-award-fill"></i></span> Best Seller
                    </h6>
                    </div>
                    <h6 class="food-items">Crispy bottom vegan potsticker...</h6>

                    <h6 class="rating-star">
                    <span class="star"><i class="ri-star-s-fill"></i></span> 4.3 (50k+ Reviews)
                    </h6>
                </div>
                <div class="location-distance">
                    <div class="location">
                    <h6 class="place">Toronto</h6>
                    <h6 class="pt-2 pb-2"><span class="theme-color">$5</span> for one</h6>
                    </div>
                    <div class="distance">
                    <ul>
                        <li><i class="ri-map-pin-fill theme-color"></i>1 km</li>
                        <li><i class="ri-time-fill theme-color"></i>15 min</li>
                    </ul>
                    </div>
                </div>
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

}
</script>

<style>

</style>