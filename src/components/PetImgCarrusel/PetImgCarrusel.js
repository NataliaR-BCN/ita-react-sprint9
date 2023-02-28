import { useState } from 'react';
import { CarruselContainer, DivImage, Image, ArrowsContainer, ArrowLeft, ArrowRight } from "./PetImgCarrusel.styles";


const PetImgCarrusel = ({petArrayImg, pageShown, petName}) => {        
    
    const [index, setIndex] = useState(0); 

    const arrayImgs = [];

    petArrayImg.forEach(item => arrayImgs.push(item));


    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? petArrayImg.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= petArrayImg.length ? 0 : newIndex);
    };


    return (
       
        <CarruselContainer pageShown={pageShown}> 
            {petArrayImg && <>
                <DivImage>
                    <Image src={petArrayImg[index]} alt={petName} pageShown={'Detail'} />
                    <ArrowsContainer>
                        { index === 0 ? <>&nbsp;</> : <ArrowLeft onClick={handlePrevious} pageShown={pageShown} />}
                        { index === petArrayImg.length - 1 ? <>&nbsp;</> : <ArrowRight onClick={handleNext} pageShown={pageShown} />}
                    </ArrowsContainer>
                </DivImage>
            </> }  
        </CarruselContainer>
        
    )

};


export default PetImgCarrusel;

