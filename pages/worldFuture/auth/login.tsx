import Link from "next/link";
import s from "./auth.module.css";
import { validationLoginSchema } from "../../../utilits/validation";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Title from "../../../Components/Title/Title";
import WelcomePage from "../../../Components/WelcomePage/WelcomePage";
import { useLoginUserMutation } from "../../../redux/authFetch";
import { isAuth, newToken } from "../../../redux/sliceAuth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [createUser, { isError }] = useLoginUserMutation();

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
            toast.warn(`${error}`);
            return;
        }
        const send = { email: email, password: password };
        const responsLogin = await createUser(send);
        // console.log(responsLogin);
        if (responsLogin.error?.status === 404) {
            toast.error("User not found");
            return;
        }
        if (responsLogin.data) {
            dispatch(newToken(responsLogin.data.token));
            dispatch(isAuth(responsLogin.data.user.name));
            toast.success("Succesful login user!");
        }
    };

    return (
        <WelcomePage>
            <Title>Login Please</Title>
            <Link href="/worldFuture">
                <a className={s.home}>Home</a>
            </Link>
            <form onSubmit={onSubmitRegister} className={s.form}>
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
                <span>You don&#39;t have a login?</span>
                <Link href="/worldFuture/auth/registration">
                    <a className={s.linkLogin}>Registration</a>
                </Link>
            </p>
            {/* <Link href="/worldFuture/planet/1">
                    <a>Redirect to Planet</a>
                </Link> */}
        </WelcomePage>
    );
};

export default LoginPage;
