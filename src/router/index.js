import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import TodayOrders from "@/views/TodayOrders.vue";
import Products from "@/views/Products.vue";
import EditProducts from "@/views/EditProducts.vue";
import AllOrders from "@/views/AllOrders.vue";
import NewOrder from "@/views/NewOrder.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: (to, from, next) => {
            next({name: 'Login'})
        }
        
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/orders/today",
        name: "TodayOrders",
        component: TodayOrders,
    },
    {
        path: "/orders/all",
        name: "AllOrders",
        component: AllOrders,
    },
    {
        path: "/orders/new",
        name: "NewOrder",
        component: NewOrder,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    {
        path: "/products/:id",
        name: "EditProducts",
        component: EditProducts,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
