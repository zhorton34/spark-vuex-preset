export default {
        methods: {
            close()
            {
                $tools.hide(this.position)
            }
        },
        computed: {
            props() {
                return $tools.get(this.position).props
            },
            component() {
                return $tools.get(this.position).component
            },
            tool() {
                return $tools.get(this.position)
            }
        }
}

