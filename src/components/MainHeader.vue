<template lang="pug">
  header.todo-header
    el-row(type="flex", justify="end", align="middle")
      el-col.todo-header__toolbar.md-primary(:span="24")
        img.todo-header__logo(src="/static/images/wellness.svg", valt="ToDo")
</template>

<script>

export default {
  name: 'main-header',
  mounted() {
  },
  computed: {
  },
  methods: {
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
