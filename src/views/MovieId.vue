<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import detailedcard from '@/components/MovieCards/detailed-card.vue'
import movieRating from '@/components/MovieCards/movie-rating.vue'
import movieposter from '@/components/MovieCards/movie-poster.vue'
import { getMovieById, updateMovie } from '@/idb/movies.js'

const route = useRoute()

const movie = ref(null)

const editing = ref(false)
const comment = ref('')
const rating = ref(0)

async function requestEdit() {
    if(!editing.value) {
        editing.value = !editing.value
        return
    }

    await updateMovie(movie.value.imdbID, 'Comment', comment.value)
    await updateMovie(movie.value.imdbID, 'Rating', rating.value)

    editing.value = !editing.value
}

onMounted( async () => {
    const imdbID = route.params.movieId
    movie.value = await getMovieById(imdbID)
    rating.value = movie.value.Rating
    comment.value = movie.value.Comment
})

</script>

<template>
    <div class="page w100" v-if="movie">
        <div class="flex">
            <div class="moviePoster">
                <movieposter :src="movie.Poster" />
            </div>

            <div class="grow flex column">
                <div class="flex justifyBetween alignStart w100 lineHeight">
                    <img class="typeIcon" src="@/assets/images/clap.jpg" alt="">

                    <button class="stroke editIcon centered pointer" @click="requestEdit"
                        :class="{ 'editing' : editing }">

                        <img v-if="editing" src="@/assets/images/check.jpg" alt="">
                        <img v-else class="" src="@/assets/images/edit.jpg" alt="">
                    </button>

                </div>

                <ul>
                    <li class="lineHeight flex alignEnd pencil">
                        sortie : {{ movie.Year }}
                    </li>

                    <li>
                        <movie-rating 
                            :class="{ 'editing': editing }" 
                            :rating="rating" 
                            @rating="rating = $event"
                        />
                    </li>
                </ul>

            </div>
        </div>

        <textarea class="comment pencil w100" :class="{ 'editing': editing }" spellcheck="false"
            :disabled="editing ? false : true" v-model="comment">
        </textarea>
    </div>

</template>

<style scoped>
.page {
    padding-top: var(--header-height);
}
.moviePoster {
    width: 45%;
    height: calc(var(--line-height) * 7);
    object-fit: contain;
    border-radius: 10px;
    opacity: 0.75;
    filter: saturate(0.6) contrast(1.2);
    background-color: black;
}
.typeIcon {
    height: 40px;
    mix-blend-mode: multiply;
}
.editIcon {
    width: 40px;
    aspect-ratio: 1/1;
    border: none;
    border-radius: 50%;
    /* background-color: #fff; */
    box-shadow: 1px 1px 5px black;
    overflow: hidden;
} 
.editIcon.editing {
   background-color: rgba(0, 225, 0, 0.337);
}
.editIcon img {
    width: 80%;
    mix-blend-mode: multiply;
}
ul {
    padding-left: 10px;
}
li {
    font-size: 26px;
    font-weight: 700;
}
.stroke {
    outline: 2px solid var(--stroke-color);
}
.comment {
    display: block;
    /* width: 200px; */
    min-height: calc(var(--line-height) * 5);
    font-size: 26px;
    font-weight: 700;
    line-height: 40px;
    padding: 10px ;
    border: 2px solid rgba(0, 0, 0, 0.405);
    margin-top: var(--line-height);
}

</style>

<style>
.editing {
    outline: 5px solid rgba(0, 225, 0, 0.337);
}
</style>