<template>
    <div class="common-container">
        <div v-for="list in lists" :key="list.id">
            <div class="top text-right">
                <audio
                    :src="list.audioUrl"
                    controls
                    preload
                    controlsList="nodownload"
                >
                    您的浏览器不支持 audio 标签。
                </audio>
            </div>
            <div class="bottom">
                <img :src="list.url" :alt="list.title" class="img" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            lists: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .common-container {
        padding: 10px;
        box-sizing: border-box;

        background: url('../assets/img/home/ground.png') no-repeat;
        background-size: 100% 100%;
        .bottom {
            .img {
                width: 100%;
            }
        }
    }
</style>
