
import HTML from "~/components/Icons/HTML.vue";
import CSS from "~/components/Icons/CSS.vue";
import Js from "~/components/Icons/Js.vue";
import ViteJs from "~/components/Icons/ViteJs.vue";
import Sass from "~/components/Icons/Sass.vue";
import VueJs from "~/components/Icons/VueJs.vue";
import NuxtJs from "~/components/Icons/NuxtJs.vue";
import Firebase from "~/components/Icons/Firebase.vue";

import traveloImg from './images/travelo-3.png'
import fileUploaderImg from './images/file-uploader.png'
import markdownPreviewImg from './images/markdown-preview.png'
import maptyImg from './images/mapty.png'
import forkifyImg from './images/forkify.png'
export const projects = [
  {
    type: "Self Project",
    name: "Travelo",
    description: "For this project, I tried Nuxt 2 in practice, the technologies I used were:",
    image: traveloImg,
    technologies: [
      { icon: HTML, name: "HTML"},
      { icon: CSS, name: "CSS"},
      { icon: Sass, name: "Sass"},
      { icon: Js, name: "JavaScript"},
      { icon: VueJs, name: "VueJs"},
      { icon: NuxtJs, name: "NuxtJs"},
      { icon: Firebase, name: "Firebase"},
    ],
    demo: "https://travelo-refaat1297.vercel.app",
    repo: "https://github.com/refaat1297/travelo"
  },

  {
    type: "Self Project",
    name: "File Uploader",
    description: "For this project, I made a file uploader, the technologies I used were:",
    image: fileUploaderImg,
    technologies: [
      { icon: HTML, name: "HTML"},
      { icon: CSS, name: "CSS"},
      { icon: Sass, name: "Sass"},
      { icon: Js, name: "JavaScript"},
      { icon: VueJs, name: "VueJs"},
      { icon: Firebase, name: "Firebase"},
    ],
    demo: "https://various-ideas.web.app",
    repo: "https://github.com/refaat1297/various-ideas"
  },

  {
    type: "Self Project",
    name: "Markdown Preview",
    description: "For this project, I made a Markdown Editor to use RegEx In practice, the technologies I used were:",
    image: markdownPreviewImg,
    technologies: [
      { icon: HTML, name: "HTML"},
      { icon: CSS, name: "CSS"},
      { icon: Sass, name: "Sass"},
      { icon: Js, name: "JavaScript"},
      { icon: VueJs, name: "VueJs"},
      { icon: Firebase, name: "Firebase"},
    ],
    demo: "https://various-ideas.web.app/markdown-preview",
    repo: "https://github.com/refaat1297/various-ideas"
  },

  {
    type: "Learning Project",
    name: "Mapty",
    description: "A learning project I made with a JS course.",
    image: maptyImg,
    technologies: [
      { icon: HTML, name: "HTML"},
      { icon: CSS, name: "CSS"},
      { icon: Sass, name: "Sass"},
      { icon: Js, name: "JavaScript"},
    ],
    demo: "https://refaat1297.github.io/mapty-js-course",
    repo: "https://github.com/refaat1297/mapty-js-course"
  },

  {
    type: "Learning Project",
    name: "Forkify",
    description: "A learning project I made with a JS course.",
    image: forkifyImg,
    technologies: [
      { icon: HTML, name: "HTML"},
      { icon: CSS, name: "CSS"},
      { icon: Sass, name: "Sass"},
      { icon: Js, name: "JavaScript"},
      { icon: ViteJs, name: "ViteJs"},
    ],
    demo: "https://forkify-js-course.vercel.app",
    repo: "https://github.com/refaat1297/forkify-js-course"
  },
]
