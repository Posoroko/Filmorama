<script setup>
import { useAppState } from '@/stores/appState';
import Welcome from '@/components/modals/Welcome.vue';
const appState = useAppState();

</script>

<template>
    <div class="backdrop centered" v-if="appState.isModalOpen">
        <div class="modal">
                           

            <div class="content">
                <Welcome v-if="appState.modalTitle === 'welcome'" />
            </div>
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
    min-height: 400px;
    background-color: white;
    padding: 15px;
}
</style>