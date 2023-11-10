import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../../App.css'
import variavel from "../../../public/undraw_make_it_rain_re_w9pc.svg"
import Container from '../../Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Container>
    <section className={styles.home}>
  <div className={styles.apresentacao}>
    <p>
      Olá, sou o<br/>
      <span>Mateus da Silva ☕</span> <br/>
      Dev JavaScript.
    </p>
    <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
    Saiba mais sobre mim
</Link>

  </div>
  <figure>
    <img className={styles.img_home} src={variavel} alt="Imagem de Home" />
  </figure>
</section>
</Container>
  <Footer />
  </>
  )
}

export default App
