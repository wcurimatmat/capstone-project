// icons
import { ShoppingBagIcon, UserCircleIcon } from "@phosphor-icons/react";

// components
import ActionMenu from "../ActionMenu/ActionMenu"

// styles
import styles from "./ActionGroup.module.scss";

// dependencies
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

function ActionGroup() {
    const [userActionState, setUserActionState] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = userActionState ? "hidden" : "auto";
        }
    }, [userActionState]);

    return (
        <div className={styles.ActionGroup}>
            <ul role="list" className={styles.ActionGroup__actionList}>
                <li className={styles.ActionGroup__actionItem}>
                    <Link href={route("cart.index")}>
                        <ShoppingBagIcon size={24} />
                    </Link>
                </li>
                <li
                    className={`${styles.ActionGroup__actionItem} ${styles.ActionGroup__userAction}`}
                >
                    <button
                        title="User"
                        onClick={() => setUserActionState(true)}
                        className={styles.ActionGroup__actionButton}
                        aria-expanded={userActionState ? true : false}
                        aria-controls="header-user-menu"
                    >
                        <UserCircleIcon size={24} />
                    </button>
                    <ActionMenu
                        userActionState={userActionState}
                        setUserActionState={setUserActionState}
                        isUserAuthenticated={isUserAuthenticated}
                    />
                </li>
            </ul>
        </div>
    );
}

export default ActionGroup;
