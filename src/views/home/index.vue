<template>
    <div class="home-container">
        <div class="home-top"></div>
        <div class="home-content">
            <div class="content-top">
                <el-row :gutter="12" v-for="block in blockList" :key="block.id">
                    <el-col
                        :span="12"
                        v-for="item in block.name"
                        :key="item.id"
                    >
                        <el-card shadow="always">
                            <div @click="handleRouterTo(item.url)">
                                <span :class="item.icon"></span>

                                <div class="grid-text">
                                    <div class="grid-text">
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="content-bottom">
                <footer-bar></footer-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import FooterBar from "@/components/FooterBar"
    export default {
        name: "index",
        components: {
            FooterBar
        },
        data() {
            return {
                blockList: []
            }
        },
        methods: {
            handleRouterTo(url) {
                this.$router.push(url)
            },
            handleQueryList() {
                const url = "./json/homeData.json"
                this.$http.get(url).then((res) => {
                    this.blockList = res.data || []
                })
            }
        },
        created() {
            this.handleQueryList()
        }
    }
</script>

<style scoped lang="scss">
    .home-container {
        width: 100%;
        height: 100%;
        .home-top {
            width: 100%;
            height: 20%;
            background: url("../../assets/img/home/view.png") no-repeat;
            background-size: 100% 100%;
        }

        .home-content {
            padding: 10px 12px;
            box-sizing: border-box;
            width: 100%;
            height: 80%;
            background: url("../../assets/img/home/ground.png") no-repeat;
            background-size: 100% 100%;
            .content-top {
                width: 100%;
                height: 100%;
            }
            .content-bottom {
                width: 100%;
                /*height: 100%;*/
                /deep/ .van-tabbar-item__icon {
                    font-size: 1.75rem;
                }
                /deep/ .van-tabbar-item__text {
                    font-size: 0.9rem;
                }
            }

            .grid-icon {
                font-size: 2.75rem;
                color: rgb(18, 150, 219);
            }

            .grid-text {
                color: rgb(1, 84, 120);
                font-size: 1.2rem;
                font-weight: 600;
            }
            .el-row {
                margin-bottom: 10px;
            }
        }
    }
</style>
