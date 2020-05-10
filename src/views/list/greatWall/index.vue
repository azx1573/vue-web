<template>
    <domainAndGreatwall :lists="greatwallList"></domainAndGreatwall>
</template>

<script>
    import domainAndGreatwall from '@/components/DomainAndGreatwallComponent'
    export default {
        name: 'index',
        data() {
            return {
                greatwallList: []
            }
        },
        components: {
            domainAndGreatwall
        },
        methods: {
            handleQueryList() {
                this.$http.get('./json/greatwall.json').then((res) => {
                    this.greatwallList = res.data || []
                })
            }
        },
        created() {
            this.handleQueryList()
        }
    }
</script>

<style scoped></style>
