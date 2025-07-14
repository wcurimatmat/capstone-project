// icons
import {
    UserIcon,
    AddressBookIcon,
    BellIcon,
    ShoppingBagIcon,
    SignOutIcon,
} from "@phosphor-icons/react";

// styles
import styles from "./UserMenu.module.scss";

// assets
import MockAvatar from "/resources/assets/avatar/pexels-soldiervip-1391498.jpg";

function UserMenu() {
    return (
        <div className="UserMenu">
            <div className={styles.UserMenu__user}>
                <figure>
                    <img
                        src={MockAvatar}
                        alt=""
                        className={styles.UserMenu__userAvatar}
                    />
                </figure>

                <p>Maria Llewelyn</p>
            </div>

            <nav className={styles.UserMenu__menuNav}>
                <ul className={styles.UserMenu__menuNavList}>
                    <li className={styles.UserMenu__menuNavItem}>
                        <a href="" className={styles.UserMenu__menuNavLink}>
                            <UserIcon size={20} />
                            <span>Account</span>
                        </a>
                    </li>
                    <li className={styles.UserMenu__menuNavItem}>
                        <a href="" className={styles.UserMenu__menuNavLink}>
                            <AddressBookIcon size={20} />
                            <span>Address</span>
                        </a>
                    </li>
                    <li className={styles.UserMenu__menuNavItem}>
                        <a href="" className={styles.UserMenu__menuNavLink}>
                            <BellIcon size={20} />
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li className={styles.UserMenu__menuNavItem}>
                        <a href="" className={styles.UserMenu__menuNavLink}>
                            <ShoppingBagIcon size={20} />
                            <span>Orders</span>
                        </a>
                    </li>
                    <li className={styles.UserMenu__menuNavItem}>
                        <a href="" className={styles.UserMenu__menuNavLink}>
                            <SignOutIcon size={20} />
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserMenu;
