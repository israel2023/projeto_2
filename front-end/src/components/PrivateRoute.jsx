import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />
}
export default PrivateRoute
