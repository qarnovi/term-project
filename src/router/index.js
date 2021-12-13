import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import Hobbies from "../views/Hobbies.vue";
import Contact from "../views/Contact.vue";
import PhotoGallery from "../views/PhotoGallery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/photo-gallery",
    name: "PhotoGallery",
    component: PhotoGallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
