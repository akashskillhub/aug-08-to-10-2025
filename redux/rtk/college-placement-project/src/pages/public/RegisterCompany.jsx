import React from 'react'
import Center from '../../components/ui/Center'
import Input from '../../components/ui/Input'

const RegisterCompany = () => {
    const fields = [
        { label: "name", placeholder: "enter name", type: "text" },
        { label: "email", placeholder: "enter email", type: "email" },
        { label: "logo", placeholder: "logo", type: "text" },
        { label: "address", placeholder: "address", type: "text" },
        { label: "mobile", placeholder: "mobile", type: "number" },
    ]
    return <>
        <Center>

            {
                fields.map(item => <Input className="form-control" {...item} />)
            }
        </Center>
    </>
}

export default RegisterCompany