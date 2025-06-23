// icons
import { XIcon, SignInIcon, UserPlusIcon } from "@phosphor-icons/react";

// styles
import styles from "./HeaderGuestMenu.module.scss";

function HeaderGuestMenu({ userActionState, setUserActionState }) {
    
    
    return (
        <div className={styles.HeaderGuestMenu}>
            <div
                className={`${
                    userActionState
                        ? styles.HeaderGuestMenu___menuOverlayActive
                        : ""
                }`}
            ></div>
            <div
                className={`${styles.HeaderGuestMenu__guestMenu} ${
                    userActionState ? styles.HeaderGuestMenu___menuActive : ""
                }`}
            >
                <div className={styles.HeaderGuestMenu__mainWrapper}>
                    <div
                        className={
                            styles.HeaderGuestMenu__menuCloseButtonWrapper
                        }
                    >
                        <button
                            onClick={() => setUserActionState(!userActionState)}
                        >
                            <XIcon />
                        </button>
                    </div>
                    <nav className={styles.HeaderGuestMenu__menuNav}>
                        <ul className={styles.HeaderGuestMenu__menuNavList}>
                            <li className={styles.HeaderGuestMenu__menuNavItem}>
                                <a
                                    href={route("auth.create")}
                                    className={
                                        styles.HeaderGuestMenu__menuNavLink
                                    }
                                >
                                    <SignInIcon size={20} />
                                    <p>Sign-In</p>
                                </a>
                            </li>
                            <li className={styles.HeaderGuestMenu__menuNavItem}>
                                <a
                                    href={route("auth.store")}
                                    className={
                                        styles.HeaderGuestMenu__menuNavLink
                                    }
                                >
                                    <UserPlusIcon size={20} />
                                    <p>Sign-Up</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default HeaderGuestMenu;
