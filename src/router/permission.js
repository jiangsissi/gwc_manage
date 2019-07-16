import VueCookies from 'vue-cookies'
import router from './index'

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title ? to.meta.title : '后台系统管理';
    }

    // 判断是否需要登录权限
    if (to.matched.some(res => res.meta.auth)) {
        // 判断是否登录
        if (VueCookies.isKey('isLogin')) {
            console.log('已登录');
            next();
        } else {
            console.log('未登录');
            next({
                name: 'Login',
                query: {url: to.fullPath}
            }) // 没登录则跳转到登录页面
        }
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    // 跳转后要做的事
})

export default router