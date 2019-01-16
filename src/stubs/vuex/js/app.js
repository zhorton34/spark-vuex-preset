
window._ = require('lodash');
window.Popper = require('popper.js').default;
window.$u = require('underscore')
require('@Boot/prototypes')


import Vue from 'vue'
import store from './store'

window.Vue = require('vue');

import FormattableDateTrait from "@Trait/time"
import ViewPortableTrait from "@Trait/viewport"

Vue.mixin(ViewPortableTrait)
Vue.mixin(FormattableDateTrait)


import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

Vue.component('example-component', require('./components/ExampleComponent.vue'));




require('spark-bootstrap')
require('@Component/bootstrap')
require('../nova.spark/components/bootstrap')

var app = new Vue({
    mixins: [require('spark')],
    store
});

