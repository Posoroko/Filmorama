<script setup>
import movierating from '@/components/MovieCards/movie-rating.vue'

defineProps({
    movie: Object
})

</script>

<template>
    <li v-if="movie" class="pencil w100">
        <a class="flex block w100">
            <img :src="movie.poster" alt="">

            <div class="content w100">
                <div class="flex w100">
                    <div class="icon centered pad5">
                        {{ movie.type }}
                    </div>

                    <div class="info grow relative">
                        <div class="absolute w100">
                            <p class="title lineHeight w100">
                                {{ movie.title }}
                            </p>

                            <div class="flex">
                                <movierating class="sitOnline" :rating="movie.rating" />

                                <p class="year sitOnline flex alignCenter">
                                    {{ movie.year }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="comment">
                    {{ movie.comment.slice(0, 65) }} ...
                </p>
            </div>
        </a>
    </li>

</template>

<style scoped>
li {
    margin-top: var(--line-height);
}
li:first-child {
    margin-top: 0;
}
img {
    display: block;
    height: calc(var(--line-height) * 4);
}
.title {
    font-size: 30px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 7px;
}
.info {
    height: calc(var(--line-height) * 2);
}
.comment {
    font-size: 24px;
    font-weight: 600;
    height: calc(var(--line-height) * 2);
    padding-top: 10px;
    padding-left: 10px;
    line-height: 40px;
}

</style>