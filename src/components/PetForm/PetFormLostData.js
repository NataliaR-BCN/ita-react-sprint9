import { useRef, useState } from "react";
import { BasicLayout, FormCard, Subtitol, Label, TxtAddicional, UnitDiv, TxtDestacat, Feedback } from "./../../styles/styles";
import { Input, Fieldset, JustificatDreta, Textarea, FormButton } from "./PetForm.styled";
import { useAuth } from "./../../contexts/AuthContext";
import ColorSelector from "../ColorSelector/ColorSelector";
import SelectOptions from "./../SelectOptions/SelectOptions";
import { updatePetLostDataInDatabase } from "./../../services/pets";
import { colorsClothesArray } from "./../../assets/data/colorCodes";
import { petLostAreaOptions } from "./../../assets/data/optionsValues"; 
import { petClothesTypeOptions } from "./../../assets/data/optionsValues"; 

const PetFormLostData = ({petNameAndSex, setPaginaForm}) => { 
    
    const { currentUser } = useAuth();

    const petLostDate = useRef();      
    const petLostDescription = useRef();
    const petContactName = useRef();
    const petContactData = useRef();

    const [petLostArea, setPetLostArea] = useState("");
    const [petClothes, setPetClothes] = useState("No");
    const [petClothesType, setPetClothesType] = useState("");

    const [colorSelected, setColorSelected] = useState([]);
    const [colorMessage, setColorMessage] = useState(false);
    
    const [message, setMessage] = useState("");
    
    function handlePetLostArea(event) {
        setPetLostArea(event.target.value);
    }    

    function handlePetClothes(event) {
        setPetClothes(event.target.value);
    }

    function handlePetClothesType(event) {
        setPetClothesType(event.target.value);
    }

    
    function handlePetLostForm(e) {
          
        e.preventDefault();
    
        const patternDate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(20)\d{2}$/;
    
        if (petLostDate.current.value === "" || petLostAreaOptions === ""  || (petClothes === "Si" && petClothesType === "") || (petClothes === "Si" && colorSelected.length === 0) ||  petLostDescription.current.value === "" || petContactName.current.value === "" || petContactData.current.value === "" ) {
            setMessage("Si us plau, omple tots els camps.") 
        } else if (!patternDate.test(petLostDate.current.value)) {
            setMessage("La data no té el format correcte. Ha de ser: dd/mm/aaaa. Per exemple: 22/02/2023") 
        } else {
            try {
                updatePetLostDataInDatabase(currentUser.uid, petNameAndSex.name, petLostDate.current.value, petLostArea, petClothes, petClothesType, colorSelected, petLostDescription.current.value, petContactName.current.value, petContactData.current.value);
            
                setPaginaForm('Confirmació');
            } catch (error) {
                console.log(error.message);
            }
        }  
    }
    

    return (
        <BasicLayout>
            <FormCard onSubmit={handlePetLostForm}>
                <Subtitol>Detalls de la desaparició</Subtitol>
                    <Label htmlFor="petLostDate">Data en què es va perdre:</Label>
                    <Input placeholder="Format: dd/mm/aaa" id="petLostDate" type="text" ref={petLostDate} />

                    <SelectOptions options={petLostAreaOptions} label="Zona on es va perdre:" value={petLostArea} handleChange={handlePetLostArea} /> 

                    <Fieldset>
                        <Label htmlFor="clothes">Portava algun accessori (arnès, collar, jersei...)?</Label> 
                        <JustificatDreta>
                            <UnitDiv>
                                <input type="radio" value="Si" id="Si" name="petClothes" checked={petClothes === "Si"} onChange={handlePetClothes} /> 
                                <Label htmlFor="Si">Sí &nbsp; &nbsp;</Label>
                                <input type="radio" value="No" id="No" name="petClothes" checked={petClothes === "No"} onChange={handlePetClothes} /> 
                                <Label htmlFor="No">No</Label>
                            </UnitDiv>
                        </JustificatDreta>
                    </Fieldset>
                        {petClothes === "Si" && 
                        <>
                            <SelectOptions options={petClothesTypeOptions} label="Quina mena d'accessori?" value={petClothesType} handleChange={handlePetClothesType} /> 
                            
                        <Label>Indica'n el/s color/s majoritari/s:</Label>
                            <ColorSelector limit={5} colorsArray={colorsClothesArray} colorSelected={colorSelected} setColorSelected={setColorSelected} setColorMessage={setColorMessage} ></ColorSelector></>}

                    <Label htmlFor="petLostDescription">Afegeix un text a la publicació:</Label>
                    <TxtAddicional>Inclou detalls útils sobre el caràcter de l'animal, concreta més on es va perdre... (Màx. 250 caràcters)</TxtAddicional>
                    <Textarea name="petLostDescription" placeholder="Breu descripció sobre la mascota, les circumstpancies de la pèrdua..." id="petLostDescription" ref={petLostDescription} maxLength="250" />

                    <TxtDestacat>Dades de contacte</TxtDestacat>
                    <Label htmlFor="petContactName">Persona/es de contacte:</Label>
                    <Input placeholder="Nom/s de la/es persona/es de contacte" id="petContactName" type="text" ref={petContactName} />
                    <Label htmlFor="petContactData">Indica com contactar:</Label>
                    <Input placeholder="Telèfon/s o correu/s de contacte" id="petContactData" type="text" ref={petContactData} />
                    
                    {message && <Feedback>{message}</Feedback>}
                    <FormButton>Continua</FormButton>
                   
                </FormCard>
        </BasicLayout>
    )

};


export default PetFormLostData;