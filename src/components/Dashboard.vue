<template lang="pug">
  el-row(:span="12" class="center")
    el-col(:span="24")
      el-button(type="primary"  @click="createProgram") {{ $t('create program') }}

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
      router.push('add a new program');
    },
  },
};
</script>

<style lang="scss">
</style>
