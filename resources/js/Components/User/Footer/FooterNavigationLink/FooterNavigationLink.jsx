import styles from "./FooterNavigationLink.module.scss";

function FooterNavigationLink({ children, href }) {
    return (
        <li className={styles.FooterNavigationLink}>
            <a href={href} className={styles.FooterNavigationLink__link}>
                {children}
            </a>
        </li>
    );
}

export default FooterNavigationLink;
