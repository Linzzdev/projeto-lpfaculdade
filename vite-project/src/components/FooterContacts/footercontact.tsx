import logoW from '/src/assets/whatsapp-icon.png'
import logoL from '/src/assets/linkedin-icon.png'
import logoG from '/src/assets/github-icon.png'

export const Footer = () =>{
    return(
        <footer>
            <h2>Caso tenha se interessado por nossos serviços<br/> por favor nos contate.</h2>
            <img src={logoW}></img>
            <img src={logoL}></img>
            <img src={logoG}></img>
            <br/>
            <strong>Todo os direitos reservados - <br/>
            @Linzzdev
            </strong>
        </footer>
    )
}