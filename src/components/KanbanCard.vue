<template>
  <div>
    <b-card
      class="mb-3"
      :header="headerNameData"
      text-variant="white"
      :header-bg-variant="headerColorData"
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
          <b-icon-trash class="deleteIcon"></b-icon-trash>
        </b-list-group-item>
      </draggable>
    </b-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { BIconTrash } from "bootstrap-vue";

export default {
  name: "KanbanCard",
  data() {
    return {
      headerNameData: this.HeaderName,
      headerColorData: this.HeaderColor,
      cardTextColorData: this.cardTextColor,
      dummyListTask: this.TaskList,
    };
  },
  components: {
    draggable,
    BIconTrash,
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

<style lang="scss">
:root{
    --paleWhite: #f8f8fa
}

.deleteIcon {
    cursor: pointer;  
}
.card-body {
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    border: none;
    background-color: var(--paleWhite);
}
.list-group {
    border-radius: .40rem;
}
</style>
