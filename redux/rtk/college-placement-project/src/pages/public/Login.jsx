import Input from '../../components/ui/Input'
import Center from './../../components/ui/Center'

const Login = () => {

    const obj = { name: "john", age: 20, city: "london" }
    const { name, ...x } = obj
    return <>
        <Center>
            <Input
                label="email"
                className="form-control"
                type="email"
                placeholder="john@example.com"
            />
            <Input
                label="password"
                className="form-control"
                type="password"
                placeholder="enter your secure password"
            />
        </Center >
    </>
}

export default Login