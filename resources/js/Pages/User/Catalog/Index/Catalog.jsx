import UserLayout from "../../../../Layout/UserLayout";
import Filter from "../components/Filter/Filter";
import Catalog from "../components/ItemList/ItemList";
import styles from "./Catalog.module.scss";
import { FunnelIcon } from "@phosphor-icons/react";
import { useState } from "react";

function Shop() {
    const [filterState, setFilterState] = useState(false);

    return (
        <UserLayout>
            <div className={styles.Shop}>
                <section className={styles.Shop__breadcrumbsWrapper}>
                    {/* TODO Breadcrumbs */}
                    Breadcrumbs
                </section>

                <section className={styles.Shop__flexGroup}>
                    <header className={styles.Shop__siteHeader}>
                        <h1 className={styles.Shop__headerTitle}>All Items</h1>
                    </header>

                    <button
                        className={styles.Shop__filterButton}
                        onClick={() => setFilterState(true)}
                    >
                        <FunnelIcon size={18} />
                        <span>Filter</span>
                    </button>
                </section>

                <section className={styles.Shop__mainPageContent}>
                    <Filter isActive={filterState} onShow={setFilterState} />
                    <Catalog />
                </section>

                <section className={styles.Shop__paginationWrapper}>
                    {/* TODO Pagination */}
                    Pagination
                </section>
            </div>
        </UserLayout>
    );
}

export default Shop;
