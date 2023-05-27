import { getAuth } from "firebase/auth"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const allowAccess = getAuth().currentUser?.email !== undefined

    return allowAccess ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes