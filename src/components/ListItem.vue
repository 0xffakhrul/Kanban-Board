<template>
  <div>
    <div class="cardItem">
      {{ taskName }}
      <b-icon-trash class="deleteIcon" @click="onclick"></b-icon-trash>
    </div>
  </div>
</template>

<script>
import { BIconTrash } from "bootstrap-vue";

export default {
  name: "ListItem",
  components: {
    BIconTrash,
  },
  props: ["taskName"],
  methods: {
    onclick() {
      this.$emit("delete-task");
    },
  },
};
</script>

<style>
.cardItem {
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
}

.deleteIcon {
  color: rgb(255, 85, 85);
}
</style>
