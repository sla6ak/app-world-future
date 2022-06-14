import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetIsActivUserQuery } from "../../redux/authFetch";
import { isAuth } from "../../redux/sliceAuth";
import { toast } from "react-toastify";

export default function CurentAuth({ children }: any) {
    const token = useSelector((state: any) => state.token);
    const dispatch = useDispatch();
    const { data: auth, error } = useGetIsActivUserQuery("", { skip: !token });
    useEffect(() => {
        if (auth === undefined) {
            return;
        }
        dispatch(isAuth(auth.name));
    }, [auth, dispatch]);
    if (error) {
        toast.warn(`Login please`);
        console.log(error);
    }

    return <>{children}</>;
}
