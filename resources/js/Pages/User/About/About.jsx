import BrandingSectionImage from "../../../../assets/visuals/pexels-rachel-claire-5531540.jpg";
import ContentImageI from "../../../../assets/visuals/pexels-caio-mantovani-97605853-29310358.jpg";
import ContentImageII from "../../../../assets/visuals/pexels-avery-arwood-713708816-21370908.jpg";
import UserLayout from "../../../Layout/UserLayout";
import Ellipsis from "./Ellipsis/Ellipsis";
import styles from "./About.module.scss";

function About() {
    return (
        <UserLayout>
            <div className={styles.About}>
                <section
                    className={styles.About__aboutHero}
                    aria-label="Branding Section"
                >
                    <div className={`${styles.About__aboutHeroWrapper}`}>
                        <header className={styles.About__heroHeader}>
                            <h1 className={styles.About__heroHeaderTitle}>
                                About Us
                            </h1>
                        </header>

                        <figure className={styles.About__imageWrapper}>
                            <img
                                src={BrandingSectionImage}
                                alt="variety of clothes being hanged"
                                className={styles.About__brandingSectionImage}
                            />
                        </figure>
                    </div>
                </section>

                <section className={styles.About__proposition}>
                    <div className={styles.About__sectionPadding}>
                        <header className={styles.About__sectionHeader}>
                            <h2
                                className={`${styles.About__contentHeading} ${styles.About__title}`}
                            >
                                Quality, Comfortable, and Affordable Apparels
                            </h2>
                            <div
                                className={styles.About__headingUnderline}
                            ></div>
                        </header>
                        <p className={styles.About__contentBody}>
                            Every piece is thoughtfully crafted to embody
                            sophistication, comfort, and timeless design—without
                            the luxury price tag. We believe elegance should be
                            accessible, and style should feel effortless.
                            Discover refined fashion that speaks to your
                            standards, not just your budget. Our collections are
                            designed to elevate your everyday wardrobe with
                            materials that feel indulgent and look impeccable.
                            Because true luxury isn’t just about labels—it’s
                            about how it makes you feel.
                        </p>
                    </div>
                </section>

                <Ellipsis />

                <section
                    className={styles.About__brandValues}
                    aria-label="Brand Values Section"
                >
                    <div
                        className={`${styles.About__brandValuesSectionWrapper} ${styles.About__sectionPadding}`}
                    >
                        <div className={styles.About__contentGroup}>
                            <div className={styles.About__textGroup}>
                                <header className={styles.About__contentHeader}>
                                    <h2
                                        className={`${styles.About__contentHeading} ${styles.About__title}`}
                                    >
                                        Affordable Fashion Without Compromising
                                        on Style
                                    </h2>
                                    <div
                                        className={
                                            styles.About__headingUnderline
                                        }
                                    ></div>
                                </header>
                                <p className={styles.About__contentBody}>
                                    We understand that comfort is just as
                                    important as style. That's why we design our
                                    apparel to feel as good as it looks. Whether
                                    it's the softness of the fabric, the perfect
                                    fit, or the attention to the small touches
                                    like breathable materials and flexible
                                    designs, we are committed to offering
                                    clothing that supports your busy life while
                                    keeping you comfortable and confident all
                                    day long.
                                </p>
                            </div>
                            <figure
                                className={styles.About__contentImageWrapper}
                            >
                                <img
                                    src={ContentImageI}
                                    alt="a girl wearing a denim jacket lifting her knee up"
                                    className={styles.About__contentImage}
                                />
                            </figure>
                        </div>
                        <div className={styles.About__contentGroup}>
                            <div className={styles.About__textGroup}>
                                <header className={styles.About__contentHeader}>
                                    <h2
                                        className={`${styles.About__contentHeading} ${styles.About__title}`}
                                    >
                                        Our Passion for Quality
                                    </h2>
                                    <div
                                        className={
                                            styles.About__headingUnderline
                                        }
                                    ></div>
                                </header>
                                <p className={styles.About__contentBody}>
                                    At the heart of everything we do is a
                                    commitment to quality. We believe that every
                                    woman deserves clothing that not only looks
                                    great but feels great too. That's why we
                                    carefully select high-quality fabrics,
                                    ensuring each piece is crafted to last. From
                                    stitching to the final finish, we pay
                                    attention to every detail so you can wear
                                    our clothes with confidence, day after day.
                                </p>
                            </div>
                            <figure
                                className={styles.About__contentImageWrapper}
                            >
                                <img
                                    src={ContentImageII}
                                    alt="a girl wearing a white sleeveless shirt and a blue jeans"
                                    className={styles.About__contentImage}
                                />
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}

export default About;
