<template>
  <main>
  <ul class="o-vertical-spacing o-vertical-spacing--l">
        <li class="blog-post o-media">
        <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
        </div>
        <div class="o-media__body">
            <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
            </h3>
            <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
            </p>
            <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
            </div>
            </div>
        </div>
        </li>
        <li class="blog-post o-media">
        <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
        </div>
        <div class="o-media__body">
            <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
            </h3>
            <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
            </p>
            <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
            </div>
            </div>
        </div>
        </li>
        <li class="blog-post o-media">
        <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
        </div>
        <div class="o-media__body">
            <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
            </h3>
            <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
            </p>
            <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
            </div>
            </div>
        </div>
        </li>
    </ul>
    </main>
</template>

<script>
export default {
    name: 'PromotionLoaderVue'
}
</script>

<style lang="scss">
.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  border-radius: 30px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

.blog-post {
  &__headline {
    font-size: 1.25em;
    font-weight: bold;
  }

  &__meta {
    font-size: 0.85em;
    color: #6b6b6b;
  }
}

// OBJECTS

.o-media {
  display: flex;
  
  &__body {
    flex-grow: 1;
    margin-left: 1em;
  }
}

.o-vertical-spacing {
  > * + * {
    margin-top: 0.75em;
  }
  
  &--l {
    > * + * {
      margin-top: 2em;
    }
  }
}

// MISC

* {
  box-sizing: border-box;
}

main {
  width: 95%;
  margin-top: 3em;
  margin-left: 20px;
}

header {
  h1 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2em;
  }

  p {
    &:not(:first-child) {
      margin-top: 1em;
    }
  }
}
</style>