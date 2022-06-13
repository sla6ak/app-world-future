import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>WORLD FUTURE</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
