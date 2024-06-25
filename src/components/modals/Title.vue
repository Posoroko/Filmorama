<script setup>
defineProps({
    title: {
        type: String,
        default: "Default title"
    }
})
</script>

<template>
    <h1>{{ title }}</h1>
</template>

<style scoped>
    h1 {
        font-size: 25px;
        font-weight: bold;
    }
</style>