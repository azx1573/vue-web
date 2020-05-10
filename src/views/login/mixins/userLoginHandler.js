export default {
    methods: {
        _handleNumber(target, key) {
            target[key] = target[key].replace(/[^\d]/g, '')
        }
    },
}
