<script setup>
import ContentGrid from '@/components/ContentGrid.vue'
</script>

<template>
    <ContentGrid>
        <template #header>
            <p class="note absolute">
                accueil
            </p>
        </template>

        <template #content>
            <p class="">
                jdklsjqdl jkldfjls joigpo jfdjsl  k fdks kf dksmflkdlksml fkdmls kfdsk mfdksm fkdmls kfld skfdml
            </p>
            <router-link to="/movies">
                ma liste de film
            </router-link>
        </template>
    </ContentGrid>
</template>

<style scoped>
.note {
    top: 10px;
    right: 30px;
    rotate: 10deg;
}
p {
    font-size: 26px;
    letter-spacing: 1.5px;
    line-height: 40px;
    padding-top: 8px;
    font-weight: 700;
}
</style>
