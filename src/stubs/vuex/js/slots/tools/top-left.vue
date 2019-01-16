<template>
    <div class="container-fluid top-left" v-if="tool.show">
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
                position: 'top.left'
            }
        }
    }
</script>

<style lang="scss">
    .top-left
    {
        position: absolute;
        left: 0;
        top: 154px;
        z-index: 10000;
    }
</style>
