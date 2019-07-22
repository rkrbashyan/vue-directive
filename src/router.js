import Vue from 'vue';
import Router from 'vue-router';
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'comp-a',
            component: CompA,
        },
        {
            path: '/comp-b',
            name: 'comp-b',
            component: CompB,
        },
    ],
});
