<template lang="pug">
  section.todo-content
    content-header(
      :content-title="$t($route.name)"
      save-action=true
    )
    div
      el-row &nbsp
      el-row
        el-col(:span="6") &nbsp
        el-col(:span="12")
          el-form(label-width="120px")
            el-form-item(:label="$t('program name')")
              el-input(v-model="program.name")
            el-form-item(:label="$t('program description')")
              el-input(type="textarea" v-model="program.desciption")
            el-form-item(:label="$t('program introduction')")
              el-input(type="textarea" v-model="program.introduction")
            el-form-item(:label="$t('program tasks')")
              el-button(type="primary" @click="addTask") Add a new task
            el-row(v-for="task, index in program.tasks" :key="index")
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
      program: {
        name: '',
        period: {},
        description: '',
        introduction: '',
        tasks: [],
      },
    };
  },
  computed: {
    ...mapGetters(['login']),
  },
  methods: {
    addTask() {
      this.program.tasks.push({});
    },
    saveProgram() {
      resource.set('http://localhost:8080/todo-web/todo/program/template');
      resource.save({}, this.program);
    },
  },
};
</script>

<style lang="scss">
</style>
