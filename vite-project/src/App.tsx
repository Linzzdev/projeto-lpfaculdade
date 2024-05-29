import { Footer } from "./components/FooterContacts/footercontact"
import { Header } from "./components/Header/header"
import { SectionAbout } from "./components/SectionAbout/sectionaboutus"
import { SectionMain } from "./components/SectionMain/sectionmain"
import { SectionServices } from "./components/SectionServices/sectionservices"


function App() {

  return (
    <>
    <Header/>
    <SectionMain/>
    <SectionAbout/>
    <SectionServices/>
    <Footer/>
    </>
  )
}

export default App
