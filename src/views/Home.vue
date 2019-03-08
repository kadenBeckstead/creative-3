<template>
  <!-- <div>HOME!</div> -->
  <div>
    <md-card>
      <md-card-header>
        <svg width="0" height="0" class="poly">
          <clipPath id="clipPolygon">
            <polygon points="-1 217,429 216,292 -1,0 0"></polygon>
          </clipPath>
        </svg>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/steps.jpg" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="css">
    .poly {
        background-color: green;
    }

</style>
