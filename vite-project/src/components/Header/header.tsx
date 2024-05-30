import style from './index.module.scss'

export const Header = () =>{
    return(
    <header className={style.header} >
        <ul className={style.ul}>
            <h1>Athon.</h1>
            <li>INÍCIO</li>
            <li>SOBRE NÓS</li>
            <li>SERVIÇOS</li>
            <li>CONHECIMENTOS</li>
            <li>CONTATO</li>
        </ul>
    </header>
    )
}