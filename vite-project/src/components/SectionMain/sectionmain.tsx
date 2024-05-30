import style from './index.module.scss';
import img from '../../assets/imgcapa.png';

export const SectionMain = ({ handleLinkClick }: { handleLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void }) => {

  return (
    <section className={style.section} id="sectionMain">
      <div className={style.div1}>
        <h2>Desenvolvimento <br /> Pessoal e <br /> Profissional</h2>
        <p>Buscamos aprimorar nossos conhecimentos <br /> e prática em desenvolvimento.</p>
        <a href="#sectionPj" onClick={(e) => handleLinkClick(e, 'sectionPj')}>
          <button>Nossos Serviços</button>
        </a>
      </div>
      <div className={style.div2}>
        <img src={img} alt="Imagem de Capa" />
      </div>
    </section>
  );
};