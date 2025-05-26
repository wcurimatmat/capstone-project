import AboutImage from "../../../../assets/visuals/pexels-daroon-19087201.jpg";
import { SparkleIcon, ThumbsUpIcon, MoneyIcon } from "@phosphor-icons/react";
import WebLayout from "../../../Layout/WebLayout";
import styles from "./Home.module.scss";

function Index() {
    return (
        <WebLayout>
            <div className={styles.Home}>
                {/* Hero Section */}
                <section
                    className={styles.Home__hero}
                    aria-label="Hero Section"
                >
                    <header className={styles.Home__heroContainer}>
                        <h1 className={styles.Home__heroTitle}>
                            Fashion That Fits You Perfectly
                        </h1>
                        <a className={styles.Home__button}>Explore Shop</a>
                    </header>
                </section>

                <section
                    className={styles.Home__featured}
                    aria-label="Featured Section"
                >
                    <div className={styles.Home__featuredContainer}>
                        <header className={styles.Home__headingBlock}>
                            <h2>Featured</h2>
                            <div className="underline"></div>
                        </header>

                        <div className={styles.Home__featureItemList}></div>
                    </div>
                </section>

                {/* About Section */}
                <section
                    className={styles.Home__about}
                    aria-label="About Section"
                >
                    <div className={styles.Home__aboutContaine}>
                        <section>
                            <header className={styles.Home__headingBlock}>
                                <h2>About</h2>
                                <div className="underline"></div>
                            </header>

                            <p>
                                We believe fashion should enhance your life, not
                                complicate it. That's why we’ve curated a
                                collection of stylish, versatile, and
                                comfortable pieces that seamlessly fit into your
                                everyday routine. From the office to weekend
                                outings, our designs are made to move with
                                you—without ever compromising on style. We’re
                                committed to providing you with fashion that’s
                                as practical as it is beautiful, so you can
                                focus on what truly matters.
                            </p>

                            <a href="">Explore Shop</a>
                        </section>

                        <figure>
                            <img
                                src={AboutImage}
                                alt="A woman in brown jacket holding a newspaper, umbrella, and bag"
                            />
                        </figure>
                    </div>
                </section>

                {/* Value Proposition Section */}
                <section
                    className={styles.Home__valueProposition}
                    aria-label="Value Proposition Section"
                >
                    <div className={styles.Home__valuePropositionContainer}>
                        <header className={styles.Home__headingBlock}>
                            <h2>What We Offer</h2>
                            <div className="underline"></div>
                        </header>

                        <ul className={styles.Home__valuePropositionList}>
                            <li>
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <SparkleIcon size={32} />
                                    </figure>
                                    <header>
                                        <h3>High Quality</h3>
                                        <p>
                                            Clothes made with care, from start
                                            to finish
                                        </p>
                                    </header>
                                </article>
                            </li>
                            <li>
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <ThumbsUpIcon size={32} />
                                    </figure>
                                    <header>
                                        <h3>Affordable</h3>
                                        <p>
                                            High-quality fashion at accessible
                                            prices
                                        </p>
                                    </header>
                                </article>
                            </li>
                            <li>
                                <article
                                    className={
                                        styles.Home__valuePropositionCard
                                    }
                                >
                                    <figure aria-hidden="true">
                                        <MoneyIcon size={32} />
                                    </figure>
                                    <header>
                                        <h3>Secured Payment</h3>
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
                <section className={styles.Home__shopBannerSection}>
                    <header className={styles.Home__headingBlock}>
                        <h2>Chic, Comfortable, and Always on Trend</h2>
                        <a href="">Explore Shop</a>
                    </header>
                </section>
            </div>
        </WebLayout>
    );
}

export default Index;
