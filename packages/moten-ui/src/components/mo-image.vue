<template>
  <img :src="src" class="image" />
</template>
<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  props: {
    src: String,
  },
  data() {
    return {
      value: 111,
    };
  },
  mounted() {
    console.log(this.value);
  },
});
</script>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  margin: auto;
}
</style>
