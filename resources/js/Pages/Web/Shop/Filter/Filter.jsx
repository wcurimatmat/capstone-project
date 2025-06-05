import { XIcon } from "@phosphor-icons/react";
import styles from "./Filter.module.scss";

function Filter({ isActive, onShow }) {
    return (
        <aside
            className={`${styles.Filter} ${
                isActive ? styles.Filter__isFilterActive : ""
            }`}
        >
            <div className={styles.Filter__filterButtonWrapper}>
                <button
                    className={styles.Filter__filterButton}
                    onClick={() => onShow(false)}
                >
                    <XIcon />
                </button>
            </div>

            <div className={styles.Filter__contentGroup}>
                <div className={styles.Filter__filterWrapperHeader}>
                    <p className={styles.Filter__filterHeaderTitle}>Filters</p>
                </div>

                <nav className={styles.Filter__filters}>
                    <ul className={styles.Filter__filterList}>
                        <li className={styles.Filter__filterListItem}>
                            <a href="#">All Items</a>
                        </li>
                        <li className={styles.Filter__filterListItem}>
                            <a href="#">New Arrivals</a>
                        </li>
                        <li className={styles.Filter__filterListItem}>
                            <a href="#">On Sale</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Filter;
