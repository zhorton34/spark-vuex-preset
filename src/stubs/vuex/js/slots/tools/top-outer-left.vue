<template>
    <div class="top-outer-left" v-if="tool.show">
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
                position: 'top.outer.left'
            }
        },
    }
</script>

<style lang="scss">
    .top-outer-left
    {
        display: none;
        position: absolute;
        left: 0vw;
        top: 154px;
        z-index: 10000;
    }
</style>
