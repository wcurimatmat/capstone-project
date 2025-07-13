// stylesheet
import styles from "./MobileNavigation.module.scss";

// asset
import { XIcon } from "@phosphor-icons/react";

function MobileNavigation({ mobileMenuState, setMobileMenuState }) {
    return (
        <nav
            className={`${styles.MobileNavigation} ${
                mobileMenuState ? styles.MobileNavigation___active : ""
            }`}
        >
            <div className={styles.MobileNavigation__wrapper}>
                <div
                    className={styles.MobileNavigation__mobileNavButtonWrapper}
                >
                    <button
                        onClick={() => setMobileMenuState(!setMobileMenuState)}
                    >
                        <XIcon size={24} />
                    </button>
                </div>

                <ul
                    className={styles.MobileNavigation__navigationList}
                    role="list"
                >
                    <li className={styles.MobileNavigation__navigationItem}>
                        <a
                            href="#"
                            className={styles.MobileNavigation__navigationLink}
                        >
                            Home
                        </a>
                    </li>
                    <li className={styles.MobileNavigation__navigationItem}>
                        <a
                            href="#"
                            className={styles.MobileNavigation__navigationLink}
                        >
                            Shop
                        </a>
                    </li>
                    <li className={styles.MobileNavigation__navigationItem}>
                        <a
                            href="#"
                            className={styles.MobileNavigation__navigationLink}
                        >
                            About
                        </a>
                    </li>
                    <li className={styles.MobileNavigation__navigationItem}>
                        <a
                            href="#"
                            className={styles.MobileNavigation__navigationLink}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavigation;
