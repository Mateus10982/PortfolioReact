import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Card({ name, description, html_url }) {
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
    const buscarLinguagens= async () => {
        const response1 = await fetch(`https://api.github.com/repos/Mateus10982/${name}/languages`)
        const data = await response1.json()
        setRepositories(data)
    }
    buscarLinguagens()
}, [])
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
  {repositories["JavaScript"] && repositories["JavaScript"] > 0 && <FaJs />}
  {repositories["HTML"] && repositories["HTML"] > 0 && <FaHtml5 />}
  {repositories["CSS"] && repositories["CSS"] > 0 && <FaCss3Alt />}
  {repositories["REACT"] && repositories["REACT"] > 0 && <FaReact />}
</div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card
