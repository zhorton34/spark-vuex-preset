<template>
    <transition name="slide-fade" v-if="slide.show">
        <aside class="container-fluid" v-on-click-outside="close">
            <div class="text-center slide-header">
                <div id="logo">
                    <h2>Header</h2>
                </div>
                <a href="#" class="close-mm-menu" @click="close">
                    <i class="fa fa-angle-double-left pull-right"></i>
                </a>
            </div>
            <div class="placeholder"></div>
            <div class="row">
                <div class="col-md-12">
                    <component :is="component" v-if="typeof component === 'object'"></component>
                    <div v-else v-html="component"></div>
                </div>
            </div>
        </aside>
    </transition>
</template>

<script>
    import SliderTrait from '@Slot/sliders/trait'

    export default
    {
        mixins: [SliderTrait],

        data() {
            return {
                direction: 'left'
            }
        }
    }
</script>


<style lang='scss' scoped>
    .placeholder
    {
        height: 100px;
    }
    .mp-global-logo-link
    {
        float:left;
        display: inline-block;
        height: 50px;
        width: 240px;
        padding-left: 10vw;
    }
    .slide-header {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        padding: 20px;
        height: 80px;
        box-shadow: 1px 0px 12px #00000042;
        border-bottom: 1px solid #d7d7d7;
        box-sizing: border-box;
        background-color: white;
    }
    .close-mm-menu {
        height: 50px;
        width: 50px;
        margin-right: 50px;
        color: #a2a2a2;
        cursor: pointer;
    }
    .fa-angle-double-left {
        font-size: 20px;
    }
    .mm-menu-title {
        padding-right: 50px;
    }
    $orange: #f7776e;
    $default: #414141;

    .fa-remove
    {
        cursor: pointer;
        color: $default
    }
    .option
    {
        cursor: pointer;
    }
    .active
    {
        color: $orange !important;
    }
    .default
    {
        color: $default !important;
    }

    .container-fluid
    {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        text-align: center;
        width: 350px;
        padding: 10px;
        padding-top: 0;
        background-color:#fff;
        border: 1px solid #d5d5d5;
        overflow-x:hidden;
        z-index: 1000000 !important;
        p
        {
            color: $default;
        }
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .4s ease;
    }
    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(0, 1, 1, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(-500px);
        opacity: 1;
    }
</style>
