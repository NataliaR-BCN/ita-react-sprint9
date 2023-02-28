import { BarraCercadorText } from "./CercadorText.styled";
import { Label } from "./../../styles/styles";


const CercadorText = ({handleCercadorText, cercadorText}) => 
    <>
        <Label>Filtra entre els resultats:</Label>
        <BarraCercadorText 
            placeholder="&#128270; Introdueix un text per iniciar la cerca"
            type="text" 
            id="cercadorText"
            name="cercadorText"
            onChange={handleCercadorText} 
            value={cercadorText} 
        
        />
    </>;
export default CercadorText;

