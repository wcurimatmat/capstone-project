// stylesheet
import styles from "./Nav.module.scss";

// asset
import navLinks from "./navLink";

// dependencies
import { Link } from "@inertiajs/react";

function NavLinkItem() {
    return navLinks.map((navLink) => (
        <li className={styles.Nav__navigationItem}>
            <Link href={navLink.url} className={styles.Nav__navigationLink}>
                {navLink.name}
            </Link>
        </li>
    ));
}

function Nav() {
    return (
        <nav className={styles.Nav}>
            <div className={styles.Nav__wrapper}>
                <ul className={styles.Nav__navigationList} role="list">
                    <NavLinkItem />
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
