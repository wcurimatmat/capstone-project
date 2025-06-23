// icons
import {
    XIcon,
    UserIcon,
    AddressBookIcon,
    BellIcon,
    ShoppingBagIcon,
    SignOutIcon,
} from "@phosphor-icons/react";

// styles
import styles from "./HeaderUserMenu.module.scss";

// assets
import MockAvatar from "/resources/assets/avatar/pexels-soldiervip-1391498.jpg";

function HeaderUserMenu({ userActionState, setUserActionState }) {
    return (
        <div className={styles.HeaderUserMenu}>
            <div
                className={`${styles.HeaderUserMenu__menuOverlay} ${
                    userActionState
                        ? styles.HeaderUserMenu___menuOverlayActive
                        : ""
                }`}
            ></div>
            <div
                className={`${styles.HeaderUserMenu__userMenu} ${
                    userActionState ? styles.HeaderUserMenu___menuActive : ""
                }`}
            >
                <div className={styles.HeaderUserMenu__mainWrapper}>
                    <div
                        className={
                            styles.HeaderUserMenu__menuCloseButtonWrapper
                        }
                    >
                        <button
                            onClick={() => setUserActionState(!userActionState)}
                        >
                            <XIcon />
                        </button>
                    </div>

                    <div className={styles.HeaderUserMenu__user}>
                        <figure>
                            <img
                                src={MockAvatar}
                                alt=""
                                className={styles.HeaderUserMenu__userAvatar}
                            />
                        </figure>

                        <p>Maria Llewelyn</p>
                    </div>

                    <nav className={styles.HeaderUserMenu__menuNav}>
                        <ul className={styles.HeaderUserMenu__menuNavList}>
                            <li className={styles.HeaderUserMenu__menuNavItem}>
                                <a
                                    href=""
                                    className={
                                        styles.HeaderUserMenu__menuNavLink
                                    }
                                >
                                    <UserIcon size={20} />
                                    <span>Account</span>
                                </a>
                            </li>
                            <li className={styles.HeaderUserMenu__menuNavItem}>
                                <a
                                    href=""
                                    className={
                                        styles.HeaderUserMenu__menuNavLink
                                    }
                                >
                                    <AddressBookIcon size={20} />
                                    <span>Address</span>
                                </a>
                            </li>
                            <li className={styles.HeaderUserMenu__menuNavItem}>
                                <a
                                    href=""
                                    className={
                                        styles.HeaderUserMenu__menuNavLink
                                    }
                                >
                                    <BellIcon size={20} />
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li className={styles.HeaderUserMenu__menuNavItem}>
                                <a
                                    href=""
                                    className={
                                        styles.HeaderUserMenu__menuNavLink
                                    }
                                >
                                    <ShoppingBagIcon size={20} />
                                    <span>Orders</span>
                                </a>
                            </li>
                            <li className={styles.HeaderUserMenu__menuNavItem}>
                                <a
                                    href=""
                                    className={
                                        styles.HeaderUserMenu__menuNavLink
                                    }
                                >
                                    <SignOutIcon size={20} />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-[64px]"></div>
            </div>
        </div>
    );
}

export default HeaderUserMenu;
