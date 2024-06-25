<script setup>
import titleonly from '@/components/MovieCards/title-only.vue'


const movies = [

    {
       id: 1,
       title: "Kung Fu Panda",
       year: 2008,
       rating: 1,
       comment: "Excellent film d'animation",
       poster: "@/assets/images/kung-fu-panda.jpg"
    },
    {
       id: 2,
       title: "Star Wars 2: The Clone Wars",
       year: 1999,
       rating: 2,
       comment: "Un film qui a marqué mon enfance",
       poster: "@/assets/images/star-wars-2.jpg"

    },
    {
       id: 3,
       title: "Star Wars 2: The Clone Wars",
       year: 1999,
       rating: 3,
       comment: "Un film qui a marqué mon enfance",
       poster: "@/assets/images/star-wars-2.jpg"

    },
    {
        id: 4,
        title: "Star Wars 2: The Clone Wars",
        year: 1999,
        rating: 4,
        comment: "Un film qui a marqué mon enfance",
        poster: "@/assets/images/star-wars-2.jpg"

    },
    {
        id: 5,
        title: "Star Wars 2: The Clone Wars",
        year: 1999,
        rating: 5,
        comment: "Un film qui a marqué mon enfance",
        poster: "@/assets/images/star-wars-2.jpg"

    }
]
</script>

<template>
    <h1 class="headerHeight">
        Mes films
    </h1>



    <ul class="r">
        <titleonly v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating" />
    </ul>

    <router-link to="/">
        homepage
    </router-link>

</template>

<style scoped>
ul {
    /* margin-top: 10px; */
}
</style>
