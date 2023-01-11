<template>
    <div class="wrapper h-100 w-100 d-flex align-items-center justify-content-center">
        <div class="projects-container mt-5 d-flex flex-column align-items-center">
            <h4 class="title mt-5">Projects</h4>
            <div class="sub-title text-black mt-3 d-flex flex-column align-items-center">
               <h2> LOOK AT SOME OF MY WORK </h2>
               <DecoratorItem/>
            </div>

            <div class="projects-wrapper bg-danger">
                <div class="projects w-100 h-auto bg-info">
                   <Projects/> 
                </div>
            </div>

            <div class="navigator gap-2 mt-2">
                <a href="#1">
                        <li class="nav-button list-unstyled"></li>
                </a>
                <a href="#2">
                    <li class="nav-button list-unstyled"></li>
                </a>
                <a href="#3">
                    <li class="nav-button list-unstyled"></li>
                </a>
                <a href="#4">
                    <li class="nav-button list-unstyled"></li>
                </a>
            </div>
        </div>
    </div>

</template>
<script>
// let projectsContainer = document.querySelector('.projects');

import DecoratorItem from '@/components/Decorator.vue';
import Projects from '@/components/Projects.vue';
export default {
    name: 'ProjectsItem',
    components: {
        DecoratorItem,
        Projects,
    },
    data: function(){
        return {
            projectsContainer: document.querySelector('.projects')
        }
    },
    methods: {
        showProject(value){
            switch(value) {
                case 1:
                    break;
                case 2: 
                    break;
                
                case 3:
                  
                    break;
                
                case 4:
                
                    break;
            }   
        },
    },
}

</script>

<style scoped>
    .projects-container {
        height: 80%;
        width: 64%;
        background: rgba(255, 255, 255, 0.755);
        border: 5px;
    }

    .navigator {
        height: 40px;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navigator .nav-button {
        height: 25px;
        width: 25px;
        border: 4px solid var(--theme-color);
        border-radius: 50%;
    }

    .projects-wrapper {
        height: 320px;
        width: 550px;
        margin-top: 2.5rem;
        overflow: hidden;
        transition: 1s;
        box-shadow: 0 0 15px 0 rgb(0, 0, 0);
    }

    .projects {
        position: relative;
        transition: 1s;
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

    .sub-title {
        scale: .8;
    }

</style>