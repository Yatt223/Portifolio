import Title from "./Title"

import imgCSS from "../assets/assets/techno/css.png";
import imgJS from "../assets/assets/techno/js.png";
import imgREACT from "../assets/assets/techno/react.png";
import imgHTML from "../assets/assets/techno/html.png";
import imgNEXT from "../assets/assets/techno/windev.jpg";
import imgNODE from "../assets/assets/techno/javva.png";
import imgTYPE from "../assets/assets/techno/wordPress.png";
import imgTAILLWIND from "../assets/assets/techno/tailwind.png";
import imgPRIMA from "../assets/assets/techno/mysql.png";
import imgPhp from "../assets/assets/techno/php.png";
import imgPostgres from "../assets/assets/techno/postgres.png";
import imgMongodb from "../assets/assets/techno/mongodb.png";
import imgHaskell from "../assets/assets/techno/haskell.png";
import imgPython from "../assets/assets/techno/python.png";

import oliveServices from "../assets/assets/companies/logo-olive-services.png";
import dhodou from "../assets/assets/companies/dhodou.jpg";
import anam from "../assets/assets/companies/anam.jpg";


const experiences = [
    {
        id:1,
        role: "Developpeur Windev",
        company: "OliveServices",
        period: "Dec 2021 - présent",
        description: [
            "Analyser les besoins métiers.",
            "Conception et développement.",
            "Réalisation des tests unitaires.",
            "Optimisation des performnces des applications.",
            "Accompagnement des utilisateurs des utilisateurs sur des outils développés par la société",
        ],
        image: oliveServices,
    },

    {
        id:2,
        role: "Developper logiciel et Responsable technique",
        company: "Dhodou",
        period: "Nov 2020 - Août 2021",
        description: [
            "Développement d'application web et API à partir des spécifications.",
            "Réalisation des tests unitaires des applications développées.",
            "Installation et configuration des applications.",
            "Assistance technique et formation des utilisateurs sur des outils développés par la société.",
        ],
        image: dhodou,
    },
    {
        id:3,
        role: "Stagiaire Developpeur",
        company: "Agence Nationale d'Assistace Médicale (ANAM)",
        period: "Août 2019 - juil 2020",
        description: [
            "Conception et réalisation d'un logiciel d'archivage electronique des documents au sein de l'ANAM.",
            "Intervention sur les panes technique au sein de l'ANAM.",
        ],
        image: anam,
    },
]


const skills = [
    {id:5, name:"Java",image: imgNODE},
    {id:3, name:"Javascript",image: imgJS},
    {id:10, name:"PHP",image: imgPhp},
    {id:14, name:"Python",image: imgPython},
    {id:13, name:"Haskell",image: imgHaskell},
    {id:8, name:"Windev",image: imgNEXT},
    {id:1, name:"HTML",image: imgHTML},
    {id:2, name:"CSS",image: imgCSS},
    {id:6, name:"Taillwind CSS",image: imgTAILLWIND},
    {id:4, name:"React",image: imgREACT},
    {id:7, name:"WordPress",image: imgTYPE},
    {id:11, name:"Postgres",image: imgPostgres},
    {id:9, name:"Mysql",image: imgPRIMA},
    {id:12, name:"MongoDB",image: imgMongodb},
];

const Experiences = () => {
    return(
        <div>
            <Title title="Experiences"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center" id="Experiences">
                <div className="flex flex-wrap grap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    { skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                            <img src={skill.image} alt={skill.name} 
                            className="object-cover rounded-full h-full w-full"
                            />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))
                    }

                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                            <div className="flex items-center">
                                <img src={experience.image} 
                                alt={experience.company}
                                className="object-cover h-10 w-10" 
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role}, {experience.company}
                                    </h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                { experience.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences