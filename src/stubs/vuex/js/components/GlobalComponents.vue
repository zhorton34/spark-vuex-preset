<template>
    <div class="container">
        <component v-for="(pop, key) in popUps" :is="pop" :key="key"/>
        <component v-for="(slide, key) in sliders" :is="slide" :key="`s${key}`"/>
    </div>
</template>

<script>
    import PopupsTrait from '@Trait/popups'
    import SlidersTrait from '@Trait/sliders'
    export default {
        mixins: [PopupsTrait, SlidersTrait]
    }
</script>
