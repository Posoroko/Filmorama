<script setup>
defineProps({
    src: String
})
</script>

<template>
    <img :src="src" alt="">
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>