<template>
    <div class="currency-detail-container">
        <grid-component :dataList="textList" :type="'text'"></grid-component>
    </div>
</template>

<script>
    import GridComponent from '@/components/GridComponent'

    export default {
        name: 'index',
        data() {
            return {
                textList: []
            }
        },
        components: {
            GridComponent
        },
        created() {
            this.handleQueryTextList()
        },
        methods: {
            handleQueryTextList() {
                const url = './json/text.json'
                this.$http.get(url).then((res) => {
                    this.textList = res.data || []
                })
            }
        }
    }
</script>

<style scoped>
    .currency-detail-container {
        width: 100%;
        height: 100%;
        background: url('../../../assets/img/home/ground.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
