<template>
    <div class="official-container">
        <div class="img-container">
            <img
                src="../../../../public/img/officialsystem/guan01.png"
                alt=""
                class="img"
            />
            <img
                src="../../../../public/img/officialsystem/guan02.png"
                alt=""
                class="img"
            />
            <img
                src="../../../../public/img/officialsystem/guan03.png"
                alt=""
                class="img"
            />
        </div>
        <div class="audio">
            <audio
                src="../../../../public/audioSource/official/guanzhi.mp3"
                controls
                preload
                controlsList="nodownload"
            >
                您的浏览器不支持 audio 标签。
            </audio>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index'
    }
</script>

<style scoped lang="scss">
    .official-container {
        width: 100%;
        height: 100%;
        background: #fcfbe9;
        position: relative;
        overflow-x: hidden;
        .img-container,
        .img {
            width: 100%;
        }
        .audio {
            width: 20px;
            height: 20px;

            position: absolute;
            right: 25px;
            top: 25px;
        }
    }
</style>
