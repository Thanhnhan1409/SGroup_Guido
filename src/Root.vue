<script setup lang="ts">
// import LayoutDefault from './layouts/default.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>
