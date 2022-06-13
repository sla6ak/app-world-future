import Link from "next/link";
import s from "./auth.module.css";

const LoginPage = () => {
    return (
        <main className={s.main}>
            <div className={s.list}>
                <h1 className={s.title}>Login Please</h1>
                <Link href="/worldFuture">
                    <a className={s.home}>Home</a>
                </Link>
                <p>
                    <span>Do you have login?</span>
                    <Link href="/worldFuture/auth/registration">
                        <a>Registration</a>
                    </Link>
                </p>
                <p>
                    <Link href="/worldFuture/planet/1">
                        <a>Redirect to Planet</a>
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default LoginPage;
