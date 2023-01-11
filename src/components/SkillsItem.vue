<template>
    <div v-for="skillsItem in resume.skills" :key="skillsItem.id" class="progress-wrapper px-3 d-flex flex-column w-100">
        <div class="progress-text justify-content-between d-flex text-capitalize">
            <p class="name">{{skillsItem.title}}</p>
            <p class="rating">{{skillsItem.rate}}%</p>
        </div>
        <div  class="progress progress-bar-progress" role="progressbar" :aria-valuenow="skillsItem.rate" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped" :style="{width: skillsItem.rate + '%'}"></div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'SkillsItem',
    computed: {
        ...mapGetters(['resume']),
        },
        methods: {
            ...mapActions(['fetchResume']), 
        },
        created(){
            this.fetchResume();
        },

}
</script>
<style scoped>

    .progress-bar-progress {
        height: 15px;
        transform: translateY(-.5rem);
    }
    .progress-bar {
        background: var(--theme-color);
    }
</style>