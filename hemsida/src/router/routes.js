// import store from "../store/index";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        // beforeEnter: (to, from, next) => {
        //   if (this.done == false) {
        //     next("/");
        //   } else {
        //     console.log(this.done);
        //     next("tack");
        //   }
        // },

        component: () => import("pages/Index.vue"),
      },
      {
        path: "data",
        component: () => import("pages/data.vue"),
      },
      {
        path: "tack",
        component: () => import("pages/tack.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
