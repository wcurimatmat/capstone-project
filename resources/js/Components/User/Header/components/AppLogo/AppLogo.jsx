import appLogo from "../../../../../assets/logo/rjs.png";
import styles from "./AppLogo.module.scss";

function AppLogo() {
    return (
        <figure className={styles.AppLogo}>
            <a href="">
                <img
                    src={AppLogo}
                    alt="app header logo"
                    className={styles.AppLogo__appLogo}
                />
            </a>
        </figure>
    );
}

export default AppLogo;
