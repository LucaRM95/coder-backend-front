import styles from "../../assets/components/form/index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  AccountCircleRounded,
  AlternateEmailRounded,
  HomeRounded,
} from "@mui/icons-material";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FormControlAtom from "../../assets/atoms/FormControlAtom";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form action="" className={styles.container}>
      <div className={styles.fields_gap}>
        <FormControlAtom
          text="Usuario"
          htmlFor="outlined-user"
          type="text"
          label="User"
          icon={<AccountCircleRounded />}
        />
        <FormControlAtom
          text="Email"
          htmlFor="outlined-email"
          type="email"
          label="Email"
          icon={<AlternateEmailRounded />}
        />
        <FormControlAtom
          text="Dirección"
          htmlFor="outlined-address"
          type="text"
          label="Address"
          icon={<HomeRounded />}
        />
        <FormControlAtom
          text="Localidad"
          htmlFor="outlined-location"
          type="text"
          label="Location"
          icon={<HomeRounded />}
        />
        <FormControlAtom
          text="Contraseña"
          htmlFor="outlined-password"
          type="password"
          label="Password"
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />
        <FormControlAtom
          text="Confirmar contraseña"
          htmlFor="outlined-confirm-password"
          type="password"
          label="Confirm-password"
          handleShowPassword={handleShowConfirmPassword}
          showPassword={showConfirmPassword}
        />
      </div>
      <div className={styles.button_container}>
        <div className={styles.submit_button}>
          <Button
            type="submit"
            className={styles.submit_button__input}
            endIcon={<FontAwesomeIcon icon={faChevronRight} />}
          >
            REGISTRATE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
