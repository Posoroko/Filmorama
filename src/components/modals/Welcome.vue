<script setup>
import Title from '@/components/modals/Title.vue'
import { initiateIdb } from '@/idb/initiateIdb'
import { useAppState } from '@/stores/appState';
const appState = useAppState();

async function handleClick() {
    const result = await initiateIdb();

    if(result.dbCreated) {
        console.log("Base de données creée !")
        appState.isModalOpen = false
        appState.modalTitle = ''
        
        localStorage.setItem('dbExists', 'true');
        location.reload();
    }
}


</script>

<template>
    <div class="grow">
        <Title title="Bienvenue !" />
        {{ appState.modalTitle }}

        <p>
            Bienvenue sur Filmification !
            Vous pouvez garder un journal de tous les films et séries
            que vous avez aimé et détesté.

            Filmification utilise votre stockage local pour garder vos données. Si vous désinstallé
            votre navigateur ou supprimez ses données, votre liste de film sera supprimé
            aussi.

            <button @click="handleClick">
                initialiser la base de données
            </button>

        </p>
    </div>
</template>

<style scoped>

</style>