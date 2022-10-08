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
      <b-col class="newTaskCard">
        <kanban-card
          HeaderName="New Task"
          HeaderColor="primary"
          :TaskList="dummyTask"
          @delete-task="deleteTask"
        ></kanban-card>
      </b-col>

      <b-col class="taskInProgressCard">
        <kanban-card
          HeaderName="In Progress"
          HeaderColor="success"
          :TaskList="taskInProgress"
        ></kanban-card>
      </b-col>

      <b-col class="taskInRevCard">
        <kanban-card
          class="colInReview"
          HeaderName="In Review"
          HeaderColor="warning"
          :TaskList="taskInReview"
        ></kanban-card>
      </b-col>

      <b-col class="taskDoneCard">
        <kanban-card
          HeaderName="Done"
          HeaderColor="success"
          :TaskList="taskDone"
        ></kanban-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import KanbanCard from "./KanbanCard";
import Swal from "sweetalert2";

export default {
  name: "App",
  components: {
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
      taskDone: [{ id: "n", name: "Nothing" }],
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        Swal.fire({
          title: "Are you sure to add the task?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Task added!", "", "success");
            this.dummyTask.unshift({ name: this.newTask });
            this.newTask = "";
          } else if (result.isDenied) {
            Swal.fire("Task is not added.", "", "error");
          }
        });
      }
    },
    deleteTask(id) {
      const value = this.dummyTask.find((item) => {
        return item.id === id;
      });
      this.dummyTask.splice(this.dummyTask.indexOf(value), 1);
    },
  },
};
</script>

<style lang="scss">
* {
  background-color: #f5f7fb;
}

.card-deck {
  display: flex;
  justify-content: center;
}


</style>
