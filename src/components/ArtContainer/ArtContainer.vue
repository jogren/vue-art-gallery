<template>
  <div class="img-container">
    <div v-bind:key="image.id" v-for="image in images">
      <Artwork v-bind:image="image"/>
    </div>
  </div>
</template>

<script>
import Artwork from '../Artwork/Artwork';
export default {
  name: "ArtContainer",
  props: ["images"],
  components: {
    Artwork
  }
  
}
</script>


<style scoped>
.img-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>