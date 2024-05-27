const projects = [
    {
        name: 'Clon Spotify Web',
        description: 'Este proyecto es un clon de la versión web de Spotify, desarrollado con React.js y Tailwind CSS. Utiliza la API web proporcionada por Spotify para obtener datos como artistas populares, álbumes populares, canciones y más.',
        image: './assets/spotify.png',
        textAlt: 'imagen de portada del Clon Spotify Web',
        titleImg: 'Clon Spotify Web',
        technologies: [
            './assets/reactjs.svg',
            './assets/tailwind-icon.svg',
            './assets/git.svg',
            './assets/github-icon.svg',
        ],
        repo: 'https://github.com/francojnieva/Clon-Spotify.git'
    },
    {
        name: 'Royal - Relojería',
        description:'Proyecto Final realizado en el curso de React JS en Coder House. Muestra una gran variedad de relojes. Utiliza Firebase Firestore como base de datos para almacenar y recuperar información sobre los productos.',
        image: './assets/royal.png',
        textAlt: 'imagen de portada de royal',
        titleImg: 'Royal',
        technologies: [
            './assets/reactjs.svg',
            './assets/tailwind-icon.svg',
            './assets/firebase.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/Royal-ecommerce.git'
    },
    {
        name: 'MotoFly',
        description: 'E-commerce desarrollado por 5 integrantes durante el curso en Rolling Code School. Además del stack MERN, usamos Git para controlar versiones de código, Trello para gestionar tareas y SCRUM como marco de trabajo ágil.',
        image: './assets/motofly.png',
        textAlt: 'imagen de portada de MotoFly',
        titleImg: 'MotoFly',
        technologies: [
            './assets/mongo-icon.svg',
            './assets/express.svg',
            './assets/reactjs.svg',
            './assets/nodejs-icon.svg'
        ],
        repo: 'https://github.com/ErikaCV/proyecto-final.git'
    },
    {
        name: 'Movie Pulse',
        description: 'Aplicación que permite a los usuarios crear cuentas, iniciar sesión, explorar información sobre las películas y agregarlas a favoritos. Desarrollada por un equipo multidisciplinario durante la simulación laboral en No Country.',
        image: './assets/movie-pulse.png',
        textAlt: 'imagen de portada de Movie Pulse',
        titleImg: 'Movie Pulse',
        technologies: [
            './assets/reactjs.svg',
            './assets/tailwind-icon.svg',
            './assets/git.svg',
            './assets/trello-icon.svg',
        ],
        repo: 'https://github.com/No-Country/C16-39-m-java.git'
    },
    {
        name: 'Salud Integral Psi',
        description: 'Desarrollado para un equipo interdisciplinario en el Área de Salud y Salud Mental en el Sistema público y privado. Asesoran y capacitan en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial.',
        image: './assets/salud-integral.png',
        textAlt: 'imagen de portada del proyecto Salud Integral Psi',
        titleImg: 'Salud Integral Psi',
        technologies: [
            './assets/reactjs.svg',
            './assets/tailwind-icon.svg',
            './assets/git.svg',
            './assets/github-icon.svg',
        ],
        repo: 'https://github.com/francojnieva/Salud-Integral-Psi.git'
    },
    {
        name: 'Clon Netflix',
        description: 'Proyecto realizado con el propósito de recrear la página principal y de inicio de sesión de Netflix con Tailwind CSS. Además de poder visualizar el sitio en dispositivos grandes, tambíen puede verse en dispositivos móviles y tablets.',
        image: './assets/clon-netflix.png',
        textAlt: 'imagen de portada del proyecto Clon Netflix',
        titleImg: 'Clon Netflix',
        technologies: [
            './assets/html.svg',
            './assets/tailwind-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/Clon-Netflix.git'
    },
]

const projectContainer = document.querySelector('#projectContainer')

function renderProjects() {
    projects.forEach(project => {
        const { name, description, image, textAlt, titleImg, technologies, repo } = project
        const card = document.createElement('article')
        card.innerHTML = `
        <div class="w-72 mb-3 xl:w-80" data-aos="flip-right">
            <img src=${image} title=${titleImg} alt=${textAlt}/>
            <div class="p-3 text-[#fafafa]">
                <h2 class="text-xl mb-3 font-bold">${name}</h2>
                <p class="text-gray-400">${description}</p>
                <div class="flex flex-col items-center pt-5 md:flex-row justify-between">
                    <a href="${repo}" target="_blank" class="link-repo rounded-lg bg-gray-600"><img class="icon-[mdi--github] text-lg" role="img" aria-hidden="true" /> Repositorio</a>
                    <div class="flex items-center mt-4 space-x-2 md:mt-0">
                        <img src=${technologies[0]} class="w-6 transition-all hover:-translate-y-1 cursor-pointer">
                        <img src=${technologies[1]} class="w-6 transition-all hover:-translate-y-1 cursor-pointer">
                        <img src=${technologies[2]} class="w-6 transition-all hover:-translate-y-1 cursor-pointer">
                        <img src=${technologies[3]} class="w-6 transition-all hover:-translate-y-1 cursor-pointer">
                    </div>
                </div>
            </div>
        </div>
        `
        projectContainer.appendChild(card)
    })
}

renderProjects()