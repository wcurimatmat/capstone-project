//styles
import styles from "./Button.module.scss";

function Button({ children, variant = "primary", className = "", ...props }) {
    const variantClasses = {
        primary: styles.Button___primaryButton,
        secondary: styles.Button___secondaryButton,
        tertiary: styles.Button___tertiaryButton,
        cart: styles.Button__productCardButton,
    };

    const variantClass = variantClasses[variant] || variantClasses.primary;

    return (
        <button className={`${variantClass} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
