"use client"
import { useForgetPassMutation, useSendOTPMutation, useSigninMutation, useVerifyOTPMutation } from '@/redux/apis/auth.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import z from 'zod'

const Login = () => {
    const [show, setShow] = useState(true)
    return <>
        {
            show
                ? <LoginWithEmailPassword show={show} setShow={setShow} />
                : <LoginWithOTP show={show} setShow={setShow} />
        }


    </>
}

const LoginWithEmailPassword = ({ show, setShow }: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [username, setUsername] = useState("")
    const [forgetPass] = useForgetPassMutation()

    const router = useRouter()
    const [signin] = useSigninMutation()
    const userSchema = z.object({
        email: z.string().min(1),
        password: z.string().min(1),
    })
    type UserType = z.infer<typeof userSchema>
    const { register, reset, handleSubmit } = useForm<UserType>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(userSchema)
    })

    const handleLogin = async (data: UserType) => {
        try {
            await signin(data).unwrap()
            toast.success("login success")
            console.log("login success")
            router.push("/admin")
            reset()
        } catch (error) {
            console.log(error)
            toast.error("unable to login")
        }
    }

    const handleForgetPassword = async () => {
        try {
            await forgetPass({ username }).unwrap()
            toast.success("reset link send to email")
        } catch (error) {
            console.log(error)
            toast.error("unable to process forget password")
        }
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <input {...register("email")} type="email" placeholder='email@example.com' className='form-control my-2' />
                                <input {...register("password")} type="password" placeholder='password' className='form-control my-2' />
                                <button type='submit' className='btn btn-primary w-100'>Login</button>
                                <p className='text-center mt-3 '>
                                    <button type='button' data-bs-toggle="modal" data-bs-target="#forgetPass" className='btn btn-link'>Forget Password</button>
                                    <button className='btn btn-link' onClick={e => setShow(!show)}>Login with OTP</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* modal start */}
        <div className="modal fade" id='forgetPass'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">Forget Password</div>
                    <div className="modal-body">
                        {/* <form> */}
                        <input onChange={e => setUsername(e.target.value)} type="text" className='form-control' placeholder='enter email / password' />
                        <button data-bs-dismiss="modal" onClick={handleForgetPassword} type='submit' className='btn btn-primary w-100 btn-lg mt-3'>Send Link</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
        {/* modal end */}
    </>
}
const LoginWithOTP = ({ show, setShow }: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [sendOTP, { isSuccess, isLoading }] = useSendOTPMutation()
    const [verifyOTP] = useVerifyOTPMutation()
    const router = useRouter()

    const userSchema = z.object({
        username: z.string().min(1),
        otp: z.string().optional(),
    })
    type UserType = z.infer<typeof userSchema>
    const { register, reset, handleSubmit } = useForm<UserType>({
        defaultValues: {
            username: "",
            otp: "",
        },
        resolver: zodResolver(userSchema)
    })

    const handleLogin = async (data: UserType) => {
        try {
            if (isSuccess) {
                await verifyOTP(data).unwrap()
                toast.success("otp verify success")
                reset()
                router.push("/admin")
            } else {
                await sendOTP(data).unwrap()
                toast.success("otp send succes")
            }

            // reset()
        } catch (error) {
            console.log(error)
            toast.error("unable to login")
        }
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login With OTP</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>

                                {
                                    isSuccess
                                        ? <input {...register("otp")} type="text" placeholder='enter otp' className='form-control my-2' />
                                        : <input {...register("username")} type="text" placeholder='enter email or mobile' className='form-control my-2' />
                                }

                                <button disabled={isLoading} type='submit' className='btn btn-primary w-100'>
                                    {
                                        isSuccess
                                            ? "Verify OTP"
                                            : "Send OTP"
                                    }
                                    {isLoading && <div className='spinner spinner-border'></div>}
                                </button>
                                <p className='text-center mt-3 '>
                                    <button className='btn btn-link' onClick={e => setShow(!show)}>Login with Email Password</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login