<script setup>
import movierating from '@/components/MovieCards/movie-rating.vue'


defineProps({
    title: String,
    rating: Number
})
</script>

<template>
    <li class="">
        <a class="" href="#">
            <div class="pencil title lineHeight flex alignEnd">
                {{ title }}
            </div>

            <movierating class="lineHeight flex alignEnd" :rating="rating" />
        </a>
    </li>
</template>

<style scoped>
li {
    height: calc(var(--line-height) * 2);
    outline: 2px solid black;
    margin-top: var(--line-height);
}
li:first-child {
    margin-top: 0;
}
.title {
    font-size: 28px;
    font-weight: 600;
    line-height: 22px;
    color: rgb(6, 82, 105);
}
</style>


