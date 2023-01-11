<template>
    <div class="resume w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="resume-container mt-5 p-3">
            <div class="title-holder d-flex align-items-end justify-content-center">
                <!-- title -->
                <h4 class="title">Resume</h4>
            </div>
            <div class="sub-title-holder d-flex align-items-center justify-content-center flex-column">
                <!-- subtitle with decoration -->
                <h2 class="text-black">Education and Skills</h2>
               <DecoratorItem/>
            </div>
            <div class="site overflow-hidden">
                <!-- education and skills sites go here -->
                <div class="sites site-1 w-100 h-100" id="site-1">
                    <!-- education information goes here -->
                    <div class="site-title-holder">
                        <h2 class="site-title text-black">Education</h2>
                    </div>
                    <EducationItems/>
                </div>
                <div class="sites skills-site h-100 h-100" id="site-2">
                    <!-- skills information goes here -->
                    <div class="bg-warning skills-title mb-3 d-flex justify-content-start">
                        <h4 class="skills-title">Skills</h4>
                    </div>
                    <SkillsItem/>
                </div>
            </div>
            <div class="navigator-container d-flex align-items-center justify-content-center">
                <div class="navigator d-flex align-items-center justify-content-center gap-2">
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
import EducationItems from '@/components/EducationItems.vue';
import SkillsItem from '@/components/SkillsItem.vue';
export default {
    components: {
    DecoratorItem,
    EducationItems,
    SkillsItem
}
}
</script>
<style scoped>
    .resume-container {
        height: 80%;
        width: 60%;
        display: grid;
        grid-template-columns: .5fr 3fr 3fr .5fr;
        grid-template-rows: 1fr 1fr .8fr repeat(2,2.5fr) .8fr;
        background: rgba(255, 255, 255, 0.755);
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

    .title, .site-title {
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

    .site-title::before {
        content: '';
        height: 50px;
        width: 50px;
        background: var(--theme-color);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        transform: translateX(-1.2rem);
    }

    /* styling the sites*/
    .site-1 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1.5fr repeat(2, 5fr);
    }

    .site-title-holder {
        grid-row: 1/2;
        grid-column: 1/-1;
        display: flex;
        align-items: flex-end;
    }

    .site-title {
        scale: .9;
        padding-left: 2rem;
        line-height: 3rem;
        margin-top: 1rem;
    }

     /*styling the skills site*/
    .skills-site {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 2fr repeat(5, 3fr);
    }

    .skills-title {
        grid-column: 1/-1;
        position: relative;
    }

    .skills-title::before {
        content: '';
        position: absolute;
    }

</style>