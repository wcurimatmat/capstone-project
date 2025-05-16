import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__wrapper}>
                <FooterTop />
                <FooterBottom />
            </div>
        </footer>
    );
}

export default Footer;
