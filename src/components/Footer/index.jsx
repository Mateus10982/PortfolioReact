import styles from './Footer.module.css'
import { PiDetective} from 'react-icons/pi'

function Footer() {
    return (
        <footer className={styles.footer}>
            Feito por Mateus da Silva © 2023 <PiDetective className={styles.icone}/>
        </footer>
    )
}

export default Footer
