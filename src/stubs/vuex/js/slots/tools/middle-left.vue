<template>
        <div class="container-fluid middle-left" v-if="tool.show">
            <transition name="fade">
            <component :is="component" v-if="typeof component === 'object'"></component>
            <div v-else v-html="component"></div>
            </transition>
        </div>
</template>

<script>
    import ToolsTrait from '@Slot/tools/trait'
    export default {
        mixins: [ToolsTrait],
        data() {
            return {
                position: 'middle.left'
            }
        }
    }
</script>

<style lang="scss">
    .middle-left
    {
        position: absolute;
        left: 0;
        top: 210px;
        z-index: 10;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
