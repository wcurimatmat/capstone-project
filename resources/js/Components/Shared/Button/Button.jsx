//styles
import styles from "./Button.module.scss";

function Button({ children, variant = "primary", className = "", ...props }) {
    const variantClasses = {
        primary: styles.Button__primaryButton,
        secondary: styles.Button__secondaryButton,
        tertiary: styles.Button__tertiaryButton,
        cart: styles.Button__productCardButton,
        icon: styles.Button__iconButton,
    };

    const variantClass = variantClasses[variant] || variantClasses.primary;

    return (
        <button className={`${variantClass} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
