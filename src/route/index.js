import { createRouter, createWebHashHistory } from "vue-router";
// 开发环境不使用懒加载
// const _import = (path) => { return import("@/view/" + path + '.vue') };
const routes = [{
    path: "/",
    redirect: "/home"
}, {
    path: "/home",
    name: "home",
    component: () => { return import('@/view/home') }
}, {
    path: "/login",
    name: "login",
    component: () => { return import('@/view/login') }
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;