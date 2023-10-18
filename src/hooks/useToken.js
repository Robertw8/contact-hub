import { useSelector } from "react-redux";
import { selectToken } from "../redux/auth/authSlice";

export const useToken = () => {
	const TOKEN = useSelector(selectToken);

	return TOKEN;
};
