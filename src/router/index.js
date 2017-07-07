import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/containers/Welcome';
import TodoItem from '@/containers/TodoItem';

Vue.use(Router);

export default new Router({
  routes: [
     {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
     {
      path: '/item',
      name: 'todoItem',
      component: TodoItem,
    }
  ],
});
