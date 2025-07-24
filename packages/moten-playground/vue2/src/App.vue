<template>
  <div id="app">
     <MoImage src="https://picsum.photos/200/300" />

  </div>
</template>

<script>
import moten from '@moten/ui/vue2'
const { MoImage } = moten
export default {
  name: 'App',
  components: {
    MoImage
  }
}
</script>

<style>

</style>
