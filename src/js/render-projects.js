const projects = [
    {
        name: 'MotoFly',
        description: '',
        image: './assets/motofly.png',
        textAlt: 'imagen de portada de MotoFly',
        titleImg: 'MotoFly',
        technologies: [
            './assets/reactjs.svg',
            './assets/bootstrap-icon.svg',
            './assets/git.svg',
            './assets/nodejs-icon.svg'
        ],
        repo: 'https://github.com/ErikaCV/proyecto-final.git'
    },
    {
        name: 'TecnoStore',
        description: '',
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
        name: 'Portafolio',
        description: '',
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
        description: '',
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
        description: '',
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
        name: 'Clon Netflix',
        description: '',
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
            <div class="card w-72 bg-base-100 mb-3 xl:w-80" data-aos="flip-right">
                <figure>
                    <img src=${image} title=${titleImg} alt=${textAlt}/>
                </figure>
                <div class="card-body p-3 rounded-b-xl bg-[#070c18] text-[#fafafa]">
                    <h2 class="card-title">${name}</h2>
                    <p class="text-gray-400">${description}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero non sapiente eaque. Voluptatum modi accusantium eius, repudiandae delectus soluta quas sit perferendis minima maiores voluptatem sint vitae accusamus, laboriosam non!</p>
                    <div class="flex flex-col items-center pt-5 md:flex-row justify-between">
                        <a href="${repo}" target="_blank" class="link-repo rounded-md bg-gray-700 shadow-md shadow-[#fff]/10"><img class="icon-[mdi--github] text-lg" role="img" aria-hidden="true" /> Repositorio</a>
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