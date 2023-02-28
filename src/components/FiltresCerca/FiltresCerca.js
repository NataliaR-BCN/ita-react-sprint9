import { SectionName, FiltresCercadorCard, ColumnaJustificada, ResetButton, Separador, OrderButton } from "./FiltresCerca.styled"; 
import { FilaJustificada, Label, TxtAddicionalInline } from "../../styles/styles";
import CercadorText from "../CercadorText/CercadorText";
import RadioButtonSelector from "./../RadioButtonSelector/RadioButtonSelector";
import SelectOptions from "./../SelectOptions/SelectOptions";
import ColorSelector from "./../ColorSelector/ColorSelector";
import { colorsFurArray } from "./../../assets/data/colorCodes";
import { colorsClothesArray } from "./../../assets/data/colorCodes";
import { petAgeOptions } from "./../../assets/data/optionsValues"; 
import { petWeightOptions } from "./../../assets/data/optionsValues"; 
import { petLostAreaOptions } from "./../../assets/data/optionsValues"; 


const FiltresCerca = ({handleCercadorText, cercadorText, petSex, handlePetSex, petAge, handlePetAge, petWeight, handlePetWeight, petLostArea, handlePetLostArea, colorSelected, setColorSelected, colorMessage, setColorMessage, colorClothesSelected, setColorClothesSelected, colorClothesMessage, setColorClothesMessage, resetFilters, petListOrder, handlePetListOrder }) => {


return (

    <FiltresCercadorCard>
        <SectionName>Refina la cerca:</SectionName>
        <FilaJustificada>
            <ColumnaJustificada>
                <CercadorText handleCercadorText={handleCercadorText} cercadorText={cercadorText} />
                <RadioButtonSelector petSex={petSex} handlePetSex={handlePetSex} cercador={true} />
            </ColumnaJustificada>
            <ColumnaJustificada>
                <Label>
                    <strong>Color/s del pèl &gt;</strong> selecciona el/s principal/s colors d'un mateix animal <TxtAddicionalInline colorMessage={colorMessage}>(màxim 3)</TxtAddicionalInline>:
                </Label>
                <ColorSelector limit={3} colorsArray={colorsFurArray} colorSelected={colorSelected} setColorSelected={setColorSelected} setColorMessage={setColorMessage} pageShown={'Filtres'} ></ColorSelector>
            </ColumnaJustificada>
            <ColumnaJustificada>
                <Label>
                <strong>Color/s de l'accessori (arnès, collar, ...) &gt; </strong>selecciona el/s principal/s <TxtAddicionalInline colorMessage={colorClothesMessage}>(màxim 5)</TxtAddicionalInline>:
                </Label>
                <ColorSelector limit={5} colorsArray={colorsClothesArray} colorSelected={colorClothesSelected} setColorSelected={setColorClothesSelected} setColorMessage={setColorClothesMessage} pageShown={'Filtres'} ></ColorSelector>
            </ColumnaJustificada>
        </FilaJustificada>
        <FilaJustificada>
            <SelectOptions options={petAgeOptions} label="Edat:" value={petAge} handleChange={handlePetAge} /> 
            <SelectOptions options={petWeightOptions} label="Mida / pes:" value={petWeight} handleChange={handlePetWeight} /> 
            <SelectOptions options={petLostAreaOptions} label="Zona de la ciutat:" value={petLostArea} handleChange={handlePetLostArea} /> 
        </FilaJustificada>
        <ResetButton name="resetFilters" onClick={(e) => resetFilters()} >Elimina tots els filtres</ResetButton>
        
        <Separador/>
        
        <SectionName>Ordena els resultats:</SectionName> 
        <FilaJustificada>
            <OrderButton name="ordreButton" onClick={(e) => handlePetListOrder("dataRecent")} isActive={petListOrder === "dataRecent" ? true : false} >Data més recent</OrderButton>
            <OrderButton name="ordreButton" onClick={(e) => handlePetListOrder("dataAntiga")}  isActive={petListOrder === "dataAntiga" ? true : false} >Data més antiga</OrderButton>
            <OrderButton name="ordreButton" onClick={(e) => handlePetListOrder("alfabetic")} isActive={petListOrder === "alfabetic" ? true : false} >Ordre alfabètic</OrderButton>
        </FilaJustificada>
    </FiltresCercadorCard>

)

};

export default FiltresCerca;