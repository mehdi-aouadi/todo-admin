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
</template>
<script>
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
      newMediaRouteName: 'add a new media',
      headers: [
        { label: 'name' },
        { label: 'lastModificationDate' },
      ],
    };
  },
  computed: {
    ...mapGetters(['mediaList']),
  },
  methods: {
    ...mapActions(['setMediaList']),
  },
};
</script>

<style lang="scss">
</style>

