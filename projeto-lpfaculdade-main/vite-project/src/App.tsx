import { Footer } from "./components/FooterContacts/footercontact"
import { Header } from "./components/Header/header"
import { SectionAbout } from "./components/SectionAbout/sectionaboutus"
import { SectionMain } from "./components/SectionMain/sectionmain"
import { SectionPj } from "./components/SectionOurPj/sectionpj"



function App() {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    let start: number | null = null; 
    const duration = 800; 

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easing = (t: number) => t * t * t; 
      window.scrollTo(0, easing(progress / duration) * (targetSection!.offsetTop - window.pageYOffset) + window.pageYOffset);
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  };
}

  

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
