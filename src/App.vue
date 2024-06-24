<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Paper from './components/Paper.vue'
import ModalMain from '@/components/modals/ModalMain.vue'

import { useAppState } from '@/stores/appState';
const appState = useAppState();

onMounted(() => {
    appState.dbExists = localStorage.getItem('dbExists') === 'true'

    if(!appState.dbExists) {
        appState.isModalOpen = true
        appState.modalTitle = 'welcome'
    }
})
</script>

<template>
    <Paper>
        <RouterView />
    </Paper>

    <ModalMain>
        <p>jdkslq</p>
    </ModalMain>
</template>

<style scoped>
.highlighted {
    background-color: yellow;
}
</style>
