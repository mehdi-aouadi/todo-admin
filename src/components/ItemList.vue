<template lang="pug">
  div.todo-item-list__container
    el-table.todo-item-list(:data="items", row-class-name='todo-item-line')
      el-table-column(
        v-for="header, index in headers",
        :label="$t(header.label)",
        :key='index',
        :prop="header.label"
        width="500"
        )

</template>
<script>
export default {
  name: 'item-list',
  props: [
    'headers',
    'items',
  ],
};
</script>

<style lang="scss">
@import "../sass/_utils";

.todo {
  &-item-list {
    width: 100%;
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.2);

    &__container {
      margin: -75px pxtoem(20) 0;
      min-height: 653px;

      &.todo-content-item--inner {
        min-height: auto;
      }

      &.headerless {
        margin: pxtoem(20);
        box-shadow: 0 0 0 transparent;
        border: 1px solid darken($athens-gray, 10%);
      }
    }

    &__option {
      background-color: $white;
      padding: pxtoem(14) pxtoem(20);
      border-bottom: 1px solid darken($athens-gray, 10%);
      position: relative;

      &:not(:last-child):after {
        content: "";
        position: absolute;
        border-left: 1px dotted darken($athens-gray, 10%);
        top: pxtoem(15);
        bottom: pxtoem(15);
        right: 1px;
      }

      a {
        color: $robins-egg-blue;
        flex-grow: 1;
      }

      &:after {
        float: right;
      }
    }

    &__header {
      display: flex;
      align-items: center;
      height: pxtoem(34);

      .todo-label {
        flex-grow: 1;
        font-weight: lighter;
        text-align: left;
      }
    }
  }
  &-item-line {
    text-align: left;
  }
}
</style>

