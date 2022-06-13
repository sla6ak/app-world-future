import { useRouter } from "next/router";
import Link from "next/link";
import LayoutPlayer from "../../../Components/Layouts/LayoutPlayer";

const Planet = () => {
    const router = useRouter();
    return (
        <LayoutPlayer>
            <div>planet</div>
            {router.query.planetId}
            <p>
                <Link href="/worldFuture">
                    <a>Logout</a>
                </Link>
            </p>
        </LayoutPlayer>
    );
};
export default Planet;
