<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Title from '@/components/modals/Title.vue'
import { useAppState } from '@/stores/appState'
import { addMovie } from '@/idb/movies.js'
import movierating from '@/components/MovieCards/movie-rating.vue'

const router = useRouter()
const route = useRoute()

const appState = useAppState();

const title = ref('');
const results = ref([]);

const url = "https://omdbapi.com/?apikey=84f68ae&s="

async function search() {
    console.log(`${url}${title.value}`)
    await fetch(`${url}${title.value}`)
        .then(res => res.json())
        .then(data => results.value = data.Search)
}

const selectedMovie = ref({
    Title: '',
    Year: '',
    imdbID: undefined,
    Type: '',
    Poster: '',
    Rating: 0,
    Comment: ''
})

function selectMovie(movie) {
    selectedMovie.value.Title = movie.Title
    selectedMovie.value.Year = movie.Year
    selectedMovie.value.imdbID = movie.imdbID
    selectedMovie.value.Type = movie.Type
    selectedMovie.value.Poster = movie.Poster
}
function closeModal() {
    appState.isModalOpen = false
    appState.modalTitle = ''
    if(selectedMovie.value.imdbID) {
        cancelEdit()
    }
}
function cancelEdit() {
    selectedMovie.value.Title = ''
    selectedMovie.value.Year = ''
    selectedMovie.value.imdbID = undefined
    selectedMovie.value.Type = ''
    selectedMovie.value.Poster = ''
    selectedMovie.value.Rating = 0
    selectedMovie.value.Comment = ''

}
async function handleAddMovie() {

    const res = await addMovie(
        selectedMovie.value.Title,
        selectedMovie.value.Year,
        selectedMovie.value.imdbID,
        selectedMovie.value.Type,
        selectedMovie.value.Poster,
        selectedMovie.value.Rating,
        selectedMovie.value.Comment
    )

    cancelEdit()
    closeModal()
    
    if(route.path == '/movies') {
        location.reload()
    } else {
        router.push('/movies')
    }
}

let enterListener = document.addEventListener('keyup', (event) => {
    
    if (event.key === 'Enter') {
        search()
    }
})
</script>

<template>
    <div class="grow flex column">
        <div class="flex justifyBetween">
            <Title title="Ajouter un film" />

            <button class="closeModal" @click="closeModal">
                <img class="full" src="@/assets/images/plus.jpg" alt="">
            </button>
        </div>

        <div class="inputFrame relative" v-if="!selectedMovie.imdbID">
            <input type="text" placeholder="titre du film" v-model="title">

            <div class="frame centered absolute">
                <svg 
                    viewBox="0 -960 960 960" 
                    @click="search"
                >
                    <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </div>
        </div>

        <div class="resultBox relative grow scroll" v-if="results.length && !selectedMovie.imdbID">
            <div class="scrollBox absoluteFull flex column gap10">
                <div class="card flex gap10 pointer" v-for="movie in results" :key="movie.id"
                    @click="selectMovie(movie)">
                    <img class="poster" :src="movie.Poster" alt="">

                    <div>
                        <p>{{ movie.Title }}</p>

                        <p>{{ movie.Year }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="editBox relative grow marginTop50" v-if="selectedMovie.imdbID">
            <div class="flex column gap20">
                <div flex column gap5>
                    <h1 class="pencil">{{ selectedMovie.Title }}</h1>
                    <h3 class="pencil">{{ selectedMovie.Year }}</h3>
                </div>

                <movierating 
                    :rating="selectedMovie.Rating" 
                    @rating="console.log(selectedMovie.Rating = $event)" 
                />

                <textarea class="comment" v-model="selectedMovie.Comment"> </textarea>

                <div class="flex justifyCenter gap10">
                    <button class="pencil cancel" @click="cancelEdit">annuler</button>
                    <button class="pencil confirm" @click="handleAddMovie">ajouter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inputFrame {
    margin-top: 20px;
}
input {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.05rem;
    padding: 10px;
    border: 2px solid rgb(230, 230, 230);
    border-radius: 5px;
}
.frame {
    fill: black;
    position: absolute;
    height: 100%;
    aspect-ratio: 1/1;
    top: 0;
    right: 0;
    padding: 5px;
    margin-right: 5px;
}
.resultBox {
    margin-top: 20px;
}
.scrollBox {
    overflow: scroll;
}
.poster {
    height: 70px;
}
.closeModal {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.463);
}
.closeModal img{
    rotate: 45deg;
    cursor: pointer;
}
textarea {
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
    height: calc(var(--line-height) * 5);
}
.cancel, .confirm {
    font-size: 24px;
    font-weight: 600;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.299);
}
.cancel:hover,
.confirm:hover {
    filter: brightness(0.8);
}
.cancel {
    background-color: var(--danger);
}
.confirm {
    background-color: var(--success);
}
</style>