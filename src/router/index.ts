import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import store from "@/store";
import Shell from "@/pages/_shell.vue";
import AuthShell from "@/pages/auth/_auth.shell.vue";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    requiresAuth?: boolean;
    skipWhenAuthed?: boolean;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Shell,
    children: [
      {
        path: "",
        name: "home",
        component: async () => import("../pages/Home.vue"),
        meta: {
          title: "Vue Boilerplate",
        },
      },
      {
        path: "/post/:id",
        name: "post",
        component: async () => import("../pages/Post.vue"),
        meta: {
          title: "Post - VB",
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "",
    component: AuthShell,
    children: [
      {
        path: "/login",
        name: "login",
        component: async () => import("../pages/auth/Login.vue"),
        meta: {
          title: "Login - VB",
          skipWhenAuthed: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async to => {
  const isSignedIn: boolean = await store.getters["auth/isSignedIn"];

  if (to.meta.requiresAuth === true && !isSignedIn) {
    store.commit("ui/addBanner", {
      type: "error",
      message: "Login is required",
    });
    return { name: "login" };
  } else if (to.meta.skipWhenAuthed === true && isSignedIn) {
    return { name: "home" };
  } else {
    return true;
  }
});

router.afterEach(to => {
  document.title = to.meta.title;
});

export default router;
