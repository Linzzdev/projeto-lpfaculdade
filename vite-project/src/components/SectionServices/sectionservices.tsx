import { technologies } from "../../data/technologies.js"
import style from './index.module.scss'

export const SectionServices = () => {
    return(
        <section id="servicesPj"  className={style.section} >
             <div className={style.div1} >
             <h2>Transforme sua empresa com <br/> a nossa expertise em digitalização!</h2>
             <p> Cuidamos da sua presença online para você focar no que realmente importa:<br/> o seu negócio
             Não fique para trás! A digitalização é essencial <br/> para o sucesso da sua empresa.
             Oferecemos soluções <br/> personalizadas para fortalecer sua marca online <br/>
             Entre em contato e descubra como podemos ajudar.</p>
             </div>
                <div> 
                    <ul className={style.ul}>
                    <h2>Conheça nossas tecnologias</h2>
                        {technologies.map(tech => (
                            <li className={style.li}  key={tech.index} >
                                <h3>{tech.name} <img src={tech.img}></img> </h3>
                                <p>{tech.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
          </section>
    )
}
