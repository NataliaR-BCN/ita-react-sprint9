import { UnitDiv, Label } from "./../../styles/styles";
import { Fieldset, JustificatDreta } from "./../PetForm/PetForm.styled";

const RadioButtonSelector = ({petSex, handlePetSex, cercador}) => {
    

return (

    <Fieldset>
        <Label htmlFor="petSex">Sexe:</Label> 
        <JustificatDreta>
            <UnitDiv>
              {cercador && <JustificatDreta><input type="radio" value="dos" id="dos" name="petSex" checked={petSex === "dos"} onChange={handlePetSex} /> 
              <Label htmlFor="dos">Tots dos &nbsp;</Label></JustificatDreta>}
              <div>
                <input type="radio" value="mascle" id="mascle" name="petSex" checked={petSex === "mascle"} onChange={handlePetSex} /> 
                <Label htmlFor="mascle">Mascle &nbsp;</Label>
              </div>
              <div>
                <input type="radio" value="femella" id="femella" name="petSex" checked={petSex === "femella"} onChange={handlePetSex} /> 
                <Label htmlFor="femella">Femella</Label>
            </div>
          </UnitDiv>
        </JustificatDreta>
    </Fieldset>
)    

};


export default RadioButtonSelector; 