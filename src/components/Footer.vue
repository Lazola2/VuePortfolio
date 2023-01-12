<template>
    <footer class="text-white w-100 position-fixed d-flex pt-2">
            <p class="text-end w-100 pe-5">&copy; copyright 2023 </p>    
    </footer>
</template>
<script>

export default {
    name: 'FooterItem',
}
</script>
<style>
    footer {
        height: 3rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        bottom: 0;
    }
    
    .icons-holder {
        width: 20%;
    }

    .copyright-holder {
        width: 15%;
    }
</style>