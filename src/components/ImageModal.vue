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

      <div class="grid grid-cols-3 gap-4 my-4">
        <button @click="selectImage(el)" v-for="(el, index) in courseImages">
          <img
            class="bg-white p-2 shadow-md hover:shadow-lg"
            :src="`/courses/${el}`"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

defineProps(["visible"]);
const emits = defineEmits(["close", "select-image"]);

const closeModal = () => {
  emits("close");
};

const selectImage = (imageName) => {
  emits("select-image", imageName);
  closeModal();
};

const courseImages = reactive([
  "smd.svg",
  "smm.svg",
  "adobe.svg",
  "dotnet.svg",
  "foundation.svg",
  "nodejs.svg",
  "savodxonlik.svg",
  "hbs.webp",
]);
</script>

<style scoped>
/* Modal Styles */
.modal {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: absolute;
  width: 450px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
