export default {
    methods: {
        close()
        {
            $pop.hide(this.size)
        }
    },
    computed: {
        props() {
            return $pop.get(this.size).props
        },
        component() {
            return $pop.get(this.size).component
        },
        slide() {
            return this.$store.state.popups.popup[this.size]
        }
    }
}