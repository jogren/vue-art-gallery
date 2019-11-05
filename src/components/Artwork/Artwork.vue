<template>
  <div @click="toggleImage" @keyup="toggleImageOnKeyUp" class="Artwork-container" tabindex="0">
    <img v-if="image.showPicture" :src="image.image"/>
    <div v-else class="image-info-container">
      <p>Title: {{image.title}}</p>
      <p>Artist: {{image.artist}}</p>
      <p>Culture: {{image.culture}}</p>
      <p>Century: {{image.century}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artwork",
  props: ["image"],
  methods: {
    toggleImage() {
      this.image.showPicture = !this.image.showPicture;
    },
    toggleImageOnKeyUp(e) {
      if(e.keyCode === 13) {
        this.image.showPicture = !this.image.showPicture;
      }
    }
  }
}
</script>

<style scoped>
.Artwork-container {
  height: 500px;
  width: 300px;
  margin: 10px;
}

.image-info-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-info-container p {
  margin-bottom: 5px;
}

img {
  height: 100%;
  width: 100%;
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