import styles from "./Nav.module.scss";

function Nav() {
    return (
        <nav className={styles.Nav}>
            <div className={styles.Nav__wrapper}>
                <ul className={styles.Nav__navigationList} role="list">
                    <li className={styles.Nav__navigationItem}>
                        <a href="#" className={styles.Nav__navigationLink}>
                            Home
                        </a>
                    </li>
                    <li className={styles.Nav__navigationItem}>
                        <a href="#" className={styles.Nav__navigationLink}>
                            Shop
                        </a>
                    </li>
                    <li className={styles.Nav__navigationItem}>
                        <a href="#" className={styles.Nav__navigationLink}>
                            About
                        </a>
                    </li>
                    <li className={styles.Nav__navigationItem}>
                        <a href="#" className={styles.Nav__navigationLink}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
