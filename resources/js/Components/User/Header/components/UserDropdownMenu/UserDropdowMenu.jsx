// assets
import { XIcon } from "@phosphor-icons/react";

// styles
import styles from "./HeaderUserActionMenu.module.scss";

// components
import Button from "../../../../Shared/Button/Button";
import HeaderUserMenu from "../UserDropdownOption/UserDropdownOption";
import HeaderGuestMenu from "../GuestMenu/HeaderGuestMenu";

function DropdownMenuWrapper({ isUserAuthenticated }) {
    return (
        <div className="HeaderUserActionMenu__menuContentWrapper">
            {isUserAuthenticated ? <HeaderUserMenu /> : <HeaderGuestMenu />}
        </div>
    );
}

function UserDropdownMenu({
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
                className={`${styles.UserDropdownMenu} ${
                    userActionState ? styles.UserDropdownMenu__isMenuActive : ""
                }`}
                id="header-user-menu"
            >
                {/* menu wrapper */}
                <div className="UserDropdownMenu__menuWrapper">
                    {/* menu toggler */}
                    <div className={styles.UserDropdownMenu__menuToggleBlock}>
                        <Button
                            variant="icon"
                            onClick={() => setUserActionState(false)}
                        >
                            <XIcon size={24} />
                        </Button>
                    </div>

                    {/* menu content */}
                    <DropdownMenuWrapper isUserAuthenticated={isUserAuthenticated} />
                </div>
            </div>
        </>
    );
}

export default UserDropdownMenu;
