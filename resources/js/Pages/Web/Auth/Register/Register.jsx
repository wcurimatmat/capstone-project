import AppLogo from "/resources/assets/logo/rjs.png";
import FormField from "../../../../Components/Shared/Form/FormField/FormField";
import styles from "./Register.module.scss";

function Register() {
    return (
        <div className={styles.Register}>
            <header className={styles.Register__pageHeader}>
                <a href="">
                    <img
                        src={AppLogo}
                        alt="app logo"
                        className={styles.Register__appLogoImage}
                    />
                </a>
            </header>

            <main className={styles.Register__mainContent}>
                <div className={styles.Register__mainContentWrapper}>
                    <header className={styles.Register__mainContentHeader}>
                        <h1 className={styles.Register__headerTitle}>
                            Sign Up
                        </h1>
                        <p className={styles.Register__headerCaption}>
                            Enter required credentials for account creation.
                        </p>
                    </header>

                    <form action="" className={styles.Register__registerForm}>
                        <div className={styles.Register__registerFormWrapper}>
                            <FormField id="first-name" label="First Name">
                                <input
                                    type="text"
                                    name="user-first-name"
                                    id="first-name"
                                    placeholder="Lewellyn"
                                    className={styles.Register__formInput}
                                />
                            </FormField>
                            <FormField id="last-name" label="Last Name">
                                <input
                                    type="text"
                                    name="user-last-name"
                                    id="last-name"
                                    placeholder="Mercado"
                                    className={styles.Register__formInput}
                                />
                            </FormField>
                            <FormField id="email" label="Email">
                                <input
                                    type="text"
                                    name="user-email"
                                    id="email"
                                    placeholder="lewellyn.mercado@example.com"
                                    className={styles.Register__formInput}
                                />
                            </FormField>
                            <FormField id="password" label="Password">
                                <input
                                    type="password"
                                    name="user-password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    className={styles.Register__formInput}
                                />
                            </FormField>

                            <button
                                type="submit"
                                className={styles.Login__formSubmitButton}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className={styles.Register__pageFooter}>
                <p>
                    By creating an account, you agree to our{" "}
                    <a href="" className={styles.Register__footerLink}>Terms & Conditions</a> and{" "}
                    <a href="" className={styles.Register__footerLink}>Privacy Policy</a>
                </p>

                <p>
                    Already have an account?{" "}
                    <a href="" className={styles.Register__footerLink}>
                        Sign In
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
}

export default Register;
