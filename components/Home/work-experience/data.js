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
    isOpened: false,
    title: 'Front End Developer @ Digital Experts',
    date: '2019 - 2020',
    company: {
      website: {
        name: 'digitalexperts.ae',
        url: 'https://digitalexperts.ae'
      },
      location: 'Cairo, Egypt',
      logo: digitalExpertsImg
    },

    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem libero maxime quis. Autem cumque, illo in inventore, magnam mollitia necessitatibus nostrum odio perferendis perspiciatis, porro quaerat totam unde vel.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem libero maxime quis.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem libero maxime quis. Autem cumque, illo in inventore.',
    ],

    technologies: [
      { icon:shallowRef(HTML), name: "HTML"},
      { icon: shallowRef(PugJs), name: "PugJs"},
      { icon: shallowRef(CSS), name: "CSS"},
      { icon: shallowRef(Sass), name: "Sass"},
      { icon: shallowRef(Js), name: "JavaScript"},
      { icon: shallowRef(JQ), name: "jQuery"},
    ],

  },
  {
    isOpened: false,
    title: 'Front End Developer @ ArabyAds',
    date: '2020 - Present',
    company: {
      website: {
        name: 'arabyads.com',
        url: 'https://arabyads.com'
      },
      location: 'Cairo, Egypt',
      logo: arabyAdsImg
    },

    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem libero maxime quis.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem libero maxime quis. Autem cumque, illo in inventore.',
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
  }
]
