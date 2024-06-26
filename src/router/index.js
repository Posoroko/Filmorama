import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Movies from '@/views/Movies.vue'
import MovieId from '@/views/MovieId.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),  
    history: createWebHistory("https://filmorama.netlify.app/"),  
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movies/:movieId',
            name: 'movieId',
            component: MovieId
        }
    ]
})

export default router
