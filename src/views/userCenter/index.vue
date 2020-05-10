<template>
    <div class="user-center-container">
        <div class="user-content clearfix">
            <div class="resetPwd fl">修改密码</div>
            <el-button
                type="text"
                class="fr"
                @click="$router.push('/modifyPwd')"
                >修改</el-button
            >
        </div>
        <div class="button">
            <el-button
                round
                size="small"
                class="logout"
                @click="$router.push('/login')"
                >安全退出</el-button
            >
        </div>
        <div class="user-footer-bar">
            <footer-bar :active-bar="'userCenter'"></footer-bar>
        </div>
    </div>
</template>

<script>
    import FooterBar from '@/components/FooterBar'

    export default {
        name: 'userCenter',
        components: {
            FooterBar
        }
    }
</script>

<style scoped lang="scss">
    .user-center-container {
        .user-content {
            background: #fff;
            padding: 0 10px;
            .resetPwd {
                padding: 8px 0px;
            }
        }
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: url('../../assets/img/home/ground.png') no-repeat;
        background-size: 100% 100%;
        padding: 20px;
        .button {
            margin-top: 100px;
            /deep/ .el-button {
                color: #fff;
                background: #999;
                font-size: 18px;
            }
            .logout {
                width: 100%;
            }
        }
    }
</style>
