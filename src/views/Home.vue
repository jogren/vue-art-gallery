<template>
  <main id="app">
    <div class="img-container">
      <div v-bind:key="image.id" v-for="image in images">
        <img :src="image.baseimageurl" />
      </div>
    </div>
  </main>
</template >

<script>
  import { museumData } from '../apiCalls/apiCalls';
    
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      msg: 'Hello',
      images: []
    }
  },
  async created() {
    const response = await museumData();
    this.images = response.records
  }
}
</script>

<style>  
.img-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
  
img {
  height: 500px;
  width: 330px;
  margin: 10px;
}
  
img:hover {
  animation: artwork_hover 1s;
  animation-timing-function: linear;
}
  
@keyframes artwork_hover {
  0% { transform: rotate(0deg); }
  25% {transform: rotate(2deg); }
  50% {transform: rotate(0deg); }
  75% {transform: rotate(-2deg); }
  100% {transform: rotate(0deg); }
  }
</style>