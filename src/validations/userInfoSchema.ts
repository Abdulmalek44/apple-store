import { z } from "zod";

const userInfoSchema = z.object({
    firseName: z.string(),
    lastName: z.string(),
    email: z.string(),
})

type userInfoType = z.infer<typeof userInfoSchema>
export { userInfoSchema, type userInfoType }