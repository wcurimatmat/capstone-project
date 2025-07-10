// stylesheet
import styles from "./Sidebar.module.scss";

// components
import Navigation from "./component/Navigation";

// assets
import AppLogo from "/resources/assets/logo/rjs.png";

function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <div className={styles.Sidebar__wrapper}>
                <figure className={styles.Sidebar__appLogoWrapper}>
                    <img className={styles.Sidebar__appLogo} src={AppLogo} alt="app logo" />
                </figure>

                <Navigation />
            </div>
        </aside>
    );
}

export default Sidebar;
