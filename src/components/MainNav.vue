<template lang="pug">
  aside
      ul.todo-main-nav
        li.todo-main-nav__item(
          v-for="(item, key) in nav",
          :class="{ 'deployed': currentSubNav === key }",
          )
          a.todo-main-nav__link(
            v-if="item.children && item.children.length",
            :title="( key )",
            @click="openSubNav(key)",
            :class="{ 'active': activeChild(key), 'active-child': currentSubNav === key }"
            )
            span.fa.todo-main-nav__icon(:class="item.icon")
            span.todo-main-nav__label {{ ( key ) }}
          a.todo-main-nav__link(
            v-else, @click="navigateTo(key)",
            :title="( key )",
            :class="{ 'active': $route.name === key && currentSubNav === null }"
            )
            span.fa.todo-main-nav__icon(:class="item.icon")
            span.todo-main-nav__label {{ ( key ) }}
          div.todo-main-nav__info(v-if="item.info")
            div {{ (item.info) }}
      div.todo-main-nav--subnav__container
        div.todo-main-nav--subnav__children(
          v-for="(item, key) in nav",
          :class="{ 'active': currentSubNav === key }"
          )
          h2.todo-main-nav--subnav__title
            span {{ ( key ) }}
            button.todo-main-nav--subnav__close(@click="closeSubNav")
              span.fa.fa-times
          ul.todo-main-nav--subnav(v-if="item.children")
            li.todo-main-nav--subnav__item(
              v-for="(subItem, index) in item.children",
              )
              a.todo-main-nav--subnav__link(
                @click="navigateTo(subItem)"
                v-if="hasParams(subItem)"
                ) {{ ( subItem.name ) }}
                span.fa.fa-angle-right
              a.todo-main-nav--subnav__link(
                @click="navigateTo(subItem)"
                v-else
                ) {{ ( subItem ) }}
                span.fa.fa-angle-right

</template>

<script>
import _ from 'lodash';
import mainNavConf from '@/config/main-nav';

export default {
  name: 'main-nav',
  computed: {
    nav() {
      return mainNavConf;
    },
  },
  data() {
    return {
      currentSubNav: null,
    };
  },
  mounted() {
    document.addEventListener('click', (evt) => {
      if (!evt.target.closest('.todo-cc-main-nav')) {
        this.currentSubNav = null;
      }
    });
  },
  methods: {
    hasParams(target) {
      return _.isObject(target);
    },
    openSubNav(key) {
      this.currentSubNav = key;
    },
    closeSubNav() {
      this.currentSubNav = null;
    },
    navigateTo(target) {
      this.closeSubNav();
      if (_.isObject(target)) {
        this.$router.push(target);
      } else {
        this.$router.push({ name: target });
      }
    },
    activeChild(key) {
      let isActive = false;
      _.forEach(this.$route.matched, (route) => {
        if (_.has(route, 'meta.breadcrumb') &&
          route.meta.breadcrumb === key &&
          _.isNull(this.currentSubNav)) {
          isActive = true;
        }
      });
      return isActive;
    },
  },
};
</script>

