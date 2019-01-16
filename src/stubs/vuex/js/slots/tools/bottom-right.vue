<template>
    <div class="container-fluid bottom-right" v-if="tool.show">
        <component :is="component" v-if="typeof $tools.get('bottom.right').component === 'object'"></component>
        <div v-else v-html="component"></div>
    </div>
</template>

<script>
    import ToolsTrait from '@Slot/tools/trait'
    export default {
        mixins: [ToolsTrait],
        data() {
            return {
                position: 'bottom.right'
            }
        }
    }
</script>

<style lang="scss">
    .bottom-right
    {
        position: absolute;
        right: 3vw;
        bottom: 0vh;
        z-index: 10000;
    }
</style>
