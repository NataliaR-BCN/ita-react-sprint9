import { BasicLayout, LogFormCard, Subtitol, TxtDestacat, FilaJustificada } from "../../styles/styles";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { DashboardButton } from "./../PetBoardFile/PetBoardFile.styled"


const PetFormConfirm = ({petNameAndSex}) => { 

    const { currentUser } = useAuth();

    const id = currentUser.uid+petNameAndSex.name;


    return (
       
      <BasicLayout> 
        <LogFormCard>
         <Subtitol>Confirmació</Subtitol>
          <h3>L'anunci de desaparició {petNameAndSex.sex === 'mascle' ? 'del' : 'de la'} {petNameAndSex.name} ja està publicat!</h3>
          <TxtDestacat>Esperem que aviat torni a ser a casa! ;)</TxtDestacat>
    
          <p>Què vols fer a continuació?</p> 
          <FilaJustificada>
              <Link to={`/mascota/${id}`}><DashboardButton>Veure l'anunci</DashboardButton></Link>
              <Link to="/dashboard"><DashboardButton>Anar a l'Àrea privada</DashboardButton></Link>
          </FilaJustificada>
         </LogFormCard>
      </BasicLayout>
    )
};


export default PetFormConfirm;