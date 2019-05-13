import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import news from '../pages/news.vue';
// import news from '../pages/news1.vue';
import detail from '../pages/detail.vue';
import xiangqing from '../pages/xiangqing.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import error from '../pages/error.vue';

let routes = [
    {path:'/home',component:home},
    {path:'/news',component:news},
    {path:'/detail',component:detail},
    {path:'/xiangqing',component:xiangqing},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
];

let router = new VueRouter({routes});

export default router;
