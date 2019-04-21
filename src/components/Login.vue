<template lang="pug">
  div(class="login")
    el-row(:span="12" class="center")
      el-col(:span="10") &nbsp
      el-col(:span="14")
        img.logo(src="/static/images/wellness.svg", valt="ToDo")
    el-row(:span="12" class="center")
      el-col(:span="24")
          el-input(placeholder="Login" v-model="login" clearable)
    el-row(:span="12" class="center")
      el-col(:span="24")
        el-input(placeholder="password" type="password" clearable)
    el-row(:span="12" class="center")
      el-col(:span="24")
        el-button(type="primary" @click="submitLogin" style="width: 100px;") Login
    el-row(:span="12" class="center")
      el-col(:span="24")
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
  methods: {
    ...mapActions(['setLogin']),
    submitLogin() {
      this.setLogin(this.login);
      router.push('/');
    },
  },
};
</script>

<style lang="scss">
@import '../sass/utils';
  .center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
  .logo {
    width: 100px;
  }
</style>
