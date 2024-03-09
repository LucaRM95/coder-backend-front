import { NavLink } from "react-router-dom";
import styles from "../../assets/components/login/index.module.scss";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Inicia Sesión</h1>
        <LoginForm />
        <div className={styles.navlink}>
          <p>¿No tienes cuenta?</p>
          <NavLink to="/register">Registrate</NavLink>
        </div>
        <NavLink to="#">¿Olvidaste tu contraseña?</NavLink>
      </div>
      <div className={styles.image_container}></div>
    </div>
  );
};

export default Login;
