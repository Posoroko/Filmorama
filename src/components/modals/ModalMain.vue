<script setup>
import { useAppState } from '@/stores/appState'
import Welcome from '@/components/modals/Welcome.vue'
import addmovie from '@/components/modals/add-movie.vue'
// import { closeModal } from '@/utils/tools'
const appState = useAppState();

function closeModal(e) {
    if(e.target === e.currentTarget) {
        appState.isModalOpen = false
        appState.modalTitle = ''
    }
    
}

</script>

<template>
    <div v-if="appState.isModalOpen" class="backdrop centered" @click="closeModal">
        <div class="modal flex column">

            <Welcome v-if="appState.modalTitle === 'welcome'" />

            <addmovie v-if="appState.modalTitle === 'add-movie'" />

        </div>
    </div>
</template>

<style scoped>
.backdrop {
    background-color: rgba(0, 0, 0, 0.457);
    padding: 15px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.modal {
    width: 100%;
    height: 400px;
    background-color: white;
    padding: 15px;
    overflow: hidden;
}
</style>