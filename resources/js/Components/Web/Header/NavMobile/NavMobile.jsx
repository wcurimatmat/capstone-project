import { X } from "@phosphor-icons/react";
import styles from "./NavMobile.module.scss";

function NavMobile({ mobileMenuState, setMobileMenuState }) {
    return (
        <nav
            className={`${styles.NavMobile} ${
                mobileMenuState ? styles.NavMobile___active : ""
            }`}
        >
            <div className={styles.NavMobile__wrapper}>
                <div className={styles.NavMobile__mobileNavButtonWrapper}>
                    <button
                        onClick={() => setMobileMenuState(!setMobileMenuState)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <ul className={styles.NavMobile__navigationList} role="list">
                    <li className={styles.NavMobile__navigationItem}>
                        <a
                            href="#"
                            className={styles.NavMobile__navigationLink}
                        >
                            Home
                        </a>
                    </li>
                    <li className={styles.NavMobile__navigationItem}>
                        <a
                            href="#"
                            className={styles.NavMobile__navigationLink}
                        >
                            Shop
                        </a>
                    </li>
                    <li className={styles.NavMobile__navigationItem}>
                        <a
                            href="#"
                            className={styles.NavMobile__navigationLink}
                        >
                            About
                        </a>
                    </li>
                    <li className={styles.NavMobile__navigationItem}>
                        <a
                            href="#"
                            className={styles.NavMobile__navigationLink}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;
