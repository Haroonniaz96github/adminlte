import Vue from 'vue';
import VueRouter from 'vue-router';
import Categories from "../views/home/Categories.vue";
import Products from "../views/home/Products.vue";
import CategoryProducts from "../views/home/CategoryProducts.vue";
import Details from "../views/home/Details.vue";
import Cart from "../views/home/Cart.vue";
import AdminCategories from "../views/admin/categories/index.vue";
import EditAdminCategories from "../views/admin/categories/Edit.vue";
import AddAdminCategory from "../views/admin/categories/Add.vue";

//Areas
import Areas from "../views/admin/areas/index.vue";
import EditArea from "../views/admin/areas/Edit.vue";
import AddArea from "../views/admin/areas/Add.vue";



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
        component: () => import('../views/admin/layouts/Master.vue'),
        children: [
            //categories routes
            {path: '/admin/categories', component: AdminCategories, name:'categories.index'},
            {path: '/admin/category/:idCategory', component: EditAdminCategories, name:'category.edit'},
            {path: '/admin/category', component: AddAdminCategory, name:'category.add'},

            //Areas routes
            {path: '/admin/areas', component: Areas, name:'areas.index'},
            {path: '/admin/area/:id/edit', component: EditArea, name:'area.edit'},
            {path: '/admin/area/create', component: AddArea, name:'area.create'},

        ]
    },

]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
