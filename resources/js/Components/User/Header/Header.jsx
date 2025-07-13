// Icons
import { ListIcon } from "@phosphor-icons/react";

// Partials
import Nav from "./Nav/Nav";
import NavAppLogo from "./NavAppLogo/NavAppLogo";
import HeaderActions from "./HeaderActions/HeaderActions";
import NavMobile from "./NavMobile/NavMobile";

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

                <NavAppLogo />
                <Nav />
                <NavMobile
                    mobileMenuState={mobileMenuState}
                    setMobileMenuState={setMobileMenuState}
                />
                <HeaderActions />
            </div>
        </header>
    );
}

export default Header;
