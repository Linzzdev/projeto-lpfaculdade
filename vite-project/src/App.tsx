import { Footer } from "./components/FooterContacts/footercontact"
import { Header } from "./components/Header/header"
import { SectionAbout } from "./components/SectionAbout/sectionaboutus"
import { SectionMain } from "./components/SectionMain/sectionmain"
import { SectionPj } from "./components/SectionOurPj/sectionpj"



function App() {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    let start = null;
    const duration = 800; // Duração da animação em milissegundos (ajuste conforme desejado)

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easing = (t) => t * t * t; // Função de easing (suavização) - ajuste conforme desejado
      window.scrollTo(0, easing(progress / duration) * (targetSection.offsetTop - window.pageYOffset) + window.pageYOffset);
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  };

  

  return (
    <>
      <Header handleLinkClick = {handleLinkClick} />
      <main> 
        <SectionMain handleLinkClick={handleLinkClick} />
        <SectionAbout handleLinkClick={handleLinkClick} />
        <SectionPj  />
      </main>
        <Footer handleLinkClick={handleLinkClick} />
    </>
  )
}

export default App
