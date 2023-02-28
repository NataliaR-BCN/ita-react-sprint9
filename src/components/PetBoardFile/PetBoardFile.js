import { useState } from "react";
import { PetBoardFileCard, PetFile, PetAvatar, DashboardButton, DeleteButton } from "./PetBoardFile.styled";
import { FilaJustificada, TxtDestacat, FeedbackCard, BasicContainer, ConfirmButton, RejectButton } from "./../../styles/styles";
import { deletePetInDatabase } from "./../../services/pets";
import { Link } from "react-router-dom";


const PetBoardFile = ({pet, setDeletedPet}) => {

    const [showConfirmMessage, setShowConfirmMessage] = useState(false);

    const id = pet.userOwnerId+pet.petName;

    function deletePet() {

        setShowConfirmMessage(true);
        
        try {
            deletePetInDatabase(pet.userOwnerId, pet.petName);
            setDeletedPet(true);
            setShowConfirmMessage(false);
   
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        
        <PetBoardFileCard>
            <PetFile>
        
                {pet.petImages && pet.petImages.length > 0 && <PetAvatar src={pet.petImages[0]} alt={pet.petName} />}
                <div>
                <TxtDestacat>{pet.petName}</TxtDestacat>
                {pet.isLost ? <>{pet.petSex === "mascle" ? <>Perdut</> : <>Perduda</>} el {pet.petLostDate}</> : <>No {pet.petSex === "mascle" ? <>perdut (no publicat)</> : <>perduda (no publicada)</>} </>}</div>
                    <Link to={`/mascota/${id}`} >
                    <DashboardButton>Consulta fitxa</DashboardButton>
                    </Link>
                    {!showConfirmMessage ? 
                    <DeleteButton onClick={(e) => setShowConfirmMessage(true)}>Elimina mascota</DeleteButton> : 
                    <FeedbackCard>
                        <BasicContainer>
                            Estàs a punt d'eliminar la mascota de la base de dades i aquesta acció no es pot desfer.
                            <FilaJustificada>
                                <ConfirmButton onClick={(e) => deletePet()}>Sí, esborra</ConfirmButton>
                                <RejectButton onClick={(e) => setShowConfirmMessage(false)}>No, cancel·la</RejectButton>
                            </FilaJustificada>
                        </BasicContainer>
                    </FeedbackCard> }    
            </PetFile>
        </PetBoardFileCard>
    )
};

export default PetBoardFile;