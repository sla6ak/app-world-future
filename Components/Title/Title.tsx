import React from "react";
import s from "./Title.module.css";

export default function Title({ children }: any) {
    return <h1 className={s.title}>{children}</h1>;
}
