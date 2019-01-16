<template>
    <div class="container-fluid top-right" :class="desktop || 'mobile-tools'" v-if="display">
        <component :is="component" v-if="typeof component === 'object'"></component>
        <div v-else v-html="component"></div>
    </div>
</template>

<script>
    import ToolsTrait from '@Slot/tools/trait'
    export default {
        mixins: [ToolsTrait],
        data() {
            return {
                position: 'top.right'
            }
        },
        computed: {
            display() {
                let activeToolOnMobile = ($tools.state('hasActiveTool') && this.mobile)
                
                return (this.tool.show && !activeToolOnMobile)
            }
        }
    }
</script>

<style lang="scss">
    .mobile-tools {
        position:fixed !important;
        top: 90vh !important;
        right: 0 !important;
        left: 0 !important;
    }
    .top-right
    {
        position: absolute;
        right: 3vw;
        top: 154px;
        z-index: 10000;
    }
</style>
