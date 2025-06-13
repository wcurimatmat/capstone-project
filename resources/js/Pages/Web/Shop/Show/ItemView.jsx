import styles from "./ItemView.module.scss";
import ItemMockImage from "/resources/assets/visuals/item-4.jpg";
import WebLayout from "/resources/js/Layout/WebLayout";
import Dropdown from "../Dropdown/Dropdown";

function ItemView() {
    return (
        <WebLayout>
            <div className={styles.ItemView}>
                <section
                    className={styles.ItemView__breadcrumb}
                    aria-label="Breadcrumb Navigation"
                >
                    {/* TODO Breadcrumb navigation */}
                    Breadcrumbs here!
                </section>

                <section className={styles.ItemView__itemView}>
                    <div className={styles.ItemView__itemViewWrapper}>
                        <figure className={styles.ItemView__itemImageWrapper}>
                            <img
                                src={ItemMockImage}
                                alt=""
                                className={styles.ItemView__itemImage}
                            />
                        </figure>
                        <div className={styles.ItemView__itemViewPanelGroup}>
                            <header className={styles.ItemView__itemViewHeading}>
                                <h1 className={styles.ItemView__itemName}>
                                    Lorem ipsum dolor sit amet.
                                </h1>
                                <p className={styles.ItemView__itemPrice}>₱99.99</p>
                            </header>
                            
                            <form action="" className={styles.ItemView__itemForm}>
                                <div className={styles.ItemView__formGroup}>
                                    <label
                                        htmlFor="size-option"
                                        className={styles.ItemView__itemFormLabel}
                                    >
                                        Size
                                    </label>
                                    <Dropdown />
                                </div>
                                <div className={styles.ItemView__formActions}>
                                    <button className={styles.ItemView__formAction}>
                                        Buy Now
                                    </button>
                                    <input
                                        type="submit"
                                        value="Add To Bag"
                                        className={styles.ItemView__formAction}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section
                    className={styles.ItemView__itemInfo}
                    aria-label="Item Description"
                >
                    <div className={styles.ItemView__contentGroup}>
                        <header className={styles.ItemView__contentHeader}>
                            <h2
                                className={styles.ItemView__contentTitle}
                            >
                                Description
                            </h2>
                        </header>
                        <div className={styles.ItemView__paragraphBlock}>
                            <p className={styles.ItemView__contentBody}>
                                A stylish and cozy essential for any wardrobe.
                                Made from soft, breathable thermal fabric, it
                                provides lightweight warmth and all-day comfort.
                                The crew neckline offers a classic fit, while
                                the ruched side detail adds a modern, flattering
                                touch. Whether you’re layering it under a jacket
                                or wearing it solo, this versatile tee pairs
                                effortlessly with jeans, skirts, or leggings.
                                Perfect for casual wear or dressed up with
                                accessories, it’s a go-to piece that combines
                                fashion and function. Available in multiple
                                colors to suit your personal style.
                            </p>
                        </div>
                    </div>
                    <div className={styles.ItemView__contentGroup}>
                        <header className={styles.ItemView__contentHeader}>
                            <h2
                                className={styles.ItemView__contentTitle}
                            >
                                Materials
                            </h2>
                        </header>

                        <div className={styles.ItemView__paragraphBlock}>
                            <p className={styles.ItemView__contentBody}>
                                Cotton
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.ItemView__policies}>
                    {/* TODO Accordion formatted content here */}
                    Policies in accordion format!
                </section>
            </div>
        </WebLayout>
    );
}

export default ItemView;
