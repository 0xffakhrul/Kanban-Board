<template>
  <div>
    <b-card
      class="mb-3"
      :header="headerName"
      text-variant="white"
      :header-bg-variant="headerColor"
    >
      <draggable
        ghost-class="ghost"
        class="list-group kanban-column"
        :list="dummyTask"
        group="tasks"
      >
        <b-list-group-item
          :variant="cardTextColorData"
          v-for="task in dummyListTask"
          :key="task.id"
        >
          {{ task.name }}
          <b-icon-trash></b-icon-trash>
        </b-list-group-item>
      </draggable>
    </b-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import {BIconTrash} from "bootstrap-vue"
export default {
  name: "KanbanCard",
  data() {
    return {
      headerName: this.HeaderName,
      headerColor: this.HeaderColor,
      cardTextColorData: this.cardTextColor,
      dummyListTask: this.TaskList,
    };
  },
  components: {
    draggable,
    BIconTrash
  },
  props: {
    HeaderName: {
      type: String,
      default() {
        return "New Task";
      },
    },
    HeaderColor: {
      type: String,
      default() {
        return "light";
      },
    },
    cardTextColor: {
      type: String,
      default() {
        return "light";
      },
    },
    TaskList: Array,
  },
};
</script>

<style lang="scss"></style>
