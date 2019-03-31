<template lang="pug">
  div.todo-layout
    div.todo-layout__header
      main-header
    div.todo-layout__container
      div.todo-layout__sidebar
        main-nav
        router-link(:to="{name: 'help'}").todo-help-link
          i.fa.fa-question-circle
          span {{ ('Help') }}
      div.todo-layout__content
        transition(name="fade")
          router-view
</template>

<script>
import MainNav from './MainNav';
import MainHeader from './MainHeader';

export default {
  name: 'layout',
  components: {
    MainNav,
    MainHeader,
  },
  computed: {
  },
  mounted() {
  },
  watch: {
    $route(newValue) {
      if (newValue.path === '/help') {
        this.$ga.event({
          eventCategory: 'Click',
          eventAction: 'Clicked on Help',
          eventLabel: 'Button on Layout',
        });
      }
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
 @import "../sass/utils";
.todo {
  padding-bottom: 160px;

  &-layout__sidebar {
    .todo-version {
      font-size: pxtoem(12);
      position: fixed;
      left: $base-padding-left-small + 10;
      bottom: 10px;
      color: $outer-space;
      z-index: 99999;

      @media screen and (min-width: 1200px) and (min-height: 800px) {
        left: $base-padding-left + 10;
      }
    }
  }

  &-help-link {
    position: fixed;
    color: $white;
    left: 0;
    bottom: 10px;
    width: $base-padding-left-small;
    z-index: 99999;
    height: 50px;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (min-width: 1200px) and (min-height: 800px) {
      width: $base-padding-left;
    }

    span {
      line-height: pxtoem(15);
      font-size: pxtoem(12);
      margin-top: pxtoem(5);
    }
  }
}

</style>
