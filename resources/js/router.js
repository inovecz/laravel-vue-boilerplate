import {createRouter, createWebHistory} from "vue-router";
import AuthLayout from "./components/layouts/AuthLayout.vue";
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import Page404 from "./views/PageNotFound.vue";
import About from "./views/about/About.vue";
import Login from "./views/auth/Login.vue";
import GeneralSettings from "./views/settings/GeneralSettings.vue";
import Home from "./views/home/Home.vue";
import SettingsOne from "./views/settings/SettingsOne.vue";
import SettingsTwo from "./views/settings/SettingsTwo.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
        component: DefaultLayout,
        children: [
            {path: "/home", name: "Home", component: Home, meta: {title: "Domovská stránka"}},
            {path: "/settings/general", name: "GeneralSettings", component: GeneralSettings, meta: {title: "Obecné nastavení"}},
            {path: "/settings/one", name: "SettingsOne", component: SettingsOne, meta: {title: "Nastavení 1"}},
            {path: "/settings/two", name: "SettingsTwo", component: SettingsTwo, meta: {title: "Nastavení 2"}},
            {path: '/about', name: "About", component: About},
        ],
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        children: [
            {path: "/login", name: "Login", component: Login},
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: Page404,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Update the document title on each route change
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Register' && !localStorage.getItem('token')) {
        next({name: 'Login'});
    }
    document.title = to.meta.title || 'Laravel Vue Boilerplate';
    next();
});

export default router;