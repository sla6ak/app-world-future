import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import CurentAuth from "../Components/CurentAyth/CurentAuth";
import { ToastContainer, Zoom } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <CurentAuth>
                        <Component {...pageProps} />
                    </CurentAuth>
                </PersistGate>
            </Provider>
        </>
    );
};

export default MyApp;
