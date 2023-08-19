import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("@/views/Home.vue"),
		},
		{
			path: "/courses",
			name: "Courses",
			component: () => import("@/views/Courses.vue"),
		},
	],
});

export default router;
