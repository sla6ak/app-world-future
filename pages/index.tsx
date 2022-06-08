import Link from "next/link";
export default function Docs() {
    return (
        <>
            <h1>Welcome to my game!</h1>
            <h2>This is licensia</h2>
            <p>i can full controls this game and apgreding anything</p>
            <Link href="/worldFuture">
                <a>Start game</a>
            </Link>
        </>
    );
}
