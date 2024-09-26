import project1 from "../assets/projects/cinemaPrivew.jpg";
import project2 from "../assets/projects/paypal.png";
import project3 from "../assets/projects/pizza.jpg";
import project4 from "../assets/projects/mogo.jpg";
import project5 from "../assets/projects/Weather.jpg";
import project6 from "../assets/projects/portfolio.jpg";

export const USER_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Vue.js, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const TECHNOLOGIES_LIST = [
  'html',
  'css',
  'tailwind',
  'js',
  'react',
  'vue',
  'typescript',
  'node',
  'express',
  'mongoDB'
]

export const SOCIAL_LIST = [
  'html',
  'css',
  'scss',
  'tailwind',
  'js',
  'react',
  'vue',
  'vuetify',
  'typescript',
  'redux-toolkit',
  'i18next',
  'styledComponent',
  'materialUI',
  'gsap',
  'node',
  'express',
  'mongoDB',
  'react-scroll',
  'framer-motion',
  'react-icons',
  'google',
  'chatGpt',
  'gitlab',
  'github',
  'djinni',
  'linkedin',
  'telegram',
  'messenger',
  'instagram',
  'firebase'
]

export const NAVBAR_LINKS = [
  'about',
  'technologies',
  'experience',
  'projects',
  'contacts'
]

export const SOCIAL_LINKS = [
  {
    name: "djinni",
    link: "https://djinni.co/q/9ed0175aba/"
  },
  {
    name: "github",
    link: "https://github.com/VadimBorovuk"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/vadimborovyk/"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/borovado/"
  },
  {
    name: "telegram",
    link: "https://t.me/VadimBoro"
  }
]

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Middle Frontend developer (React, Vue)",
    company: "Softsvit",
    description: `Creating new and supporting projects of analytic SPA - Work with REST API. - Implementation of new functionality. - Fixing any level of issues/bugs. - Solving problems of project optimization. - Code reviewing. - Layout of landing pages. Adaptive layout. In my work, I use such tools as: a) JavaScript | Typescript b) ( Vue.js | Vue3 - Composion Api) & Vuex с) React & Redux-toolkit d) REST API ( axios | fetch | AJAX) for works use platforms as Swagger & Postman e) UI - Element.Elem.IO | Vuetify && CSS | MaterialUI | Tailwind (Flexbox & Grid) | HTML f) work with a version control system like git (gitlab); PM, QA and Team lead, discussing new features and possibility to implement it, finding the best solutions for different issues. The problem statement is described in the Jira program, a number of which are carried out using the Agile methodology.`,
    technologies: ["Javascript", "React", "Redux-toolkit", "Mobx", "Vue", "Vuex", "Pinia", "Tailwind", "Element-plus", "MaterialUI"],
  },
  {
    year: "2020 - 2021",
    role: "Junior Frontend developer (React, Vue)",
    company: "SmartMade",
    description: `Layout of single-page applications, addition and redesign of components
      Routing, filtering, sorting, search, data processing, form submission, optimization.
      For use the store, I used the Redux & Vuex libraries.
      For use the database, I am using mySql.
      Connecting payment platforms to the site`,
    technologies: ["React", 'Redux', 'React-native', "Vue", "Vuex", "MaterialUI", "Vuetify", "Webpack", "SCSS", "SASS"],
  },
  {
    year: "2019 - 2020",
    role: "Frontend developer/HTML-CODER",
    company: "SmileExpo",
    description: `Layout of full-fledged websites and landing pages for exhibitions indifferent countries.
    Creating new, as well as changing existing projects. Addition of functionality, data processing, redesign. Bug fixes.`,
    technologies: ["Html", "Css", "Js(JQuery)", "Webpack", "Gulp", "Bootstrap", "Photoshop", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project6,
    description: "This is a web portfolio that represents my professional skills and experience. Structured into several sections:\n" +
        "\n" +
        "About me: Description of personal information, professional path and my goals.\n" +
        "Technologies: List of programming languages, frameworks and tools that I own.\n" +
        "Experience: Chronology of my work projects and achievements.\n" +
        "Projects: Gallery of my completed projects with detailed description and links.\n" +
        "Contacts: Contact methods for professional offers.\n" +
        "This portfolio is created to demonstrate my technical capabilities and to find new opportunities in the IT field.",
    technologies: ["react", "tailwind", "react-scroll", "framer-motion", "react-icons"],
    link: "https://portofolio-18e80.web.app/",
    git: "https://github.com/VadimBorovuk/PORTFOLIO"
  },
  {
    title: "Movie app",
    image: project1,
    description: "Full-featured app with movie list and user authentication and localization. With features like searching for a movie by title or getting a list of movies based on a specific filter criteria (genre, year, popularity), you can also share your movie filter with someone. There are also pages like popular, favorite and general movies. On the page of the selected film, you can view complete information about the film (title, year, cast, trailer). Nice viewing.",
    technologies: ["react", "redux-toolkit", "typescript", "i18next", "styledComponent", "materialUI"],
    link: "https://react-movie-app-b84c4.web.app/",
    git: "https://github.com/VadimBorovuk/MovieApp_React"
  },
  {
    title: "Pizza app",
    image: project3,
    description:
        "Is a web application for ordering pizza. Users can browse the menu with different types of pizza, add them to the cart, and choose the size and number of portions.",
    technologies: ["react", "redux-toolkit", "typescript", "html", "css", "scss"],
    link: "https://react-pizza-a8c98.web.app/",
    git: "https://github.com/VadimBorovuk/MovieApp_React"
  },
  {
    title: "Weather app",
    image: project5,
    description: "The Weather Forecast application provides up-to-date information about weather conditions in your city. You will be able to get a detailed forecast for the current day. The app shows temperature, chance of precipitation, wind speed and other weather parameters, helping you plan your day.\n",
    technologies: ["vue", "typescript", "scss"],
    link: "https://darling-lokum-826154.netlify.app/",
    git: "https://github.com/VadimBorovuk/Weather-app"
  },
  {
    title: "Vavilon Smartphone Fleec",
    image: project2,
    description: "Payment transaction template for mobile version. Gsap animations are used",
    technologies: ["vue", "vuetify", "gsap"],
    link: "https://vavilon-smartphone-fleec-e05ad.web.app/",
    git: "https://github.com/VadimBorovuk/Wheel-fortune-app"
  },
  {
    title: "Landing page",
    image: project4,
    description: "This is a modern landing page for your business, which attracts attention thanks to its stylish design and user-friendly interface. The site is optimized for all devices - from smartphones to desktops, providing a flawless user experience. Fast loading, intuitive navigation and attractive visual elements will help you effectively present your products or services.",
    technologies: ["html", "css", "js"],
    link: "https://vadimborovuk.github.io/MoGo_Site/",
    git: "https://github.com/VadimBorovuk/MoGo_Site"
  },
];
