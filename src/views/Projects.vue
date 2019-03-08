<template lang="html">

    <b-carousel
      id="carousel1"
      class="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      no-animation
      indicators
      background="#d2d2d2"
      :interval="1000000"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <b-carousel-slide class="slide">
        item 1
      </b-carousel-slide>

      <b-carousel-slide class="slide">
        item 2
      </b-carousel-slide>

      <b-carousel-slide class="slide">
        item 3
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

.carousel-caption {
  position: initial;
}
</style>
