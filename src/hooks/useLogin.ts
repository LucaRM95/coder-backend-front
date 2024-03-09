import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  userActions,
  userSelector,
} from "../redux/reducers/sliceUser/sliceUsers";
import baseCoderApi from "../base/baseCoderApi";
import { Toast } from "../components/sweetAlert/Toast";

const useLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loginState = useSelector(userSelector);

  const onKeyPress = (evt: any) => {
    if (evt.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    dispatch(userActions.setLoading(true));
    if (loginData.email && loginData.password) {
      try {
        await baseCoderApi.post('auth/login', {
          email: loginData.email,
          password: loginData.password,
        });

        Cookies.set("is_logged", "OK");
        navigate("/");
      } catch (error: any) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
        dispatch(userActions.setLoading(false));
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "Los campos del login no pueden estar vacíos.",
      });
      dispatch(userActions.setLoading(false));
    }
  };

  return {
    loginData,
    user: loginState.user,
    loading: loginState.loading,

    handleLogin,
    setLoginData,
    onKeyPress,
  };
};

export default useLogin;
