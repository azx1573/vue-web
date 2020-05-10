<template>
    <div class="container">
        <el-form :rules="rules" ref="logoutTpl" :model="userInfo">
            <el-form-item prop="oldPassword" label="原密码">
                <el-input
                    size="small"
                    clearable
                    maxlength="18"
                    placeholder="请输入原密码"
                    type="password"
                    prefix-icon="el-icon-lock"
                    class="user-input"
                    v-model="userInfo.oldPassword"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="Newpassword" label="新密码">
                <el-input
                    size="small"
                    clearable
                    maxlength="18"
                    placeholder="请输入新密码"
                    type="password"
                    prefix-icon="el-icon-lock"
                    class="user-input"
                    v-model="userInfo.Newpassword"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="confirmPwd" label="确认密码">
                <el-input
                    size="small"
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
                提 交
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
</template>

<script>
    import { validatePwd } from '@/common/utils'

    export default {
        name: 'CommonComponent',
        data() {
            return {
                rules: {
                    oldPassword: [
                        {
                            required: true,
                            validator: validatePwd
                        }
                    ],
                    Newpassword: [
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
                    oldPassword: '',
                    Newpassword: '',
                    confirmPwd: '',
                    operateType: null
                }
            }
        },

        methods: {
            beforeSubmit() {
                this.$refs.logoutTpl.validate((valid) => {
                    if (valid) {
                        if (
                            this.userInfo.Newpassword ===
                            this.userInfo.confirmPwd
                        ) {
                            this.handleSubmit()
                        } else {
                            this.$message.warning('两次输入的密码不一致！')
                        }
                    }
                })
            },

            async handleSubmit() {
                // const res = await this.$http.post(
                //     'http://ip：port/demo/operate',
                //     this.userInfo
                // )
                // if (res.success === 200) {
                //     this.$message.success('密码修改成功！')
                // }
                this.$message.success('密码修改成功！')
                this.$router.push('/userCenter')
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 94%;
        margin: 0 auto;
        height: 100%;

        .el-form {
            padding-top: 50px;
        }
        /deep/ .el-form-item__error {
            top: 93%;
        }
        /deep/ .el-form-item {
            margin-bottom: 0px;
        }

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
            padding: 20px 10px;

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
</style>
