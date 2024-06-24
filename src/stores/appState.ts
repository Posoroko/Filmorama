import { reactive } from 'vue';
import { defineStore } from 'pinia';


export const useAppState = defineStore('appState', {
    state: () => ({
        isModalOpen: false,
        modalTitle: '',
        dbExists: false
    })
});