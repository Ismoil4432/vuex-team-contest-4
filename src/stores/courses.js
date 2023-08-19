import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCourses = defineStore("courses", () => {
	const course = reactive({
		data: [
			{
				id: 1,
				title: "SMM onlayn",
				img: "smm",
				desc: "Ijtimoiy tarmoqlar orqali turli biznes va loyihalarni rivojlantirishni o'rganasiz.",
				category: {
					id: 2,
					name: "Marketing",
					bg: "bg-black bg-[rgb(14, 177, 130)]",
				},
			},
			{
				id: 2,
				title: "Social Media Design",
				img: "smd",
				desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni o'rganing.",
				category: {
					id: 1,
					name: "Dizayn",
					bg: "bg-black bg-[rgb(174, 141, 94)]",
				},
			},
		],
	});

	const COURSES = computed(() => course.data);

	return { COURSES };
});
