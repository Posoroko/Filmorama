<script setup>
</script>

<template>
    <div class="full flex column relative">
        <div class="absoluteFull">
            <div class="headerBox flex w100">
                <img class="h100" src="@/assets/images/page/corner.jpg" alt="">

                <img class="h100" src="@/assets/images/page/header.jpg" alt="">
            </div>

            <div class="contentBox relative">
                <slot>

                </slot>

                <div class="pageContainer absolute flex">
                    <div class="marginBox">
                        <img class="fiveLinesHeight" src="@/assets/images/page/margin.jpg" alt="">
                    </div>

                    <div class="pageBox ">
                        <img class="fiveLinesHeight" src="@/assets/images/page/page.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

div.full {
    overflow: scroll;
}
.headerBox {
    height: 80px;
}
.marginBox {
    background-image: url('@/assets/images/page/margin.jpg');
    background-size: auto 200px;
}
.pageContainer {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}
.pageBox {
    background-image: url('@/assets/images/page/page.jpg');
    background-size: auto 200px;
}
.fiveLinesHeight {
    height: 200px;
}

.contentBox {
    width: 100%;
    min-height: 100%;
    padding: 0 20px 100px 35px;
    isolation: isolate;
}
</style>