import styles from './About.module.css'

function About() {
    return (
        <>
            <section id="about" className={styles.container}>
                <img className={styles.infoImg} src="src\assets\imagem.jpg" alt="Foto minha"/>
                <p className={styles.infoText}>Me chamo Nícolas, moro em Fortaleza/CE. Formado em Análise e Desenvolvimento de Sistemas, estudo desenvolvimento fullstack, com foco em Java e Javascript.</p>
                <div className={styles.teste}>
                    <div className={styles.card}>
                        <h2 className={styles.infoTitle}>Tecnologias</h2>
                        <div className={styles.gridIcons}>
                            <img className={styles.tecIcons} src="src\assets\htmlIcon.png" alt="icone do HTML"/>
                            <img className={styles.tecIcons} src="src\assets\cssIcon.png" alt="icone do CSS"/>
                            <img className={styles.tecIcons} src="src\assets\jsIcon.png" alt="icone do Javascript"/>
                            <img className={styles.tecIcons} src="src\assets\reactIcon.png" alt="icone do React"/>
                            <img className={styles.tecIcons} src="src\assets\vueIcon.png" alt="icone do Vue.js"/>
                            <img className={styles.tecIcons} src="src\assets\javaIcon.png" alt="icone do Java"/>
                            <img className={styles.tecIcons} src="src\assets\springbootIcon.png" alt="icone do Spring boot"/>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.infoTitle}>Extras</h2>
                        <div className={styles.gridIcons}>
                            <img className={styles.tecIcons} src="src\assets\gitIcon.png" alt="icone do Git"/>
                            <img className={styles.tecIcons} src="src\assets\postmanIcon.png" alt="icone do Postman"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;