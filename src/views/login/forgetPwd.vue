<template>
    <div class="forget-password-container">
        <CommonComponent></CommonComponent>
    </div>
</template>

<script>
    import CommonComponent from './components/CommonComponent'

    export default {
        name: 'forgetPwd',
        components: {
            CommonComponent
        }
    }
</script>

<style scoped lang="scss">
    .forget-password-container {
        height: 100%;
    }
</style>
