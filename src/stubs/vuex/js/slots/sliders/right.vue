<template>
    <transition name="slide-fade" v-if="slide.show">
        <aside class="container-fluid" v-on-click-outside="close">
            <i class="fa fa-remove pull-left" @click="close"></i>
            <div class="row">
                <div class="col-12">
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
                direction: 'right'
            }
        },
    }
</script>


<style lang="scss" scoped>

    .fa-remove
    {
        cursor: pointer;
        color: #414141;
    }
    .option
    {
        cursor: pointer;
    }
    .active
    {
        color: #f7776e !important;
    }
    .default
    {
        color: #414141 !important;
    }

    .container-fluid
    {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        text-align: center;
        width: 20vw;
        padding: 10px;
        background-color:#fff;
        border: 1px solid #d5d5d5;
        z-index: 1000000 !important;

    }
    .container-fluid > p
    {
        color: #414141;
    }
    .container-fluid > .one-deep
    {
        margin-left: 25px;
    }
    .container-fluid > .two-deep
    {
        margin-left: 50px;
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
        transform: translateX(500px);
        opacity: 1;
    }
</style>
