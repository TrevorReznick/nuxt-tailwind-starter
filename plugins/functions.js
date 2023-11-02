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
        },
        setDarkMode: function() {
            /* @@ tooggle code button @@ */
            var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
            var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden')
            } else {
                themeToggleDarkIcon.classList.remove('hidden')
            }
            
            var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
            var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden')
            } else {
                themeToggleDarkIcon.classList.remove('hidden')
            }

            var themeToggleBtn = document.getElementById('theme-toggle')

            themeToggleBtn.addEventListener('click', function() {

                // toggle icons inside button
                themeToggleDarkIcon.classList.toggle('hidden')
                themeToggleLightIcon.classList.toggle('hidden')

                // if set via local storage previously
                if (localStorage.getItem('color-theme')) {
                    if (localStorage.getItem('color-theme') === 'light') {
                        document.documentElement.classList.add('dark')
                        localStorage.setItem('color-theme', 'dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                        localStorage.setItem('color-theme', 'light')
                    }

                // if NOT set via local storage previously
                } else {
                    if (document.documentElement.classList.contains('dark')) {
                        document.documentElement.classList.remove('dark')
                        localStorage.setItem('color-theme', 'light')
                    } else {
                        document.documentElement.classList.add('dark')
                        localStorage.setItem('color-theme', 'dark')
                    }
                }
                
            })
        }
    }
})