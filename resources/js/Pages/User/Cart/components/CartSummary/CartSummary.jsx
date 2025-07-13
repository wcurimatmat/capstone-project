// stylesheet
import styles from "./CartSummary.module.scss";

// components
import Button from "../../../../../Components/Shared/Button/Button";

function CartSummary() {
    return (
        <section className={styles.CartSummary}>
            <div className={styles.CartSummary__cartSummaryContainer}>
                <header className={styles.CartSummary__summaryHeader}>
                    <h2>Summary</h2>
                </header>
                <div className={styles.CartSummary__summaryWrapper}>
                    <div className={styles.CartSummary__summaryDetailsWrapper}>
                        <p className="CartSummary__summaryTitle">Subtotal</p>
                        <p className="CartSummary__summaryTotal">₱ 100.50</p>
                    </div>
                    <div className={styles.CartSummary__summaryDetailsWrapper}>
                        <p className="CartSummary__summaryTitle">Shipping</p>
                        <p className="CartSummary__summaryTotal">₱ 50.00</p>
                    </div>
                    <div
                        className={styles.CartSummary__summaryDetailsSeparator}
                    ></div>
                    <div className={styles.CartSummary__summaryDetailsWrapper}>
                        <h3 className="CartSummary__summaryTitle">Total</h3>
                        <p className="CartSummary__summaryTotal">₱ 150.50</p>
                    </div>
                </div>
                <form action="" className="CartSummary__cartForm">
                    <Button variant="cart" type="submit">
                        Checkout
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default CartSummary;
