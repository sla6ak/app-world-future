import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
                        "Helvetica Neue", sans-serif;
                    color: #212121;
                    background-color: rgb(250, 250, 250);
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                html {
                    box-sizing: border-box;
                    width: 100vw;
                    overflow-x: hidden;
                }
                img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
                *,
                *::before,
                *::after {
                    padding: 0px;
                    margin: 0px;
                    box-sizing: border-box;
                }

                a {
                    color: rgb(60, 110, 250);
                    text-decoration: none;
                    cursor: pointer;
                    :hover,
                    :focus,
                    :active {
                        text-decoration: underline;
                    }
                }
            `;
