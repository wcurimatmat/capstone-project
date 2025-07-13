// components
import WebLayout from "../../../Layout/WebLayout";
import CartList from "./components/CartList/CartList.jsx";
import CartSummary from "./components/CartSummary/CartSummary.jsx";
import CartEmpty from "./components/CartEmpty/CartEmpty.jsx";

//stylesheet
import styles from "./Cart.module.scss";

// assets
import { data } from "./components/CartRow/CartRowPlaceholder.js";
import ItemDataContext from "./CartContext.js";

const itemLength = data.length;

function CartListBody() {
    return itemLength ? (
        <ItemDataContext.Provider value={data}>
            <CartList />
        </ItemDataContext.Provider>
    ) : (
        <CartEmpty />
    );
}

function Cart() {
    return (
        <WebLayout>
            <div className="Cart">
                <div className={styles.Cart__mainContainer}>
                    <header className={styles.Cart__mainHeader}>
                        <h1 className={styles.Cart__headerTitle}>Your Items</h1>
                        <p className={styles.Cart__headerCaption}>
                            {itemLength > 1
                                ? `${itemLength} items`
                                : `${itemLength} item`}
                        </p>
                    </header>

                    <div className={styles.Cart__contentGroup}>
                        <CartListBody />
                        <div className={styles.Cart__sectionSeparator}></div>
                        <CartSummary />
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Cart;
