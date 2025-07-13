import styles from "./ItemList.module.scss";
import ProductCard from "../../../../../Components/Shared/ProductCard/ProductCard";

function Catalog() {
    return (
        <ul className={styles.Catalog}>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
            <li className={styles.Catalog__catalogItem}>
                <ProductCard />
            </li>
        </ul>
    );
}

export default Catalog;
