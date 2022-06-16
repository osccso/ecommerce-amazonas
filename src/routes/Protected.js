import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({user,children}) => {
  console.log(user,"this is the USER")
  if (!user) return <Navigate to = "/" replace/>
  return children
}