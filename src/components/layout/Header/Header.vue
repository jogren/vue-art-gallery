<template>
  <header class="header">
    <h1>Vue Art Gallery</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 36px;
  }

  #nav {
    padding: 10px;
  }

  #nav a {
    font-weight: bold;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>