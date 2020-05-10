<template>
    <country></country>
</template>

<script>
    import country from '@/components/CountryComponent'
    export default {
        name: 'index',
        data() {
            return {
                country: {}
            }
        },
        components: {
            country
        },
        methods: {
            handleQueryCountryDetail() {
                this.$http.get('./json/country.json').then((res) => {
                    this.country = res.data || {}
                })
            }
        },
        created() {
            this.handleQueryCountryDetail()
        }
    }
</script>

<style scoped></style>
