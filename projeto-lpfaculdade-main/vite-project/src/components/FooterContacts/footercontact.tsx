import logoL from '/src/assets/linkedin-icon.png'
import logoG from '/src/assets/github-icon.png'
import style from './index.module.scss'

export const Footer = ({ handleLinkClick }: { handleLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void }) =>{

    return(
        <footer id="footerContacts"  className={style.footer} >
            <h2>Caso tenha se interessado por nossos serviços<br/> Por favor nos contate.</h2>
            <ul>
                <li className={style.li}> <a href="https://github.com/Linzzdev" target='blank' > GitHub </a> <img src={logoG}></img></li>
                <li className={style.li}> <a href="https://www.linkedin.com/in/guilherme-tavares-57459226b/" target='blank'  > Linkedin </a> <img src={logoL}></img></li>
            </ul>
            <p>Todo os direitos reservados - @Linzzdev
            </p>            
            <a  className={style.aVolta} href="#header" onClick={(e) => handleLinkClick(e, 'header')}>Inicio</a>
        </footer>
    )
}