// stylesheet
import styles from "./CartEmpty.module.scss";

// components
import Anchor from "/resources/js/Components/Shared/Anchor/Anchor";

function CartEmpty() {
    return (
        <section className={styles.CartEmpty}>
            <p className={styles.CartEmpty__cartEmptyMessage}>Your bag is empty</p>
            <Anchor href={route("shop.index")} variant="primary">
                Explore Shop
            </Anchor>
        </section>
    );
}

export default CartEmpty;
