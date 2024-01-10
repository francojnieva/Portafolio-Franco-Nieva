const projects = [
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
        name: 'TecnoStore',
        description: 'Llevado a cabo por un equipo de 3 integrantes durante el curso en Rolling Code School. El objetivo principal que tuvimos que realizar fue lograr la persistencia de los datos y que el usuario pueda agregar productos al carrito.',
        image: './assets/tecnostore.png',
        textAlt: 'imagen de portada de TecnoStore',
        titleImg: 'TecnoStore',
        technologies: [
            './assets/html.svg',
            './assets/bootstrap-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/RCS-TecnoStore.git'
    },
    {
        name: 'Portafolio Personal',
        description: 'Descubre mis proyectos personales y grupales, mis conocimientos y las tecnologías que uso como Desarrollador Frontend. Conecta conmigo a través de mis redes o por medio de un formulario de contacto.',
        image: './assets/portafolio.png',
        textAlt: 'imagen de portada de Portafolio',
        titleImg: 'Portafolio',
        technologies: [
            './assets/html.svg',
            './assets/tailwind-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/Portafolio-Franco-Nieva.git'
    },
    {
        name: 'MovieApp',
        description: 'Proyecto ideal para buscar tus películas favoritas y conocer más sobre ellas. Con MovieApp puedes conocer las películas más populares que hay en el mundo, las mejores clasificadas y descrubrir los próximos estrenos.',
        image: './assets/movieapp.png',
        textAlt: 'imagen de portada de MovieApp',
        titleImg: 'MovieApp',
        technologies: [
            './assets/html.svg',
            './assets/tailwind-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/movie-series-app.git'
    },
    {
        name: 'Dashboard Tienda',
        description: 'Con este proyecto puse en práctica mis habilidades de maquetación y diseño con Tailwind CSS. Sigo un diseño de autor, el mismo no cuenta con formato móvil y tablet, por lo que implemento un estilo y un layout responsivo.',
        image: './assets/dashboard.png',
        textAlt: 'imagen de portada de Dashboard Tienda de Comida',
        titleImg: 'Dashboard Tienda de Comida',
        technologies: [
            './assets/html.svg',
            './assets/tailwind-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/Dashboard-Food.git'
    },
    {
        name: 'ClimaApp',
        description: 'Con este proyecto puedes obtener información climática de las ciudades del mundo a través de la API de OpenWeatherMap. Puedes ver la temperatura actual, la sensación térmica, la temp. máxima y mínima y la humedad.',
        image: './assets/climaapp.png',
        textAlt: 'imagen de portada del proyecto ClimaApp',
        titleImg: 'ClimaApp',
        technologies: [
            './assets/html.svg',
            './assets/bootstrap-icon.svg',
            './assets/js-icon.svg',
            './assets/git.svg',
        ],
        repo: 'https://github.com/francojnieva/app-clima.git'
    },
    {
        name: 'Salud Integral Psi',
        description: 'Desarrollado para un equipo interdisciplinario en el Área de Salud y Salud Mental en el Sistema público y privado. Asesoran y capacitan en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial a instituciones, empresas, profesionales y técnicos.',
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
        const card = document.createElement('div')
        card.innerHTML = `
            <div class="card w-72 bg-base-100 mb-3 border border-gray-600 xl:w-80" data-aos="flip-right">
                <figure>
                    <img src=${image} title=${titleImg} alt=${textAlt}/>
                </figure>
                <div class="card-body p-3 rounded-b-xl bg-[#0d1529] text-[#fafafa]">
                    <h2 class="card-title">${name}</h2>
                    <p class="text-gray-400">${description}</p>
                    <div class="flex flex-col items-center pt-5 md:flex-row justify-between">
                        <a href="${repo}" target="_blank" class="link-repo rounded-lg bg-gray-600 shadow-md shadow-[#fff]/10"><img class="icon-[mdi--github] text-lg" role="img" aria-hidden="true" /> Repositorio</a>
                        <div class="flex items-center mt-4 space-x-2 md:mt-0">
                            <img src=${technologies[0]} class="w-6 transition-all hover:-translate-y-1">
                            <img src=${technologies[1]} class="w-6 transition-all hover:-translate-y-1">
                            <img src=${technologies[2]} class="w-6 transition-all hover:-translate-y-1">
                            <img src=${technologies[3]} class="w-6 transition-all hover:-translate-y-1">
                        </div>
                    </div>
                </div>
            </div>
        `
        projectContainer.appendChild(card)
    })
}

renderProjects()