<template>
    <div class="container-fluid middle-right" v-if="tool.show">
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
                position: 'middle.right'
            }
        }
    }
</script>

<style lang="scss">
    .middle-right
    {
        position: absolute;
        right: 2vw;
        top: 50vh;
        z-index: 10000;
    }
</style>
