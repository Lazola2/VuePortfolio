<template>
    <div class="socials align-items-end position-fixed text-white h-100 d-flex flex-md-column flex-row align-items-end justify-content-md-center px-3 align-items-md-center">
        <li class="list-unstyled my-1 my-md-2 mx-1 mx-md-2">
            <a href="https://web.facebook.com/profile.php?id=100004723127357">
                <i class="bi bi-facebook"></i>
            </a>
        </li>
        <li class="list-unstyled my-1 my-md-2 mx-1 mx-md-2">
            <a href="https://www.linkedin.com/feed/">
                <i class="bi bi-linkedin"></i>
            </a>
        </li>
        <li class="list-unstyled my-1 my-md-2 mx-1 mx-md-2">
            <a href="https://twitter.com/Lazola27">
                <i class="bi bi-twitter"></i>
            </a>
        </li>
        <li class="social-links list-unstyled my-1 my-md-2 mx-1 mx-md-2">
            <a href="https://github.com/Lazola2">
                <i class="bi bi-github"></i>
            </a>
        </li>
        <li class="list-unstyled line bg-white my-2 d-none d-md-block"></li>
    </div>
</template>
<script>
export default {
    name: 'SocialIcons'
}
</script>
<style scoped>
    .socials {
        width: 80px;
    }

    .socials li {
        font-size: 24px;
        color: orange;
    }

    .socials li a {
        color: var(--text-color);
    }
</style>