<template>
  <div>
    <b-card
      class="mb-3"
      :header="headerNameData"
      text-variant="dark"
      :header-bg-variant="headerColorData"
    >
      <draggable
        ghost-class="ghost"
        class="list-group kanban-column"
        group="tasks"
      >
        <b-list-group-item
          :variant="cardTextColorData"
          v-for="task in dummyListTask"
          :key="task.id"
        >
          <list-item :taskName="task.name" @delete-task="$emit('delete-task', task.id)"></list-item>
        </b-list-group-item>
      </draggable>
    </b-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import { BIconTrash } from "bootstrap-vue";
import ListItem from "./ListItem.vue";

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
    // BIconTrash,
    ListItem,
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
        return "dark";
      },
    },
    TaskList: Array,
  },
  methods: {
    onclick() {
      this.$emit("delete-task");
    },
  },
  emit: ["delete-task"],
};
</script>

<style lang="scss">
:root {
  --paleWhite: #f8f8fa;
}

body {
  background-color: aqua;
}

.deleteIcon {
  cursor: pointer;
}
.card-body {
  background-color: var(--paleWhite);
}

.card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  border-radius: 0.4rem;
}

.list-group {
  border-radius: 0.4rem;
  font-weight: 600;
}

.list-group-item {
  background-color: #f8f8fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  border: none;
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
}
.card-header {
  color: black;
  font-weight: bold;
  text-align: left;
}

</style>
