import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/plans",
    name: "Plans",
    component: () => import('../views/Plans.vue')
  },
  {
    path: "/plans/newplan",
    name: "NewPlan",
    component: () => import('../views/NewPlan.vue')
  },
  {
    path: "/plans/newplan/lift",
    name: "NewLift",
    component: () => import('../components/NewLift.vue')
  },
  {
    path: "/plans/newplan/cardio",
    name: "NewCardio",
    component: () => import('../components/NewCardio.vue')
  },
  {
    path: "/plans/newplan/activity",
    name: "NewActivity",
    component: () => import('../components/NewActivity.vue')
  },
  {
    path: "/plans/newplan/recovery",
    name: "NewRecovery",
    component: () => import('../components/NewRecovery.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
