import Link from "next/link";
import s from "./auth.module.css";
import { validationLoginSchema } from "./validation";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleEmail = (event: { target: { value: SetStateAction<string> } }) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event: { target: { value: SetStateAction<string> } }) => {
        setPassword(event.target.value);
    };
    const handleName = (event: { target: { value: SetStateAction<string> } }) => {
        setName(event.target.value);
    };

    const onSubmitLogin = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            const valid = await validationLoginSchema.validate({ email, password });
        } catch (error) {
            toast.warn(`${error}`);
        }
    };
    return (
        <main className={s.main}>
            <div className={s.list}>
                <h1 className={s.title}>Register please</h1>

                <Link href="/worldFuture">
                    <a className={s.home}>Home</a>
                </Link>
                <form onSubmit={onSubmitLogin} className={s.form}>
                    <label className={s.label}>
                        Full-name:
                        <input
                            required
                            type="text"
                            name="fullName"
                            value={name}
                            onChange={handleName}
                            className={s.textInput}
                        />
                    </label>
                    <label className={s.label}>
                        Email:
                        <input
                            required
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            className={s.textInput}
                        />
                    </label>
                    <label className={s.label}>
                        Password:
                        <input
                            required
                            type="text"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            className={s.textInput}
                        />
                    </label>
                    <input type="submit" value="Submit" className={s.saubmitButton} />
                </form>

                <p className={s.question}>
                    <span>Do you have login?</span>
                    <Link href="/worldFuture/auth/login">
                        <a className={s.linkLogin}>Login</a>
                    </Link>
                </p>
                {/* <Link href="/worldFuture/planet/1">
                    <a>Redirect to Planet</a>
                </Link> */}
            </div>
        </main>
    );
};
export default Registration;
