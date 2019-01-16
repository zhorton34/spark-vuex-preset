<template>
    <transition name="pop-fade" v-if="$pop.get(size).show">
        <div class="container-fluid" v-on-click-outside="close">
            <img class="fa fa-close pull-right clickable" @click="close"/>
            <component :is="component" v-if="typeof component === 'object'"></component>
            <div v-else v-html="component"></div>
        </div>
    </transition>
</template>

<script>
    import PopUpTrait from './trait'

    export default
    {
        mixins: [PopUpTrait],
        data () {
            return {
                size: 'large',
            }
        },
    }
</script>


<style lang='scss' scoped>
    $orange: #f7776e;
    $default: #414141;

    .mobile-close-button {
        width: 35px;
        height: 35px;
    }
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
        top: 5vh;
        left: 5vw;
        right:5vw;
        bottom: 5vh;

        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        text-align: center;
        background-color:#fff;
        z-index: 1000000 !important;
        -webkit-box-shadow: 6px 6px 39px 2000px rgba(202, 202, 202, 0.5);
        -moz-box-shadow: 6px 6px 39px 2000px rgba(202, 202, 202, 0.5);
        box-shadow: 6px 6px 39px 2000px rgba(202, 202, 202, 0.5);
        p
        {
            color: $default;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
