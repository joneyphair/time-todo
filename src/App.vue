<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>

html,body,ul,h1,h2,h3,h4,h5,h6{
  margin:0;
  padding:0;
}

html,body{
  height:100%;
  width:100%;
  position:relative;
  display:flex;
  flex-diraction:column;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display:flex;
  flex:1;
  flex-diraction:column;
}

</style>
