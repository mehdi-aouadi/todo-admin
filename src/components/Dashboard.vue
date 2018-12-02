<template lang="pug">
  div Welcome to the admin Dashboard {{ login }} !

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
      test: '',
    };
  },
  computed: {
    ...mapGetters(['login']),
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
