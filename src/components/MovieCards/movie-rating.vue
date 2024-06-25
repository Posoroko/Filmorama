<script setup>
import ratingstar from '@/components/MovieCards/rating-star.vue'

defineProps({
    rating: Number
})
const colors = [
    undefined,
    '#008729',
    '#00b9ff',
    '#e500fc',
    '#ff8700',
    '#fc0000'
]
</script>

<template>
    <div class="box lineHeight flex alignCenter">
        <ratingstar v-for="i in 5" :key="i" :active="i <= rating" :color="colors[rating]" />
    </div>
</template>

<style scoped>
div {
    border: 2px solid black;
    padding: 0 5px;
}
</style>