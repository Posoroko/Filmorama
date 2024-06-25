<script setup>
defineProps({
    title: String,
    rating: Number
})
</script>

<template>
<li>
    <a href="">
        
        <div>
            {{ title }}
        </div>

        <div> 
            {{ rating }}
        </div>

    </a>
</li>
</template>

<style scoped>
    
</style>


