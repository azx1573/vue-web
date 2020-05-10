import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Home',
        meta: {
            title: '秦汉文化旅游导览'
        },
        component: () => import('../views/home/index')
    },
    {
        path: '*',
        name: 'Home',
        meta: {
            title: '秦汉文化旅游导览'
        },
        component: () => import('../views/home/index')
    },
    {
        path: 'home',
        name: 'Home',
        meta: {
            title: '秦汉文化旅游导览'
        },
        component: () => import('../views/home/index')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录'
        },
        component: () => import('../views/login/index')
    },
    {
        path: '/modifyPwd',
        name: 'ModifyPwd',
        meta: {
            title: '修改密码'
        },
        component: () => import('../views/modifyPwd/index')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: '注册'
        },
        component: () => import('../views/login/register')
    },
    {
        path: '/forgetPwd',
        name: 'ForgetPwd',
        meta: {
            title: '忘记密码'
        },
        component: () => import('../views/login/forgetPwd')
    },
    {
        path: '/currency',
        name: 'Currency',
        meta: {
            title: '货币'
        },
        component: () => import('../views/list/currency/index')
    },
    {
        path: '/text',
        name: 'Text',
        meta: {
            title: '文字'
        },
        component: () => import('../views/list/text/index')
    },
    {
        path: '/domain',
        name: 'Domain',
        meta: {
            title: '疆域'
        },
        component: () => import('../views/list/domain/index')
    },
    {
        path: '/greatWall',
        name: 'GreatWall',
        meta: {
            title: '长城'
        },
        component: () => import('../views/list/greatWall/index')
    },
    {
        path: '/country',
        name: 'Country',
        meta: {
            title: '县制'
        },
        component: () => import('../views/list/country/index')
    },
    {
        path: '/official',
        name: 'Official',
        meta: {
            title: '官制'
        },
        component: () => import('../views/list/official/index')
    },
    {
        path: '/userCenter',
        name: 'UserCenter',
        meta: {
            title: '我的'
        },
        component: () => import('../views/userCenter/index')
    },
    {
        path: '/listDetail',
        name: 'ListDetail',
        component: () => import('../views/listDetail/index')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
