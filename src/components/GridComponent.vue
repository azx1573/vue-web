<template>
    <div class="grid-container">
        <div class="grid-item">
            <van-grid :gutter="10" :column-num="2">
                <van-grid-item
                    v-for="item in dataList"
                    :key="item.id"
                    @click="handleRouterToDetail(item)"
                >
                    <img :src="item.imgUrl" alt="list.text" class="grid-img" />

                    <div class="grid-text mt5">{{ item.text }}</div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'grid',
        props: {
            type: {
                required: false,
                default: 'currency'
            },
            dataList: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            handleRouterToDetail(row) {
                row.url &&
                    this.$router.push({
                        path: row.url,
                        query: {
                            label: row.label,
                            type: this.type,
                            title: row.text
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid-container {
        padding: 10px 13px 0 5px;
        box-sizing: border-box;
        /deep/ .van-grid-item {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
        }
        .grid-img {
            width: 130px;
            height: 120px;
        }
    }
</style>
