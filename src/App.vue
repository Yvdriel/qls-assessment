<template>
  <router-view />
</template>

<script setup lang="ts">
console.log(process.env)
defineOptions({
  name: 'App'
});
</script>
