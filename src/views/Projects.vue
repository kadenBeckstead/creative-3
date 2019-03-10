<template lang="html">

    <b-carousel
      id="carousel1"
      class="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      no-animation
      indicators
      background="#d2d2d2"
      :interval="100000"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <b-carousel-slide class="slide" caption="StockMotion">
        <a href="https://stockmotion.io" target="_blank">
        <div class="stockmotion">
        <img class="desktop" src="../assets/desktop.png">
        <img class="mobile" src="../assets/stockmotion-mobile.png">
        </div>
        </a>
        <a href="https://stockmotion.io" target="_blank">StockMotion</a>
      </b-carousel-slide>

      <b-carousel-slide class="slide" caption="Drachma - Money Managed">
        <a href="https://drachma-368aa.firebaseapp.com" target="_blank">
        <div class="stockmotion">
        <img class="lab1" src="../assets/drachma.png">
        </div>
        </a>
        <a href="https://drachma-368aa.firebaseapp.com" target="_blank">Drachma</a>
      </b-carousel-slide>

      <b-carousel-slide class="slide" caption="KB Photography">
        <a href="http://lab1.kadenbeckstead.com" target="_blank">
        <div class="stockmotion">
        <img class="lab1" src="../assets/lab1.png">
        </div>
        </a>
        <a href="http://lab1.kadenbeckstead.com" target="_blank">KB Photography</a>
      </b-carousel-slide>


    </b-carousel>


</template>



<script lang="js">
  export default  {
    name: 'projects',
    props: [],
    mounted() {

    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.carousel {
  width: 95vw;
  height: 80vh !important;
  overflow: hidden;
}

::v-deep .carousel-inner {
  height: 100% !important;
}

.carousel-item {
  height: 100% !important;
}

.stockmotion {
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.lab1 {
  width: auto;
  height: 100%;
}

.desktop {
  height: 100%;
  width: auto;
  margin-right: 20px;
}

.mobile {
  height: 90%;
  width: auto;
}

.carousel-caption {
  position: initial;
}
</style>
