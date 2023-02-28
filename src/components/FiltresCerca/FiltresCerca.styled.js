import styled from "styled-components";


export const SectionName = styled.h3`
    margin: 0rem 0 0.8rem 0;
    padding: 0.3rem;

`;

export const FiltresCercadorCard = styled.div`
    width: 100%;
    min-width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 1rem 0 2rem 0;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 1px 1px 3px var(--light-gray), 
                -1px -1px 3px var(--light-gray),
                10px 10px 60px rgba(254, 254, 254, 0.4),
                1px 1px 6px rgba(170, 170, 170, 0.4);

    
`;


export const ColumnaJustificada = styled.div`
    width: 100%;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    text-align: left;
    align-self: flex-start;
    justify-content: flex-start;
    
        @media (max-width: 600px) {
                flex-direction: column;
                gap: 0.1rem;
        }
`;



export const OrderButton = styled.button`
    
    background-color: ${({isActive}) => isActive ? 'var(--dark-teal)' : 'var(--normal-teal)'};
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 0.5rem 0 1rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                           
        &:hover {
            background-color: var(--light-teal);
        }

        &:active {
            background-color: var(--dark-teal);
        } 

        @media (max-width: 600px) {
            margin: 0.5rem 0;
        }

`;


export const ResetButton = styled.button`
    
    background-color: var(--normal-gray);
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 1.5rem 0;
    padding: 0.8rem;
    width: 33%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                           
        &:hover {
            background-color: var(--dark-gray);
        }

        &:active {
            background-color: var(--dark-gray);
        } 

@media (max-width: 700px) {
             width: 100%;
        }
`;



export const Separador = styled.hr`
    border: 0;
    clear: both;
    display: block;
    width: 100%;               
    background-color:var(--normal-teal);
    height: 1px;
    margin: 1.5rem 0 1rem 0;
`;