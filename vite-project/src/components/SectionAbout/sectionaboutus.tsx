import style from './index.module.scss'

export const SectionAbout = () =>{
    return(
        <section className={style.section} >
            <div className={style.div1} >
            <h2>Quem somos ?</h2>
            <p>Somos um time de jovens apaixonados por tecnologia e inovação<br/>
             Estudantes de Análise e Desenvolvimento de Sistemas<br/> 
             estamos sempre em busca de novos desafios e aprendizados<br/>
             Acreditamos no poder da colaboração e da criatividade<br/> para criar soluções que impactem positivamente o mundo<br/>
             sendo a empresa de desenvolvimento web pioneira no brasil.
             </p>
             <br/>
             <button>Nossos Serviços</button>              {/* Fazer esse botao redirecionar para a sectionservices */}
             </div>
             <div className={style.div2} >
                <h2>FAQ:</h2>
                <h3>Quanto tempo leva para criar um site?</h3>
                <p>O tempo varia conforme a complexidade do projeto um site simples pode <br/>
                levar algumas semanas enquanto um mais complexo pode levar meses.</p>
                <h4>Vocês fazem otimização para mecanismos de busca (SEO)?</h4>
                <p>Implementamos técnicas básicas de SEO para ajudar seu site a ter um bom <br/>
                posicionamento no Google e outros buscadores.</p>
                <h5>Vocês são estagiários, têm experiência?</h5>
                <p>Somos supervisionados por profissionais experientes e estamos sempre <br/>
                aprendendo novas tecnologias para oferecer o melhor serviço para você.</p>
             </div>
        </section>
    )
}