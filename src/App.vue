<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        background: url('./assets/img/login/ground.png') no-repeat;
        background-size: 100% 100%;
    }
    #app {
        width: 100%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
