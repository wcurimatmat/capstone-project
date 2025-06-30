import ProductImage from "../../../../assets/visuals/item-4.jpg";
import styles from "./ProductCard.module.scss";

// components
import ProductCardButton from "./ProductCardButton/ProductCardButton";

function ProductCard() {
    return (
        <>
            <article className="ProductCard">
                <div className={styles.ProductCard__wrapper}>
                    <a
                        href="#"
                        className={styles.ProductCard__itemImageWrapper}
                    >
                        <img
                            src={ProductImage}
                            alt="product image"
                            className={styles.ProductCard__itemImage}
                        />
                    </a>

                    <section className="ProductCard__detailsPanel">
                        <p className={styles.ProductCard__itemName}>
                            Product Image Name
                        </p>
                        <p className={styles.ProductCard__itemPrice}>₱ 999</p>
                    </section>

                    <form action="" className={styles.ProductCard__form}>
                        <ProductCardButton type="submit">
                            Add To Cart
                        </ProductCardButton>
                    </form>
                </div>
            </article>
        </>
    );
}

export default ProductCard;
