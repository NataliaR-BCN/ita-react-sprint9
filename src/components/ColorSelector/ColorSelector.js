
import { ColorContainer, ColorButton } from "./ColorSelector.styled";


const ColorSelector = ({colorsArray, limit, colorSelected, setColorSelected, setColorMessage, pageShown}) => {


    function handleColorSelection(name, code) {

        const indexIfExist = colorSelected.findIndex(color => color.colorName === name);

        if (indexIfExist === -1) {
            if (colorSelected.length < limit) {
               setColorSelected(prev => [...prev, {colorName: name, colorCode: code}])

            } else {
                setColorMessage(true);
            }

        } else {

            const otherColors = colorSelected.filter(color => color.colorName !== name); 
            setColorSelected(otherColors);

            setColorMessage(false);
        }
    }


    return (

        <ColorContainer pageShown={pageShown}>
            {colorsArray.map((color, index) => <ColorButton type="button" colorCode={color.colorCode} title={color.colorName} onClick={() => handleColorSelection(color.colorName, color.colorCode)} key={index} isActive={colorSelected.some(colorSelected => colorSelected.colorName === color.colorName) ? true : false} 
           ></ColorButton>)}
        </ColorContainer>
    )
};


export default ColorSelector;

