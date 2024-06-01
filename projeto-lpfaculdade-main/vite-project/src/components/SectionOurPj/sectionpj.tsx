import { projects } from "../../data/projects.ts"
import style from './index.module.scss'


export const SectionPj = () => {
        return(
            <section id = "sectionPj" className={style.section} >
                <h2>Serviços Realizados</h2>
                <ul className={style.ul}>
                    {projects.map(project =>(
                        <li  className={style.li} key={project.index}>
                            <img src={project.img}></img>
                            <div className={style.div1} >
                            <h3>{project.name}</h3> 
                            <p>{project.description}</p>
                            <a href={project.link} target="blank" >Saiba mais</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )
}