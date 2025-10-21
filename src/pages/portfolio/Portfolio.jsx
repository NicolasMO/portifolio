import styles from './Portfolio.module.css'

function Portfolio() {

    return (
        <>
            <section id="portfolio" className={styles.container}>
                <div class={styles.portfolioTitle}>
                    <h2>
                        <span>Meu</span> Portfólio
                    </h2>
                    <p>Esses são alguns projetos e trabalhos que já realizei</p>
                </div>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <img className={styles.cardImage} src="src\assets\retangulo.png"/>
                        <div className={styles.cardContent}>
                            <p>Projeto de marmitaria visando comercialização de marmitas personalizadas</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.cardImage} src="src\assets\retangulo.png"/>
                        <div className={styles.cardContent}>
                            <p>Projeto de marmitaria visando comercialização de marmitas personalizadas</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.cardImage} src="src\assets\retangulo.png"/>
                        <div className={styles.cardContent}>
                            <p>Projeto de marmitaria visando comercialização de marmitas personalizadas</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio