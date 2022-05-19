import Vue from 'vue';
import Dashboard from '../components/dashboard/Index.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
            meta: {
                showMenu: false
            }
        }
    ]
});

export default router;