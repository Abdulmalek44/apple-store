import { SubmitHandler, useForm } from "react-hook-form";
import { signInSchema, signInType } from "@/validations/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import actAuthLogin from "@/Store/Auth/act/actAuthLogin";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useEffect } from "react";
import { cleanErrorState } from "@/Store/Auth/authSlice";

const useLogin = () => {
    const { loading, error } = useAppSelector((state) => state.Auth);
    const [searchParams, setSearchParams] = useSearchParams("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signInType>({
        mode: "onBlur",
        resolver: zodResolver(signInSchema),
    });

    const onSubmit: SubmitHandler<signInType> = (data) => {
        setSearchParams("");
        dispatch(actAuthLogin(data.email))
            .unwrap()
            .then(() => {
                navigate("/");
            });
    };

    useEffect(() => {
        dispatch(cleanErrorState())
    }, [dispatch])
    return { loading, error, searchParams, register, handleSubmit, errors, onSubmit }
}

export default useLogin