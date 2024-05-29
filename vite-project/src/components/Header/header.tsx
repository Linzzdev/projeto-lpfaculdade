import logo from '/src/assets/logowcopy-removebg-preview.png'

export const Header = () =>{
    return(
    <header>
        <img src={logo}></img>
        <ul>
            <li>INÍCIO</li>
            <li>SOBRE NÓS</li>
            <li>SERVIÇOS</li>
            <li>CONHECIMENTOS</li>
            <li>CONTATO</li>
        </ul>
    </header>
    )
}