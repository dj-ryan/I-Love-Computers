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
  paragraphOne:
    'I am a Computer Engineer with significant experience in Embedded Systems and Robotics. I am skilled in low level programming languages, such as C and C++, specifically in the realm of microprocessor development. Along with those main sets of skills I have practice in many higher level languages, such as Java and Javascript as well as a comprehensive understanding of Linux. I am Passionate about the world where Software and Hardware collide.',
  paragraphTwo: 'This website is a portfolio of my past and current personal projects',
  paragraphThree:
    'These projects range from react web development to embedded system pid controlled devices, from path-finding game mechanics to ultrasonic guided robots. Thanks for checking it out! I hope you can find inspiration for your own projects!',
  resume: 'https://drive.google.com/file/d/1l5wNkFH3ZKtFe7Qc8XhxJ5tn6xVZGcpV/view?usp=sharing', // if no resume, the button will not show up
  links: '/links',
  readMore: '/bio',
  contact: '/contact',
};



// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'htmlchesslogo.png',
    title: 'HTMLCHESS',
    info: 'An html file that can beat you at chess (probably...)',
    info2:
      'A stand alone html file that uses the stockfish engine and the content delivery network (CDN) to provide a competitive chess game from a single html file.',
    url: '/htmlchess',
    repo: 'https://github.com/dj-ryan/htmlchess', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'numvert_logo.png',
    title: 'numvert',
    info: 'A cli program to convert numbers between bases',
    info2: 'Written in C++, this program quickly converts numbers between Decimal, Hexadecimal, and Binary bases using low-level standard library C functions.',
    url: '',
    repo: 'https://github.com/dj-ryan/numvert', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'LDC1101_head.jpg',
    title: 'TI ldc1101 driver',
    info: 'A driver for the TI LDC1101 inductance to digital converter designed for the STM32 family of micro-controllers',
    info2: '',
    url: '',
    repo: 'https://github.com/dj-ryan/ldc1101', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'power_supply.jpg',
    title: 'Tri-source Power Supply',
    info: 'These DIN rail mounted converters are from Bel Power (Model:LDD240-WU) and provide DC to DC conversion with an output of 5-55VDC base on a input of 10A and 12-48VDC. Each power supply has several safety over current and under voltage protections that make each modal a self contained high preforming DC to DC converter.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// MORE PROJECT DATA
export const moreProjectsData = [
  {
  id: nanoid(),
  img: 'burnit_logo.png',
  title: 'burnit',
  info: 'A simple CPU stress tester written in c++',
  info2: 'The algorithm that is implemented to produce a heavy load on the CPU is the Sieve of Eratosthenes. This very simple algorithm calculates (or rather finds) all prime numbers up to a pre-determined limit.',
  url: '/burnit',
  repo: 'https://github.com/dj-ryan/burnit',
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
