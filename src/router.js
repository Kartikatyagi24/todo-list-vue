import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import DoneList from './components/DoneList.vue';

const routes = [
    { path: '/', component: TodoList },
    { path: '/todo', component: TodoList },
    { path: '/done', component: DoneList },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;