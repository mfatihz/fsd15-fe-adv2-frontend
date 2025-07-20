import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";

const Logout = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login');
  }, [onLogout, navigate]);

  return null; // No UI needed
};

export default Logout;
