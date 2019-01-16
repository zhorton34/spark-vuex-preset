import Vue from "vue"
import aliases from './app'

export default Object.entries(aliases).forEach(([alias, obj]) =>
{
    Vue.prototype[alias] = obj
    window[alias] = obj
})

