<template>
   <div>
        
    </div>
  <RouterView/>
</template>

<script setup>
  import { useWindowSize } from '@vueuse/core'
  import { computed } from 'vue'

  const { width } = useWindowSize()
  const isMobile = computed(() => width.value < 768)
</script>

 