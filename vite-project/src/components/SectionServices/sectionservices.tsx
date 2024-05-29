import { tech } from "../../data/techdata.js"

export const SectionServices = () => {
    return(
        <section>
            <div>
            <h2>Transforme sua empresa com a nossa expertise em digitalização!</h2>
        <p> Cuidamos da sua presença online para você focar no que realmente importa: o seu negócio <br/>
         Não fique para trás! A digitalização é essencial para o sucesso da sua empresa. <br/>
          Oferecemos soluções personalizadas para fortalecer sua marca online <br/>
          Entre em contato e descubra como podemos ajudar.</p>
            </div>
            <div>
                <h2>
                Conheça as nossas tecnologias.
                </h2>
                <div>
                    <img src={tech.img}></img>
                    <h2>{tech.name}</h2>
                    <p>{tech.desc}</p>
                </div>
            </div>
          </section>
    )
}