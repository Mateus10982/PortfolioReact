import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>Mateus Da Silva  </span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header
