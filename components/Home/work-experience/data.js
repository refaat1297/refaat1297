import digitalExpertsImg from './images/digital-experts.png'
import arabyAdsImg from './images/araby-ads.png'
import HTML from "~/components/Icons/HTML.vue";
import PugJs from "~/components/Icons/PugJs.vue";
import CSS from "~/components/Icons/CSS.vue";
import Js from "~/components/Icons/Js.vue";
import JQ from "~/components/Icons/JQ.vue";
import Sass from "~/components/Icons/Sass.vue";
import VueJs from "~/components/Icons/VueJs.vue";
import NuxtJs from "~/components/Icons/NuxtJs.vue";
import Firebase from "~/components/Icons/Firebase.vue";


export const experiences = [
  {
    isOpened: true,
    title: 'Front End Developer @ ArabyAds(Boostiny)',
    date: 'Apr 2021 - Present',
    company: {
      website: {
        name: 'arabyads.com',
        url: 'https://arabyads.com'
      },
      location: 'Cairo, Egypt',
      logo: arabyAdsImg
    },

    description: [
      'Work in a multidisciplinary team with other professional back-end developers, QC, and web designers.',
      'Maintain, improve, and implement new features to the internal team dashboard using Vuejs, Vuex, and Firebase.',
      'Make suggestions for better solutions to improve the codebase.',
      'Code review PRs to other team members.',
      'Attend and organize learning sessions.',
      'Participate in the sprint grooming, and fill the business gaps.',
      'Keep abreast of the latest and emerging technologies.',
      'Attend training and education.',
      'Work on production support tasks.',
      'Work on achieving my learning goals and KPIs.',
    ],

    technologies: [
      { icon: shallowRef(HTML), name: "HTML"},
      { icon: shallowRef(CSS), name: "CSS"},
      { icon: shallowRef(Sass), name: "Sass"},
      { icon: shallowRef(Js), name: "JavaScript"},
      { icon: shallowRef(VueJs), name: "VueJs"},
      { icon: shallowRef(NuxtJs), name: "NuxtJs"},
      { icon: shallowRef(Firebase), name: "Firebase"},
    ],
  },

  {
    isOpened: false,
    title: 'Front End Developer @ Digital Experts',
    date: 'Oct 2019 - Nov 2020',
    company: {
      website: {
        name: 'digitalexperts.ae',
        url: 'https://digitalexperts.ae'
      },
      location: 'Cairo, Egypt',
      logo: digitalExpertsImg
    },

    description: [
      'Developed web applications for clients.',
      'Integrated APIs implemented by the backend team into web applications.',
      'Fixed bugs found by the QC to improve the quality of web applications.',
    ],

    technologies: [
      { icon: shallowRef(HTML), name: "HTML"},
      { icon: shallowRef(PugJs), name: "PugJs"},
      { icon: shallowRef(CSS), name: "CSS"},
      { icon: shallowRef(Sass), name: "Sass"},
      { icon: shallowRef(Js), name: "JavaScript"},
      { icon: shallowRef(JQ), name: "jQuery"},
    ],

  },
]
