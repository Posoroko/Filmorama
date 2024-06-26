import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Movies from '@/views/Movies.vue'
import MovieId from '@/views/MovieId.vue'

const router = createRouter({
    history: createWebHashHistory(),
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
