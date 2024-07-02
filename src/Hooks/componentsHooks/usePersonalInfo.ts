import { SubmitHandler, useForm } from "react-hook-form";
import { userInfoSchema, userInfoType } from "@/validations/userInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { useEffect } from "react";
import { cleanErrorState, cleanUserInfo } from "@/Store/Auth/authSlice";
import actGetUserInfo from "@/Store/Auth/act/actGetUserInfo";
import actUpdateUserInfo from "@/Store/Auth/act/actUpdateUserInfo";



const usePersonalInfo = () => {
    const { loadingUpdate, loading, error, user } = useAppSelector((state) => state.Auth);
    const [searchParams, setSearchParams] = useSearchParams("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<userInfoType>({
        mode: "onBlur",
        resolver: zodResolver(userInfoSchema),
    });

    // Watch the email, firstName, and lastName fields
    const email = watch("email");
    const firstName = watch("firseName");
    const lastName = watch("lastName");

    // Determine if any of the fields are empty
    const isDisabled = !email && !firstName && !lastName;

    const onSubmit: SubmitHandler<userInfoType> = (data) => {
        setSearchParams("");
        dispatch(
            actUpdateUserInfo({
                email: data.email,
                firstname: data.firseName,
                lastname: data.lastName,
            })
        )
            .unwrap()
            .then(() => navigate("/profile?message=user_information_update_successful"));

    }
    useEffect(() => {
        dispatch(actGetUserInfo())
        return () => {
            dispatch(cleanUserInfo())
            dispatch(cleanErrorState())
        }
    }, [dispatch])

    return { loadingUpdate, loading, error, register, handleSubmit, errors, onSubmit, user, searchParams, isDisabled }
}

export default usePersonalInfo