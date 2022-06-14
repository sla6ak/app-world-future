import s from "./licensia.module.css";
import Link from "next/link";
import { useState } from "react";
import Title from "../Components/Title/Title";
import WelcomePage from "../Components/WelcomePage/WelcomePage";

const Docs = () => {
    const [agry, setAgry] = useState(false);
    const agryClick = () => {
        setAgry(true);
    };
    return (
        <WelcomePage>
            <Title>
                Welcome to my game <span className={s.heroy}>&#34;WORLD-FUTURE&#34;</span>!
            </Title>
            <h2 className={s.titleMin}>This is licensia for player</h2>
            <p className={s.text}>
                i can full controls this game and apgreding anything. You should not expect that the game will always
                meet your desires. By signing this agreement, you have the right to immerse yourself in the game world
                within the framework of the developer&#39;s intention and without infringing on the same rights of other
                users of the game. For violation of the rules of the game established by the developer, any player may
                be held liable both in-game and legally. The player can be either temporarily blocked or removed from
                the server without the possibility of recovery. All in-game purchases are considered as payment for your
                leisure time and cannot be refunded. Have a nice game!
            </p>
            <div className={s.checked}>
                {!agry ? (
                    <p>
                        <button className={s.yes} onClick={agryClick}>
                            yes
                        </button>
                        <span>I have read and agree</span>
                    </p>
                ) : (
                    <Link href="/worldFuture">
                        <a className={s.linkStart}>Start game</a>
                    </Link>
                )}
            </div>
        </WelcomePage>
    );
};
export default Docs;
