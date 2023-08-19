import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCategory = defineStore("category", () => {
  const category = reactive({
    data: [
      { id: 1, name: "Dizayn", bg: "bg-[rgb(174,141,94)]" },
      { id: 2, name: "Marketing", bg: "bg-[rgb(14,177,130)]" },
      { id: 3, name: "Boshqa", bg: "bg-[rgb(0,0,0)]" },
      { id: 4, name: "Dasturlash", bg: "bg-[rgb(15,24,38)]" },
    ],
  });

  const CATEGORY = computed(() => category.data);

  return { CATEGORY };
});
