import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

const fakeAuth = (username) =>
    new Promise((resolve) => {
        // simulasi mendapatkan user_id
        const users = {
            'admin': 'chill_user',
        };

        setTimeout(() => resolve({
            token: "2342f2f1d131rf12",
            userId: users[username] || '',
        }), 250);
    });

const AuthContext = createContext({
    token: "",
    userId: "",
    onLogin: () => { },
    onLogout: () => { },
});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(null);

    const handleLogin = async (username) => {
        const authData = await fakeAuth(username);

        setToken(authData.token);
        setUserId(authData.userId);

        const origin = location.state?.from?.pathname || '/';

        navigate(origin);
    };

    const handleLogout = () => {
        setToken("");
        setUserId(null);
    };

    const value = {
        token,
        userId,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
