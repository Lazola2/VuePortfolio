<template>
    <div class="testimonials w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="testimonials-container mt-5 pt-2">
            <div class="title-holder d-flex align-items-center justify-content-center">
                <h4 class="testimonial-title pt-2 text-black">
                    Testimonials
                </h4>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column">
                <h3 class="testimonials-subtitle text-black">
                    What my colleagues say
                </h3>
                <Decorator/>
            </div>
            <div class="d-flex justify-content-center">
                <div class="testimonial-cards-container overflow-hidden">
                    <div v-for="testimonial in testimonials" :key="testimonial" 
                        :id="testimonial.id" class="testimonial-card w-100 h-100 py-4 px-3"> 
                        <div class="client-title d-flex align-items-center px-4">
                            <h5 class="d-inline">{{testimonial.title}}</h5>
                        </div>
                        <div class="testimonial-paragraph-container d-flex align-items-center">
                            <p class="testimonial-paragraph text-start px-4">
                                {{testimonial.text}}
                            </p>
                        </div>
                        <div class="px-4 d-flex align-items-center">
                            <a :href="testimonial.imageLink" target="_blank">
                                <img class="image rounded-5" :src="testimonial.imageLink">
                            </a>
                            <div class="h-100 w-50 d-flex flex-column">
                                <p class="text-start ps-3 pt-2">
                                    <span class="bold">{{ testimonial.name }} </span> 
                                    <br>{{ testimonial.position }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>            
            <div class="navigator d-flex align-items-center justify-content-center gap-3">
                <a href="#1">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
                <a href="#2">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
                <a href="#3">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
                <a href="#4">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
                <a href="#5">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
                <a href="#6">
                    <li class="navigator-buttons list-unstyled"></li>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Decorator from '@/components/Decorator.vue';

export default {
    components: {
        Decorator,
    },
    computed: {
        ...mapGetters(['testimonials']),
    },
    methods: {
        ...mapActions(['fetchTestimonials']), 
    },
    created(){
        this.fetchTestimonials();
    },
   
}
</script>

<style scoped>
    .testimonials-container {
        height: 75%;
        width: 64%;
        background: rgba(255, 255, 255, 0.755);
        display: grid;
        grid-template: 1fr;
        grid-template-rows: 1fr 1.5fr 5fr 1fr;
        box-sizing: border-box;
    }

    .testimonial-title {
        position: relative;
        z-index: 1;
    }

    .testimonial-title::before {
        content: '';
        height: 40px;
        width: 40px;
        background: var(--theme-color);
        border-radius: 50%;
        position: absolute;
        transform: translate(150%, -10%);
        z-index: -1;
    }

    .testimonial-cards-container {
        width: 60%;
        height: 300px;
        border: 1px solid black;
        box-sizing: border-box;
        overflow: hidden;
    }

    .navigator-buttons {
        width: 20px;
        height: 20px; 
        border-radius: 50%;
        border: 2px solid black;
    }

    .testimonial-card{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1.4fr 4.5fr 3fr;
    }

    .client-title {
        padding-top: .8rem;
        position: relative;
        z-index: 1;
    }

    .client-title::before {
        content: '';
        width: 30px;
        height: 30px;
        background: var(--theme-color);
        border-radius: 50%;
        position: absolute;
        z-index: -1;
        translate: -.7rem -.3rem;
    }

    img {
        height: 70px;
        width: 70px;
        object-fit:cover;
    }

    .bold {
        font-weight: bold;
        font-size: 20px;
    }

    .theme-color {
        color: var(--theme-color);
    }
</style>