<style lang="scss">
  @import '../sass/utils';

  .todo {
    &-main-nav {
      background-color: $outer-space;
      list-style: none;
      padding: 0;
      margin: 0;
      position: fixed;
      left: 0;
      top: $base-padding-top;
      bottom: 0;
      z-index: $main-nav-zindex;
      width: $base-padding-left-small;

      @media screen and (min-width:1200px) and (min-height: 800px) {
        width: $base-padding-left;
      }

      &__item {
        text-align: center;
        position: relative;
        margin-top: 0 !important;

        &:after {
          content: '';
          border-bottom: 1px dotted $emperor;
          width: 32px;
          display: inline-block;
        }

        &:not(.deployed):hover [class*="__info"] {
          opacity: 1;
          transform: translate(0, -50%);
        }
      }

      &__info {
        background-color: $robins-egg-blue;
        color: $white;
        border: 2px solid;
        box-shadow: 0 0 15px rgba(#000, .25);
        width: 225px;
        height: 80px;
        display: flex;
        align-items: center;
        position: absolute;
        left: $base-padding-left-small;
        top: 42.7%;
        opacity: 0;
        transform: translate(-200%, -50%);
        transition: opacity .3s ease-in-out .5s;

        @media screen and (min-width:1200px) and (min-height: 800px) {
          left: $base-padding-left;
        }

        &:after,
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
        }

        &:before {
          border-right: 17px solid $white;
          border-top: 18px solid transparent;
          border-bottom: 18px solid transparent;
          left: -18px;
        }

        &:after {
          border-right: 15px solid $robins-egg-blue;
          border-top: 16px solid transparent;
          border-bottom: 16px solid transparent;
          left: -15px;
        }
      }

      &__link {
        background-color: $outer-space;
        cursor: pointer;
        font-size: pxtoem(10);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: uppercase;
        padding: pxtoem(10) pxtoem(20);
        position: relative;

        &:after {
          content: "";
          border-right: 6px solid $athens-gray;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          position: absolute;
          right: 0;
          top: 50%;
          opacity: 0;
          transform: translate(100%, -50%);
          transition: all .3s ease-in .3s;

          @media screen and (min-width:1200px) and (min-height: 800px) {
            border-right: 14px solid $athens-gray;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
          }
        }

        &.active,
        &.active-child {
          &:after {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }

        &.active-child {
          &:after {
            border-right-color: $white;
          }
        }

        &.active,
        &:hover {
          text-decoration: none !important;

          [class*=__label] {
            color: $robins-egg-blue;
          }

          [class*=__icon] {
            transform: scale(1.2, 1.2) translateZ(0);
          }
        }
      }

      &__icon.fa {
        font-size: pxtoem(45);
        color: $white;
        transition: all .3s ease;
        backface-visibility: hidden;
        transform: translateZ(0);
        -webkit-font-smoothing: subpixel-antialiased;
      }

      &__label {
        color: rgba($white, .5);
        line-height: 1.2;
        margin-top: 1em;
        transition: color .3s ease;
        display: none;

        @media screen and (min-width:1200px) and (min-height: 800px) {
          display: block;
        }
      }

      &--subnav {
        border-bottom: 1px dotted $alto;
        list-style: none inside none;
        padding: 0;
        margin: 0;
        padding-bottom: 25px;

        &__container {
          position: fixed;
          height: 100%;
          left: $base-padding-left-small;
          top: $base-padding-top;
          z-index: $main-nav-zindex - 1;

          @media screen and (min-width:1200px) and (min-height: 800px) {
            left: $base-padding-left;
          }
        }

        &__children {
          background-color: $white;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin-left: 0;
          width: 400px;
          transform: translateX(-100%);
          transition: transform .3s ease-in-out .3s;

          &.active {
            transform: translateX(0);
            box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.1);
          }
        }

        &__title {
          background-color: $athens-gray;
          color: $emperor;
          font-size: pxtoem(26);
          font-weight: lighter;
          text-transform: uppercase;
          padding: pxtoem(15) pxtoem(16);
          margin: 0;
          display: flex;
          align-items: center;

          > span {
            flex-grow: 1;
            max-width: 315px;
            margin-right: 10px;
          }
        }

        &__close {
          cursor: pointer;
          color: $athens-gray;
          background-color: $alto;
          border: 0 none;
          border-radius: 100px;
          font-size: pxtoem(9);
          line-height: 1.3;
          text-align: center;
          float: right;
          padding: 0;
          height: 23px;
          width: 23px;
          transition: background-color .3s ease-in;

          &:hover {
            background-color: darken($athens-gray, 10%);
          }
        }

        &__item {
          margin-top: 0 !important;
        }

        &__link {
          color: $robins-egg-blue !important;
          font-size: pxtoem(15);
          text-transform: uppercase;
          display: block;
          padding: pxtoem(20) pxtoem(32);
          cursor: pointer;
          transition: color .3s ease-in;

          &:hover {
            text-decoration: none !important;
            color: darken($robins-egg-blue, 10%) !important;

            > .fa {
              animation: 'light-shake' .3s ease-in-out 1;
            }
          }

          > .fa {
            float: right;
            font-size: pxtoem(20);
            transform: translate3d(0, 0, 1px);
          }
        }

      }
    }
  }
</style>
