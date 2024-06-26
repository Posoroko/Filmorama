<script setup>
import ModalMain from '@/components/modals/ModalMain.vue'
import { useAppState } from '@/stores/appState'
import { useRoute } from 'vue-router'

const appState = useAppState();
const route = useRoute();

function toggleAddMovie() {
    if(appState.modalTitle == 'add-movie') {
        appState.isModalOpen = false
        appState.modalTitle = ''
        return
    }
    appState.isModalOpen = true
    appState.modalTitle = 'add-movie'
}
</script>

<template>
    <div class="overlay absoluteFull noEvents_kidsEvents">
        <ModalMain class="">

        </ModalMain>


        <nav class="absolute bottom0 w100 flex justifyCenter gap20 alignCenter">
            <router-link to="/" class="button" :class="{ 'active' : route.path == '/' }">
                <img class="full" src="@/assets/images/home.jpg" alt="">
            </router-link>
            <router-link to="/movies" class="button" :class="{ 'active' : route.path == '/movies' }">
                <img class="full" src="@/assets/images/film.jpg" alt="">
            </router-link>
            <div class="button top0 right0 pointer" @click="toggleAddMovie"
                :class="{ 'active' : appState.modalTitle == 'add-movie' }">
                <img class="full" src="@/assets/images/plus.jpg" alt="">
            </div>
        </nav>
    </div>
</template>

<style scoped>
nav {
    background-color: #ffffffe1;
    padding: 10px;
}
.button {
    width: 48px;
    height: 48px;
    padding: 8px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.272);
}
.button img {

    mix-blend-mode: multiply;

}
.active {

    background-color:rgba(128, 128, 128, 0.396);

}

</style>