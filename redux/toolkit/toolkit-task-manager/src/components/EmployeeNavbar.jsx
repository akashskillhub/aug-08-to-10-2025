import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { empSignout } from '../redux/slices/auth.slice'

const EmployeeNavbar = () => {
    //         👇 slice                             👇 store
    const { employee } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <Link to="/employee" class="navbar-brand" >Employee Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/employee" class="nav-link active">Dashboard</Link>
                    </div>
                </div>
                {
                    employee && <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            <img src={employee.photo} height={30} width={30} className='rounded-circle' alt="" />
                            <span className='ms-2'>{employee.name}</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Action</a></li>
                            <li><a class="dropdown-item">Another action</a></li>
                            <li><button onClick={e => dispatch(empSignout())} class="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
}

export default EmployeeNavbar