import FooterHeader from "../FooterHeader/FooterHeader";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react";
import styles from "./FooterContact.module.scss";

function FooterContact() {
    return (
        <section className={styles.FooterContact}>
            <div className={styles.FooterContact__wrapper}>
                <FooterHeader>Contact Us</FooterHeader>

                <div className={styles.FooterContact__contact}>
                    <Phone size={24} />
                    <p>+639-123-456-7890</p>
                </div>

                <div className={styles.FooterContact__contact}>
                    <EnvelopeSimple size={24} />
                    <p>rnjfashionshop@email.com</p>
                </div>
            </div>
        </section>
    );
}

export default FooterContact;
