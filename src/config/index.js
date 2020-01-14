module.exports = {
  siteTitle: 'Dushyant Yadav | Web Developer',
  siteDescription:
    'Dushyant Yadav is a web developer (primarily back end) and CS sophomore at BITS Pilani',
  siteKeywords:
    'Dushyant Yadav, Dushyant, Yadav, Back-end, backend, back end, front-end, frontend, front end, developer, BITS Pilani, DVM, ACM',
  siteUrl: 'https://dush-t.github.io',
  siteLanguage: 'en_IN',
  googleAnalyticsID: 'UA-156154580-1',
  googleVerification: 'QDAtLVyPQ9BTbRSnkv5A957suJM4-g4PUEksKfARmQE',
  name: 'Dushyant Yadav',
  location: 'Pilani, India',
  email: 'dushyant9309@gmail.com',
  github: 'https://github.com/dush-t',
  twitterHandle: '@mr_dush__t',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dush-t',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dushyant9309',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dush__t',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mr_dush__t',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
