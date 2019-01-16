import Vue from "vue"

window.alias = function(alias, obj)
{
    Vue.prototype[alias] = obj
    window[alias] = obj
}


window.iterate = function(obj) {
    return Object.entries(obj)
}

window.findIndexWhere = function(property, value, array)
{
    var neededIndex = false
    
    array.forEach((obj, index) => {
        if(obj[property] == value)
            neededIndex = obj
    })
    
    return neededIndex
}

window.is_object = function(obj)
{
    return (obj === Object(obj))
}


window.nested = function(object, string) {
    string = string.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    string = string.replace(/^\./, '');           // strip a leading dot
    let split = string.split('.');
    for (let iteration = 0, limit = split.length; iteration < limit; ++iteration) {
        let key = split[iteration];
        if (key in object) {
            object = object[key];
        } else {
            return;
        }
    }
    return object;
}

import qs from 'qs'

window.send = function(form) {
    return qs.stringify(form)
}