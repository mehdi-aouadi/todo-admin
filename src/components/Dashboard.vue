<template lang="pug">
  section.todo-content
    el-row(:span="12" class="center")
      el-col(:span="24")
        el-button(type="primary"  @click="createProgram") {{ $t('add a new program') }}
    el-row(:span="12" class="center")
      el-col(:span="24")
        el-button(type="primary"  @click="createMedia") {{ $t('add a new media') }}

</template>

<script>
import router from '@/router';

export default {
  name: 'dashboard',
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    createProgram() {
      router.push({ name: 'add a new program' });
    },
    createMedia() {
      router.push({ name: 'add a new media' });
    },
  },
};
</script>

<style lang="scss">
</style>
