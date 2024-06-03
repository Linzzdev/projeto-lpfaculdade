import style from './index.module.scss'

export const Header = ({ handleLinkClick }: { handleLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void }) =>{
    return(
    <header  id="header" className={style.header} >
        <ul className={style.ul}>
            <li><h1>Athon.</h1></li>
            <li>
            <a href="#sectionMain" onClick={(e) => handleLinkClick(e, 'sectionMain')}>INÍCIO </a>
            </li>

            <li>
            <a href="#sectionPj" onClick={(e) => handleLinkClick(e, 'servicesPj')}>SOBRE NÓS</a>
            </li>
            <li>
            <a href="#sectionPj" onClick={(e) => handleLinkClick(e, 'servicesPj')}>CONHECIMENTOS</a>
            </li>
            <li>
            <a href="#servicesPj" onClick={(e) => handleLinkClick(e, 'sectionPj')}>SERVIÇOS</a>
            </li>
            <li>
            <a href="#footerContacts" onClick={(e) => handleLinkClick(e, 'footerContacts')}>CONTATO</a>
            </li>
        </ul>
    </header>
    )
}