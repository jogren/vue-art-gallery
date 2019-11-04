<template>
  <header class="header">
    <p>About</p>
    <h1>Vue Art Gallery</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 36px;
  }
</style>