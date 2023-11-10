import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../Container'
import { SiPython} from 'react-icons/si'
import {TbBrandJavascript,TbFileTypeHtml} from 'react-icons/tb'
import {PiFileCssFill} from 'react-icons/pi'
import {FaReact} from 'react-icons/fa'
import{SiPhpmyadmin} from 'react-icons/si'
import  Styles from './Sobre.module.css'
import Minhaimagem from './images/Mateus.jpg'
function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <section className={Styles.sobre}>
            
            <div className={Styles.bio}>
                <img src={Minhaimagem} alt="Minha imagem" className={Styles.avatar} />
                <div className={Styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou o <span> Mateus da Silva</span> <br />
                    <strong>Desenvolvedor JavaScript</strong> </p>

                    <p>Trabalho com desenvolvimento Web</p>

                    <p> Gosto de pegar minhas ideias e tornar-lás reais.</p>
                </div>
            </div>

            <div className={Styles.techs}>
                <h3>Techs</h3>
                <div className={Styles.icones}>
                <SiPython alt="Python" className={Styles.icones}/>
               <TbBrandJavascript alt="JavaScript" className={Styles.icones}/>
               < TbFileTypeHtml alt="HTML" className={Styles.icones}/>
               < PiFileCssFill alt="CSS" className={Styles.icones}/>
               <FaReact alt="REACT" className={Styles.icones}/>
               <SiPhpmyadmin alt="PHP" className={Styles.icones}/>
                </div>
            </div>

        </section>

            </Container>
            <Footer />
        </>
    )
}

export default Sobre
