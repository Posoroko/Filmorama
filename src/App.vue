<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Paper from './components/Paper.vue'
import overlaymain from '@/components/overlay/overlay-main.vue'

import { useAppState } from '@/stores/appState';
const appState = useAppState();

onMounted(() => {

    appState.dbExists = localStorage.getItem('dbExists') === 'true'
    
    if(!appState.dbExists) {
        
        appState.isModalOpen = true
        appState.modalTitle = 'welcome'
    } 
    else {
        
        appState.isModalOpen = true
        appState.modalTitle = 'add-movie'
    }
})
</script>

<template>
    <Paper>
        <RouterView />
    </Paper>

    <overlaymain>

    </overlaymain>
</template>

<style scoped>

</style>
