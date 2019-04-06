<template lang="pug">
  div(class="login")
    el-row(:span=12 class="center") Admin app
    el-row(:span=12 class="center")
      el-col(:span=24)
          el-input(placeholder="Login" v-model="login" clearable)
    el-row(:span=12 class="center")
      el-col(:span=24)
        el-input(placeholder="password" type="password" clearable)
    el-row(:span=12 class="center")
      el-col(:span=24)
        el-button(type="primary"  @click="startHacking" style="width: 100px;") Login
    el-row(:span=12 class="center")
      el-col(:span=24)
        el-button(type="primary" style="width: 100px;") New User
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      login: '',
    };
  },
  /*   computed: {
    ...mapGetters(['login']),
  }, */
  methods: {
    ...mapActions(['setLogin']),
    startHacking() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'The login will be available soon!',
        duration: 5000,
      });
      this.$store.dispatch('setLogin', this.login);
      router.push('/dashboard');
    },
  },
};
</script>

<style lang="scss">
  .center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>
