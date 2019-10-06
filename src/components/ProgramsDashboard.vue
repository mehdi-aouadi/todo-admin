<template lang="pug">
  div.todo-pages
    transition(name="fade")
      router-view
</template>

<script>
export default {
  name: 'programs-dashboard',
};
</script>
