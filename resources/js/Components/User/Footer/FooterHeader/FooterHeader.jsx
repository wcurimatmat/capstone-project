import styles from "./FooterHeader.module.scss";

function FooterHeader({ children }) {
    return (
        <header className={styles.FooterHeader}>
            <h3 className={styles.FooterHeader__textContent}>{children}</h3>
        </header>
    );
}

export default FooterHeader;
