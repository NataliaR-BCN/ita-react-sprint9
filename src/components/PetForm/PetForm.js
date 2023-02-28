import { useRef, useState } from "react";
import { BasicLayout, FormCard, Subtitol, Feedback, FilaJustificada, Label, TxtAddicional } from "./../../styles/styles";
import { Input, FormButton } from "./PetForm.styled";
import { createPetInDatabase } from "./../../services/pets";
import { useAuth } from "./../../contexts/AuthContext";
import ColorSelector from "../ColorSelector/ColorSelector";
import RadioButtonSelector from "./../RadioButtonSelector/RadioButtonSelector";
import SelectOptions from "./../SelectOptions/SelectOptions";
import { petAgeOptions } from "./../../assets/data/optionsValues"; 
import { petWeightOptions } from "./../../assets/data/optionsValues"; 
import { colorsFurArray } from "./../../assets/data/colorCodes";


const PetForm = ({ setPaginaForm, setPetNameAndSex }) => {

    
  const { currentUser } = useAuth();

  const petName = useRef();
  const [petSex, setPetSex] = useState("mascle");
  const [colorSelected, setColorSelected] = useState([]);
  const [petAge, setPetAge] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const petBreed = useRef();

  const [colorMessage, setColorMessage] = useState(false);
  const [message, setMessage] = useState("");

  function handlePetSex(event) {
    setPetSex(event.target.value);
  }

  function handlePetAge(event) {
    setPetAge(event.target.value);
  }

  function handlePetWeight(event) {
    setPetWeight(event.target.value);
  }

  async function handlePetForm(e) {
    e.preventDefault();

    if (petName.current.value === "" || petAge === "" || colorSelected.length === 0 || petWeight === "" || petBreed.current.value === "") {
      setMessage("Si us plau, omple tots els camps.");
    } else {
      try {
          await createPetInDatabase(currentUser.uid, petName.current.value, petSex, colorSelected, petAge, petWeight, petBreed.current.value);
          setPetNameAndSex({name: petName.current.value, sex: petSex});
          setPaginaForm('Carrega imatge');
      } catch (error) {
          console.log(error.message);
      }
    }

}


  return (
    <BasicLayout>
      <FormCard onSubmit={handlePetForm}>
        <Subtitol>Dades generals</Subtitol>
        <Label htmlFor="petName">Nom de la mascota:</Label>
        <Input placeholder="Nom de la mascota" id="petName" type="text" ref={petName} />
        <RadioButtonSelector petSex={petSex} handlePetSex={handlePetSex}></RadioButtonSelector>
        <FilaJustificada>
          <Label>Color/s del pèl:</Label>
          <TxtAddicional colorMessage={colorMessage}>Màxim 3 colors</TxtAddicional>
        </FilaJustificada>
        <ColorSelector limit={3} colorsArray={colorsFurArray} colorSelected={colorSelected} setColorSelected={setColorSelected} setColorMessage={setColorMessage} />
        <SelectOptions options={petAgeOptions} label="Quina edat té?" value={petAge} handleChange={handlePetAge} /> 
        <SelectOptions options={petWeightOptions} label="De quina mida és?" value={petWeight} handleChange={handlePetWeight} /> 
        <Label htmlFor="petBreed">Raça de la mascota:</Label>
        <Input placeholder="Raça de la mascota" id="petBreed" type="text" ref={petBreed} />
        {message && <Feedback>{message}</Feedback>} 
        <FormButton>Continua</FormButton>
      </FormCard>
    </BasicLayout>
  )

};

export default PetForm;