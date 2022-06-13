import s from "./LayoutPlayer.module.css";
import type { AppProps } from "next/app";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function LayoutPlayer(
    children: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment
) {
    return <div className={s.gameWindow}>{children}</div>;
}
