import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage";
import HistoryPage from "../components/HistoryPage";
import NotFound from "../components/NotFound";
export const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    { name: "home", path: "/", component: MainPage },
    { name: "history", path: "/history", component: HistoryPage },
    { name: "not-found", path: "/:pathMatch(.*)*", component: NotFound },
  ],
});
