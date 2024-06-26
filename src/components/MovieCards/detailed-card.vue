<script setup>
import movierating from '@/components/MovieCards/movie-rating.vue'
import movieposter from '@/components/MovieCards/movie-poster.vue'

defineProps({
    movie: Object
})

</script>

<template>
    <li v-if="movie" class="pencil w100">
        <a :href="`/movies/${movie.imdbID}`" class="flex block w100">
            <div class="posterFrame">
                <movieposter :src="movie.Poster" />
            </div>

            <div class="content w100">
                <div class="flex w100">
                    <div class="icon centered">
                        <img v-if="movie.Type === 'series'" src="@/assets/images/tv.jpg" alt="">

                        <img v-else src="@/assets/images/clap.jpg" alt="">
                    </div>

                    <div class="info grow relative">
                        <div class="absolute w100">
                            <p class="title lineHeight w100">
                                {{ movie.Title }}
                            </p>

                            <div class="flex">
                                <movierating class="sitOnline" :rating="movie.Rating" />

                                <p class="year sitOnline flex alignCenter">
                                    {{ movie.Year }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="comment">
                    {{ movie.Comment.slice(0, 30) }} ...
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
.posterFrame {
    width: 40%;
    height: calc(var(--line-height) * 4);
    background-color: #002025df;
    border: 2px solid #002025df;
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
.icon {
    height: calc(var(--line-height) * 2);
    padding: 0 5px;
    border: 2px solid black;
}
.icon img {
    display: block;
    height: 30px;
    padding: 0;
    margin: 0;
    mix-blend-mode: multiply;
}
.comment {
    font-size: 24px;
    font-weight: 600;
    height: calc(var(--line-height) * 2);
    padding-top: 10px;
    padding-left: 10px;
    line-height: 40px;
    border: 2px solid black;
    border-bottom: 2px solid black;
}

</style>