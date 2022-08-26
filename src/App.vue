<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    border:0;
    font-family: 'Roboto', sans-serif;
  }
  #app{
    background-color: #f8f9fd;
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
</style>
