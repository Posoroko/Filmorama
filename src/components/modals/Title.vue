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