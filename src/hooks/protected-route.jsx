import { Navigate, useLocation } from "react-router";
import { useAuth } from "./auth";


export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}