import { Navigate } from "react-router-dom"

export const UnprotectedRoute = ({user,children}) => {
  if (!user) return children
  return <Navigate to = "/"/>
}