import { SectionServices } from '../SectionServices/sectionservices'
import style from './index.module.scss'

export const SectionAbout = ({ handleLinkClick }: { handleLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void })  => {
    return(
        <section  id="sectionAbout" className={style.section} >
            <div className={style.container} >
            <div className={style.div1} >
            <h2>Quem somos ?</h2>
            <p>Somos um time de jovens apaixonados por tecnologia e inovação<br/>
             Estudantes de Análise e Desenvolvimento de Sistemas<br/> 
             estamos sempre em busca de novos desafios e aprendizados<br/>
             Acreditamos no poder da colaboração e da criatividade<br/> para criar soluções que impactem positivamente o mundo<br/>
             sendo a empresa de desenvolvimento web pioneira no brasil.
             <h3>FAQ:</h3>
                <h4>Quanto tempo leva para criar um site?</h4>
                <p>O tempo varia conforme a complexidade do projeto um site simples pode <br/>
                levar algumas semanas enquanto um mais complexo pode levar meses.</p>
                <h5>Vocês fazem otimização para mecanismos de busca (SEO)?</h5>
                <p>Implementamos técnicas básicas de SEO para ajudar seu site a ter um bom <br/>
                posicionamento no Google e outros buscadores.</p>
                <h6>Vocês são estagiários, têm experiência?</h6>
                <p>Somos supervisionados por profissionais experientes e estamos sempre <br/>
                aprendendo novas tecnologias para oferecer o melhor serviço para você.</p>
             </p>
             <br/>
             <a href="#footerContacts" onClick={(e) => handleLinkClick(e, 'footerContacts')}>
            <button>Contatos</button>
             </a>
             </div>
             <SectionServices/>
             </div>
        </section>
    )
}
