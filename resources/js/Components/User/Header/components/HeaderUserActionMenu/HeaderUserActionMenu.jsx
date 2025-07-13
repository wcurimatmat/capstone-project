// assets
import { XIcon } from "@phosphor-icons/react";

// styles
import styles from "./HeaderUserActionMenu.module.scss";

// components
import Button from "../../../../Shared/Button/Button";
import HeaderUserMenu from "../HeaderUserMenu/HeaderUserMenu";
import HeaderGuestMenu from "../HeaderGuestMenu/HeaderGuestMenu";

function MenuContent({ isUserAuthenticated }) {
    return (
        <div className="HeaderUserActionMenu__menuContentWrapper">
            {isUserAuthenticated ? <HeaderUserMenu /> : <HeaderGuestMenu />}
        </div>
    );
}

function HeaderUserActionMenu({
    userActionState,
    setUserActionState,
    isUserAuthenticated,
}) {
    return (
        <>
            {/* menu backdrop */}
            {userActionState && (
                <div
                    className={styles.MenuBackdrop}
                    onClick={() => setUserActionState(false)}
                ></div>
            )}

            <div
                className={`${styles.HeaderUserActionMenu} ${
                    userActionState
                        ? styles.HeaderUserActionMenu__isMenuActive
                        : ""
                }`}
                id="header-user-menu"
            >
                {/* menu wrapper */}
                <div className="HeaderUserActionMenu__menuWrapper">
                    {/* menu toggler */}
                    <div
                        className={styles.HeaderUserActionMenu__menuToggleBlock}
                    >
                        <Button
                            variant="icon"
                            onClick={() => setUserActionState(false)}
                        >
                            <XIcon size={24} />
                        </Button>
                    </div>

                    {/* menu content */}
                    <MenuContent isUserAuthenticated={isUserAuthenticated} />
                </div>
            </div>
        </>
    );
}

export default HeaderUserActionMenu;
