import './Home.css'

function Home() {
    return (
        <>
        <section id="home" class="container">
            <div id="intro">
                <div>
                    <p>Olá pessoas, </p>
                    <em>Eu sou um programador Fullstack</em>
                    <p>Seja bem-vindo ao meu portífolio online</p>
                    
                    <button 
                    onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
                    class="more-info">
                        Saiba mais sobre mim</button>
                </div>
                <div>
                    <img src="src\assets\intro.png" alt="Desenho de um homem em um computador" />
                </div>
            </div>
            <div id="social-media">
                <img class="social-icon" src="src\assets\githubIcon.png" alt="github"/>
                <img class="social-icon" src="src\assets\linkedinIcon.png" alt="github"/>
                <img class="social-icon" src="src\assets\whatsappIcon.png" alt="github"/>
            </div>
        </section>
        </>
    )
}

export default Home