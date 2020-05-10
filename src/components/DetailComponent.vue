<template>
    <div class="detail-component-container">
        <div class="detail-top mb20">
            <img
                :src="currentItem.img"
                :alt="currentItem.tag"
                :width="currentItem.width"
                :height="currentItem.height"
            />
        </div>
        <div class="text-right">
            <audio
                :src="currentItem.audioUrl"
                controls
                preload
                autoplay
                controlsList="nodownload"
            >
                您的浏览器不支持 audio 标签。
            </audio>
        </div>
        <div class="detail-bottom text-left">
            {{ currentItem.describe }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailComponent',
        props: {
            currentItem: {
                type: Object,
                default: () => {
                    {
                    }
                }
            }
        },
        methods: {
            handleResetTitle() {
                document.title = this.$route.query.title
            }
        },
        created() {
            this.handleResetTitle()
        }
    }
</script>

<style lang="scss" scoped>
    .detail-component-container {
        box-sizing: border-box;

        background: url('../assets/img/home/ground.png') no-repeat;
        background-size: 100% 100%;
        padding: 20px 20px;
        .detail-bottom {
            font-size: 18px;
            font-weight: 400;
            font-style: normal;
            letter-spacing: normal;
            color: #333333;
            text-indent: 2em;
        }
    }
</style>
