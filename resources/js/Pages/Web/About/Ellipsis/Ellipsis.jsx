import styles from "./Ellipsis.module.scss";

function Ellipsis() {
    return (
        <div className={styles.Ellipsis}>
            <div className={styles.Ellipsis__ellipsis}></div>
            <div className={styles.Ellipsis__ellipsis}></div>
            <div className={styles.Ellipsis__ellipsis}></div>
            <div className={styles.Ellipsis__ellipsis}></div>
            <div className={styles.Ellipsis__ellipsis}></div>
        </div>
    );
}

export default Ellipsis;
