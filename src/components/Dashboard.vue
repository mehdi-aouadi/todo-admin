<template lang="pug">
  el-row(:span=12 class="center")
    el-col(:span=24)
      el-button(type="primary"  @click="createProgram") Create a new Program

</template>

<script>
import router from '@/router';
import { mapGetters } from 'vuex';

export default {
  name: 'dashboard',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['login']),
  },
  methods: {
    createProgram() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'The login will be available soon!',
        duration: 5000,
      });
      this.$store.dispatch('setLogin', this.login);
      router.push('/program-edit');
    },
  },
};
</script>

<style lang="scss">
</style>
