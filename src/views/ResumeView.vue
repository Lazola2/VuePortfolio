<template>
    <div class="resume w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="resume-container bg-success mt-5">
            <div class="title-holder d-flex align-items-end justify-content-center">
                <!-- title -->
                <h4 class="title">Resume</h4>
            </div>
            <div class="sub-title-holder bg-black">
                <!-- subtitle with decoration -->
                <h2>Education and skills</h2>
               <DecoratorItem/>
            </div>
            <div class="site bg-primary overflow-hidden">
                <!-- education and skills sites go here -->
                <div class="sites bg-dark w-100 h-100" id="site-1">
                    <!-- education information goes here -->
                </div>
                <div class="sites bg-danger h-100 h-100" id="site-2">
                    <!-- skills information goes here -->
                </div>
            </div>
            <div class="navigator-container d-flex align-items-center justify-content-center bg-info">
                <div class="navigator bg-warning d-flex align-items-center justify-content-center gap-2">
                    <a href="#site-1">
                        <li class="navigator-button list-unstyled rounded-5"></li>
                    </a>
                    <a href="#site-2">
                        <li class="navigator-button list-unstyled rounded-5"></li>
                    </a>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import DecoratorItem from '@/components/Decorator.vue';
export default {
    components: {
        DecoratorItem,
    }
}
</script>
<style scoped>
    .resume-container {
        height: 80%;
        width: 60%;
        display: grid;
        grid-template-columns: .5fr 3fr 3fr .5fr;
        grid-template-rows: 1fr 1.5fr .8fr repeat(2,3fr) .8fr;
    }

    .title-holder {
        grid-row: 1/2;
        grid-column: 1/-1;
    }

    .sub-title-holder {
        grid-row: 2/3;
        grid-column: 1/-1;
    }

    .site {
        grid-row: 3/6;
        grid-column: 2/-2;
    }

    .navigator-container {
        grid-row: 6/7;
        grid-column: 1/-1;
    }

    .navigator {
        width: 20%;
        height: 100%;
    }

    .navigator-button {
        height: 20px;
        width: 20px;
        border: 3px solid black;
    }

    .site {
        transition: .5s;
    }

    .title {
        position: relative;
        z-index: 0;
        line-height: 2rem;
        color: #000;
    }
    .title::before {
        content: '';
        height: 30px;
        width: 30px;
        background: var(--theme-color);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        transform: translateX(-1.2rem);
    }

</style>