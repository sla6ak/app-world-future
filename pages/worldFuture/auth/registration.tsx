import Link from "next/link";

const Registration = () => {
    return (
        <>
            <h1>registration</h1>
            <p>
                <Link href="/worldFuture">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/worldFuture/auth/login">
                    <a>Login</a>
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
export default Registration;
