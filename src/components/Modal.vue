<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <div class="flex justify-between border-b pb-3">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" class="h-[35px]" />
        </a>

        <button
          class="absolute top-3 right-3 px-1 opacity-50 hover:opacity-100 hover:bg-gray-100 rounded"
          @click="closeModal"
        >
          <i class="bx bx-x text-3xl"></i>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(["visible"]);
const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};
</script>

<style scoped>
/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: absolute;
  right: 0;
  width: 320px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
