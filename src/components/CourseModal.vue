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

      <form
        @submit="submitForm"
        class="px-[25px] py-[25px] bg-white rounded-[16px]"
      >
        <div>
          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="title"
          >
            Kurs nomi
          </label>
          <input
            class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="title"
            type="text"
            placeholder="Kurs nomini kiriting"
            v-model="title"
            required
          />

          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="text"
          >
            Kurs matni
          </label>
          <textarea
            class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded border border-[#DADADA] outline-none focus:border-blue-400"
            id="text"
            type="text"
            placeholder="Kurs matnini kiriting"
            v-model="text"
            required
          />

          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="durationInMinutes"
          >
            Kurs davomiyligi
          </label>
          <input
            class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="durationInMinutes"
            type="number"
            inputmode="numeric"
            placeholder="Kurs davomiyligini minutlarda kiriting"
            min="0"
            v-model="durationInMinutes"
            required
          />

          <label
            class="font-semibold text-[14px] leading-[18px] text-[#00000059] mb-[8px] block"
            for="lessons"
          >
            Darslar soni
          </label>
          <input
            class="text-[14px] leading-[17px] px-[16px] py-[12px] mb-[32px] mr-[16px] w-full rounded-full border border-[#DADADA] outline-none focus:border-blue-400"
            id="lessons"
            type="number"
            inputmode="numeric"
            placeholder="Darslar sonini kiriting"
            min="0"
            v-model="lessons"
            required
          />

          <div class="flex justify-between">
            <button
              class="relative flex mb-10"
              type="button"
              @click="openImageModal"
            >
              <img
                v-if="selectedImage"
                :src="`/courses/${selectedImage}`"
                class="w-10 h-10 object-contain rounded-full p-1 bg-white shadow-md"
              />

              <div v-else class="flex ml-4">
                <img
                  class="w-10 h-10 object-contain ml-[-15px] rounded-full p-1 bg-white shadow-md"
                  :src="`/courses/${el}`"
                  v-for="(el, index) in courseImages"
                  :key="el"
                  :style="{ zIndex: index }"
                />
              </div>
            </button>

            <button
              :class="`flex mb-10 text-[14px] leading-[17px] px-[16px] py-[12px] mr-[16px] rounded-full border border-[#DADADA] outline-none focus:border-blue-400 ${
                selectedCategory
                  ? selectedCategory.bg + ' text-white'
                  : ' text-black'
              }`"
              type="button"
              @click="openCategoryModal"
            >
              {{
                selectedCategory
                  ? selectedCategory.name
                  : "Kategoriyani tanlang"
              }}
            </button>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <button
            class="flex w-full items-center justify-center font-bold text-sm sm:text-[16px] sm:leading-[22px] text-white bg-[#BA8D5B] border border-[#ba8d5b] hover:text-black hover:bg-white ease-in-out duration-300 px-4 py-3 rounded-full"
            type="submit"
          >
            <span>{{ isEdit ? "Yangilash" : "Qo'shish" }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- modal -->
  <ImageModal
    :visible="imageModalVisible"
    @close="closeImageModal"
    @select-image="(value) => (selectedImage = value)"
  >
  </ImageModal>
  <!-- modal -->

  <!-- modal -->
  <CategoryModal
    :visible="categoryModalVisible"
    @close="closeCategoryModal"
    @select-category="(value) => (selectedCategory = value)"
  >
  </CategoryModal>
  <!-- modal -->
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useCourses } from "@/stores/courses";

const { data, isEdit } = defineProps(["visible", "data", "isEdit"]);
const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};

const courses_store = useCourses();

const title = ref("");
const text = ref("");
const durationInMinutes = ref(null);
const lessons = ref(null);
const selectedImage = ref(null);
const selectedCategory = ref(null);

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

const imageModalVisible = ref(false);
const openImageModal = () => {
  imageModalVisible.value = true;
};
const closeImageModal = () => {
  imageModalVisible.value = false;
};

const categoryModalVisible = ref(false);
const openCategoryModal = () => {
  categoryModalVisible.value = true;
};
const closeCategoryModal = () => {
  categoryModalVisible.value = false;
};

const submitForm = (event) => {
  event.preventDefault();

  if (isEdit) {
    courses_store.UPDATE(data.id, {
      title: title.value.trim(),
      text: text.value.trim(),
      durationInMinutes: durationInMinutes.value,
      lessons: lessons.value,
      img: selectedImage.value || "smd.svg",
      category: selectedCategory.value || {
        id: 1,
        name: "Dizayn",
        bg: "bg-[rgb(174,141,94)]",
      },
    });
  } else {
    courses_store.CREATE({
      title: title.value.trim(),
      text: text.value.trim(),
      durationInMinutes: durationInMinutes.value,
      lessons: lessons.value,
      img: selectedImage.value || "smd.svg",
      category: selectedCategory.value || {
        id: 1,
        name: "Dizayn",
        bg: "bg-[rgb(174,141,94)]",
      },
    });

    title.value = "";
    text.value = "";
    durationInMinutes.value = null;
    lessons.value = null;
    selectedImage.value = null;
    selectedCategory.value = null;
  }

  closeModal();
};

onMounted(() => {
  if (isEdit) {
    title.value = data.title;
    text.value = data.text;
    durationInMinutes.value = data.durationInMinutes;
    lessons.value = data.lessons;
    selectedImage.value = data.img;
    selectedCategory.value = data.category;
  }
});
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
  width: 520px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
