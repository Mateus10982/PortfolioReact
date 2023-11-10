import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Card({ name, description, html_url }) {
    const [ repositories, setRepositories ] = useState([])
    useEffect(() => {
    const buscarLinguagens= async () => {
        const response1 = await fetch('https://api.github.com/repos/Mateus10982/',{name},'/languages ')
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
                {
                for(let i=0 ; i< repositories.length;++i){
                    if (repositories[i] == "JavaScript") {
                        
                    } else if(repositories[i] == "HTML"){
                        
                    }
                    else if(repositories[i] == "CSS"){
                        
                    }
                    else if(repositories[i] == "REACT"){
                        
                    }
                }
                        
            }
                     <FaJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaReact />
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card