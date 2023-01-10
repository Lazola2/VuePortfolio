<template>
    <div class="decorator d-flex align-items-center justify-content-center gap-2">
        <div class="left-pole"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="right-pole"></div>
    </div>
</template>
<script>
export default {
    name: 'DecoratorItem'
}
</script>
<style scoped>
    .decorator {
        height: 30px;
        width: 300px;
    }

    .left-pole,.right-pole {
        height: 6px;
        width: 40%;
        border-radius: 10px;
        background: var(--theme-color);
    }

    .dot {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background: var(--theme-color);
    }


</style>