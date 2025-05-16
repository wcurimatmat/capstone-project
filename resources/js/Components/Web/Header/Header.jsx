import { ListIcon } from "@phosphor-icons/react";
import NavMobile from "./NavMobile/NavMobile";
import NavActions from "./NavActions/NavActions";
import styles from "./Header.module.scss";
import NavAppLogo from "./NavAppLogo/NavAppLogo";
import { useState } from "react";
import Nav from "./Nav/Nav";

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
                <NavActions />
            </div>
        </header>
    );
}

export default Header;
