<template>
  <main id="app">
    <ArtContainer v-bind:images="images"/>
  </main>
</template >

<script>
  import { getArtwork } from '../apiCalls/apiCalls';
  import ArtContainer from '../components/ArtContainer/ArtContainer';
    
export default {
  name: "Home",
  components: {
    ArtContainer
  },
  data() {
    return {
      msg: 'Hello',
      images: []
    }
  },
  async created() {
    const response = await getArtwork();
    this.images = response;
  }
}
</script>

<style>  

</style>