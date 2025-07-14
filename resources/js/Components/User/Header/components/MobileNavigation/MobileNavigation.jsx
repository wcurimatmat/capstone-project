// stylesheet
import styles from "./MobileNavigation.module.scss";

// asset
import { XIcon } from "@phosphor-icons/react";
import navLinks from "../Nav/navLink";

// dependencies
import { Link } from "@inertiajs/react";

function MobileNavigationLinkList() {
    return navLinks.map((navLink) => (
        <li className={styles.MobileNavigation__navigationItem}>
            <Link
                href={navLink.url}
                className={styles.MobileNavigation__navigationLink}
            >
                {navLink.name}
            </Link>
        </li>
    ));
}

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
                    <MobileNavigationLinkList />
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavigation;
