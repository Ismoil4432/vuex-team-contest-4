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
        <button @click="selectCategory(el)" v-for="(el, index) in categories">
          <div
            :class="`text-sm ${
              el.bg ? el.bg : 'bg-slate-900'
            } p-1 px-3 rounded text-white shadow-md hover:shadow-lg`"
          >
            {{ el.name }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategory } from "@/stores/category";

const category_store = useCategory();

defineProps(["visible"]);
const emits = defineEmits(["close", "select-category"]);

const closeModal = () => {
  emits("close");
};

const selectCategory = (category) => {
  emits("select-category", category);
  closeModal();
};

const categories = category_store.CATEGORY;
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
