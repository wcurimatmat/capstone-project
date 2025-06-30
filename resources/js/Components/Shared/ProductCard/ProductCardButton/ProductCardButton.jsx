// component
import Button from "../../Button/Button";

function ProductCardButton({ children, ...props }) {
    return <Button variant="cart">{children}</Button>;
}

export default ProductCardButton;
