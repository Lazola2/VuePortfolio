<template>
    <div :id="project.id" class="project bg-success position-relative" v-for="project in projects" :key="project.id">
        <div class="content position-absolute h-100">
            <div class="bootstrap-icon">
                <i class="bi bi-github text-white"></i>
            </div>
            <div class="number">
                <h1 class="number">0{{project.id}}</h1>
            </div>
            <div class="title-holder d-flex justify-content-start ps-5 align-items-center">
                <h2 class="project-title"> {{project.title}} </h2>
            </div>
            <div class="description-holder ps-5">
                <p class="description text-white"> {{project.description}} </p>
            </div>
            <div class="view-button-holder d-flex align-items-start justify-content-start ps-5">
                <a :href="project.hostLink">
                    <button class="view-button py-1">View</button>
                </a>
            </div>
        </div>
        <img class="project-image" :src="project.imageLink" alt="">
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'Projects',
    computed: {
        ...mapGetters(['projects']),
        },
        methods: {
            ...mapActions(['fetchAllProjects']), 
        },
        created(){
            this.fetchAllProjects();
        },
}
</script>
<style scoped>  
    .project {
        height: 320px;
        width: 100%;
        z-index: 1;
    }

    .view-button-holder {
        grid-row: 5/6;
        grid-column: 1/-2;
    }

    .view-button {
        background: var(--theme-color);
        width: 150px;
    }

    .number {
        grid-row: 1/1;
        grid-column: 2/3;
    }

    .number h1 {
        font-size: 80px;
        font-weight: 800;
        color: #fff;
    }

    .project-title {
        color: #fff;
        font-size: 25px;
        font-weight: 800px;
    }

    .title-holder {
        grid-row: 3/4;
        grid-column: 1/-2;
    }

    .description-holder {
        grid-row: 4/5;
        grid-column: 1/2;
    }

    .description {
        text-align: left;
        font-size: 15px;
    }
    .content {
        width: 100%;
        background: rgba(0, 0, 0, 0.821);
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1.2fr .8fr repeat(3, .7fr);
        overflow: hidden;
    }
    .project-image {
        background-size: cover;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

</style>