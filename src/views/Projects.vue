<template lang="html">

    <b-carousel
      id="carousel1"
      class="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      no-animation
      indicators
      background="#ababab"
      :interval="4000"
      
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" class="slide">
        item 1
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" class="slide">
        item 2
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" class="slide">
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
  height: 20vh;
}

.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  width: 100%;
  height: 20vh;
}

.slide {
  color: black;
}
</style>
