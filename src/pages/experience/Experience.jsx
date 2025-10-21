import styles from './Experience.module.css'

function Experience() {

    return (
        <>
            <section id="experience" className={styles.container}>
                    <h2 class={styles.experienceTitle}>
                        <span>Minhas</span> Experiências
                    </h2>

                    <div>
                        <div>
                            <h2>Profissional</h2>

                            <div className={styles.experienceCard}>
                                <div className={styles.cardTitle}>Mercado Hit</div>

                                <span className={styles.cardInfo}>Trabalho fullstack em uma plataforma de comercialização
                                     de músicas, com níveis de usuário variando entre
                                     compositor, comprador, operador e admin.</span>
                            </div>
                            <div className={styles.experienceCard}>
                                <div className={styles.cardTitle}>Mercado Hit</div>

                                <span className={styles.cardInfo}>Trabalho fullstack em uma plataforma de comercialização
                                     de músicas, com níveis de usuário variando entre
                                     compositor, comprador, operador e admin.</span>
                            </div>
                            <div className={styles.experienceCard}>
                                <div className={styles.cardTitle}>Mercado Hit</div>

                                <span className={styles.cardInfo}>Trabalho fullstack em uma plataforma de comercialização
                                     de músicas, com níveis de usuário variando entre
                                     compositor, comprador, operador e admin.</span>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Experience