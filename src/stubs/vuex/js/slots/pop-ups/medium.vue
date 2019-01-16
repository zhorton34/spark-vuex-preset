<template>
    <transition name="pop-fade" v-if="$pop.get(size).show">
        <div class="container-fluid" v-on-click-outside="close">
            <i class="fa fa-remove pull-right" @click="close"></i>
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
                size: 'medium',
            }
        },
    }
</script>


<style lang='scss' scoped>
    $orange: #f7776e;
    $default: #414141;

    .fa-remove
    {
        font-size: 20px;
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
        top: 15vh;
        left: 15vw;
        right:15vw;
        bottom: 15vh;

        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        text-align: center;
        background-color:#fff;
        border: 1px solid #d5d5d5;
        z-index: 1000000 !important;
        -webkit-box-shadow: 6px 6px 39px 2000px rgba(51,51,51,0.8);
        -moz-box-shadow: 6px 6px 39px 2000px rgba(51,51,51,0.8);
        box-shadow: 6px 6px 39px 2000px rgba(51,51,51,0.8);
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
