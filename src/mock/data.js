import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'davidryan.info', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'David Ryan personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'David Ryan',
  subtitle: 'I ❤️ computers!',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'CJP-2255.jpg',
  paragraphOne: 'I am a Computer Engineer with significant experience in Embedded Systems and Robotics. I am skilled in low level programming languages, such as C and C++, specifically in the realm of microprocessor development. Along with those main sets of skills I have practice in many higher level languages, such as Java and Javascript as well as a comprehensive understanding of Linux. I am Passionate about the world where Software and Hardware collide.',
  paragraphTwo: 'This website is a portfolio of my past and current personal projects',
  paragraphThree: 'These projects range from react web development to embedded system pid controlled devices, from path-finding game mechanics to ultrasonic guided robots. Thanks for checking it out! I hope you can find inspiration for your own projects!',
  resume: 'https://drive.google.com/file/d/1l5wNkFH3ZKtFe7Qc8XhxJ5tn6xVZGcpV/view?usp=sharing', // if no resume, the button will not show up
  cv: 'https://drive.google.com/file/d/1l5wNkFH3ZKtFe7Qc8XhxJ5tn6xVZGcpV/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'htmlchesslogo.png',
    title: 'HTMLCHESS',
    info: 'An html file that can beat you at chess (probably...)',
    info2: 'A stand alone html file that uses the stockfish.js engine and the content delivery network (CDN) to provide a competitive chess game',
    url: '/htmlchess',
    repo: 'https://github.com/dj-ryan/htmlchess', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'numvertlogo.png',
    title: 'numvert',
    info: 'A cli program to convert numbers between bases',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const moreProjectsData = {
  btn: 'More Projects',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'davidryn6@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-ryan-engineer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dj-ryan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
