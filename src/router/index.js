import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("@/views/CoursesView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/AuthView.vue"),
      children: [
        {
          path: "/auth/login",
          name: "login",
          component: () => import("@/views/LoginView.vue"),
        },
        {
          path: "/auth/login/by-email",
          name: "login-by-email",
          component: () => import("@/views/LoginByEmailView.vue"),
        },
        {
          path: "/auth/register",
          name: "register",
          component: () => import("@/views/RegisterView.vue"),
        },
        {
          path: "/auth/register/by-email",
          name: "register-by-email",
          component: () => import("@/views/RegisterByEmailView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@/views/ErrorView.vue"),
    },
  ],
});

export default router;
