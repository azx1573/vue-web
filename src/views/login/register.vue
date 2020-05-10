<template>
    <div class="register-container">
        <CommonComponent></CommonComponent>
    </div>
</template>

<script>
    import CommonComponent from './components/CommonComponent'

    export default {
        name: 'register',
        components: {
            CommonComponent
        }
    }
</script>

<style scoped lang="scss">
    .register-container {
        height: 100%;
    }
</style>
