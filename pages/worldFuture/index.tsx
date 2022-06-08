import Link from "next/link";
import type { NextPage } from "next";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";

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
        </>
        // <div className={styles.container}>
        //     <Head>
        //         <title>Welcome</title>
        //         <meta name="description" content="Game app" />
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>

        //     <main className={styles.main}>
        //         <h1 className={styles.title}>Welcome to Next.js!</h1>

        //         <div className={styles.grid}>My app</div>
        //     </main>

        //     <footer className={styles.footer}>
        //         <p>Good by</p>
        //     </footer>
        // </div>
    );
};

export default Home;
