import Link from "next/link";

const LoginPage = () => {
    return (
        <>
            <h1>Login Pages</h1>
            <p>
                <Link href="/worldFuture">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/worldFuture/auth/registration">
                    <a>Registration</a>
                </Link>
            </p>
            <p>
                <Link href="/worldFuture/planet/1">
                    <a>Redirect to Planet</a>
                </Link>
            </p>
        </>
    );
};

export default LoginPage;
