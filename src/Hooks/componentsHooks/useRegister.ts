import { SubmitHandler, useForm } from "react-hook-form";
import { signUpSchema, signUpType } from "@/validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import actAuthRegister from "@/Store/Auth/act/actAuthRegister";
import { useEffect } from "react";
import { cleanErrorState } from "@/Store/Auth/authSlice";



const useRegister = () => {
    const { loading, error } = useAppSelector((state) => state.Auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<signUpType>({
        mode: "onBlur",
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit: SubmitHandler<signUpType> = (data) =>
        dispatch(
            actAuthRegister({
                email: data.email,
                firstname: data.firseName,
                lastname: data.lastName,
            })
        )
            .unwrap()
            .then(() => navigate("/login?message=account_created_successful"));


    useEffect(() => {
        dispatch(cleanErrorState())
    }, [dispatch])

    return { loading, error, register, handleSubmit, errors, onSubmit }
}

export default useRegister