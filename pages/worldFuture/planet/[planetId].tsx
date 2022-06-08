import { useRouter } from "next/router";

export default function Planet() {
    const router = useRouter();
    console.log(router.query.planetId);
    return (
        <>
            <div>planet</div>
            {router.query.planetId}
        </>
    );
}
