import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage";
import AppHistory from "../components/AppHistory";
export const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    { name: "home", path: "/", component: MainPage },
    { name: "history", path: "/history", component: AppHistory },
  ],
});
