import type { AppProps } from "next/app";
import { GlobalStyle } from "./global.styled";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
