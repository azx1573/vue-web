<template>
    <div class="currency-detail-container">
        <grid-component :dataList="currencyList"></grid-component>
    </div>
</template>

<script>
    import GridComponent from '@/components/GridComponent'

    export default {
        name: 'index',
        data() {
            return {
                currencyList: []
            }
        },
        components: {
            GridComponent
        },
        created() {
            this.handleQueryCurrencyList()
        },
        methods: {
            handleQueryCurrencyList() {
                const url = './json/currency.json'
                this.$http.get(url).then((res) => {
                    this.currencyList = res.data || []
                })
            }
        }
    }
</script>

<style scoped>
    .currency-detail-container {
        background: url('../../../assets/img/home/ground.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
