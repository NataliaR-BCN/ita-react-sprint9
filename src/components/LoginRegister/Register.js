import { useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginFormInput, LoginFormButton } from "./LoginRegister.styled";
import { BasicLayout, FilaCentrada, Subtitol, LogFormCard, FilaJustificada, Label, TxtAddicional, Feedback } from "./../../styles/styles";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Register = () => {

  const location = useLocation();
  const { from } = location.state || {};
  
  const [errorMessage, setErrorMessage] = useState("");

  const userEmail = useRef();
  const userPwd = useRef();
  const navigate = useNavigate();
  
  const { signup } = useAuth();
 
  async function handleCreateUser(e) {
    e.preventDefault();
  
    try {
      await signup(userEmail.current.value, userPwd.current.value);
      navigate('/dashboard', {state: {from : location}});
    } catch (error) {
      if (error.message.includes("auth/email-already-in-use")) {
        setErrorMessage("Aquest usuari ja existeix.");
      }
    }
  }


  return (

    <BasicLayout>
      <LogFormCard onSubmit={handleCreateUser}>
      <FilaCentrada><Subtitol>Registre</Subtitol></FilaCentrada>
          <p><strong>Introdueix les teves dades:</strong></p>
          <Label htmlFor="userEmail">Adreça electrònica:</Label>
          <LoginFormInput placeholder="Correu electrònic" id="userEmail" type="email" ref={userEmail} />
          <FilaJustificada>
            <Label htmlFor="userPwd">Contrasenya:</Label>
            <TxtAddicional>*Mínim 6 caràcters</TxtAddicional>
          </FilaJustificada>
          <LoginFormInput placeholder="Contrasenya" id="userPwd" type="password" ref={userPwd} minLength="6" />
          <LoginFormButton>Registra't</LoginFormButton>
          {errorMessage !== "" && <Feedback>{errorMessage}</Feedback>}
          <p>Ja tens un compte creat? <Link to="/login" state={{from}}>Inicia sessió</Link></p>
      </LogFormCard>
    </BasicLayout>
      
  )

};

export default Register;