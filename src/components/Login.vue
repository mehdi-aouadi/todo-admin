<template lang="pug">
  div.todo-login-main-container
    el-row.todo-login-header
      img.todo-logo(src="/static/images/wellness.svg", valt="ToDo")
    el-row.todo-login-card
      el-card
        table.todo-login-table
          tr
            td.todo-login-text
              el-row.todo-login-heading
                h1 {{ $t('sign in text') }}
              el-row
                p {{$t('or') + ' '}}
                  a(href="") {{ $t('new account') }}
            td.todo-login-form
              el-row.todo-login-form-email(:span="12")
                el-input(:placeholder="$t('email')" v-model="login" clearable)
              el-row.todo-login-form-password(:span="12")
                el-input(:placeholder="$t('password')" type="password" clearable)
              el-row(:span="12")
                el-button.todo-login-form-button(
                  type="primary"
                  @click="submitLogin"
                  :round="false"
                  style="width: 100px; background: #cd8a2a; border: none;"
                ) {{ $t('sign in button') }}
    el-row.todo-login-footer &nbsp
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
@import url('https://fonts.googleapis.com/css?family=Barlow');
  .todo {
    &-login-main-container {
      background-image: url('/static/images/signin.webp');
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      align-content: stretch;
    }
    &-logo {
      width: 10vh;
    }

    &-login-text {
      text-align: left;
      vertical-align: text-top;
    }

    &-login-form {
      text-align: left;
      vertical-align: text-top;
      margin-left: 0px;
    }

    &-login-form-email {
      text-align: left;
      vertical-align: text-top;
      margin: 0px;
    }

    &-login-form-button {
      margin-top: 20px;
    }

    &-login-heading {
      font-size: 0.65rem;
    }

    &-login-card {
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    &-login-table {
      width: 80vh;
    }

    &-signin {
      background: hotpink;
      width: 50vh;
      height: 10vh;
    }

    &-login-header {
      margin-left: 10vh;
      margin-top: 5vh;
      height: 10hv;
      margin-bottom: 50px;
    }

    &-login-footer {
      height: 10hv;
      margin-top: 50px;
    }
  }

  .logo {
    width: 100px;
  }

  #app {
    margin: 0;
  }

  p {
    font-family: 'Barlow',sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
  }
</style>
