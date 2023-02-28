import { useState } from "react";
import { CardDetail, ImgDivDetail, CardText, DetailCardPetName, DetailText, CardPetSubtitol, ColorDisplayed, ColorsDiv, DestacatDiv, InternDiv, ContentWrap, FilaBase, DetailLayout } from "./PetCard.styled";
import PetImgCarrusel from "../PetImgCarrusel/PetImgCarrusel";
import Contacte from "../Contacte/Contacte";
import { FilaJustificada } from "../../styles/styles";

const PetDetail = ({petData}) => {

    const [showContact, setShowContact] = useState(false);

    return (
      
        <CardDetail>
            <ImgDivDetail>
                <PetImgCarrusel petArrayImg={petData.petImages} pageShown={'Detail'} petName={petData.petName} ></PetImgCarrusel> 
            </ImgDivDetail>
            <DetailLayout>
                <DetailText>
                    <DetailCardPetName>{petData.petName}</DetailCardPetName>
                    <CardText>
                        <CardPetSubtitol> 
                            <strong>{petData.petBreed}</strong> {petData.petSex === "mascle" ? <>perdut</> : <>perduda</> } el <strong>{petData.petLostDate}</strong> a <strong>{petData.petLostArea}</strong>
                        </CardPetSubtitol>
                        {petData.petSex === "mascle" ? <>Gos</> : <>Gossa</> } {petData.petAge === "adulta" || petData.petAge === "sènior" ? <>d'edat {petData.petAge} </> : <>{petData.petAge}</>} de mida {petData.petWeight}

                        <FilaJustificada>
                            <ColorsDiv> 
                                <InternDiv>Pèl:
                                    <ContentWrap> {petData.petColor.map(color => <ColorDisplayed key={color.colorName} colorCode={color.colorCode} title={color.colorName}></ColorDisplayed>)} </ContentWrap> 
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
                        <Contacte showContact={showContact} setShowContact={setShowContact} petContactName={petData.petContactName} petContactData={petData.petContactData} > 
                        </Contacte>
                    </FilaBase>
                </DetailText>
            </DetailLayout>
        </CardDetail>

    )
} 

export default PetDetail;