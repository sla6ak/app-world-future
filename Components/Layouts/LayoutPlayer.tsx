import s from "./LayoutPlayer.module.css";

export default function LayoutPlayer(children: any) {
    return <div className={s.gameWindow}>{children}</div>;
}
