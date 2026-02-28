"use client"
import { useResetPassMutation } from "@/redux/apis/auth.api"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [resetPass, { isLoading }] = useResetPassMutation()
    const router = useRouter()

    const params = useSearchParams()
    const token = params.get("token")
    console.log(token)
    const handleResetPass = async () => {
        try {
            if (!token) {
                toast.error("token is required")
                return
            }
            if (password !== cpassword) {
                toast.error("password and confirm password should mathc")
                return
            }
            await resetPass({ password, token: token as string }).unwrap()
            toast.success("password reset success")
            router.push("/login")
        } catch (error) {
            console.log(error)
            toast.error("unable to process reset password")
        }
    }

    return <>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="enter new password" className="form-control my-2" />
        <input onChange={e => setCPassword(e.target.value)} type="password" placeholder="confirm password" className="form-control my-2" />
        <button disabled={isLoading} onClick={handleResetPass}>Reset Password</button>
    </>
}

export default ResetPassword