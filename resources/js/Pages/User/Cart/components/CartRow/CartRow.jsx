// stylesheet
import styles from "./CartRow.module.scss";

// icons
import { XIcon } from "@phosphor-icons/react";

// components
import Button from "/resources/js/Components/Shared/Button/Button";

function CartRow({image, name, price, size, color}) {
    return (
        <div className={styles.CartRow}>
            <div className={styles.CartRow__itemWrapper}>
                <figure className="CartRow__itemImageWrapper">
                    <img
                        src={image}
                        alt="mock image"
                        className={styles.CartRow__itemImage}
                    />
                </figure>

                <div className={styles.CartRow__textContentWrapper}>
                    <p className={styles.CartRow__itemName}>{name}</p>
                    <p className={styles.CartRow__itemPrice}>₱ {price}</p>
                    <div className={styles.CartRow__itemDetails}>
                        <p className="CartRow__itemSize">{size}</p>
                        <p className="CartRow__detailsSeparator">|</p>
                        <p className="CartRow__itemColor">{color}</p>
                    </div>
                </div>
            </div>

            <form action="" className="CartRow__cartFormAction">
                <Button type="submit" variant="icon">
                    <XIcon size={24} />
                </Button>
            </form>
        </div>
    );
}

export default CartRow;
