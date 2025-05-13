import AppLogo from "../../../../../assets/logo/rjs.png";
import styles from "./NavAppLogo.module.scss";

function NavAppLogo() {
    return (
        <figure className={styles.NavAppLogo}>
            <a href="">
                <img
                    src={AppLogo}
                    alt="app header logo"
                    className={styles.NavAppLogo__appLogo}
                />
            </a>
        </figure>
    );
}

export default NavAppLogo;
