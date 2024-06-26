<script setup>
import { ref, onMounted } from 'vue'
import ContentGrid from '@/components/ContentGrid.vue'
import detailedcard from  '@/components/MovieCards/detailed-card.vue'
import { getAllMovies } from '@/idb/movies.js'

const movie = ref(null)

onMounted(async () => {
    const movies = await getAllMovies()

    
    movie.value = movies[0];
    console.log(movie.value)
})
</script>

<template>
    <ContentGrid>
        <template #header>
            <p class="note absolute">
 
            </p>
        </template>

        <template #content>
            <p>
                Filmification, votre journal des films que vous avez aimé et détesté
            </p>

            <div class="w100 latestBox" v-if="movie">
                <h1 class="pencil">Dernier film ajouté : </h1>
                <detailedcard :movie="movie" />
            </div>
        </template>
    </ContentGrid>
</template>

<style scoped>
.note {
    top: 10px;
    right: 30px;
    rotate: 10deg;
    padding-top: 8px;
}
p {
    font-size: 26px;
    letter-spacing: 1.5px;
    line-height: 40px;
    
    font-weight: 700;
}
.latestBox {
    margin-top: calc(var(--line-height) * 4);
}
</style>
