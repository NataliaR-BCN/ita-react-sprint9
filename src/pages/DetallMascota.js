import { useEffect, useState } from "react";
import { Container, Titol, NavigationButton, BasicContainer } from "../styles/styles";
import PetCardDetail from "../components/PetCard/PetCardDetail";
import { useParams } from "react-router-dom";
import { readPetInDatabaseById } from "./../services/pets";
import { useNavigate } from 'react-router-dom';


const DetallMascota = ( ) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [petData, setPetData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function retrievePetData() {
            try {        
            const petDataInDatabase = await readPetInDatabaseById(id);
            setPetData(petDataInDatabase);
            setLoading(false);
            } catch (error) {
                console.log(error.message);
            }   
        }   
        
        retrievePetData();
    }, [id]);

    
    return (    
        <>
        {loading && <>Carregant dades</>}
            {!loading && petData ?
        <Container>
           <Titol>Fitxa completa</Titol>
           <NavigationButton onClick={() => navigate(-1)}>Torna enrere</NavigationButton>
           <BasicContainer>
                <PetCardDetail petData={petData}></PetCardDetail>
           </BasicContainer>
        </Container> : null
        }
        </>
    )
};


export default DetallMascota;