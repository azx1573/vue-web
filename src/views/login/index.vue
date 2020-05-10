<template>
    <div class="login-container">
        <div class="login-box">
            <p class="login-title">
                <b>
                    {{ loginTitle }}
                </b>
            </p>

            <div class="login-content">
                <el-form
                    label-width="100"
                    :rules="rules"
                    ref="loginTpl"
                    :model="userInfo"
                >
                    <el-form-item prop="account" label="">
                        <el-input
                            clearable
                            maxlength="11"
                            placeholder="请输入登录手机号"
                            prefix-icon="el-icon-user"
                            class="user-input"
                            v-model="userInfo.account"
                            @input="_handleNumber(userInfo, 'account')"
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            clearable
                            maxlength="18"
                            placeholder="请输入登录密码"
                            type="password"
                            prefix-icon="el-icon-lock"
                            class="user-input"
                            v-model="userInfo.password"
                        >
                        </el-input>
                    </el-form-item>
                </el-form>

                <div class="operation-extra">
                    <span class="register text-left">
                        <el-button
                            size="medium"
                            type="text"
                            @click="handleRegister"
                        >
                            注册
                        </el-button>
                    </span>
                    <span class="forgetPwd text-right">
                        <el-button
                            size="medium"
                            type="text"
                            @click="handleForgetPwd"
                        >
                            忘记密码
                        </el-button>
                    </span>
                </div>

                <div class="login-button">
                    <el-button
                        type="primary"
                        size="medium"
                        class="user-input"
                        @click="beforeLogin"
                    >
                        登录
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userLoginHandler from './mixins/userLoginHandler'
    import { validateTelPhone, validatePwd } from '@/common/utils'

    export default {
        mixins: [userLoginHandler],
        data() {
            return {
                loginTitle: '秦汉文化旅游导览系统',

                rules: {
                    account: [
                        {
                            required: true,
                            validator: validateTelPhone
                        }
                    ],
                    password: [
                        {
                            required: true,
                            validator: validatePwd
                        }
                    ]
                },

                userInfo: {
                    account: '',
                    password: '',
                    operateType: ''
                }
            }
        },
        methods: {
            handleRegister() {
                this.$router.push({
                    path: '/register',
                    query: {
                        type: 'register'
                    }
                })
            },
            handleForgetPwd() {
                this.$router.push({
                    path: '/forgetPwd',
                    query: {
                        type: 'forgetPwd'
                    }
                })
            },
            beforeLogin() {
                this.$refs.loginTpl.validate((valid) => {
                    if (valid) {
                        this.handleLogin()
                    }
                })
            },
            async handleLogin() {
                // this.userInfo.operateType = 2
                // const res = await this.$http.post('http://ip：port/demo/operate', this.userInfo)
                // if(res.success === 200) {
                //     this.$message.success('登录成功！')
                //     console.log('登录了')
                // }
                this.$message.success('登录成功！')
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-container {
        height: 100%;
        background: url(../../assets/img/login/background.png) no-repeat;
        background-size: 100% 100%;
        .login-box {
            padding-top: 150px;

            .login-title {
                font-weight: 700;
                font-style: normal;
                font-size: 28px;
                color: #015478;
            }

            .login-content {
                padding: 5px 36px;
                .user-input {
                    width: 98%;
                }

                .login-button {
                    margin-top: 30px;

                    /deep/ .el-button {
                        font-size: 16px;
                        background: #02a7f0;
                    }
                }

                .operation-extra {
                    margin-top: -14px;
                    padding: 0 38px;

                    .register,
                    .forgetPwd {
                        width: 50%;
                        display: inline-block;

                        /deep/ .el-button {
                            color: #015478;
                        }
                    }
                }
            }
        }
    }
</style>
