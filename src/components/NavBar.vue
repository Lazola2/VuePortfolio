<template>
    <header class="container-fluid d-flex justify-content-between align-items-center px-5">
        <h2 class="logo px-2 text-theme-color rounded-1">L.</h2>
        <nav>
            <ul class="d-flex list-unstyled">
                <li class="px-4 pt-3 text-theme-color">Home</li>
                <li class="px-4 pt-3 text-theme-color">About</li>
                <li class="px-4 pt-3 text-theme-color">Resume</li>
                <li class="px-4 pt-3 text-theme-color">Projects</li>
                <li class="px-4 pt-3 text-theme-color">Testimonials</li>
                <li class="px-4 pt-3 text-theme-color">Contact</li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style scoped>
    header {
        height: 10vh;
        position: fixed;
    }

    .logo {
        font-size: 40px;
        border: 2px solid var(--theme-color);
    }
</style>