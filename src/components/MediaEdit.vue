<template lang="pug">
  section.todo-content
    content-header(
      :content-title="$t($route.name)"
      :save-action="saveMedia"
    )
    div
      el-row &nbsp
      el-row
        el-col(:span="6") &nbsp
        el-col(:span="12")
          el-form(label-width="120px", :model="media")
            el-form-item(:label="$t('media name')")
              el-input(v-model="media.name")
            el-form-item(:label="$t('media type')")
              el-input(type="textarea" v-model="media.desciption")
            el-form-item(:label="$t('media resource')")
              el-input(type="textarea" v-model="media.resource")
        el-col(:span="6") &nbsp
</template>

<script>
import { mapGetters } from 'vuex';
import resource from '@/resource';
import ContentHeader from '@/components/ContentHeader';

export default {
  name: 'media-edit',
  components: {
    ContentHeader,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['media']),
  },
  methods: {
    saveMedia() {
      resource.set('media/');
      resource.save({}, this.media);
    },
  },
};
</script>

<style lang="scss">
</style>
