import Vue from 'vue'

Vue.mixin({
    methods: {
        createPayload: function(key, value) {
            return { 
                key,
                value
            }
        },
        detectViewport: function() {            
            const viewportWidth = window.innerWidth
            let payload            
            const mobileBreakpoint = 768
            if(viewportWidth < mobileBreakpoint) {                
                console.log('window: viewport is mobile')
                payload = this.createPayload('isMobile', true);
                this.$store.commit('commitAppState', payload)
                //return true
            } else {                
                console.log('window: viewport is desktop')
                payload = this.createPayload('isMobile', false);
                this.$store.commit('commitAppState', payload)
                //return false
            }
        }
    }
})