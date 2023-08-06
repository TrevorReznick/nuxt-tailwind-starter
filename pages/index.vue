<!-- Please remove this file from your project -->
<template>
  <div>
    <headerComponent />
    <mainComponent />
  </div>
</template>

<script>

import headerComponent from '~/components/_header.vue'
import mainComponent from '~/components/main.vue'

export default {
  name: 'IndexPage',
  components: {
    headerComponent,
    mainComponent
  },
  computed: {
    
  },
  mounted: function() {
    console.log('index: mounted')
    console.log(process.env.DB_HOST) // 'localhost'    
  },
  methods: {
    
  }
}
</script>
