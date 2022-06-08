import { useRouter } from "next/router";
import Link from "next/link";

export default function Planet() {
    const router = useRouter();
    return (
        <>
            <div>planet</div>
            {router.query.planetId}
            <p>
                <Link href="/worldFuture">
                    <a>Logout</a>
                </Link>
            </p>
        </>
    );
}
