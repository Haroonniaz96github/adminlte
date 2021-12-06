import Vue from 'vue';
import VueRouter from 'vue-router';
import Categories from "../views/home/Categories.vue";
import Products from "../views/home/Products.vue";
import CategoryProducts from "../views/home/CategoryProducts.vue";
import Details from "../views/home/Details.vue";
import Cart from "../views/home/Cart.vue";
import AdminCategories from "../views/admin/categories/index.vue";
import EditAdminCategories from "../views/admin/categories/Edit.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../layouts/Base.vue'),
        children: [
            {path: '', component: Categories},
            {path: 'products', component: Products},
            {path: 'products/:idCategory', component: CategoryProducts},
            {path: 'details/:idProduct', component: Details},
            {path: 'cart', component: Cart}
        ]
    },
    {
        path: '/login',
        component: () => import('../views/account/Login.vue')
    },
    {
        path: '/admin/categories',
        component: AdminCategories
    },
    {
        path: '/admin/category/:idCategory',
        component: EditAdminCategories
    },

]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
