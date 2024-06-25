import { useAppState } from '@/stores/appState';
const appState = useAppState();

export{
    closeModal
}

function closeModal() {
    appState.isModalOpen = false
    appState.modalTitle = ''
}