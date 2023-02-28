import styled from "styled-components";


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 1px 1px 3px var(--trans-teal), 
                -1px -1px 3px var(--trans-teal),
                10px 10px 60px rgba(254, 254, 254, 0.4),
                1px 1px 6px rgba(170, 170, 170, 0.4);
    
`;


export const CardDetail = styled(Card)`
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;

        @media (max-width: 960px) {
            width: 100%;
            flex-direction: column;
            gap: 0.5rem;
        }
`;


export const CardText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

`;


export const CardPetName = styled.div`
    margin: 0.2rem 0;
    font-weight: bold;
    font-size: 1.6rem;
    position: absolute;
    margin-top: -10px;
    margin-left: 10px;
    color: white;
    background-color: var(--normal-teal);
    border-radius: 10px;
    padding: 0.2rem 2rem 0.4rem 2rem;

`;


export const DetailCardPetName = styled(CardPetName)`
    margin: 0.2rem 0  0.8rem 0;
    position: static;
    width: fit-content;
  
`;


export const ImgDiv = styled.div`
    width: auto;
`;


export const ImgDivDetail = styled.div`
    width: 100%;
    max-width: 34rem;

`;


export const CardPetSubtitol = styled.span`
    color: var(--dark-teal);
    margin: 0.2rem 0 0.5rem 0;
    

`;

export const ColorsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    border: 1px solid var(--normal-gray);
    border-radius: 15px;
    padding: 0.3rem;
    align-items: center;
    margin: 0.5rem 0;

`;

export const InternDiv = styled.div`
    min-width: 38%;
    max-width: 60%;
    display: flex;
    align-items: center;

`;


export const ContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

`;


export const DestacatDiv = styled.div`
    display: flex;
    border: 1px solid var(--normal-gray);
    border-radius: 15px;
    padding: 0.4rem 0.6rem;
    align-items: center;
   
`;


export const ColorDisplayed = styled.button`
    background-color: ${({colorCode}) => colorCode};
    border: 1px solid black;
    border-color: ${({colorCode}) => colorCode === '#FFF' ? '#000' : 'transparent'};;
    border-radius: 50px;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem 0 0.3rem 0.3rem;

`;

export const FilaBase = styled.div`
    width: 100%;
   margin-top: auto; 
`;


export const CardButton = styled.button`
    background-color: var(--normal-teal);
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 1rem 0 0 0;
    align-self: center;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                                     
        &:hover {
            background-color: var(--light-teal);
        }

`;

export const DetailLayout = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-right: 3rem;
`;


export const DetailText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
    align-self: flex-start;
    max-width: 26rem;
    
`;

