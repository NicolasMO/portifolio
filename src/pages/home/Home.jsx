import Typewriter from '../../components/typewriter/Typewriter';
import styles from './Home.module.css'

function Home() {
    const lines = [
        'Olá pessoal,',
        'Eu sou um programador Fullstack',
        'Sejam bem-vindos ao meu portfólio online'
    ];

    return (
        <>
        <section className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.introLeft}>
                    <div className={styles.textWrapper}>
                        <Typewriter lines={lines} speed={45} />
                    </div>

                    <button 
                        onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
                        className={styles.moreInfo}>
                            Saiba mais sobre mim
                    </button>
                </div>
                
                <img src="src\assets\intro.png" alt="Desenho de um homem em um computador" />
                
            </div>
            <div className={styles.socialMedia}>
                <img className={styles.socialIcon} src="src\assets\githubIcon.png" alt="github"/>
                <img className={styles.socialIcon} src="src\assets\linkedinIcon.png" alt="github"/>
                <img className={styles.socialIcon} src="src\assets\whatsappIcon.png" alt="github"/>
            </div>
        </section>
        </>
    )
}

export default Home