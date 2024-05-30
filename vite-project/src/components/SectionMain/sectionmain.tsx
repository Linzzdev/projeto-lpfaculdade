import style from './index.module.scss'
import img from '../../assets/imgcapa.png'

export const SectionMain = () => {
    return(
        <section className={style.section}>
            <div className={style.div1} >
            <h2>Desenvolvimento <br/> Pessoal e <br/> Profissional </h2>
            <p>Buscamos aprimorar nossos conhecimentos <br/> e pratica em desenvolvimento.</p>
            <button>Entre em contato</button>
            </div>
            <div className={style.div2} >
            <img src={img}></img>
            </div>
        </section>
    )
}