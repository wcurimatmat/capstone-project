// icons
import { ShoppingBagIcon, UserCircleIcon } from "@phosphor-icons/react";

// components
import HeaderUserActionMenu from "../HeaderUserActionMenu/HeaderUserActionMenu";

// styles
import styles from "./HeaderActions.module.scss";

// dependencies
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

function HeaderActions() {
    const [userActionState, setUserActionState] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = userActionState ? "hidden" : "auto";
        }
    }, [userActionState]);

    return (
        <div className={styles.HeaderActions}>
            <ul role="list" className={styles.HeaderActions__actionList}>
                <li className={styles.HeaderActions__actionItem}>
                    <Link href={route("cart.index")}>
                        <ShoppingBagIcon size={24} />
                    </Link>
                </li>
                <li
                    className={`${styles.HeaderActions__actionItem} ${styles.HeaderActions__userAction}`}
                >
                    <button
                        title="User"
                        onClick={() => setUserActionState(true)}
                        className={styles.HeaderActions__actionButton}
                        aria-expanded={userActionState ? true : false}
                        aria-controls="header-user-menu"
                    >
                        <UserCircleIcon size={24} />
                    </button>
                    <HeaderUserActionMenu
                        userActionState={userActionState}
                        setUserActionState={setUserActionState}
                        isUserAuthenticated={isUserAuthenticated}
                    />
                </li>
            </ul>
        </div>
    );
}

export default HeaderActions;
