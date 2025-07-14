// assets
import { SignInIcon, UserPlusIcon } from "@phosphor-icons/react";

// styles
import styles from "./HeaderGuestMenu.module.scss";

function HeaderGuestMenu() {
    return (
        <div className="HeaderGuestMenu">
            <nav className="HeaderGuestMenu__menuNav">
                <ul className="HeaderGuestMenu__menuNavList">
                    <li className={styles.HeaderGuestMenu__menuNavItem}>
                        <a
                            href={route("login")}
                            className={styles.HeaderGuestMenu__menuNavLink}
                        >
                            <SignInIcon size={20} />
                            <p>Sign-In</p>
                        </a>
                    </li>
                    <li className={styles.HeaderGuestMenu__menuNavItem}>
                        <a
                            href={route("register")}
                            className={styles.HeaderGuestMenu__menuNavLink}
                        >
                            <UserPlusIcon size={20} />
                            <p>Sign-Up</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderGuestMenu;
