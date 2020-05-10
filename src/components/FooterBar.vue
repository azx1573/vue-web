<template>
    <van-tabbar
        v-model="active"
        active-color="#0096D7"
        inactive-color="#000"
        fixed
    >
        <van-tabbar-item
            name="home"
            icon="apps-o"
            @click="$route.path !== '/home' && $router.push('/home')"
        >
            模块
        </van-tabbar-item>
        <van-tabbar-item
            name="userCenter"
            icon="contact"
            @click="
                $route.path !== '/userCenter' && $router.push('/userCenter')
            "
        >
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        props: {
            activeBar: {
                type: String,
                default: 'home'
            }
        },
        data() {
            return {
                active: this.activeBar
            }
        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    .van-tabbar--fixed {
        bottom: 1px;
    }

    .van-tabbar--fixed {
        bottom: 1px;
    }

    /deep/ .van-tabbar-item__icon {
        font-size: 1.75rem;
    }

    /deep/ .van-tabbar-item__text {
        font-size: 0.9rem;
    }
</style>
