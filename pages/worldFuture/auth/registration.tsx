import Link from "next/link";
import s from "./auth.module.css";

const Registration = () => {
    return (
        <main className={s.main}>
            <div className={s.list}>
                <h1 className={s.title}>Register please</h1>

                <Link href="/worldFuture">
                    <a className={s.home}>Home</a>
                </Link>

                <p>
                    <span>Do you have register?</span>
                    <Link href="/worldFuture/auth/login">
                        <a>Login</a>
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
export default Registration;
