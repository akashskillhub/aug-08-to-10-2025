import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const EmployeeProtected = ({ children }) => {
    const { employee } = useSelector(state => state.auth)
    return employee ? children : <Navigate to="/login" />
}

export default EmployeeProtected