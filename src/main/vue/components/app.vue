<template>
  <button @click="count++">button</button>
  <p>{{ count }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const count = ref(0);

</script>

<style lang="scss">
.main {
  .message {
    color: red
  }
}

</style>