import Header from "../Components/User/Header/Header";
import Footer from "../Components/User/Footer/Footer";

function UserLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default UserLayout;
