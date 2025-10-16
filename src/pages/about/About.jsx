import './About.css'

function About() {
    return (
        <>
        <section id="about" class="container-about">
            <div id="info">
                <div><img src="src\assets\imagem.jpg" /></div>
                <div>
                    <p>Me chamo Nícolas, moro em Fortaleza/CE. Formado em Análise e Desenvolvimento de Sistemas, estudo desenvolvimento fullstack, com foco em Java e Javascript.</p>
                </div>
                <div class="teste">
                    <div class="card">
                    <h1>Tecnologias</h1>
                    <div id="grid-icons">
                        <img class="tecIcons" src="src\assets\htmlIcon.png" alt="icone do HTML"/>
                        <img class="tecIcons" src="src\assets\cssIcon.png" alt="icone do CSS"/>
                        <img class="tecIcons" src="src\assets\jsIcon.png" alt="icone do Javascript"/>
                        <img class="tecIcons" src="src\assets\reactIcon.png" alt="icone do React"/>
                        <img class="tecIcons" src="src\assets\vueIcon.png" alt="icone do Vue.js"/>
                        <img class="tecIcons" src="src\assets\javaIcon.png" alt="icone do Java"/>
                        <img class="tecIcons" src="src\assets\springbootIcon.png" alt="icone do Spring boot"/>
                    </div>
                    </div>

                    <div class="card">
                    <h1>Extras</h1>
                    <div id="grid-icons">
                        <img class="tecIcons" src="src\assets\gitIcon.png" alt="icone do Git"/>
                        <img class="tecIcons" src="src\assets\postmanIcon.png" alt="icone do Postman"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;