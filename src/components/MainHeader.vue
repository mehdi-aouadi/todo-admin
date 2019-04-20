<template lang="pug">
  header.todo-header
    el-row(type="flex", justify="end", align="middle")
      el-col.todo-header__toolbar.md-primary(:span="20")
        img.todo-header__logo(src="/static/images/wellness.svg", valt="ToDo")
      el-col.t2s-cc-header__actions(:span="4")
        el-dropdown(@command="userActions")
          span.el-dropdown-link actions
            i.el-icon-caret-bottom.el-icon--right
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(command="profile") {{ ('Edit profile') }}
            el-dropdown-item(command="logout") {{('Logout')}}
            el-dropdown-item(command="help") {{('Help')}}
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'main-header',
  mounted() {
  },
  computed: {
  },
  methods: {
    ...mapActions(['logout']),
    userActions(command) {
      switch (command) {
        case 'logout':
          this.logout();
          break;
        default:
          this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss">
@import '../sass/utils';
.todo-header {
  background-color: $white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: $base-padding-top;
  padding: pxtoem(9) 0;
  z-index: $main-header-zindex;

  &__logo {
    width: 35px;
    margin-left: 15px;
  }

  .el-dropdown,
  .el-button {
    color: $outer-space;
    text-transform: uppercase;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: pxtoem(20);

    [class*=el-icon] {
      font-size: pxtoem(10);
      color: $robins-egg-blue;
    }
  }
}
</style>
