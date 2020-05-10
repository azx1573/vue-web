<template>
    <div class="modify-password-container">
        <modifyPwd></modifyPwd>
    </div>
</template>

<script>
    import modifyPwd from './components/ModifyPwdComponent'

    export default {
        name: 'forgetPwd',
        components: {
            modifyPwd
        }
    }
</script>

<style scoped lang="scss">
    .modify-password-container {
        height: 100%;
        box-sizing: border-box;
    }
</style>
