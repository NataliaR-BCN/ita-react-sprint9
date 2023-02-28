import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { createUserInDatabase, readUserInDataBase, updateUserInDatabase } from "../../services/users";
import { CenteredLayout, BasicInput, NavigationButton, BasicContainer, FilaCentrada, BasicButton } from "./../../styles/styles";


const UserDashboard = ({from, setUserNameExists}) => {

  const { logout, currentUser } = useAuth();

  const inputUserName = useRef();

  const [ userName, setUserName ] = useState(null);

  useEffect(() => {

    if (from && from.pathname === "/registre") {
      createUserInDb();
      setUserNameExists(false)
    } else {
      findUserInDb();
    }

  }, []);


  const updateUserInDb = () => {
      try {
       updateUserInDatabase(inputUserName.current.value, currentUser.uid)
       
        setUserName(inputUserName.current.value);
          setUserNameExists(true);
      } catch (error) {
        console.log(error.message);
      }
  }


  const findUserInDb = async () => {
      try {
        const userExists = await readUserInDataBase(currentUser.uid);
        
        if(userExists.name !== "") {
          setUserName(userExists.name);
          setUserNameExists(true);}
      } catch (error) {
        console.log(error.message);
      }
  }


  async function createUserInDb() {

    try{
      await createUserInDatabase(currentUser.uid, currentUser.email);
      findUserInDb();
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleLogout() {
    logout();
  }

  return (
  <>   
    <CenteredLayout>    
      <NavigationButton onClick={handleLogout} >Desconnecta't</NavigationButton> 
      {!userName &&
        <div>Estàs connectat amb el correu <strong>{currentUser && currentUser.email}</strong><br /><br />  
          <BasicContainer>
            <label htmlFor="inputUserName">Per favor, indica el teu nom:</label>
            <FilaCentrada>
              <BasicInput placeholder="Nom" id="inputUserName" type="text" ref={inputUserName} />
              <BasicButton onClick={updateUserInDb}>Continua</BasicButton>
            </FilaCentrada>
          </BasicContainer>
        </div>
      }

      {userName && 
        <div> Hola <strong>{userName}</strong>, estàs loguejat amb el correu: <strong>{currentUser && currentUser.email}</strong></div>
      }
    </CenteredLayout>
  </>
  )

};

export default UserDashboard;