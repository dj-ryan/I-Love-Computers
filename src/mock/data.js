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
  paragraphOne: 'This is my personal website to document my current and past projects. These projects range from html and css web development to embedded systems pid controlled devices, from path-finding game mechanics to ultrasonic guided robots. Thanks for checking it out! I hope you can find inspiration for your own projects!',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1l5wNkFH3ZKtFe7Qc8XhxJ5tn6xVZGcpV/view?usp=sharing', // if no resume, the button will not show up
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
];

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
