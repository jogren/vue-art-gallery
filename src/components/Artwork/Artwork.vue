<template>
  <div @click="toggleImage" @keyup.enter="toggleImage" class="Artwork-container" tabindex="0">
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ccc;
}

.image-info-container:hover {
  box-shadow: 0px 0px 3px 3px #ccc;
}

.image-info-container p {
  margin-bottom: 5px;
  text-align: center;
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
  25% {transform: rotate(1deg); }
  50% {transform: rotate(0deg); }
  75% {transform: rotate(-1deg); }
  100% {transform: rotate(0deg); }
  }
</style>