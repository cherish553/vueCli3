import Vue from 'vue'
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
        get () {
            return EventBus
        }
    }
})