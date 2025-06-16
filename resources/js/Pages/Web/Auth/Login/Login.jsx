import AppLogo from "/resources/assets/logo/rjs.png";
import FormField from "../../../../Components/Shared/Form/FormField/FormField";
import styles from "./Login.module.scss";

function Login() {
    return (
        <div className={styles.Login}>
            <header className={styles.Login__pageHeader}>
                <a href="">
                    <img src={AppLogo} alt="app logo" className={styles.Login__appLogoImage} />
                </a>
            </header>

            <main className={styles.Login__mainContent}>
                <div className={styles.Login__mainContentWrapper}>
                    <header className={styles.Login__mainContentHeader}>
                        <h1 className={styles.Login__headerTitle}>Sign In</h1>
                        <p className={styles.Login__headerCaption}>Hi, welcome back!</p>
                    </header>

                    <form action="" className={styles.Login__loginForm}>
                        <div className={styles.Login__loginFormWrapper}>
                            <FormField id="email" label="Email">
                                <input
                                    type="text"
                                    name="user-email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    className={styles.Login__formInput}
                                />
                            </FormField>

                            <FormField id="password" label="Password">
                                <input
                                    type="password"
                                    name="user-password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    className={styles.Login__formInput}
                                />
                            </FormField>

                            <div className={styles.Login__formGroup}>
                                <input type="checkbox" name="" id="" />
                                <label
                                    htmlFor=""
                                    className={styles.Login__formLabel}
                                >
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className={styles.Login__formSubmitButton}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className={styles.Login__pageFooter}>
                <p>
                    Don't have an account? <a href="" className={styles.Login__footerLink}>Sign Up</a>.
                </p>
            </footer>
        </div>
    );
}

export default Login;
