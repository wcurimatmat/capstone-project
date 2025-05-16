import Header from "../Components/Web/Header/Header";
import Footer from "../Components/Web/Header/Footer";

function WebLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default WebLayout;
