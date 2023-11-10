import PropTypes from 'prop-types'
import styles from './Container.module.css'

//eslint-disable-next-line react/prop-types
function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
    Container.propTypes = {
        children: PropTypes.any
      }.isRequired
      
}

export default Container