// stylesheet
import styles from "./NavigationItem.module.scss";

// assets
import { Link } from "@inertiajs/react";

function NavigationItem({ name, url, icon }) {
    return (
        <li className="NavigationItem">
            <Link href={url} className={styles.NavigationItem__link}>
                <span>{icon}</span>
                <p>{name}</p>
            </Link>
        </li>
    );
}

export default NavigationItem;
