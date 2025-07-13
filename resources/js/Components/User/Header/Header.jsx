// Icons
import { ListIcon } from "@phosphor-icons/react";

// Partials
import Nav from "./components/Nav/Nav";
import AppLogo from "./components/AppLogo/AppLogo";
import ActionGroup from "./components/ActionGroup/ActionGroup";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

// Styles
import styles from "./Header.module.scss";

// React
import { useState } from "react";

function Header() {
    const [mobileMenuState, setMobileMenuState] = useState(false);

    return (
        <header className={styles.Header}>
            <div className={styles.Header__wrapper}>
                <div className={styles.Header__mobileNavButtonWrapper}>
                    <button
                        onClick={() => setMobileMenuState(!mobileMenuState)}
                        className={styles.Header__mobileNavButton}
                    >
                        <ListIcon size={24} />
                    </button>
                </div>

                <AppLogo />
                <Nav />
                <MobileNavigation
                    mobileMenuState={mobileMenuState}
                    setMobileMenuState={setMobileMenuState}
                />
                <ActionGroup />
            </div>
        </header>
    );
}

export default Header;
