export default {
    data()
    {
        return {
            view: {

                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            }
        }
    },

    computed: {
        desktop() {
            return (this.view.width > 1000)
        },
        mobile() {
            return (this.view.width <= 1000)
        }
    },
    methods: {
        getWindowWidth(event) {
            this.view.width = document.documentElement.clientWidth;
        },
    
        getWindowHeight(event) {
            this.view.height = document.documentElement.clientHeight;
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
            window.addEventListener('resize', this.getWindowHeight);
            
            this.getWindowWidth()
            this.getWindowHeight()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth)
        window.removeEventListener('resize', this.getWindowHeight);
    }

}