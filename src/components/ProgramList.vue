<template lang="pug">
  section.todo-content
    content-header(
      :content-title="$t($route.name)",
      :button-route-name="newProgramRouteName",
      :search-function="true",
      display-type="list"
    )
    div.todo-main-content
      item-list(
        :headers="headers",
        :items="programList",
      )
    el-pagination(
      v-if="totalProgramsCount > 10"
      :total="totalProgramsCount",
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
  name: 'program-list',
  components: {
    ItemList,
    ContentHeader,
  },
  data() {
    return {
      minRange: 0,
      maxRange: 9,
      newProgramRouteName: 'add a new program',
      headers: [
        { label: 'name' },
        { label: 'creationDate' },
      ],
    };
  },
  watch: {
    $route() {
      this.getProgramList();
    },
  },
  computed: {
    ...mapGetters(['programList', 'totalProgramsCount']),
    currentPage() {
      return this.$route.query.page || 1;
    },
    query() {
      return this.$route.query.q;
    },
  },
  mounted() {
    this.getProgramList();
  },
  methods: {
    ...mapActions(['setProgramList']),
    handleCurrentChange(val) {
      const routeQuery = _.assign(_.cloneDeep(this.$route.query), { page: val });
      this.$router.push({ query: routeQuery });
    },
    getProgramList() {
      this.minRange = (10 * this.currentPage) - 10;
      this.maxRange = (10 * this.currentPage) - 1;
      this.setProgramList({ range: `${this.minRange}-${this.maxRange}` });
    },
  },
};
</script>

<style lang="scss">
</style>

