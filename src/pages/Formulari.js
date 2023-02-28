import { useState } from "react";
import PetForm from "../components/PetForm/PetForm";
import PetFormImages from "../components/PetForm/PetFormImages";
import PetFormLostData from "../components/PetForm/PetFormLostData";
import PetFormConfirm from "../components/PetForm/PetFormConfirm";
import { Navigate, useLocation } from "react-router-dom"; 
import { useAuth } from "./../contexts/AuthContext";
import { Container, Titol } from "../styles/styles";


const Formulari = () => {

    const [paginaForm, setPaginaForm] = useState('Dades generals');

    const [petNameAndSex, setPetNameAndSex] = useState({name: "", sex: ""});

    const { currentUser } = useAuth();
    const location = useLocation();
 
    if (!currentUser || (currentUser && currentUser.email === '')) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return (
        <Container>
            <Titol>
                Dades de la mascota
            </Titol>
            { paginaForm === 'Dades generals' && <PetForm setPaginaForm={setPaginaForm} setPetNameAndSex={setPetNameAndSex} /> }
            { paginaForm === 'Carrega imatge' && <PetFormImages setPaginaForm={setPaginaForm} petNameAndSex={petNameAndSex} /> }
            { paginaForm === 'Dades pèrdua' && <PetFormLostData setPaginaForm={setPaginaForm} petNameAndSex={petNameAndSex} /> }
            { paginaForm === 'Confirmació' && <PetFormConfirm setPaginaForm={setPaginaForm} petNameAndSex={petNameAndSex} /> }
        </Container>
    )

};

export default Formulari;