import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import Shell from "@/pages/_shell.vue";
import AuthShell from "@/pages/auth/_auth.shell.vue";

declare module "vue-router" {
  interface RouteMeta {
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
        component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
      },
      {
        path: "/post/:id",
        name: "post",
        component: () => import(/* webpackChunkName: "post" */ "../pages/Post.vue"),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "",
    component: AuthShell,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../pages/auth/Login.vue"),
        meta: {
          skipWhenAuthed: true
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isSignedIn: boolean = await store.getters["auth/isSignedIn"];

  if ((to.meta.requiresAuth === true) && !isSignedIn) {
    store.commit("ui/addBanner", { type: "error", message: "Login is required" });
    next({ name: "login", replace: true });
  } else if ((to.meta.skipWhenAuthed === true) && isSignedIn) {
    next({ name: "home", replace: true });
  } else {
    next();
  }
});

export default router;
