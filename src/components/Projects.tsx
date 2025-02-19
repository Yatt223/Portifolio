import Title from "./Title" 

import img1 from '../assets/assets/projects/Rh.png';
import img2 from '../assets/assets/projects/SPIDER_LOGO_2.png';
import img3 from '../assets/assets/projects/pacao.png';
import img4 from '../assets/assets/projects/Logo du Mediateur de la république.png';
import img5 from '../assets/assets/projects/quiz.png';
import img6 from '../assets/assets/projects/help.jpg';
import { Github, Video } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "RH Paie",
    description: "Un logiciel de gestion de ressources humaines",
    technologies: ['Windev','HyperFileSQL'],
    demoLink:'#',
    repoLink:'#',
    image: img1,
    },
    {
        id: 2,
        title: "Spider",
        description: "Un logiciel de repartition des budges des collectivités territoriales",
        technologies: ['Windev','HyperFileSQL','SQL Server'],
        demoLink:'#',
        repoLink:'#',
        image: img2,
        },
        {
            id: 3 ,
            title: "Pacao",
            description: "Une application de gestion des pepinières locales",
            technologies: ['HTML','CSS','Laravel'],
            demoLink:'#',
            repoLink:'#',
            image: img3,
            },
            {
                id: 4,
                title: "LTD MEDIATEUR",
                description: "Un logiciel de gestion des dossiers de réclamations et interpelations",
                technologies: ['Windev','HyperFileSQL'],
                demoLink:'#',
                repoLink:'#',
                image: img4,
                },
                {
                    id: 5,
                    title: "Quiz App",
                    description: "Une application de quiz en ligne",
                    technologies: ['vite.js','Javascript','Html'],
                    demoLink:'https://yatt223.github.io/quiz-micode-clone/',
                    repoLink:'#',
                    image: img5,
                    },
                    {
                        id: 6,
                        title: "Help For Sahel",
                        description: "Un site web pour une association humanitaire",
                        technologies: ['WordPress','Css'],
                        demoLink:'https://www.helpforsahel.org/',
                        repoLink:'https://www.helpforsahel.org/',
                        image: img6,
                        },

]

const Projets = () =>{
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets"/>
            <div className="grid md:grid-cols-3  gap-4">
                { projects.map((project) =>(
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"> 
                         <img src={project.image} alt={project.title} 
                         className="w-full rounded-xl h-56 object-cover"
                         />
                         <div>
                            <h1 className="my-2 font-bold">
                            {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                         </div>
                         <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) =>(
                                <span className="badge badge-accent badge-sm  ">
                                    {tech}
                                </span>
                            ))}
                         </div>
                         <div className="flex">
                             <a className="btn btn-accent w-2/3" href={project.demoLink}>
                             Demo
                             <Video className="w-4" />
                             </a>

                             <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                             
                             <Github className="w-4" />
                             </a>

                         </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}
export default Projets