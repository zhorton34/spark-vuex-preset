import Vue from "vue/types/index";

window.$mouse = {}


import '@Boot/mouse'
import '@Boot/helpers'
import aliases from "@Boot/app";

let alias = function(alias, obj) {
    Vue.prototype[alias] = obj
    window[alias] = obj
}

export default Object.entries(aliases).forEach(([key, value]) => alias(key, value))





