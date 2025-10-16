import './Header.css';

function Header() {
    return (
        <>
            <header>
                <div id="header-name">
                    <p>Nícolas Martins</p>
                </div>
                <div class="nav">
                    <nav id="nav-menu">
                        <ul>
                            <li><button class="menu-button" onClick={() => document.getElementById('header-name').scrollIntoView({behavior: 'smooth'})}>home</button></li>
                            <li><button class="menu-button" onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>sobre</button></li>
                            <li>portífolio</li>
                            <li>serviços</li>
                            <li>resumo</li>
                            <li>contato</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;