import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCourses = defineStore("courses", () => {
  const course = reactive({
    data: [],
  });

  const COURSES = computed(() => course.data);

  const CREATE = (item) => {
    course.data.push({ id: generateUniqueId(), ...item });
    updateLocalStorage();
  };

  const UPDATE = (id, updateItem) => {
    course.data.forEach((item) => {
      if (item.id == id) {
        item.title = updateItem.title;
        item.text = updateItem.text;
        item.durationInMinutes = updateItem.durationInMinutes;
        item.lessons = updateItem.lessons;
        item.img = updateItem.img;
        item.category = updateItem.category;
      }
    });
    updateLocalStorage();
  };

  const DELETE = (id) => {
    course.data.forEach((item, index) => {
      if (item.id == id) {
        data.value.splice(index, 1);
      }
    });
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

  const generateUniqueId = () => {
    const allUniqueId = course.data.map((item) => item.id);
    let id = 1;
    while (true) {
      if (!allUniqueId.includes(id)) {
        break;
      }

      id++;
    }
    return id;
  };

  return { COURSES, CREATE, UPDATE, DELETE, updateLocalStorage, updateData };
});
