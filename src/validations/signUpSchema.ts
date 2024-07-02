import { z } from "zod"


const signUpSchema = z.object({
    firseName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "last name is required" }),
    email: z.string().min(10, { message: "Email address is required" }).email(),
    password: z.string().min(8, { message: "Password is required" })
        .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, { message: "Password should contain at least 1 special character", }),
    confirmPassword: z.string().min(8, { message: "Confirm password is required" })
})
    .refine((input) => input.password === input.confirmPassword, {
        message: "Password and Confirm Password does not match",
        path: ["confirmPassword"],
    })
type signUpType = z.infer<typeof signUpSchema>
export { signUpSchema, type signUpType }