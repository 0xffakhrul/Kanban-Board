<template>
  <b-container class="mt-5">
    <b-row class="rowKanban">
      <div class="col form-inline">
        <b-form-input
          id="input-2"
          v-model="newTask"
          placeholder="Enter New Task"
          @keyup.enter="addTask"
        ></b-form-input>
        <b-button @click="addTask" variant="primary" class="ml-3">Add</b-button>
      </div>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <!-- <b-card class="mb-3" header="New Task" header-bg-variant="light">
          <draggable
            ghost-class="ghost"
            class="list-group kanban-column"
            :list="dummyTask"
            group="tasks"
          >
            <b-list-group-item
              variant="light"
              v-for="task in dummyTask"
              :key="task.id"
            >
              {{ task.name }}
            </b-list-group-item>
          </draggable>
        </b-card> -->
        <kanban-card
          HeaderName="New Task"
          HeaderColor="primary"
          cardTextColor="primary"
          :TaskList="dummyTask"
        ></kanban-card>
      </b-col>

      <b-col cols="3">
        <!-- <b-card
          class="mb-3"
          header="In Progress"
          header-bg-variant="primary"
          text-variant="white"
        >
          <draggable
            ghost-class="ghost"
            class="list-group kanban-column"
            :list="taskInProgress"
            group="tasks"
          >
            <b-list-group-item
              variant="primary"
              v-for="task in taskInProgress"
              :key="task.id"
            >
              {{ task.name }}
            </b-list-group-item>
          </draggable>
        </b-card> -->
        <kanban-card
          HeaderName="In Progress"
          HeaderColor="danger"
          :TaskList="taskInProgress"
          cardTextColor="danger"
        ></kanban-card>
      </b-col>

      <b-col cols="3">
        <!-- <b-card class="mb-3" header="Review" header-bg-variant="warning">
          <draggable
            ghost-class="ghost"
            class="list-group kanban-column"
            :list="taskInReview"
            group="tasks"
          >
            <b-list-group-item
              variant="warning"
              v-for="task in taskInReview"
              :key="task.id"
            >
              {{ task.name }}
            </b-list-group-item>
          </draggable>
        </b-card> -->
        <kanban-card
          HeaderName="In Review"
          HeaderColor="warning"
          cardTextColor="warning"
          :TaskList="taskInReview"
        ></kanban-card>
      </b-col>

      <b-col cols="3">
        <!-- <b-card
          class="mb-3"
          header="On Hold"
          header-bg-variant="danger"
          text-variant="white"
        >
          <draggable
            ghost-class="ghost"
            class="list-group kanban-column"
            :list="taskOnHold"
            group="tasks"
          >
            <b-list-group-item
              variant="danger"
              v-for="task in taskOnHold"
              :key="task.id"
            >
              {{ task.name }}
            </b-list-group-item>
          </draggable>
        </b-card> -->
        <kanban-card
          HeaderName="Done"
          HeaderColor="success"
          cardTextColor="success"
          :TaskList="taskDone"
        ></kanban-card>
      </b-col>

      <b-col cols="3">
        <!-- <b-card
          class="mb-3"
          header="On Hold"
          header-bg-variant="success"
          text-variant="white"
        >
          <draggable
            ghost-class="ghost"
            class="list-group kanban-column"
            :list="taskDone"
            group="tasks"
          >
            <b-list-group-item
              variant="success"
              v-for="task in taskDone"
              :key="task.id"
            >
              {{ task.name }}
            </b-list-group-item>
          </draggable>
        </b-card> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import draggable from "vuedraggable";
import KanbanCard from "./KanbanCard";

export default {
  name: "App",
  components: {
    // draggable,
    KanbanCard,
  },
  data() {
    return {
      newTask: "",
      dummyTask: [
        { id: "s", name: "Sleep" },
        { id: "e", name: "Eat" },
      ],
      taskInProgress: [{ id: "w", name: "Work" }],
      taskInReview: [{ id: "k", name: "Kanban" }],
      taskOnHold: [{ id: "v", name: "Vue" }],
      taskDone: [{ id: "n", name: "Nothing" }],
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.dummyTask.unshift({ name: this.newTask });
        this.newTask = "";
      }
    },
    deleteTask() {
        
    }
  },
};
</script>

<style></style>
