import styles from './Header.module.css';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div id="header-name" className={styles.headerName}>
                    <p>Nícolas Martins</p>
                </div>
                <div className={styles.nav}>
                    <nav className={styles.navMenu}>
                        <ul>
                            <li><button className={styles.menuButton} onClick={() => document.getElementById('header-name').scrollIntoView({behavior: 'smooth'})}>home</button></li>
                            <li><button className={styles.menuButton} onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>sobre</button></li>
                            <li><button className={styles.menuButton} onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>portfólio</button></li>
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