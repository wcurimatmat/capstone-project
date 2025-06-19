import styles from "./FormField.module.scss";

function FormField({ id, label, children }) {
    return (
        <div className={styles.FormField}>
            <label htmlFor={id} className={styles.FormField__formLabel}>
                {label}
            </label>
            {children}
        </div>
    );
}

export default FormField;
