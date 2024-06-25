<script setup>
import titleonly from '@/components/MovieCards/title-only.vue'
import detailedcard from '@/components/MovieCards/detailed-card.vue'

const movies = [

    {
       id: 1,
       title: "Kung Fu Panda",
       year: 2008,
       type: "movie",
       rating: 1,
       comment: "Excellent film d'animation, j'aime ce film ! C'est super ! Je recommande !  hfjdk hsfkjh skj hfdkjs hfdkjhsfkj dhs fhdkj lshfkj dhsfklj",
       poster: "src/assets/images/kung-fu-panda.jpg"
    },
    {
       id: 2,
       title: "Star Wars 2: The Clone Wars",
       year: 1999,
        type: "movie",
       rating: 2,
       comment: "Un film qui a marqué mon enfance",
       poster: "src/assets/images/star-wars-2.jpg"

    },
    {
       id: 3,
       title: "Star Wars 2: The Clone Wars",
       year: 1999,
        type: "movie",
       rating: 3,
       comment: "Un film qui a marqué mon enfance",
       poster: "src/assets/images/star-wars-2.jpg"

    },
    {
        id: 4,
        title: "Star Wars 2: The Clone Wars",
        year: 1999,
        type: "tv",
        rating: 4,
        comment: "Un film qui a marqué mon enfance",
        poster: "src/assets/images/star-wars-2.jpg"

    },
    {
        id: 5,
        title: "Star Wars 2: The Clone Wars",
        year: 1999,
        rating: 5,
        comment: "Un film qui a marqué mon enfance",
        poster: "src/assets/images/star-wars-2.jpg"

    }
]
</script>

<template>
    <h1 class="headerHeight">
        Mes films
    </h1>



    <ul class="">
        <!-- <titleonly v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating" /> -->
        <detailedcard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </ul>

    <router-link to="/">
        homepage
    </router-link>

</template>

<style scoped>
ul {
    width: 100%;
}
</style>
