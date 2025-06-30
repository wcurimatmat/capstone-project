// styles
import styles from "./Anchor.module.scss";

function Anchor({ children, variant = "primary", ...props }) {
    const variantClasses = {
        primary: styles.Anchor___primaryLink,
        secondary: styles.Anchor___secondaryLink,
    };

    const variantClass = variantClasses[variant] || variantClasses.primaryLink;

    return (
        <a className={`${variantClass}`} variant={variant} {...props}>
            {children}
        </a>
    );
}

export default Anchor;
