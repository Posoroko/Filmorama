<script setup>

</script>

<script setup>
import titleOnly from '@/components/MovieCards/title-Only.vue'

const movies = [

    {
       id: 1,
       title: "Kung Fu Panda",
       year: 2008,
       rating: 4,
       comment: "Excellent film d'animation",
       poster: "@/assets/images/kung-fu-panda.jpg"
    },
    {
       id: 2,
       title: "Star Wars 2: The Clone Wars",
       year: 1999,
       rating: 5,
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

    }
]
</script>

<template>
    <h1>Mes films</h1>

    <ul>
        <Title-Only />
    </ul>

    <router-link to="/">
        homepage
    </router-link>
    
    <ul>
        <title-Only 
            v-for="movie in movies" :key="movie.id" 
            :title="movie.title" :rating="movie.rating"
        />
    </ul>

</template>

