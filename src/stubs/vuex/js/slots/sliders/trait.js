export default {
    methods: {
        close()
        {
            $slide.hide(this.direction)
        }
    },
    computed: {
        props() {
            return $slide.get(this.direction).props
        },
        component() {
            return $slide.get(this.direction).component
        },
        slide() {
            return this.$store.state.sliders.slide[this.direction]
        }
    }
}