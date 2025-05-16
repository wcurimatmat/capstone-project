import {
    FacebookLogo,
    InstagramLogo,
    PinterestLogo,
} from "@phosphor-icons/react";
import FooterNavigationList from "../FooterNavigationList/FooterNavigationList";
import FooterNavigationLink from "../FooterNavigationLink/FooterNavigationLink";
import styles from "./FooterTop.module.scss";

function FooterTop() {
    return (
        <section className={styles.FooterTop}>
            <div className={styles.FooterTop__wrapper}>
                <header className={styles.FooterTop__header}>
                    <h2 className={styles.FooterTop__title}>
                        R&J Fashion Shop
                    </h2>
                    <p className={styles.FooterTop__caption}>
                        Providing collection of stylish, versatile, and
                        comfortable apparels.
                    </p>
                </header>

                <div className={styles.FooterTop__footerSocials}>
                    <FooterNavigationList
                        className={styles.FooterTop__socialList}
                    >
                        <FooterNavigationLink href="#">
                            <FacebookLogo size={32} />
                        </FooterNavigationLink>
                        <FooterNavigationLink href="#">
                            <InstagramLogo size={32} />
                        </FooterNavigationLink>
                        <FooterNavigationLink href="#">
                            <PinterestLogo size={32} />
                        </FooterNavigationLink>
                    </FooterNavigationList>
                </div>
            </div>
        </section>
    );
}

export default FooterTop;
