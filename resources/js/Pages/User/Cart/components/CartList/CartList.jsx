// styleshee
import styles from "./CartList.module.scss";

// components
import CartRow from "../CartRow/CartRow";

// assets
import ItemDataContext from "../../CartContext";

// react
import { useContext } from "react";

function CartData() {
    const data = useContext(ItemDataContext);

    return data.map((item, index) => (
        <li className="CartData" key={index}>
            <CartRow
                image={item.image}
                name={item.name}
                price={item.price}
                size={item.size}
                color={item.color}
            />
        </li>
    ));
}

function CartList() {
    return (
        <section
            aria-label="Cart Items"
            className={styles.CartList__cartListSection}
        >
            <div className="CartList__cartListContainer">
                <ul className={styles.CartList__cartList}>
                    <CartData />
                </ul>
            </div>
        </section>
    );
}

export default CartList;
