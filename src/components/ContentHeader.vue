<template lang="pug">
div.todo-content-header(:class="{'list-type': displayType === 'list'}")
  div.todo-content-header__breadcrumb
    el-breadcrumb(separator="")
      el-breadcrumb-item(:to="{ name: 'dashboard' }")
        i.fa.fa-home
        span {{ $t('dashboard') }}
      el-breadcrumb-item.no-link(
        v-for="(item, index) in breadcrumb",
        :key="index",
        v-if="item.meta.hasOwnProperty('breadcrumbNoLink')"
      ) {{ $t(item.meta.breadcrumb) }}
      el-breadcrumb-item(
        v-for="(item, index) in breadcrumb",
        :key="index",
        :to="{ name: item.meta.breadcrumb }",
        v-if="!item.meta.hasOwnProperty('breadcrumbNoLink')"
      ) {{ $t(item.meta.breadcrumb) }}
  header.todo-content-header__container
    el-row.todo-content-header__content(type="flex", justify="space-between", align="center")
      div.todo-content-header__title
        h1 {{ contentTitle }}
      div.todo-content-header__actions
        div.todo-content-header__add-button(v-if="buttonRouteName")
          el-button#navigateToButton.header-button(
            type="warning",
            @click="navigateTo"
            ) {{$t(buttonRouteName)}}
            i.el-icon-plus.el-icon-right
        div.todo-content-header__add-button(v-if="addNewContent")
          el-button#addContentButton.header-button(
            type="warning",
            @click="addNewContent") {{$t(addNewContentLabel)}}
            i.el-icon-plus.el-icon-right
        div.todo-content-header__save-button(v-if="saveAction")
          el-button#headerCancel.header-button.todo-separator.todo-separator--append(
            type="text",
            @click="cancel",
            size="small",
            v-if="!noCancel") {{ $t('cancel') }}
            i.el-icon-close.el-icon-right
          el-button#headerCancel.header-button.todo-separator.todo-separator--append(
            type="text",
            @click="returnToDashboard",
            size="small",
            v-else) {{ $t('cancel') }}
            i.el-icon-close.el-icon-right
          el-button#saveButton.header-button(
            type="warning",
            @click="saveAction",
            icon="check",
            :disabled="disabledSave") {{$t('save')}}
        div.todo-content-header__search(v-if="searchFunction", @click="deploySearch")
          el-input#search.header-input(
            type="text",
            v-model="query",
            :placeholder="searchPlaceholder",
            @focus="deploySearch",
            @blur="shrinkSearch",
            @input="setSearchQuery(query)",
            clearable
          )
            i.el-input__icon.el-icon-search(slot="suffix")
</template>

<script>
import _ from 'lodash';

export default {
  name: 'content-header',
  data() {
    return {
      query: this.$route.query.q || null,
      searchPlaceholder: '',
    };
  },
  computed: {
    breadcrumb() {
      const breadcrumb = [];
      _.forEach(this.$route.matched, (route) => {
        if (_.has(route.meta, 'breadcrumb')) {
          breadcrumb.push(route);
        }
      });
      return breadcrumb;
    },
  },
  mounted() {
    if (!_.isUndefined(this.$route.query.q)) {
      this.deploySearch();
    }

    this.$watch('$route', () => {
      if (!_.isUndefined(this.$route.query.q)) {
        this.deploySearch();
      }
    });
  },
  props: [
    'content-title',
    'button-route-name',
    'save-action',
    'search-function',
    'no-cancel',
    'display-type',
    'disabled-save',
    'add-new-content',
    'add-new-content-label',
  ],
  methods: {
    navigateTo() {
      this.$router.push({ name: this.buttonRouteName });
    },
    deploySearch() {
      const search = this.$el.querySelector('#search');
      search.classList.add('active');
      search.focus();
      this.searchPlaceholder = this.$t('search');
    },
    shrinkSearch() {
      const search = this.$el.querySelector('#search');
      if (_.isEmpty(this.query)) {
        search.classList.remove('active');
        search.blur();
      }
      this.searchPlaceholder = '';
    },
    cancel() {
      this.$router.go(-1);
    },
    returnToDashboard() {
      this.$router.push('/');
    },
    setSearchQuery(queryValue) {
      const queryModel = {};
      _.forEach(this.$route.query, (value, key) => {
        if (!_.isEmpty(value) && key !== 'q') {
          queryModel[key] = null;
        }
      });

      const currentQuery = _.cloneDeep(this.$route.query);
      const query = _.assign(
        _.pick(currentQuery, _.keys(queryModel)),
        (!_.isEmpty(queryValue)) ? { q: queryValue } : {}, { page: 1 },
      );

      this.$router.push({ query });
    },
  },
};
</script>

<style lang="scss">
  @import '../sass/utils';

  .todo-content-header {
    &__breadcrumb {
      padding: pxtoem(10);
    }

    &__container {
      background: url('/static/img/header-background.jpg')
        no-repeat
        scroll
        left
        center
        $robins-egg-blue;
      padding: pxtoem(10) pxtoem(20);
      margin-bottom: 30px;

      .list-type & {
        padding: pxtoem(7) pxtoem(20) pxtoem(30);
      }
    }

    &__content {
      height: 70px;
      align-items: center;

      .list-type & {
        height: 100px;
      }
    }

    &__title h1 {
      font-size: pxtoem(32);
      font-weight: lighter;
      color: $white;
      margin: 0;
    }

    &__actions {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }

    &__save-button,
    &__add-button {
      margin-left: pxtoem(15);
      display: flex;

      button:not(.el-button--text) {
        box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
        margin-left: 0;
      }

      .el-icon-right {
        margin-left: pxtoem(7);
      }
    }
  }

  #search {
    width: pxtoem(36);
    transition: .3s ease-in;

    input {
      border-bottom: 0 none transparent;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .15);

      &::placeholder {
        text-transform : uppercase;
      }

      &:hover,
      &:focus {
        border-bottom: 0 none transparent;
      }
    }

    &:not(.active) input {
      padding: 0;
      color: transparent;
    }

    &.active {
      width: pxtoem(250);
    }
  }
</style>
