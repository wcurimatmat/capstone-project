import appLogo from "/resources/assets/logo/app-logo-vector.svg";
import styles from "./AppLogo.module.scss";

function AppLogo() {
    return (
        <figure className={styles.AppLogo}>
            <a href="">
                <img
                    src={appLogo}
                    alt="app header logo"
                    className={styles.AppLogo__appLogo}
                />
            </a>
        </figure>
    );
}

export default AppLogo;
