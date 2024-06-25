<script setup>
</script>

<template>
    <div class="full flex column relative">
        <div class="headerBox  flex">
            <img class="h100" src="@/assets/images/page/corner.jpg" alt="">

            <img class="h100" src="@/assets/images/page/header.jpg" alt="">
        </div>

        <div class="pageBox grow flex w100">
            <div class="marginBox">
                <img class="fiveLinesHeight" src="@/assets/images/page/margin.jpg" alt="">
            </div>

            <div class="pageBox ">
                <img class="fiveLinesHeight" src="@/assets/images/page/page.jpg" alt="">
            </div>
        </div>

        <div class="contentBox absolute">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style scoped>

div.full {
    overflow: hidden;
    
}
.headerBox {
    height: 80px;
}
.marginBox {
    background-image: url('@/assets/images/page/margin.jpg');
    background-size: auto 200px;
}
.pageBox {
    background-image: url('@/assets/images/page/page.jpg');
    background-size: auto 200px;
}
.fiveLinesHeight {
    height: 200px;
}

.contentBox {
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 20px 0 35px;
}
</style>