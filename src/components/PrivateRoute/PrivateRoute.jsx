import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
	const { isLoggedIn } = useAuth();
};
