import { useEffect, useState } from "react";
import { useStateValue } from "src/StateProvider";
import PropTypes from "prop-types";
//import SplashScreen from "../components/SplashScreen";
import authService from "src/services/authService";

function Auth({ children }) {
  const [{}, dispatch] = useStateValue();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = await authService.loginInWithToken();
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }

      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return "Loading...";
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
