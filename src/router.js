import Vue from 'vue';
import Router from 'vue-router';
import Layout from './components/Layout.vue';
import index from './views/index.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: Layout,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: index
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});
