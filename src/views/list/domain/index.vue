<template>
    <domainAndGreatwall :lists="mapLists"></domainAndGreatwall>
</template>

<script>
    import domainAndGreatwall from '@/components/DomainAndGreatwallComponent'
    export default {
        name: 'index',
        data() {
            return {
                mapLists: []
            }
        },
        components: {
            domainAndGreatwall
        },
        methods: {
            handleQueryList() {
                this.$http.get('./json/map.json').then((res) => {
                    this.mapLists = res.data || []
                })
            }
        },
        created() {
            this.handleQueryList()
        }
    }
</script>

<style scoped></style>
