import { defineStore } from 'pinia';

export const useSelectedMovie = defineStore('selectedMovie', {
    state: () => ({
        Title: '',
        Year: '',
        imdbID: '',
        Type: '',
        Poster: '',
        Rating: '',
        Comment: '',
    })
});