import { ShoppingBag, UserCircle } from "@phosphor-icons/react";
import styles from "./NavActions.module.scss";

function NavActions() {
    return (
        <div className={styles.NavActions}>
            <ul role="list" className={styles.NavActions__actionList}>
                <li className={styles.NavActions__actionItem}>
                    <a href="">
                        <ShoppingBag size={24} />
                    </a>
                </li>
                <li className={styles.NavActions__actionItem}>
                    <a href="">
                        <UserCircle size={24} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavActions;
