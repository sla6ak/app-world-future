import Link from "next/link";
import type { NextPage } from "next";
import s from "./Name.module.css";
// import Head from "next/head";

const Home: NextPage = () => {
    return (
        <main className={s.main}>
            <div className={s.list}>
                <h1 className={s.title}>Hello</h1>
                <p className={s.text}>
                    You see this page because I didn&#39;t recognize you. If this is not your first time here, you can
                    save the page in the browser so that it is easier for me to recognize you next time.
                </p>
                <div className={s.memuLink}>
                    <Link href="/worldFuture/auth/login">
                        <a className={s.linkStart}>Login</a>
                    </Link>
                    <Link href="/worldFuture/auth/registration">
                        <a className={s.linkStart}>Registration</a>
                    </Link>
                </div>
                <div className={s.back}>
                    <p>I want to read the agreement again:</p>
                    <Link href="/">
                        <a>Licensia</a>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
