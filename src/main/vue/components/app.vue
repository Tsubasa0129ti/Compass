<template>
  <div class="main">
    <h1 class="message">{{message}}</h1>
    <h2 class="sample">Sample</h2>
    <p><input v-model="message"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  created() {
    this.message = 'hello';
  }
}
</script>

<style lang="scss" scoped>
  .main {
    .message {
      color: red
    }
  }
</style>