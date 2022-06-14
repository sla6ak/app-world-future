import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
// import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer, Zoom } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>WORLD FUTURE</title>
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </>
    );
};

export default MyApp;
