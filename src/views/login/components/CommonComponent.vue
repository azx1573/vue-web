<template>
    <div class="container">
        <div class="login-box">
            <p class="login-title">
                <b>
                    {{ typeName }}
                </b>
            </p>

            <div class="login-content">
                <el-form :rules="rules" ref="loginTpl" :model="userInfo">
                    <el-form-item prop="account">
                        <el-input
                            clearable
                            maxlength="11"
                            placeholder="请输入手机号"
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
                            placeholder="请输入密码"
                            type="password"
                            prefix-icon="el-icon-lock"
                            class="user-input"
                            v-model="userInfo.password"
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPwd">
                        <el-input
                            clearable
                            maxlength="18"
                            placeholder="请再次输入密码"
                            type="password"
                            prefix-icon="el-icon-lock"
                            class="user-input"
                            v-model="userInfo.confirmPwd"
                        >
                        </el-input>
                    </el-form-item>
                </el-form>

                <div class="login-button">
                    <el-button
                        type="primary"
                        size="small"
                        class="user-input"
                        @click="beforeSubmit"
                    >
                        提交
                    </el-button>
                </div>

                <div class="forget-pwd-tips text-left" style="clear: both">
                    <p>温馨提示:</p>
                    <p class="password-tips">
                        <i class="el-icon-info"></i>长度为6-18个字符
                    </p>
                    <p class="password-tips">
                        <i class="el-icon-info"></i
                        >必须包含数字、字母、特殊字符中的至少两种
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userLoginHandler from '../mixins/userLoginHandler'
    import { validateTelPhone, validatePwd } from '@/common/utils'

    export default {
        mixins: [userLoginHandler],
        name: 'CommonComponent',
        data() {
            return {
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
                    ],
                    confirmPwd: [
                        {
                            required: true,
                            validator: validatePwd
                        }
                    ]
                },
                userInfo: {
                    account: '',
                    password: '',
                    confirmPwd: '',
                    operateType: null
                },
                typeName: '',
                typeValue: null
            }
        },
        created() {
            const { name, value } = this.handleOperationType(
                this.$route.query.type
            )
            this.typeName = name
            this.typeValue = value
        },
        methods: {
            handleOperationType(type) {
                let name = ''
                let value = 1
                switch (type) {
                    case 'register':
                        name = '注册'
                        value = 1
                        break
                    case 'forgetPwd':
                        name = '重置密码'
                        value = 3
                        break
                }

                return { name, value }
            },
            beforeSubmit() {
                this.$refs.loginTpl.validate((valid) => {
                    if (valid) {
                        if (
                            this.userInfo.password === this.userInfo.confirmPwd
                        ) {
                            this.handleSubmit()
                        } else {
                            this.$message.warning('两次输入的密码不一致！')
                        }
                    }
                })
            },

            async handleSubmit() {
                this.userInfo.operateType = this.typeValue
                this.$message.success(this.typeName + '成功！')
                this.$router.push('/login')
                // const res = await this.$http.post(
                //     'http://ip：port/demo/operate',
                //     this.userInfo
                // )
                // if (res.success === 200) {
                //     this.$message.success(this.typeName + '成功！')
                //     console.log('提交了')
                // }
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        height: 100%;
        background: url(../../../assets/img/login/background.png) no-repeat;
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

                .forget-pwd-tips {
                    padding: 20px 0px;

                    .password-tips {
                        line-height: 20px;
                        font-size: 14px;
                        color: #9c9c9d;
                    }

                    .el-icon-info {
                        padding: 0 6px 0 2px;
                    }
                }
            }
        }
    }
</style>
