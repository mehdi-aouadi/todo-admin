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
  data() {
    return {
      newProgramRouteName: 'add a new program',
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

