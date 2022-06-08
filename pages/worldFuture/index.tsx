import Link from "next/link";
import type { NextPage } from "next";
// import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <h1>Hello</h1>
            <p>
                <Link href="/worldFuture/auth/login">
                    <a>Login</a>
                </Link>
            </p>
            <p>
                <Link href="/worldFuture/auth/registration">
                    <a>Registration</a>
                </Link>
            </p>
            <p>
                <Link href="/">
                    <a>Licensia</a>
                </Link>
            </p>
        </>
    );
};

export default Home;
