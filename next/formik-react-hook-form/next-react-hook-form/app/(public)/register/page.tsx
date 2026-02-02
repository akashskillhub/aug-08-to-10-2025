"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const register = () => {
    const userSchema = z.object({
        name: z.string().min(1, "name is required"),
        email: z.string().min(1),
        mobile: z.string().min(1),
        password: z.string().min(1),
        cpassword: z.string().min(1),
    })
    type FormType = z.infer<typeof userSchema>

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormType>({
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: "",
        },
        resolver: zodResolver(userSchema)
    })

    const handleRegister = (data: FormType) => {
        console.log(data)
        reset()
    }


    return <>
        <form onSubmit={handleSubmit(handleRegister)}>
            <input {...register("name")} type="text" placeholder="name" />
            <div>{errors && errors.name?.message}</div>

            <input {...register("email")} type="text" placeholder="email" />
            <div>{errors && errors.email?.message}</div>

            <input {...register("mobile")} type="text" placeholder="mobile" />
            <div>{errors && errors.mobile?.message}</div>

            <input {...register("password")} type="text" placeholder="password" />
            <div>{errors && errors.password?.message}</div>

            <input {...register("cpassword")} type="text" placeholder="cpassword" />
            <div>{errors && errors.cpassword?.message}</div>
            <button type="submit">Register</button>
        </form>
    </>
}

export default register