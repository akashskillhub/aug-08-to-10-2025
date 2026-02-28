"use client"

import { useSignupMutation } from '@/redux/apis/auth.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
const Register = () => {
    const [singup] = useSignupMutation()

    const userSchema = z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        mobile: z.string().min(1),
        password: z.string().min(1),

    })

    type UserType = z.infer<typeof userSchema>

    const { register, reset, handleSubmit } = useForm<UserType>({
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
        },
        resolver: zodResolver(userSchema)
    })

    const handleRegister = async (data: UserType) => {
        try {
            await singup(data).unwrap()
            console.log("register success")
            reset()
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleRegister)}>
                                <input {...register("name")} className='form-control my-2' type="text" placeholder='name' />
                                <input {...register("email")} className='form-control my-2' type="email" placeholder='email' />
                                <input {...register("mobile")} className='form-control my-2' type="number" placeholder='mobile' />
                                <input {...register("password")} className='form-control my-2' type="password" placeholder='password' />
                                <button className='btn btn-primary w-100' type='submit'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Register