<template lang="pug">
  div#app
    transition(name="fade")
      router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  width: 7%;
  height: 7%;
}
</style>
