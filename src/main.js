/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

function log() {
    console.log('CLICK FROM DIRECTIVE', this);
}

Vue.directive('dummy', {
    bind: function(el, binding, vnode) {
        console.log('DIRECTIVE', 'BIND');
    },
    inserted: function(el, binding, vnode) {
        console.log('DIRECTIVE', 'INSERTED');
        el.addEventListener('click', log);
    },
    unbind: function(el) {
        console.log('DIRECTIVE', 'UNBIND');

        // remove event listeners during next tick
        // otherwise after navigation from CompA to CompB is completed
        // listinner are killed before they are called !
        setTimeout(() => el.removeEventListener('click', log), 0);
    },
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
