import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).use(bootstrap).mount('#app')

// setting the projects in the localStorage
const projects = [
    {
      id: 1,
      title: 'Point of Sale System ',
      description: 'Built and Deployed a point of Sale System made with JavaScript and Bootstrap',
      githubLink: 'https://github.com/Lazola2/POS-System',
      hostLink: 'https://laz-possystem.netlify.app/',
      imageLink: 'https://i.postimg.cc/6QWW0Tmz/POS.png'
    },
    {
      id: 2,
      title: 'Online Calculator',
      description: 'Built and Deployed a calculator made with JavaScript and Bootstrap',
      githubLink: 'https://github.com/Lazola2/JSCalculator.git',
      hostLink: 'https://laz-calculator.netlify.app/',
      imageLink: 'https://i.postimg.cc/cJtSTYcR/CALCULATOR.png'
    },
    {
      id: 3,
      title: 'Clothing Store',
      description: 'Built and Deployed a clothing store in HTML and CSS',
      githubLink: 'https://github.com/Lazola2/E-Commerce-Site.git',
      hostLink: 'https://lazola-ecommerce.netlify.app/',
      imageLink: 'https://i.postimg.cc/25P7BqG9/Clothing.png'
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'My portfolio built in VueJS and Bootstrap',
      githubLink: 'https://github.com/Lazola2/VuePortfolio.git',
      // not hosted yet: must host in firebase
      hostLink: '',
      imageLink: 'https://i.postimg.cc/ZRZw0BVP/Portfolio.png'
    },
]

// setting the resume in the local storage
const resume = {
    education: [
        {
            id: 1,
            name: 'Information Technology',
            modules: [
                'Fundamentals of Computing',
                'Introduction to programming'
            ],
            iconClassName: 'bi bi-mortarboard-fill icon',
        },
        {
            id: 2,
            name: 'Computer Science',
            modules: [
                'Introduction to Python and Java',
                'Data Structures and Algorithms in Java'
            ],
            iconClassName: 'bi bi-mortarboard-fill icon',
        },
        {
            id: 3,
            name: 'Web Development',
            modules: [
                'Web Development and Design Principles',
                'Project Management Methodologies',
                'Front-end, Back-end and APIs '
            ],
            iconClassName: 'bi bi-code-slash icon',
        },
        {
            id: 4,
            name: 'UI/UX Design',
            modules: [
                'UI Design in Figma',
                'Designing wireframes and sitemaps',
                'Flowcharts and Pseudocode'
            ],
            iconClassName: 'bi bi-brush-fill icon',
        },
    ],
    skills: [
        {
            id: 1,
            title: 'Soft skills (in progress)',
            rate: 78,
        },
        {
            id: 2,
            title: 'HTML',
            rate: 95,
        },
        {
            id: 3,
            title: 'CSS',
            rate: 90,
        },
        {
            id: 4,
            title: 'Bootstrap',
            rate: 87,
        },
        {
            id: 5,
            title: 'JavaScript',
            rate: 80,
        },
        {
            id: 6,
            title: 'React JS',
            rate: 55,
        },
        {
            id: 7,
            title: 'Vue JS',
            rate: 56,
        },
        {
            id: 8,
            title: 'Java',
            rate: 48,
        },
        {
            id: 9,
            title: 'Python',
            rate: 35,
        },
        
    ],
}
  
// send these projects to the local storage
localStorage.setItem('projects', JSON.stringify(projects));

// send resume information to the local storage
localStorage.setItem('resume', JSON.stringify(resume))