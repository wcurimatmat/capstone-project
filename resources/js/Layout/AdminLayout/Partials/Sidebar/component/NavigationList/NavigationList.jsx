import styles from "./NavigationList.module.scss"

function NavigationList({ children }) {
    return <ul className={styles.NavigationList}>{children}</ul>;
}

export default NavigationList;
