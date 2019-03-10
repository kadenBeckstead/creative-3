<template lang="html">
<div class="res-page">
  <section class="resume">
    <img class="photo" src="../assets/resume.png">
  </section>
  <a href="../assets/resume.pdf" download="Kaden_Beckstead_Resume.pdf">
  <md-button class="md-raised md-primary button">Download</md-button>
  </a>
</div>

</template>

<script lang="js">
  export default  {
    name: 'resume',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.res-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: auto;
}
.button {
  background-color: #4e65e0;
  color: white;
  top: 6px;
  position: sticky;
}
.resume {
  height: 79vh;
}
.photo {
  height: auto;
  width: 845px;
}
</style>
