<script setup lang="ts">
</script>

<template>
    <header>
        <img src="../assets/icons/icon-bars.svg" @click="toggleClick" alt="" :class="$style.iconBar">
    </header>
    <side-bar :class="$style.sideBar" :isShowProps="isShowSidebar" @closeSidebar="handleCloseSidebar" v-show="isShowSidebar" />
    <router-view />
    <footer>
        footer
    </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const isShowSidebar = ref<Boolean>(false)
const toggleClick = () : void => {
    isShowSidebar.value = !isShowSidebar.value
}
const handleCloseSidebar = () : void => {
    isShowSidebar.value = false;
}
</script>
<style module lang="scss">
.sideBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.iconBar {
    width: 20px;
    padding: 16px 0;
    cursor: pointer;
}
</style>