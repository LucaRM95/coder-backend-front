import styles from "../../assets/components/form/index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "@mui/material";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FormControlAtom from "../../assets/atoms/FormControlAtom";
import { AccountCircleRounded } from "@mui/icons-material";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin, loginData, setLoginData } = useLogin();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="" className={styles.container}>
      <div className={styles.fields_nogap}>
        <FormControlAtom
          text="Usuario"
          onChange={(evt: any) => {
            setLoginData({ ...loginData, email: evt?.target.value });
          }}
          htmlFor="outlined-user"
          type="text"
          label="User"
          icon={<AccountCircleRounded />}
        />
        <FormControlAtom
          text="Contraseña"
          htmlFor="outlined-password"
          onChange={(evt: any) => {
            setLoginData({ ...loginData, password: evt?.target.value });
          }}
          type="password"
          label="Password"
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />
      </div>
      <div className={styles.button_container}>
        <Button
          type="submit"
          className={styles.submit_button}
          onClick={(e: any) => {
            e.preventDefault();
            handleLogin();
          }}
          endIcon={<FontAwesomeIcon icon={faChevronRight} />}
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
