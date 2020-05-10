<template>
    <detail-component :currentItem="currentItem"></detail-component>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator"
    import detailComponent from "@/components/DetailComponent"

    @Component
    export default class Index extends Vue {
        currentItem: object{} = {}

        components: {
            detailComponent
        },

        methods: {
            handleQueryDetail(label) {
                const type = this.$route.query.type
                let url = ""
                switch (type) {
                    case "text":
                        url = "./json/TextDetail.json"
                        break
                    case "currency":
                        url = "./json/currencyDetail.json"
                        break
                }

                this.$http.get(url).then((res) => {
                    this.currentItem =
                        res.data &&
                        res.data.filter((item) => item.tag === label)[0]
                })
            }
        },
        created() {
            const detailId = this.$route.query || {}

            this.handleQueryDetail(detailId.label)
        }
    }
</script>

<style lang="scss" scoped></style>
