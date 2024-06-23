<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Paper from './components/Paper.vue'

</script>

<template>
    <Paper>
        <RouterView />
    </Paper>
</template>

<style scoped>
.highlighted {
    background-color: yellow;
}
</style>
