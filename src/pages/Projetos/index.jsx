import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../Container'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import styles from './Projetos.module.css'

function Projetos() {    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/Mateus10982/repos ')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return ( 
        <section className={styles.projetos}><Header/>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}

                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }<Footer/>
        </section>
        
    )
}
export default Projetos
