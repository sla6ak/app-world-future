import Link from "next/link";
import s from "./auth.module.css";
import { validationLoginSchema } from "./validation";
import * as yup from "yup";
import { SetStateAction, useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event: { target: { value: SetStateAction<string> } }) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event: { target: { value: SetStateAction<string> } }) => {
        setPassword(event.target.value);
    };

    const onSubmitRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            const valid = await validationLoginSchema.validate({ email, password });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className={s.main}>
            <div className={s.list}>
                <h1 className={s.title}>Login Please</h1>
                <Link href="/worldFuture">
                    <a className={s.home}>Home</a>
                </Link>
                <form onSubmit={onSubmitRegister} className={s.form}>
                    <label className={s.label}>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleEmail} className={s.textInput} />
                    </label>
                    <label className={s.label}>
                        Password:
                        <input
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
                    <Link href="/worldFuture/auth/registration">
                        <a className={s.linkLogin}>Registration</a>
                    </Link>
                </p>
                {/* <Link href="/worldFuture/planet/1">
                    <a>Redirect to Planet</a>
                </Link> */}
            </div>
        </main>
    );
};

export default LoginPage;
