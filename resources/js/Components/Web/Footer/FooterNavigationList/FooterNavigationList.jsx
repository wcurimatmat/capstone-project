import styles from "./FooterNavigationList.module.scss";

function FooterNavigationList({ children, ...props }) {
    return (
        <nav>
            <ul role="list" {...props}>
                {children}
            </ul>
        </nav>
    );
}

export default FooterNavigationList;
