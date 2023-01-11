<template>
    <div v-for="item in resume.education" :key="item" class="item item-1 p-0 m-0">
        <h4 class="item-title d-flex gap-4">
            <i :class="item.iconClassName"></i>
            {{ item.name }}
        </h4>
        <div class="item-paragraph ps-5 mt-1">
            <li v-for="title in item.modules" :key="title">
                {{ title }}
            </li>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'EducationItems',
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
.item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.item-title {
    scale: .8;
    position:relative;
}
.icon {
    scale: 1.7;
}

.brush, .code-icon {
    font-size: 35px;
}
.item-title::before {
    content: '';
    width: 2.5rem;
    height: 2.5rem;
    background: var(--theme-color);
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    left: -1rem;
    top: -.5rem;
}

.item-paragraph {
    text-align: left;
    font-size: 14px;
    width: 90%;
}

</style>