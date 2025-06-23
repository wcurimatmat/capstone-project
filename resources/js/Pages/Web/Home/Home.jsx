import AboutImage from "../../../../assets/visuals/pexels-daroon-19087201.jpg";
import { SparkleIcon, ThumbsUpIcon, MoneyIcon } from "@phosphor-icons/react";
import WebLayout from "../../../Layout/WebLayout";
import ProductCard from "../../../Components/Shared/ProductCard/ProductCard";
import styles from "./Home.module.scss";

function Home() {
    return (
        <WebLayout>
            <div className={styles.Home}>
                {/* Hero Section */}
                <section
                    className={styles.Home__hero}
                    aria-label="Hero Section"
                >
                    <header className={styles.Home__heading}>
                        <h1 className={styles.Home__title}>
                            Fashion That Fits You Perfectly
                        </h1>
                        <a href="#" className={styles.Home__link___secondary}>
                            Explore Shop
                        </a>
                    </header>
                </section>

                {/* Featured Section */}
                <section
                    className={styles.Home__featured}
                    aria-label="Featured Section"
                >
                    <div
                        className={`${styles.Home__sectionContainerPadding} ${styles.Home__featuredSectionContainer}`}
                    >
                        <header className={styles.Home__headingBlock}>
                            <h2 className={styles.Home__sectionTitle}>Featured</h2>
                            <div
                                className={styles.Home__headingUnderline}
                            ></div>
                        </header>

                        <ul className={styles.Home__featureList}>
                            <li className={styles.Home__featureListItem}>
                                <ProductCard />
                            </li>
                            <li className={styles.Home__featureListItem}>
                                <ProductCard />
                            </li>
                            <li className={styles.Home__featureListItem}>
                                <ProductCard />
                            </li>
                            <li className={styles.Home__featureListItem}>
                                <ProductCard />
                            </li>
                        </ul>
                    </div>
                </section>

                {/* About Section */}
                <section
                    className={styles.Home__about}
                    aria-label="About Section"
                >
                    <div
                        className={`${styles.Home__sectionContainerPadding} ${styles.Home__aboutSectionContainer}`}
                    >
                        <section className={styles.Home__textContent}>
                            <header className={styles.Home__headingBlock}>
                                <h2 className={styles.Home__sectionTitle}>
                                    Your Style, Your Way
                                </h2>
                                <div
                                    className={styles.Home__headingUnderline}
                                ></div>
                            </header>

                            <p className={styles.Home__sectionBody}>
                                We believe fashion should enhance your life, not
                                complicate it. That's why we’ve curated a
                                collection of stylish, versatile, and
                                comfortable pieces that seamlessly fit into your
                                everyday routine. From the office to weekend
                                outings, our designs are made to move with you
                                without ever compromising on style. We’re
                                committed to providing you with fashion that’s
                                as practical as it is beautiful, so you can
                                focus on what truly matters.
                            </p>

                            <a href="#" className={styles.Home__link___primary}>
                                Explore Shop
                            </a>
                        </section>

                        <figure>
                            <img
                                src={AboutImage}
                                alt="A woman in brown jacket holding a newspaper, umbrella, and bag"
                                className={styles.Home__aboutSectionImage}
                            />
                        </figure>
                    </div>
                </section>

                {/* Value Proposition Section */}
                <section
                    className={styles.Home__valueProposition}
                    aria-label="Value Proposition Section"
                >
                    <div
                        className={`${styles.Home__sectionContainerPadding} ${styles.Home__valuePropositionSectionContainer}`}
                    >
                        <header className={styles.Home__headingBlock}>
                            <h2 className={styles.Home__sectionTitle}>
                                What We Offer
                            </h2>
                            <div
                                className={styles.Home__headingUnderline}
                            ></div>
                        </header>

                        <ul className={styles.Home__valuePropositionList}>
                            <li
                                className={
                                    styles.Home__valuePropositionListItem
                                }
                            >
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <SparkleIcon size={40} />
                                    </figure>

                                    <header
                                        className={styles.Home__cardHeading}
                                    >
                                        <h3
                                            className={
                                                styles.Home__cardHeadingTitle
                                            }
                                        >
                                            High Quality
                                        </h3>
                                        <p>
                                            Clothes made with care, from start
                                            to finish
                                        </p>
                                    </header>
                                </article>
                            </li>
                            <li
                                className={
                                    styles.Home__valuePropositionListItem
                                }
                            >
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <ThumbsUpIcon size={40} />
                                    </figure>

                                    <header
                                        className={styles.Home__cardHeading}
                                    >
                                        <h3
                                            className={
                                                styles.Home__cardHeadingTitle
                                            }
                                        >
                                            Affordable
                                        </h3>
                                        <p>
                                            High-quality fashion at accessible
                                            prices
                                        </p>
                                    </header>
                                </article>
                            </li>
                            <li
                                className={
                                    styles.Home__valuePropositionListItem
                                }
                            >
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <MoneyIcon size={40} />
                                    </figure>

                                    <header
                                        className={styles.Home__cardHeading}
                                    >
                                        <h3
                                            className={
                                                styles.Home__cardHeadingTitle
                                            }
                                        >
                                            Secured Payment
                                        </h3>
                                        <p>
                                            Smooth and secured checkout process
                                        </p>
                                    </header>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Shop Banner Section */}
                <section className={styles.Home__shopBanner}>
                    <header className={styles.Home__heading}>
                        <h2 className={styles.Home__title}>
                            Chic, Comfortable, and Always on Trend
                        </h2>
                        <a href="#" className={styles.Home__link___secondary}>
                            Explore Shop
                        </a>
                    </header>
                </section>
            </div>
        </WebLayout>
    );
}

export default Home;
