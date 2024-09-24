// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import login from '../view/login.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
