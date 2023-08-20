import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCourses = defineStore("courses", () => {
  const course = reactive({
    data: [],
  });

  const COURSES = computed(() => course.data);

  const CREATE = (item) => {
    course.data.push(item);
    updateLocalStorage();
  };

  const updateLocalStorage = () => {
    localStorage.setItem("courses", JSON.stringify(course.data));
  };

  const updateData = () => {
    if (localStorage.getItem("courses")) {
      course.data = JSON.parse(localStorage.getItem("courses"));
    } else {
      course.data = [
        {
          id: 1,
          title: "SMM onlayn",
          durationInMinutes: 1550,
          lessons: 93,
          img: "smm.svg",
          text: "Ijtimoiy tarmoqlar orqali turli biznes va loyihalarni rivojlantirishni o'rganasiz.",
          category: {
            id: 2,
            name: "Marketing",
            bg: "	bg-[rgb(14,177,130)]",
          },
        },
        {
          id: 2,
          title: "Social Media Design",
          durationInMinutes: 1750,
          lessons: 102,
          img: "smd.svg",
          text: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni o'rganing.",
          category: {
            id: 1,
            name: "Dizayn",
            bg: "	bg-[rgb(174,141,94)]",
          },
        },
        {
          id: 3,
          title: "Dasturlash foundation",
          durationInMinutes: 1250,
          lessons: 85,
          img: "foundation.svg",
          text: "Foundation dasturlash kursida C va Python dasturlash tillari va ular orqali dasturlashning mantiq-mohiyati o'rgatiladi. Kurs davomida dasturlashning fundamental tushunchalari, dasturchining ishini yengillashtirib beradigan texnologiyalar, interfeys va ma'lumotlar bazasi bilan ishlash jarayonlari haqida ma'lumotlar beriladi.",
          category: {
            id: 4,
            name: "Dasturlash",
            bg: "bg-[rgb(15,24,38)]",
          },
        },
        {
          id: 4,
          title: "Adobe Illustrator",
          durationInMinutes: 1350,
          lessons: 89,
          img: "adobe.svg",
          text: "Adobe Illustrator - vektorli grafikalar (chizmalar) bilan ishlash uchun mo'ljallangan dastur hisoblanadi.",
          category: {
            id: 1,
            name: "Dizayn",
            bg: "bg-[rgb(174,141,94)]",
          },
        },
      ];
    }
  };

  return { COURSES, CREATE, updateLocalStorage, updateData };
});
