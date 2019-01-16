<template>
    <transition name="slide-fade" v-if="slide.show">
        <div class="container-fluid" v-on-click-outside="close">
            <div class="container">
                <i class="fa fa-remove pull-right" @click="close"></i>
                <component :is="component" v-if="typeof component === 'object'"></component>
                <div v-else v-html="component"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    import SliderTrait from '@Slot/sliders/trait'

    export default
    {
        mixins: [SliderTrait],

        data () {
            return {
                direction: 'full',
            }
        },
    }
</script>


<style lang='scss' scoped>
    $orange: #f7776e;
    $default: #414141;

    .fa-remove
    {
        font-size: 24px;
        margin-top:10px;
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
        bottom: 0;
        left: 0;
        right:0;

        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        text-align: center;
        background-color:#fff;
        border: 1px solid #d5d5d5;
        z-index: 1000000 !important;
        p
        {
            color: $default;
        }
    }


    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .6s ease;
    }
    .slide-fade-leave-active {
        transition: all .6s cubic-bezier(0, 1, 1, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(100vw);
        opacity: 1;
    }
</style>
