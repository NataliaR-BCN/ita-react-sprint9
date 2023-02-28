import { Card, ImgDiv, CardText, CardPetName, CardPetSubtitol, ColorDisplayed, ColorsDiv, DestacatDiv, InternDiv, ContentWrap, FilaBase, CardButton } from "./PetCard.styled";
import PetImgCarrusel from "../PetImgCarrusel/PetImgCarrusel";
import { FilaJustificada } from "../../styles/styles";
import { Link } from "react-router-dom";

const PetCard = ( {petData} ) => {

    const id = petData.userOwnerId+petData.petName;

    return (

        <Card>
            <ImgDiv>
                <PetImgCarrusel petArrayImg={petData.petImages} petName={petData.petName} ></PetImgCarrusel>
            </ImgDiv>
            <CardPetName>{petData.petName}</CardPetName>
            <CardText>
                <CardPetSubtitol> 
                    <strong>{petData.petBreed}</strong> {petData.petSex === "mascle" ? <>perdut</> : <>perduda</> } el <strong>{petData.petLostDate}</strong> a <strong>{petData.petLostArea}</strong>
                </CardPetSubtitol>
                {petData.petSex === "mascle" ? <>Gos</> : <>Gossa</> } {petData.petAge === "adulta" || petData.petAge === "sènior" ? <>d'edat {petData.petAge} </> : <>{petData.petAge}</>} de mida {petData.petWeight}
                <FilaJustificada>            
                    <ColorsDiv> 
                        <InternDiv>Pèl:
                            <ContentWrap> {petData.petColor.map(color => <ColorDisplayed key={color.colorName} colorCode={color.colorCode} title={color.colorName}></ColorDisplayed>)} 
                            </ContentWrap>
                        </InternDiv>
                        <InternDiv>
                            {petData.petClothes && <> {petData.petClothesType}{petData.petClothesType ? <>:</> : <></>} <ContentWrap> {petData.petClothes && petData.clothesColor.map(color => <ColorDisplayed key={color.colorName} colorCode={color.colorCode} title={color.colorName}></ColorDisplayed>)}</ContentWrap></>}
                        </InternDiv>
                    </ColorsDiv>
                </FilaJustificada>
                <DestacatDiv>
                    {petData.petLostDescription}
                </DestacatDiv>
            </CardText>
            <FilaBase>
                <Link to={`/mascota/${id}`} ><CardButton>Veure'n més informació</CardButton></Link>
            </FilaBase>
        </Card>
    )

};

export default PetCard;