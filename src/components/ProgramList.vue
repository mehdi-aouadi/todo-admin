<template lang="pug">
  section.t2s-cc-content
    content-header(
      :content-title="$t($route.name)",
      :button-route-name="newProgramRouteNAme",
      :search-function="true",
      display-type="list"
    )
    div.t2s-cc-main-content
      item-list(
        :headers="headers",
        :items="programList",
      )
</template>
<script>
import ItemList from '@/components/ItemList';
import ContentHeader from '@/components/ContentHeader';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'program-list',
  components: {
    ItemList,
    ContentHeader,
  },
  created() {
    // this.setProgramList({ range: '0-9' });
  },
  data() {
    return {
      newProgramRouteNAme: 'add a new program',
      headers: [
        { label: 'name' },
        { label: 'lastModificationDate' },
      ],
    };
  },
  computed: {
    ...mapGetters(['programList']),
  },
  methods: {
    ...mapActions(['setProgramList']),
  },
};
</script>

<style lang="scss">
</style>

