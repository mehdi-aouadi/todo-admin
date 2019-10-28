<template lang="pug">
  section.todo-content
    content-header(
      :content-title="$t($route.name)",
      :button-route-name="newMediaRouteName",
      :search-function="true",
      display-type="list"
    )
    div.todo-main-content
      item-list(
        :headers="headers",
        :items="mediaList",
      )
    el-pagination(
      v-if="totalMediaCount > 10"
      :total="totalMediaCount",
      layout="prev, pager, next",
      @current-change="handleCurrentChange",
      :current-page="currentPage"
    )
</template>
<script>
import _ from 'lodash';
import ItemList from '@/components/ItemList';
import ContentHeader from '@/components/ContentHeader';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'media-list',
  components: {
    ItemList,
    ContentHeader,
  },
  data() {
    return {
      minRange: 0,
      maxRange: 9,
      newMediaRouteName: 'add a new media',
      headers: [
        { label: 'name' },
        { label: 'creationDate' },
      ],
    };
  },
  watch: {
    $route() {
      this.getMediaList();
    },
  },
  computed: {
    ...mapGetters(['mediaList', 'totalMediaCount']),
    currentPage() {
      return this.$route.query.page || 1;
    },
    query() {
      return this.$route.query.q;
    },
  },
  mounted() {
    this.getMediaList();
  },
  methods: {
    ...mapActions(['setMediaList']),
    handleCurrentChange(val) {
      const routeQuery = _.assign(_.cloneDeep(this.$route.query), { page: val });
      this.$router.push({ query: routeQuery });
    },
    getMediaList() {
      this.minRange = (10 * this.currentPage) - 10;
      this.maxRange = (10 * this.currentPage) - 1;
      this.setMediaList({ range: `${this.minRange}-${this.maxRange}` });
    },
  },
};
</script>

<style lang="scss">
</style>

