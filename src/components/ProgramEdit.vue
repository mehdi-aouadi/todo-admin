<template lang="pug">
  section.todo-content
    content-header(
      :content-title="$t($route.name)"
      :save-action="saveProgram"
    )
    div
      el-row &nbsp
      el-row
        el-col(:span="6") &nbsp
        el-col(:span="12")
          el-form(label-width="120px", :model="program")
            el-form-item(:label="$t('program name')")
              el-input(v-model="program.name")
            el-form-item(:label="$t('program description')")
              el-input(type="textarea" v-model="program.desciption")
            el-form-item(:label="$t('program introduction')")
              el-input(type="textarea" v-model="program.introduction")
            el-form-item(:label="$t('program tasks')")
              el-button(type="primary" @click="addTask") Add a new task
            el-row(v-for="task, index in program.taskList" :key="index")
              el-form-item(:label="$t('task name')")
                el-input(v-model="task.name")
              el-form-item(:label="$t('task description')")
                el-input(type="textarea" v-model="task.description")
        el-col(:span="6") &nbsp
</template>

<script>
import { mapGetters } from 'vuex';
import resource from '@/resource';
import ContentHeader from '@/components/ContentHeader';

export default {
  name: 'program-edit',
  components: {
    ContentHeader,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['program']),
  },
  methods: {
    addTask() {
      this.program.taskList.push({});
    },
    saveProgram() {
      resource.set('program/');
      resource.save({}, this.program);
    },
  },
};
</script>

<style lang="scss">
</style>
