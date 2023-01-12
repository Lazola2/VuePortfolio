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
    {
        id: 5,
        title: 'LC Dashboard',
        description: 'A mock dashboard for Life Choices (not the one on the picture )',
        githubLink: 'https://github.com/Lazola2/LCDashboard',
        hostLink: 'https://lcdashboard.netlify.app/',
        imageLink: 'https://i.postimg.cc/m2VZz2cs/lcdashboard.png'
    },
    {

    }
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
  
// setting the testimonials
const testimonials = [
    {
        id: 1,
        name: 'Asandile Langeni',
        title: 'Colleague',
        text: `Lazola is a down to earth person who is always keen to do extra for other people.
               He is a wonderful developer, always finds new ways to improve himself and is resourceful
               to others as well.`,
        position: 'Intern Software Developer',
        imageLink: 'https://i.postimg.cc/fbbYTnNr/Asandile.jpg',
    },
    {
        id: 2,
        name: 'Matthew Thomas',
        title: 'Colleague',
        text: `
            Lazola in my personal opinion is a hard worker. Always willing to help his 
            peers / colleagues with their work.
            He is able to work fluidly and in an environment with different projects.`,
        position: 'Intern Software Developer',
        imageLink: 'https://i.postimg.cc/0QwnPRGq/Matthew.jpg',
    },
    {   
        id: 3,
        name: 'Sakhe Mzolisa',
        title: 'Colleague',
        text: `
            Lazola is always willing to assist and is exceptionally gifted in coding.
            A rare gem in for any team with exceptional leadership skills.`,
        position: 'Intern Software Developer',
        imageLink: 'https://i.postimg.cc/Kz8bHftL/Sakhe.jpg'
    },
    {
        id: 4,
        name: 'Lindokuhle Mgoqi',
        title: 'Colleague',
        text: `
            Lazola is a very determined individual who is eager to learn more and always lends a 
            helping hand. He has such a humble personality an a big heart.`,
        position: 'Intern Software Developer',
        imageLink: 'https://i.postimg.cc/kgn3YwQc/Lindokuhle.jpg'
    },
    {
        id: 5,
        name: 'Seth Kallis',
        title: 'Colleague',
        text: `Lazola has what appears to be a natural aptitude for coding/programming.`,
        position: 'Intern Software Developer',
        imageLink: 'https://i.postimg.cc/DwRqG00W/IMG-20221105-090125.jpg'
    },
    {
        id: 6,
        name: 'Candice Amon',
        title: 'Facilitator',
        text: `
            He is a good observer. He understand his strengths very well and knows when to put it to good use.
            He is not afraid to ask for help when needed and also knows his boundaries.`,
        position: 'Academy Facilitator'
    },
]

// send these projects to the local storage
localStorage.setItem('projects', JSON.stringify(projects));

// send resume data to the local storage
localStorage.setItem('resume', JSON.stringify(resume));

// send testimonial data to the local storage
localStorage.setItem('testimonials', JSON.stringify(testimonials));