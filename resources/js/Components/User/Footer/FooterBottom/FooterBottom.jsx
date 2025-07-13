import FooterHeader from "../FooterHeader/FooterHeader";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react";
import FooterNavigationList from "../FooterNavigationList/FooterNavigationList";
import FooterNavigationLink from "../FooterNavigationLink/FooterNavigationLink";

import styles from "./FooterBottom.module.scss";

function FooterBottom() {
    return (
        <div className={styles.FooterBottom}>
            <div className={styles.FooterBottom__wrapper}>
                <section className={styles.FooterBottom__navigationSection}>
                    <div
                        className={
                            styles.FooterBottom__navigationSectionWrapper
                        }
                    >
                        {/* Pages */}
                        <div className={styles.FooterBottom__navigationColumn}>
                            <FooterHeader>Pages</FooterHeader>
                            <FooterNavigationList>
                                <FooterNavigationLink href="#">
                                    Home
                                </FooterNavigationLink>
                                <FooterNavigationLink href="#">
                                    Shop
                                </FooterNavigationLink>
                                <FooterNavigationLink href="#">
                                    About
                                </FooterNavigationLink>
                            </FooterNavigationList>
                        </div>
                        {/* Legal */}
                        <div className={styles.FooterBottom__navigationColumn}>
                            <FooterHeader>Legal</FooterHeader>
                            <FooterNavigationList>
                                <FooterNavigationLink href="#">
                                    Terms
                                </FooterNavigationLink>
                                <FooterNavigationLink href="#">
                                    Privacy Policy
                                </FooterNavigationLink>
                                <FooterNavigationLink href="#">
                                    Cookies Policy
                                </FooterNavigationLink>
                            </FooterNavigationList>
                        </div>
                        {/* Help */}
                        <div className={styles.FooterBottom__navigationColumn}>
                            <FooterHeader>Help</FooterHeader>
                            <FooterNavigationList>
                                <FooterNavigationLink href="#">
                                    FAQ
                                </FooterNavigationLink>
                                <FooterNavigationLink href="#">
                                    Support
                                </FooterNavigationLink>
                            </FooterNavigationList>
                        </div>
                    </div>
                </section>
                <section className={styles.FooterBottom}>
                    <div className={styles.FooterBottom__contactSectionWrapper}>
                        <FooterHeader>Contact Us</FooterHeader>
                        <div className={styles.FooterBottom__contact}>
                            <Phone size={24} />
                            <p>+639-123-456-7890</p>
                        </div>
                        <div className={styles.FooterBottom__contact}>
                            <EnvelopeSimple size={24} />
                            <p>rnjfashionshop@email.com</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FooterBottom;
