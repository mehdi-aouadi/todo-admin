<template lang="pug">
  div
    el-row &nbsp
    el-row
      el-col(:span="6") &nbsp
      el-col(:span="12")
        el-form(label-width="120px")
          el-form-item(label="Name")
            el-input(v-model="program.name")
          el-form-item(label="Description")
            el-input(type="textarea" v-model="program.desciption")
          el-form-item(label="Introduction")
            el-input(type="textarea" v-model="program.introduction")
          el-form-item(label="Tasks")
            el-button(type="primary" @click="addTask") Add a new task
          el-row(v-for="task, index in program.tasks" :key="index")
            el-form-item(label="Name")
              el-input(v-model="task.name")
            el-form-item(label="Description")
              el-input(type="textarea" v-model="task.description")
          el-button(type="primary" @click="saveProgram") Save Program
      el-col(:span="6") &nbsp

</template>

<script>
// import _ from 'lodash';
import { mapGetters } from 'vuex';
import resource from '@/resource';

export default {
  name: 'program-edit',
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
