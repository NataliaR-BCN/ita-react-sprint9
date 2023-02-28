import { useEffect, useState } from "react";
import { readUserPetsInDatabase } from "./../../services/pets";
import { useAuth } from "./../../contexts/AuthContext";
import PetBoardFile from "../PetBoardFile/PetBoardFile";
import { Subtitol, BasicContainer, ContainDiv, FeedbackCard, HomeButton } from "./../../styles/styles";
import { Link } from "react-router-dom";



const PetsBoard = () => {

    const { currentUser } = useAuth();
    const [userPets, setUserPets] = useState([]);

    const [deletedPet, setDeletedPet] = useState(false);

    //Get user's pets from Firebase :  
    useEffect(() => {

        async function getUserPets() {

            try {
                const arrayUserPets = await readUserPetsInDatabase(currentUser.uid);
                setUserPets(arrayUserPets);
            } catch (error) {
                console.log(error.message);
            }
        } 
        getUserPets();

    }, [deletedPet]);

return (
    <BasicContainer>
        {userPets.length > 0 ? 
                <ContainDiv> 
                    <Subtitol>Tens registrades les següents mascotes:</Subtitol> 
                    {userPets.map((pet, index) => <PetBoardFile pet={pet} setDeletedPet={setDeletedPet} key={index}></PetBoardFile>)}
                </ContainDiv>
            : <ContainDiv> 
                <FeedbackCard>
                <h4>Ara mateix no tens registrada cap mascota</h4>
                <Link to="/formulari_mascota"><HomeButton>Dona d'alta la teva mascota</HomeButton></Link>
                </FeedbackCard>
            </ContainDiv>
        }
    </BasicContainer>
)

};

export default PetsBoard;