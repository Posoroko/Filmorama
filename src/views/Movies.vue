<script setup>
import { ref, onMounted } from 'vue';
import titleonly from '@/components/MovieCards/title-only.vue'
import detailedcard from '@/components/MovieCards/detailed-card.vue'
import { getAllMovies } from '@/idb/movies.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const movies = ref(null)
 
onMounted(async () => {
    if(localStorage.getItem('dbExists')) {
        console.log('hello')
        movies.value = await getAllMovies()
    }

})
</script>

<template>
    <h1 class="headerHeight">
        Mes films
    </h1>

    <ul class="" v-if="movies && movies.length">
        <!-- <titleonly v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating" /> -->
        <detailedcard v-for="movie in movies" :key="movie.imdbID" :movie="movie"/>
    </ul>

    <p v-else>
        Vous n'avez pas encore ajouté de film dans votre liste.  Ajoutez-en un
        en cliquant sur le bouton "ajouter un film".
    </p>
</template>

<style scoped>
ul {
    width: 100%;
}
</style>
