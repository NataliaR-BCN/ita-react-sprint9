import { useState, useRef } from "react";
import { useAuth } from "./../../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LoginFormInput, LoginFormButton } from "./LoginRegister.styled";
import { BasicLayout, FilaCentrada, Subtitol, LogFormCard, Label, Feedback } from "./../../styles/styles";


const Login = () => {

  const location = useLocation();  
  const { from } = location.state || {};

  const [errorMessage, setErrorMessage] = useState("");


  const { login } = useAuth();


  const logEmail = useRef();
  const logPwd = useRef();
  const navigate = useNavigate();


  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(logEmail.current.value, logPwd.current.value);
      navigate(from?.pathname || "/dashboard", { replace: true, state: {from : location} });
    } catch (error) {
      if (error.message.includes("auth/user-not-found")) {
      setErrorMessage("Aquest usuari no existeix. Registra't, si us plau.");
      } else if (error.message.includes("auth/wrong-password")) {
      setErrorMessage("La contrasenya és incorrecta.");
      }
    }
  }


  return (
    <BasicLayout>
        <LogFormCard onSubmit={handleLogin}>
          <FilaCentrada><Subtitol>Inici de sessió</Subtitol></FilaCentrada>
          {from?.pathname && <Feedback>És necessari disposar d'un compte per poder publicar un anunci</Feedback>}
          <p><strong>Accedeix al teu compte:</strong></p>
          <Label htmlFor="logEmail">Introdueix l'adreça electrònica</Label>
          <LoginFormInput placeholder="Correu electrònic" id="logEmail" type="email" ref={logEmail} />
          <Label htmlFor="logPwd">Introdueix la contrasenya</Label>
          <LoginFormInput placeholder="Contrasenya" id="logPwd" type="password" ref={logPwd} />
          <LoginFormButton>Inicia sessió</LoginFormButton>
          {errorMessage !== "" && <Feedback>{errorMessage}</Feedback>}
          <p>Encara no tens compte? <Link to="/registre" state={{from}}>Registra't</Link></p>
        </LogFormCard>
    </BasicLayout>
    
  )

};

export default Login;