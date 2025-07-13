import styles from "./Dropdown.module.scss";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";

function Dropdown() {
    const [dropdownActive, setDropdownActive] = useState(false);
    return (
        <div className={styles.Dropdown}>
            <div
                className={styles.Dropdown__inputGroup}
                onClick={() => setDropdownActive(!dropdownActive)}
            >
                <input
                    type="text"
                    className={styles.Dropdown__inputText}
                    name=""
                    id="size-option"
                    placeholder="Select"
                />
                <div
                    className={`${styles.Dropdown__icon} ${
                        dropdownActive ? styles.Dropdown__icon___active : ""
                    }`}
                >
                    <CaretDownIcon
                        className={styles.Dropdown__inputIcon}
                        size={18}
                    />
                </div>
            </div>

            <div
                className={`${styles.Dropdown__dropdownPanel} ${
                    dropdownActive
                        ? styles.Dropdown__dropdownPanel___active
                        : ""
                }`}
            >
                <ul className={styles.Dropdown__optionList}>
                    <li className={styles.Dropdown__optionListItem}>
                        <button>Small</button>
                    </li>

                    <li className={styles.Dropdown__optionListItem}>
                        <button>Medium</button>
                    </li>

                    <li className={styles.Dropdown__optionListItem}>
                        <button>Large</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
