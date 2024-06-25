<script setup>
import { ref } from 'vue';
import Title from '@/components/modals/Title.vue'

const title = ref('');
const results = ref([]);

const url = "http://omdbapi.com/?apikey=84f68ae&s=";

async function search() {
    console.log(`${url}${title.value}`)
    await fetch(`${url}${title.value}`)
        .then(res => res.json())
        .then(data => results.value = data.Search)

    console.log(results.value.length)
}
</script>

<template>
    <div class="grow flex column">
        <Title title="Ajouter un film" />

        <div class="inputFrame relative">
            <input type="text" placeholder="titre du film" v-model="title">

            <div class="frame centered absolute">
                <svg class="" viewBox="0 -960 960 960" @click="search">
                    <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </div>
        </div>

        <div class="resultBox relative grow scroll" v-if="results.length">
            <div class="scrollBox absoluteFull flex column gap10">
                <div class="card flex gap10 pointer" v-for="movie in results" :key="movie.id">
                    <img class="poster" :src="movie.Poster" alt="">

                    <div>
                        <p>{{ movie.Title }}</p>
                        <p>{{ movie.Year }}</p>
                    </div>


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
</style>