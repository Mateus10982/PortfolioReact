import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../Container'
import { BsGithub, BsLinkedin} from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import styles from './Contatos.module.css'


function Contatos() {
    return (
        <>
             <Header />
            <Container>
                <section className={styles.Contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:ceifador10982@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/mateus-silva-252683281' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Contatos
