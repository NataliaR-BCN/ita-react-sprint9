import { useState, useRef } from "react";
import { BasicLayout, FormCard, BasicButton, Subtitol, Label, TxtAddicional, Feedback,BasicContainer, FilaCentrada } from "./../../styles/styles";
import { Input, FormButton, DeleteButton, Image } from "./PetForm.styled";
import { useAuth } from "./../../contexts/AuthContext";
import { uploadPetImage, deletePetImages } from "./../../services/storage";
import { updatePetImgInDatabase } from "./../../services/pets";

const PetFormImages = ({petNameAndSex, setPaginaForm}) => { 

    const { currentUser } = useAuth();

    const [imgCarregada, setImgCarregada] = useState(null);
    const [showImgCarregada, setShowImgCarregada] = useState([]);
    const [message, setMessage] = useState("");

    const imageInputRef = useRef();

    async function handlePetImgForm(e) {
        e.preventDefault();

        if (showImgCarregada.length === 0 ) {
            setMessage("Si us plau, carrega com a mínim una fotografia");
        } else {
            try {
                updatePetImgInDatabase(showImgCarregada, currentUser.uid, petNameAndSex.name);
            } catch (error) {
                console.log(error.message);
            }  

        setPaginaForm('Dades pèrdua');
        }

    }
   

    const carregaImg = async (e) => {
        e.preventDefault();
    
        if (imgCarregada == null) return;
            console.log("Busco", imgCarregada, showImgCarregada[showImgCarregada.length-1])
        if (imgCarregada === showImgCarregada[showImgCarregada.length-1]) {
            console.log("REPES", imgCarregada, showImgCarregada[showImgCarregada.length-1])
        }

        try {
            const result = await uploadPetImage(currentUser.uid, petNameAndSex.name, imgCarregada.name, imgCarregada);
            imageInputRef.current.value = "";
        
            setMessage("");
        
            setShowImgCarregada(prev => [...prev, result]);

        } catch (error) {
            console.log(error.message);
        }   
  
    }


    function deleteImage(img, index) {
 
        deletePetImages(img);

        const newImgToShow = showImgCarregada.filter((image) => image !== img)

        setShowImgCarregada(newImgToShow)

    }


    return (

        <BasicLayout>
    
            <FormCard>
                <Subtitol>Imatge</Subtitol>            
                <Label htmlFor="petImg">Carrega una fotografia {petNameAndSex.sex === 'mascle' ? 'del' : 'de la'} {petNameAndSex.name}:</Label>
                <BasicContainer>
                    <FilaCentrada> 
                        <Input placeholder="Selecciona un arxiu" id="petImg" type="file" onChange={(event) => {setImgCarregada(event.target.files[0])}} onClick={e => (e.target.value = null)} ref={imageInputRef} />
                        <BasicButton onClick={carregaImg}>Carrega imatge</BasicButton>
                    </FilaCentrada>
                </BasicContainer>
                <TxtAddicional>
                    Es recomana pujar una imatge de cos sencer i un primer pla.
                </TxtAddicional> 
                <div>
                    {showImgCarregada && showImgCarregada.map((img, index) =>  
                        <div key={index}><Image src={img} />
                        <DeleteButton type="button" onClick={()=> deleteImage(img, index)}>Esborra la imatge</DeleteButton> 
                        <br/>
                        </div>)}
                </div>
            
                {message && <Feedback>{message}</Feedback>}
                <FormButton onClick={handlePetImgForm}>Continua</FormButton>
            </FormCard>
        </BasicLayout>

    )

};


export default PetFormImages;