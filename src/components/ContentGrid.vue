<script setup>
</script>

<template>
  <main class="full flex">
    <div class="page grow flex column">
        <div class="header w100 ">
            <slot name="header">

            </slot>
        </div>

        <div class="content w100 grow">
            <slot name="content">

            </slot>
        </div>
    </div>
  </main>
</template>

<style scoped>
.margin {
    width: 26px;
}
.header {
    height: 80px;
}
/* .content {
    padding-left: 20px;
} */
.margin {
    flex-shrink: 0;
}
</style>