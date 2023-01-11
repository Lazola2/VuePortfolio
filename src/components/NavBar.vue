<template>
    <header class="container-fluid d-flex justify-content-between align-items-center px-5">
        <h2 class="logo text-theme-color">
            <i class="bi bi-code-slash"></i>
        </h2>
        <nav>
            <ul class="d-flex list-unstyled">
                <!-- router link to HOME page -->
                <router-link to="/">
                    <li class="px-4 pt-3 text-theme-color">Home</li>
                </router-link>

                <!-- router link to ABOUT page -->
                <router-link to="/about">
                    <li class="px-4 pt-3 text-theme-color">About</li>
                </router-link>
                
                <!-- router link to RESUME page -->
                <router-link to="/resume">
                    <li class="px-4 pt-3 text-theme-color">Resume</li>
                </router-link>
                
                <!-- router link to PROJECTS page -->
                <router-link to="/projects">
                    <li class="px-4 pt-3 text-theme-color">Projects</li>
                </router-link>

                <!-- router link to TESTIMONIALS page -->
                <router-link to="/testimonials">
                    <li class="px-4 pt-3 text-theme-color">Testimonials</li>
                </router-link>

                <!-- router link to projects page -->
                <router-link to="/contact">
                    <li class="px-4 pt-3 text-theme-color">Contact</li>
                </router-link>
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
        font-size: 35px;
    }
</style>