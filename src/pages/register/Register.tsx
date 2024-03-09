import { NavLink } from "react-router-dom";
import styles from "../../assets/components/register/index.module.scss";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Registrate</h1>
        <RegisterForm />
        <div className={styles.navlink}>
          <p>¿Ya tienes cuenta?</p>
          <NavLink to="/login">Logeate</NavLink>
        </div>
        <NavLink to="#">¿Olvidaste tu contraseña?</NavLink>
      </div>
      <div className={styles.image_container}></div>
    </div>
  );
};

export default Register;
