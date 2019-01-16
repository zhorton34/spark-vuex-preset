/**
 * Import global javascript prototypes for easier filtering and searching
 */
require('javascript-prototypes')

/**
 * Import Vue and Vuex
 */
import Vue from 'vue'
import store from './store'

import aliases from '@Boot/helpers.js'


/**
 * Bootstrap Global Vue Aliases and Helpers
 */
require('@Boot')

/**
 * Bootstrap Spark
 */
require('spark-bootstrap')

/**
 * Bootstrap Our Components
 */
require('@Component/bootstrap')


/**
 * Global Vue Mixins
 */
import FormattableDateTrait from '@Trait/time'
import ViewPortableTrait from '@Trait/viewport'

Vue.mixin(FormattableDateTrait)
Vue.mixin(ViewPortableTrait)


/**
 * Global Vue Directives
 */

import {directive as onClickOutside} from 'vue-on-click-outside'

Vue.directive('on-click-outside', onClickOutside)

/**
 * Global Vue Components
 */

import GlobalComponents from '@Component/global-components'
Vue.component('global-components', GlobalComponents);


window.app = new Vue({
    store,
    mixins: [require('spark')]
});


