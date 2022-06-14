import s from "./WelcomPage.module.css";

export default function WelcomePage({ children }: any) {
    return (
        <main className={s.main}>
            <div className={s.list}>{children}</div>
        </main>
    );
}
